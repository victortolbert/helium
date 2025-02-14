import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import axios from 'axios'
import gravatar from 'gravatar'
import Handlebars from 'handlebars'
import moment from 'moment'
import _ from 'underscore'
import _s from 'underscore.string'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/**
 * Checks if resume has an email address
 */
function hasEmail(resume) {
  return !!resume.basics && !!resume.basics.email
}

/**
 * Finds a social network profile by name
 */
function getNetwork(profiles, network_name) {
  return _.find(profiles, profile => profile.network.toLowerCase() === network_name)
}

/**
 * Formats duration in a human readable format
 */
function humanizeDuration(moment_obj, did_leave_company) {
  const months = moment_obj.months()
  const years = moment_obj.years()
  const month_str = months > 1 ? 'months' : 'month'
  const year_str = years > 1 ? 'years' : 'year'

  if (months && years)
    return `${years} ${year_str} ${months} ${month_str}`

  if (months)
    return `${months} ${month_str}`

  if (years)
    return `${years} ${year_str}`

  if (did_leave_company) {
    const days = moment_obj.days()
    return days > 1 ? `${days} days` : `${days} day`
  }

  return 'Recently joined'
}

/**
 * Converts username to full social media URL
 */
function getUrlFromUsername(site, username) {
  const url_map = {
    github: 'github.com',
    twitter: 'twitter.com',
    soundcloud: 'soundcloud.com',
    pinterest: 'pinterest.com',
    vimeo: 'vimeo.com',
    behance: 'behance.net',
    codepen: 'codepen.io',
    foursquare: 'foursquare.com',
    reddit: 'reddit.com',
    spotify: 'spotify.com',
    dribble: 'dribbble.com',
    dribbble: 'dribbble.com',
    facebook: 'facebook.com',
    angellist: 'angel.co',
    bitbucket: 'bitbucket.org',
  }

  site = site.toLowerCase()

  if (!username || !url_map[site])
    return

  switch (site) {
    case 'skype':
      return `skype:${username}?call`
    case 'reddit':
    case 'spotify':
      return `//open.${url_map[site]}/user/${username}`
    default:
      return `//${url_map[site]}/${username}`
  }
}

const githubRepoCache = new Map()

function getGithubApi(url) {
  return url.replace('https://github.com/', 'https://api.github.com/repos/')
}

/**
 * Fetches GitHub repository stars
 */
async function getRepoStars(url) {
  if (githubRepoCache.has(url))
    return githubRepoCache.get(url).stargazers_count

  try {
    const api = getGithubApi(url)
    const { data } = await axios.get(api)
    githubRepoCache.set(url, data)
    return data.stargazers_count
  }
  catch (e) {
    console.error('Error fetching repo stars:', e)
    return 'NaN'
  }
}

/**
 * Main render function that processes the resume data and generates HTML
 */
async function render(resume) {
  const cssPath = path.join(__dirname, 'public', 'resources', 'css', 'theme.css')
  const templatePath = path.join(__dirname, 'resume.hbs')

  const css = fs.readFileSync(cssPath, 'utf-8')
  const template = fs.readFileSync(templatePath, 'utf-8')

  const profiles = resume.basics.profiles
  const social_sites = [
    'github',
    'linkedin',
    'stackoverflow',
    'twitter',
    'soundcloud',
    'pinterest',
    'vimeo',
    'behance',
    'codepen',
    'foursquare',
    'reddit',
    'spotify',
    'dribble',
    'dribbble',
    'facebook',
    'angellist',
    'bitbucket',
    'skype',
  ]
  const date_format = 'MMM YYYY'

  // Set gravatar if no picture
  if (!resume.basics.picture && hasEmail(resume)) {
    resume.basics.picture = gravatar.url(resume.basics.email.replace('(at)', '@'), {
      s: '100',
      r: 'pg',
      d: 'mm',
    })
  }

  // Process languages
  if (resume.languages)
    resume.basics.languages = _.pluck(resume.languages, 'language').join(', ')

  // Process work experience
  _.each(resume.work, (work_info) => {
    const start_date = work_info.startDate && new Date(work_info.startDate)
    let end_date = work_info.endDate && new Date(work_info.endDate)

    if (start_date)
      work_info.startDate = moment(start_date).format(date_format)

    if (end_date)
      work_info.endDate = moment(end_date).format(date_format)

    const did_leave_company = !!end_date

    if (start_date) {
      end_date = end_date || new Date()
      work_info.duration = humanizeDuration(
        moment.duration(end_date.getTime() - start_date.getTime()),
        did_leave_company,
      )
    }
  })

  // Process skills
  _.each(resume.skills, (skill_info) => {
    const levels = ['Beginner', 'Intermediate', 'Advanced', 'Master']

    if (skill_info.level) {
      skill_info.skill_class = skill_info.level.toLowerCase()
      skill_info.level = _s.capitalize(skill_info.level.trim())
      skill_info.display_progress_bar = _.contains(levels, skill_info.level)
    }
  })

  // Process dates for education, awards, publications and volunteer work
  const sections = {
    education: resume.education,
    awards: resume.awards,
    publications: resume.publications,
    volunteer: resume.volunteer,
  }

  for (const [section, items] of Object.entries(sections)) {
    if (!items)
      continue

    _.each(items, (item) => {
      if (section === 'awards' && item.date) {
        item.date = moment(new Date(item.date)).format(date_format)
      }
      else if (section === 'publications' && item.releaseDate) {
        item.releaseDate = moment(new Date(item.releaseDate)).format('MMM DD, YYYY')
      }
      else {
        ['startDate', 'endDate'].forEach((date) => {
          if (item[date]) {
            const date_obj = new Date(item[date])
            item[date] = moment(date_obj).format(date_format)
          }
        })
      }
    })
  }

  // Process social profiles
  _.each(social_sites, (site) => {
    const social_account = getNetwork(profiles, site)
    if (social_account) {
      const username = social_account.username
      resume.basics[`${site}_url`] = getUrlFromUsername(site, username) || social_account.url
    }
  })

  // Process GitHub stars for projects
  if (resume.projects) {
    for (const project of resume.projects) {
      if (project.githubUrl)
        project.stars = await getRepoStars(project.githubUrl)
    }
  }

  // Register Handlebars helpers
  Handlebars.registerHelper('toSocialIcon', (text) => {
    const icons = {
      linkedin: 'ri:linkedin-box-fill',
      github: 'ri:github-fill',
      instagram: 'ri:instagram-line',
      twitter: 'ri:twitter-fill',
      website: 'ri:global-line',
      link: 'ri:arrow-right-up-line',
      portfolio: 'ri:account-circle-fill',
    }
    return icons[text.trim().toLowerCase()]
  })

  Handlebars.registerHelper('join', arr => arr.join(', '))
  Handlebars.registerHelper('getGithubApi', getGithubApi)
  Handlebars.registerHelper('breaklines', (text) => {
    text = Handlebars.Utils.escapeExpression(text)
    text = text.replace(/(\r\n|\n|\r)/g, '<br>')
    return new Handlebars.SafeString(text)
  })
  Handlebars.registerHelper('getBuildDate', () => moment().format('MMMM Do YYYY, h:mm:ss a'))

  // Compile and return the template
  return Handlebars.compile(template)({
    css,
    resume,
  })
}

export {
  render,
}
