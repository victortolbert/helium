export default defineAppConfig({
  // https://ui3.nuxt.dev/getting-started/theme#design-system
  ui: {
    colors: {
      neutral: 'gray',
      primary: 'gray',
      secondary: 'stone',
      tertiary: 'stone',
    },
    container: {
      base: 'max-w-[var(--ui-container)] mx-auto px-4 sm:px-6 lg:px-8',
    },
    button: {
      defaultVariants: {
        // Set default button color to neutral
        // color: 'neutral'
      },
    },
    modal: {
      slots: {
        overlay: 'fixed inset-0 bg-[var(--ui-bg-elevated)]/75',
        content:
          'fixed w-full h-dvh bg-[var(--ui-bg)] divide-y divide-[var(--ui-border)] flex flex-col focus:outline-none',
        header: 'px-4 py-5 sm:px-6',
        body: 'flex-1 overflow-y-auto p-4 sm:p-6',
        footer: 'flex items-center gap-1.5 p-4 sm:px-6',
        title: 'text-[var(--ui-text-highlighted)] font-semibold',
        description: 'mt-1 text-[var(--ui-text-muted)] text-sm',
        close: 'absolute top-4 end-4',
      },
      variants: {
        transition: {
          true: {
            overlay:
              'data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]',
            content:
              'data-[state=open]:animate-[scale-in_200ms_ease-out] data-[state=closed]:animate-[scale-out_200ms_ease-in]',
          },
        },
        fullscreen: {
          true: {
            content: 'inset-0',
          },
          false: {
            content:
              'top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] sm:max-w-4xl sm:h-auto sm:max-h-[calc(100vh-4rem)] sm:rounded-[calc(var(--ui-radius)*2)] sm:shadow-lg sm:ring ring-[var(--ui-border)]',
          },
        },
      },
    },
    table: {
      slots: {
        td: 'py-1 px-4',
      },
    },
    tabs: {
      slots: {
        root: '',
        list: '',
      },
    },
    icons: {
      arrowLeft: 'i-lucide-arrow-left',
      arrowRight: 'i-lucide-arrow-right',
      check: 'i-lucide-check',
      chevronDoubleLeft: 'i-lucide-chevrons-left',
      chevronDoubleRight: 'i-lucide-chevrons-right',
      chevronDown: 'i-lucide-chevron-down',
      chevronLeft: 'i-lucide-chevron-left',
      chevronRight: 'i-lucide-chevron-right',
      chevronUp: 'i-lucide-chevron-up',
      close: 'i-lucide-x',
      copy: 'i-lucide-copy',
      copyCheck: 'i-lucide-copy-check',
      ellipsis: 'i-lucide-ellipsis',
      external: 'i-lucide-arrow-up-right',
      loading: 'i-lucide-refresh-cw',
      minus: 'i-lucide-minus',
      plus: 'i-lucide-plus',
      search: 'i-lucide-search',
    },
  },
  uiPro: {
    prose: {
      codeIcon: {
        terminal: 'i-ph-terminal-window-duotone',
      },
    },
  },
})
