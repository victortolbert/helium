<script setup lang="ts">
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

const counter = useCounterStore()
const count = useCountStore()
const ui = useUiStore()

useTestStore()

const state = reactive({
  email: '',
  password: '',
})

// useSomeStoreStore()

// await useAsyncData('counter', () => counter.asyncIncrement().then(() => true))

if (import.meta.server) {
  counter.increment()
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
</script>

<template>
  <aside>Aside</aside>
</template>
