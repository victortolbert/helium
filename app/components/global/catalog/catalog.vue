<script setup lang="ts">
definePageMeta({
  title: 'Catalog',
  description: 'Catalog page',
  image: 'https://example.com/image.jpg',
  layout: 'default',
})

// import { codeToHtml } from 'shiki'

// const code = await codeToHtml('console.log("hello")', {
//   lang: 'javascript',
//   themes: {
//     light: 'min-light',
//     dark: 'nord',
//   },
// })

// onMounted(() => {
//   console.log(code)
// })

const store = useWithSkipHydrateStore()
const skipHydrateState = computed(() => {
  return store.skipped?.text === 'I should not be serialized or hydrated'
    ? 'skipHydrate-wrapped state is correct'
    : 'skipHydrate-wrapped state is incorrect'
})

const log = useLogStore()
const count = useCountStore()
const ui = useUiStore()

useTestStore()

const state = reactive({
  email: '',
  password: '',
})

// useSomeStoreStore()

// await useAsyncData('log', () => log.asyncIncrement().then(() => true))

if (import.meta.server) {
  log.increment()
}

// Get all components
const components = await queryCollection('components')
  .order('name', 'DESC')
  .all()

function submit() {
  console.log('submit')
}

interface Tab {
  label: string
  slot: string
}

interface Color {
  label: string
  value:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'error'
    | 'neutral'
    | 'tertiary'
    | undefined
}

interface ButtonLabel {
  value: string
  maxLength: number
}
interface Icon {
  name: string
  position?: Position
}

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type Position = 'Top' | 'Right' | 'Bottom' | 'Left'

interface Button {
  tabs: Tab[]
  label: ButtonLabel
  variants: Record<string, string>
  size: ButtonSize
  sizes: ButtonSize[]
  link: {
    to: string
    type: string
    types: string[]
  }
  icon: Icon
  trailingIcon: Icon
  tab: {
    id: string
    index: number
  }
  carousel: {
    index: number
  }
  margin: {
    top: number
    right: number
    bottom: number
    left: number
  }
  border: {
    width: number
    color: string
    styles: string[]
    style: string
    radius: number
  }
  padding: {
    top: number
    right: number
    bottom: number
    left: number
  }
  width: number
  visibility: {
    delay: number
  }
}

const button = reactive<Button>({
  tabs: [
    {
      label: 'Overview',
      slot: 'overview',
    },
    {
      label: 'Styles',
      slot: 'styles',
    },
    {
      label: 'Analytics',
      slot: 'analytics',
    },
    {
      label: 'Advanced',
      slot: 'advanced',
    },
  ],
  label: {
    value: 'Send email',
    maxLength: 50,
  },
  variants: {
    Primary: 'bg-skyrizi-blue hover:bg-skyrizi-blue/80',
    Secondary: 'bg-skyrizi-blue hover:bg-skyrizi-blue/80',
    Success: 'bg-skyrizi-blue hover:bg-skyrizi-blue/80',
    Info: 'bg-skyrizi-blue hover:bg-skyrizi-blue/80',
    Warning: 'bg-skyrizi-blue hover:bg-skyrizi-blue/80',
    Error: 'bg-skyrizi-blue hover:bg-skyrizi-blue/80',
    Neutral: 'bg-skyrizi-blue hover:bg-skyrizi-blue/80',
    derm: 'bg-skyrizi-blue hover:bg-skyrizi-blue/80',
    humira: 'bg-skyrizi-plum hover:bg-skyrizi-plum/80 text-white',
    gastro: 'bg-red-600 hover:bg-red-500',
  },
  size: 'md',
  sizes: ['xs', 'sm', 'md', 'lg', 'xl'],
  link: {
    to: '/',
    type: 'Link',
    types: [
      'Link',
      'Overlay',
      'Close Active Overlay',
      'Approve Template',
      'Print Plans',
    ],
  },
  icon: {
    name: '',
    position: 'Left',
  },
  trailingIcon: {
    name: 'i-ph-paper-plane-right-duotone',
  },
  // icon: {
  // },
  tab: {
    id: '',
    index: 0,
  },
  carousel: {
    index: 0,
  },
  margin: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  border: {
    width: 0,
    color: 'bg-red-500 text-white',
    styles: [
      'Solid',
      'Dashed',
      'Dotted',
      'Double',
      'Groove',
      'Ridge',
      'Inset',
      'Outset',
    ],
    style: 'solid',
    radius: 0,
  },
  padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  width: 0,
  visibility: {
    delay: 0,
  },
})

const color = reactive<Color>({
  label: 'Neutral',
  value: 'neutral',
})

const colors = ref([
  {
    label: 'Primary',
    value: 'primary',
  },
  {
    label: 'Secondary',
    value: 'secondary',
  },
  {
    label: 'Tertiary',
    value: 'tertiary',
  },
  {
    label: 'Success',
    value: 'success',
  },
  {
    label: 'Info',
    value: 'info',
  },
  {
    label: 'Warning',
    value: 'warning',
  },
  {
    label: 'Error',
    value: 'error',
  },
  {
    label: 'Neutral',
    value: 'neutral',
  },
])

const subCategories = ref([
  'Sub Category 1',
  'Sub Category 2',
  'Sub Category 3',
])
const subCategory = ref('')

const variants = {
  derm: 'bg-skyrizi-blue hover:bg-skyrizi-blue/80',
  humira: 'bg-skyrizi-plum hover:bg-skyrizi-plum/80 text-white',
  gastro: 'bg-red-600 hover:bg-red-500',
}
const items = ref([
  {
    label: 'CodePen',
    icon: 'i-ph-codepen-logo-duotone',
    slot: 'codepen',
  },
  {
    label: 'config',
    icon: 'i-ph-brackets-curly-duotone',
    slot: 'config',
  },
  // {
  //   label: '',
  //   icon: 'i-ph-app-window-duotone',
  //   content: 'This is the password content.',
  // },
  // {
  //   label: '',
  //   icon: 'i-ph-archive-duotone',
  //   content: 'This is the password content.',
  // },
  // {
  //   label: '',
  //   icon: 'i-ph-asclepius-duotone',
  //   content: 'This is the password content.',
  // },
])

// bg-[var(--ui-bg-elevated)]
// border-[var(--ui-border)]
// max-w-[var(--ui-container)]
// rounded-[calc(var(--ui-radius)*2)]
// rounded-[calc(var(--ui-radius)*1.5)]
// data-[state=inactive]:text-[var(--ui-text-muted)]
// hover:data-[state=inactive]:not-disabled:text-[var(--ui-text)]
// disabled:cursor-not-allowed disabled:opacity-75 focus:outline-hidden
// absolute transition-[translate,width] duration-200
// relative flex p-1 group
// group relative inline-flex items-center shrink-0 min-w-0
// left-0 w-[var(--reka-tabs-indicator-size)] translate-x-[var(--reka-tabs-indicator-position)]
// top-0 h-[var(--reka-tabs-indicator-size)] translate-y-[var(--reka-tabs-indicator-position)]
</script>

<template>
  <UContainer class="mx-auto w-full max-w-full px-0 sm:px-0 lg:px-0">
    <UCard
      :ui="{
        // w-full h-screen
        root: 'w-256 h-192 mx-auto ring-1 ring-neutral-300 dark:ring-neutral-700  flex flex-col relative rounded-none shadow-none border-none divide-transparent',
        body: 'p-0 py-0 sm:p-0 flex-1 ring-1 ring-neutral-300 dark:ring-neutral-700',
        header: 'p-0 pb-0 sm:px-0',
        // footer: 'p-4 pt-2 sm:px-6',
        footer: 'ring-1 ring-neutral-300 dark:ring-neutral-700',
      }"
    >
      <template #header>
        <SlideHeader />
      </template>

      <template #default>
        <SlideMain />
      </template>

      <template #footer>
        <SlideFooter />
      </template>
    </UCard>
  </UContainer>
</template>
