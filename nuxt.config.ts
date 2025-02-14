import process from 'node:process'
import { execaSync } from 'execa'
import pkg from './package.json'

const commit = execaSync('git', ['rev-parse', '--short', 'HEAD'])

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  // https://nuxt.com/modules
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui-pro',
    'nuxt-fathom',
    '@nuxt/content',
    '@formkit/auto-animate/nuxt',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@pinia/colada-nuxt',
    // '@nuxtjs/mdc',
    // '@nuxtjs/plausible',
    // '@vue-email/nuxt',
    // 'nuxt-mail',
  ],

  plugins: [
    {
      src: '~/plugins/jquery.client.ts',
      mode: 'client',
    },
  ],

  ssr: false,

  // https://devtools.nuxt.com
  devtools: { enabled: true },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Docs',
      titleTemplate: '%s - Docs',
      link: [
        { rel: 'icon', href: '/favicon.svg', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon-dark.svg' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  css: [
    '~/assets/css/fonts/index.css',
    '~/assets/css/main.css',
    'animate.css',
  ],

  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            light: 'material-theme-lighter',
            default: 'material-theme',
            dark: 'material-theme-palenight',
          },
          langs: [
            'astro',
            'blade',
            'csharp',
            'csv',
            'handlebars',
            'http',
            'java',
            'mdx',
            'postcss',
            'python',
            'razor',
            'regex',
            'ruby',
            'sql',
            'svelte',
            'xml',
          ],
        },
      },
    },
    database: {
      type: 'postgres',
      url: process.env.POSTGRES_URL,
      /* Other options for `pg` */
    },
  },

  ui: {
    fonts: false,
    theme: {
      colors: ['primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error'],
    },
  },

  appConfig: {
    buildDate: new Date().toISOString(),
  },

  runtimeConfig: {
    openaiApiKey: process.env.OPENAI_API_KEY,
    mailer: {
      host: process.env.NUXT_MAILER_HOST,
      port: process.env.NUXT_MAILER_PORT,
      user: process.env.NUXT_MAILER_USER,
      password: process.env.NUXT_MAILER_PASSWORD,
    },
    resend: {
      apiKey: '',
    },
    public: {
      version: pkg.version,
      googleApiKey: process.env.NUXT_GOOGLE_API_KEY || '',
    },
  },

  devServer: {
    port: 3212,
    cors: {
      origin: [
        'http://localhost:3212',
        'https://custom-origin.com',
      ],
    },
  },
  // https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
  future: { compatibilityVersion: 4 },

  features: {
    inlineStyles: false,
  },

  experimental: {
    viewTransition: true,
  },

  compatibilityDate: '2024-02-14',

  nitro: {
    experimental: {
      openAPI: true,
    },
  },

  vite: {
    define: {
      __COMMIT__: JSON.stringify(commit),
      __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
      __USE_DEVTOOLS__: true,
      __TEST__: false,
    },
  },

  telemetry: false,

  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter(c => ['UBadge', 'UButton', 'UIcon'].includes(c.pascalName))

      globals.forEach(c => c.global = true)
    },

    // 'components:dirs': function (dirs) {
    //   dirs.push({
    //     path: '~/app-components',
    //     prefix: 'App',
    //   })
    // },

    // 'components:extend': function (components) {
    //   for (const component of components) {
    //     if (component.global)
    //       component.global = 'sync'
    //   }
    // },

    // 'pages:extend': function (routes) {
    //   console.log(JSON.stringify(routes, null, 2))
    // },
  },

  // https://eslint.nuxt.com
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
      },
    },
  },

  fathom: {
    siteId: 'OVDPOLBF',
  },

  icon: {
    customCollections: [
      {
        prefix: 'custom',
        dir: './app/assets/icons',
      },
      {
        prefix: 'design',
        dir: './app/assets/icons/design',
      },
      {
        prefix: 'skyrizi',
        dir: './app/assets/icons/skyrizi',
      },
    ],

    clientBundle: {
      sizeLimitKb: 2048,
    },

    serverBundle: {
      collections: ['ph'],
    },
  },

  uiPro: {
    license: process.env.NUXT_UI_PRO_LICENSE, // import.meta.env.NUXT_UI_PRO_LICENSE,
  },
})
