import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import axios from 'axios'
import fs from 'fs-extra'
import puppeteer from 'puppeteer'

// Configuration
// https://gist.githubusercontent.com/victortolbert/fdc18df7c64bcb098674cfe1f373ee19/raw/resume.json
// https://gist.githubusercontent.com/${GIST_ID}/raw/resume.json
const GIST_ID = 'victortolbert/fdc18df7c64bcb098674cfe1f373ee19'
const DIST_DIR = './public/resume'
const RESUME_FILE = './public/data/resume.json'

const PDF_OPTIONS = {
  format: 'A4',
  displayHeaderFooter: false,
  printBackground: true,
  margin: {
    top: '0.4in',
    bottom: '0.4in',
    left: '0.4in',
    right: '0.4in',
  },
}

// Get the directory name in ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url))

/**
 * Builds the HTML version of the resume
 * @returns {Promise<string>} The generated HTML
 */
async function buildHTML() {
  try {
    // Clean and create dist directory
    await fs.remove(DIST_DIR)
    await fs.ensureDir(DIST_DIR)

    // Load resume data
    const resume = await loadResumeData()

    // Import and render template
    const { render } = await import('./index.mjs')
    console.log('Rendering...')
    const html = await render(resume)

    // Save HTML file
    const outputPath = path.join(DIST_DIR, 'index.html')
    await fs.writeFile(outputPath, html, 'utf-8')
    console.log('HTML file generated successfully')

    return html
  }
  catch (error) {
    console.error('Error building HTML:', error)
    throw error
  }
}

/**
 * Loads resume data from local file or GitHub gist
 * @returns {Promise<object>} Resume data
 */
async function loadResumeData() {
  try {
    if (await fs.pathExists(RESUME_FILE)) {
      console.log('Loading from local "resume.json"')
      return await fs.readJson(RESUME_FILE)
    }

    console.log(`Downloading resume from gist: ${GIST_ID}`)
    const { data } = await axios.get(`https://gist.githubusercontent.com/${GIST_ID}/raw/resume.json`)
    return data
  }
  catch (error) {
    console.error('Error loading resume data:', error)
    throw error
  }
}

/**
 * Generates PDF version of the resume
 * @param {string} html - The HTML content to convert
 * @returns {Promise<Buffer>} The generated PDF buffer
 */
async function buildPDF(html) {
  let browser
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    })

    const page = await browser.newPage()
    console.log('Opening puppeteer...')
    await page.setContent(html, { waitUntil: 'networkidle0' })

    console.log('Generating PDF...')
    const pdf = await page.pdf(PDF_OPTIONS)

    const outputPath = path.join(DIST_DIR, 'resume.pdf')
    await fs.writeFile(outputPath, pdf)
    console.log('PDF file generated successfully')

    return pdf
  }
  catch (error) {
    console.error('Error building PDF:', error)
    throw error
  }
  finally {
    if (browser)
      await browser.close()
  }
}

/**
 * Main build function that generates both HTML and PDF versions
 */
async function buildAll() {
  try {
    const html = await buildHTML()
    await buildPDF(html)
    console.log('Build completed successfully!')
  }
  catch (error) {
    console.error('Build failed:', error)
    process.exit(1)
  }
}

// Execute build
buildAll()
