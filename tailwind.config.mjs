import animate from 'tailwindcss-animate'
import { setupInspiraUI } from '@inspira-ui/plugins'

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      backgroundImage: {
        'skyrizi-derm-overview': 'url("/content/dam/skyrizihcpivy/isa/template-assets/skyrizi-derm-background-overview.jpg")',
        'skyrizi-derm': 'url("/content/dam/skyrizihcpivy/isa/template-assets/skyrizi-derm-background.jpg")',
        'preview': 'url("/resources/images/preview-background.jpg")',
        'product': 'url("/resources/images/product-background.jpg")',
      },
      strokeWidth: {
        2: '2px',
        3: '3px',
        4: '4px',
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            'maxWidth': '65ch',
            'a': {
              color: 'var(--tw-prose-links)',
              textDecoration: 'none',
              fontWeight: '500',
            },
            'h1': {
              color: 'var(--tw-prose-headings)',
              fontWeight: '800',
            },
            'h1 strong': {
              fontWeight: '900',
              color: 'inherit',
            },
            'h2': {
              color: 'var(--tw-prose-headings)',
              fontWeight: '700',
            },
            'h2 strong': {
              fontWeight: '800',
              color: 'inherit',
            },
            'h3': {
              color: 'var(--tw-prose-headings)',
              fontWeight: '600',
            },
            'h3 strong': {
              fontWeight: '700',
              color: 'inherit',
            },
            'h4': {
              color: 'var(--tw-prose-headings)',
              fontWeight: '600',
            },
            'h4 strong': {
              fontWeight: '700',
              color: 'inherit',
            },
          },
        },
        pink: {
          css: {
            '--tw-prose-body': theme('colors.pink[800]'),
            '--tw-prose-headings': theme('colors.pink[900]'),
            '--tw-prose-lead': theme('colors.pink[700]'),
            '--tw-prose-links': theme('colors.pink[900]'),
            '--tw-prose-bold': theme('colors.pink[900]'),
            '--tw-prose-counters': theme('colors.pink[600]'),
            '--tw-prose-bullets': theme('colors.pink[400]'),
            '--tw-prose-hr': theme('colors.pink[300]'),
            '--tw-prose-quotes': theme('colors.pink[900]'),
            '--tw-prose-quote-borders': theme('colors.pink[300]'),
            '--tw-prose-captions': theme('colors.pink[700]'),
            '--tw-prose-code': theme('colors.pink[900]'),
            '--tw-prose-pre-code': theme('colors.pink[100]'),
            '--tw-prose-pre-bg': theme('colors.pink[900]'),
            '--tw-prose-th-borders': theme('colors.pink[300]'),
            '--tw-prose-td-borders': theme('colors.pink[200]'),
            '--tw-prose-invert-body': theme('colors.pink[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.pink[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.pink[400]'),
            '--tw-prose-invert-bullets': theme('colors.pink[600]'),
            '--tw-prose-invert-hr': theme('colors.pink[700]'),
            '--tw-prose-invert-quotes': theme('colors.pink[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.pink[700]'),
            '--tw-prose-invert-captions': theme('colors.pink[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.pink[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.pink[600]'),
            '--tw-prose-invert-td-borders': theme('colors.pink[700]'),
          },
        },
      }),
    },
  },
  plugins: [
    animate,
    setupInspiraUI,
    // function ({ addComponents, theme }) {
    //   const screens = theme('screens')
    //   const userStyles = theme('debugScreens.style', {})
    //   const ignoredScreens = theme('debugScreens.ignore', ['dark'])
    //   const prefix = theme('debugScreens.prefix', 'screen: ')
    //   const selector = theme('debugScreens.selector', '.debug-screens')

    //   const defaultPosition = ['bottom', 'left']
    //   const position = theme('debugScreens.position', defaultPosition)
    //   const positionY = position[0] || defaultPosition[0]
    //   const positionX = position[1] || defaultPosition[1]

    //   const components = {
    //     [`${selector}::before`]: Object.assign({
    //       position: 'fixed',
    //       zIndex: '2147483647',
    //       [positionY]: '0',
    //       [positionX]: '0',
    //       padding: '.3333333em .5em',
    //       fontSize: '12px',
    //       lineHeight: '1',
    //       fontFamily: 'sans-serif',
    //       backgroundColor: '#000',
    //       color: '#fff',
    //       boxShadow: '0 0 0 1px #fff',
    //       content: `'${prefix}_'`,
    //     }, userStyles),
    //   }

    //   Object.entries(screens)
    //     .filter(([screen]) => !ignoredScreens.includes(screen))
    //     .forEach(([screen]) => {
    //       components[`@screen ${screen}`] = {
    //         [`${selector}::before`]: {
    //           content: `'${prefix}${screen}'`,
    //         },
    //       }
    //     })

    //   addComponents(components)
    // },
  ],
}
