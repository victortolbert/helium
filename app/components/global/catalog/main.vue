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
</script>

<template>
  <section class="grid grid-cols-6">
    <UCard
      class="col-span-3 shadow-md"
      :ui="{
        // root: 'rounded-none shadow-none ring-0',
        // header: 'ring ring-neutral-300 dark:bg-neutral-950 dark:ring-neutral-700',
        // body: 'ring ring-neutral-300 dark:bg-neutral-950 dark:ring-neutral-700',
        // footer: '',
      }"
    >
      <template #header>
        <header class="flex items-center justify-between">
          <h2 class="text-lg font-semibold" v-text="'Button'" />
          <!-- class="text-abbvie-light rounded bg-(--brand-color) p-2" -->
          <div class="flex items-center gap-2 text-neutral-500">
            <USlideover>
              <UButton color="neutral" variant="subtle">
                <UIcon class="size-6" name="i-ph-question-duotone" />
              </UButton>

              <template #content>
                <Placeholder class="m-4 h-full" />
              </template>
            </USlideover>

            <UButton variant="subtle" class="hidden">
              <UIcon class="size-6" name="i-ph-arrow-circle-up-right-duotone" />
            </UButton>

            <UButton variant="subtle" class="hidden">
              <UIcon class="size-6" name="i-ph-x-circle-duotone" />
            </UButton>

            <UButton color="neutral" variant="subtle" class="hidden">
              <UIcon class="size-6" name="i-ph-check-circle-duotone" />
            </UButton>
          </div>
        </header>
      </template>

      <UTabs
        color="neutral"
        variant="link"
        :items="button.tabs"
        class="w-full"
        :ui="{
          root: '',
          trigger: '',
          list: '',
          indicator: '',
          label: 'font-bold',
          content: 'overflow-y-auto',
          leadingIcon: 'border',
          leadingAvatar: 'border',
          leadingAvatarSize: 'border',
        }"
      >
        <template #overview>
          <fieldset class="mt-4 grid gap-4">
            <UFormField label="Label">
              <UInput
                v-model="button.label.value"
                color="neutral"
                variant="subtle"
                :maxlength="button.label.maxLength"
                aria-describedby="character-count"
                :ui="{ trailing: 'pointer-events-none' }"
                class="w-full"
              >
                <template #trailing>
                  <div
                    id="character-count"
                    class="text-xs text-[var(-text-muted)] tabular-nums"
                    aria-live="polite"
                    role="status"
                  >
                    {{ button.label.value?.length }}/{{
                      button.label.maxLength
                    }}
                  </div>
                </template>
              </UInput>
            </UFormField>

            <div class="grid grid-cols-12 gap-4">
              <UFormField label="Link" class="col-span-12">
                <UInput
                  v-model="button.link.to"
                  color="neutral"
                  variant="subtle"
                  class="w-full"
                  type="url"
                />
              </UFormField>

              <UFormField label="Link Type" class="col-span-12">
                <USelect
                  v-model="button.link.type"
                  color="neutral"
                  variant="subtle"
                  :items="button.link.types"
                  class="w-full"
                />
              </UFormField>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <UFormField label="Icon">
                <UInput
                  color="neutral"
                  variant="subtle"
                  class="w-full"
                  type="file"
                />
              </UFormField>

              <UFormField label="Icon Position">
                <USelect
                  v-model="button.icon.position"
                  color="neutral"
                  variant="subtle"
                  placeholder=""
                  :items="['Top', 'Right', 'Left']"
                  class="w-full"
                />
              </UFormField>
            </div>

            <div class="grid grid-cols-12 gap-4">
              <UFormField label="Tab ID" class="col-span-6">
                <UInput
                  v-model="button.tab.id"
                  color="neutral"
                  variant="subtle"
                  class="w-full"
                />
              </UFormField>

              <UFormField label="Tab Index/Number" class="col-span-6">
                <UInputNumber
                  v-model="button.tab.index"
                  color="neutral"
                  variant="subtle"
                  orientation="horizontal"
                  :min="0"
                  :max="10"
                  class="w-full text-center"
                />
              </UFormField>
            </div>

            <div class="grid grid-cols-12 gap-4">
              <UFormField label="Carousel ID" class="col-span-6">
                <UInput color="neutral" variant="subtle" class="w-full" />
              </UFormField>

              <UFormField label="Carousel Index/Number" class="col-span-6">
                <UInputNumber
                  v-model="button.carousel.index"
                  color="neutral"
                  variant="subtle"
                  orientation="horizontal"
                  :min="0"
                  :max="10"
                  class="w-full"
                />
              </UFormField>
            </div>
          </fieldset>
        </template>

        <template #styles>
          <fieldset class="mt-4 grid gap-4">
            <UFormField label="Theme">
              <USelect
                v-model="color.value"
                color="neutral"
                variant="subtle"
                :items="colors"
                class="w-full"
              />
            </UFormField>

            <h4 class="text-sm font-semibold">
              Margin
            </h4>

            <div class="grid grid-cols-4 gap-4">
              <UFormField label="Top">
                <UInputNumber
                  v-model="button.margin.top"
                  color="neutral"
                  variant="subtle"
                  orientation="horizontal"
                  :max="10"
                  class="w-full"
                />
              </UFormField>

              <UFormField label="Right">
                <UInputNumber
                  v-model="button.margin.right"
                  color="neutral"
                  variant="subtle"
                  orientation="horizontal"
                  :max="10"
                  class="w-full"
                />
              </UFormField>

              <UFormField label="Bottom">
                <UInputNumber
                  v-model="button.margin.bottom"
                  color="neutral"
                  variant="subtle"
                  orientation="horizontal"
                  :max="10"
                  class="w-full"
                />
              </UFormField>

              <UFormField label="Left">
                <UInputNumber
                  v-model="button.margin.left"
                  color="neutral"
                  variant="subtle"
                  orientation="horizontal"
                  :max="10"
                  class="w-full"
                />
              </UFormField>
            </div>

            <h4 class="text-sm font-semibold">
              Padding
            </h4>

            <div class="grid grid-cols-4 gap-4">
              <UFormField label="Top">
                <UInputNumber
                  v-model="button.padding.top"
                  color="neutral"
                  variant="subtle"
                  orientation="horizontal"
                  :min="0"
                  :max="10"
                  class="w-full"
                />
              </UFormField>

              <UFormField label="Right">
                <UInputNumber
                  v-model="button.padding.right"
                  color="neutral"
                  variant="subtle"
                  orientation="horizontal"
                  :min="0"
                  :max="10"
                  class="w-full"
                />
              </UFormField>

              <UFormField label="Bottom">
                <UInputNumber
                  v-model="button.padding.bottom"
                  color="neutral"
                  variant="subtle"
                  orientation="horizontal"
                  :min="0"
                  :max="10"
                  class="w-full"
                />
              </UFormField>

              <UFormField label="Left">
                <UInputNumber
                  v-model="button.padding.left"
                  color="neutral"
                  variant="subtle"
                  orientation="horizontal"
                  :min="0"
                  :max="10"
                  class="w-full"
                />
              </UFormField>
            </div>

            <h4 class="text-sm font-semibold">
              Border
            </h4>

            <div class="grid grid-cols-12 gap-4">
              <UFormField label="Color" class="col-span-4">
                <UInput
                  color="neutral"
                  variant="subtle"
                  class="w-full"
                  type="color"
                />
              </UFormField>

              <UFormField label="Width" class="col-span-4">
                <UInputNumber
                  v-model="button.border.width"
                  color="neutral"
                  variant="subtle"
                  orientation="horizontal"
                  :min="0"
                  :max="10"
                  class="w-full"
                />
              </UFormField>

              <UFormField label="Radius" class="col-span-4">
                <UInputNumber
                  v-model="button.border.radius"
                  color="neutral"
                  variant="subtle"
                  orientation="horizontal"
                  :min="0"
                  :max="10"
                  class="w-full"
                />
              </UFormField>

              <UFormField label="Style" class="col-span-12">
                <USelect
                  v-model="button.border.style"
                  color="neutral"
                  variant="subtle"
                  :items="button.border.styles"
                  class="w-full"
                />
              </UFormField>
            </div>
          </fieldset>
        </template>

        <template #analytics>
          <fieldset class="mt-4 grid gap-4">
            <UCheckbox label="Override System Default Value" />

            <UFormField label="ClickStream Tag Value">
              <UInput color="neutral" variant="subtle" class="w-full" />
            </UFormField>

            <UFormField label="Brand Key Message">
              <UInput color="neutral" variant="subtle" class="w-full" />
            </UFormField>

            <UFormField label="Sub Category">
              <USelect
                v-model="subCategory"
                color="neutral"
                variant="subtle"
                placeholder="Select category"
                :items="subCategories"
                class="w-full"
              />
            </UFormField>

            <UFormField label="Button Name">
              <UInput color="neutral" variant="subtle" class="w-full" />
            </UFormField>
          </fieldset>
        </template>

        <template #advanced>
          <fieldset class="mt-4 grid gap-4">
            <div class="grid grid-cols-2 gap-4">
              <UFormField label="ID">
                <UInput color="neutral" variant="subtle" class="w-full" />
              </UFormField>

              <UFormField label="Custom Class">
                <UInput color="neutral" variant="subtle" class="w-full" />
              </UFormField>
            </div>

            <UFormField label="Delay Visibility (seconds)">
              <UInputNumber
                v-model="button.visibility.delay"
                color="neutral"
                variant="subtle"
                orientation="vertical"
                :min="0"
                :max="10"
                class="w-full"
              />
            </UFormField>

            <UFormField label="Font Size">
              <UInput color="neutral" variant="subtle" class="w-full" />
            </UFormField>

            <UFormField label="Font Color">
              <UInput
                color="neutral"
                variant="subtle"
                class="w-full"
                type="color"
              />
            </UFormField>

            <UFormField label="Background Color ">
              <UInput
                color="neutral"
                variant="subtle"
                class="w-full"
                type="color"
              />
            </UFormField>

            <div class="grid grid-cols-2 gap-4">
              <UFormField label="Size">
                <USelect
                  v-model="button.size"
                  color="neutral"
                  variant="subtle"
                  :items="button.sizes"
                  class="w-full"
                />
              </UFormField>

              <UFormField label="Width">
                <UInputNumber
                  v-model="button.width"
                  color="neutral"
                  variant="subtle"
                  orientation="vertical"
                  :min="0"
                  :max="10"
                  class="w-full"
                />
              </UFormField>
            </div>
          </fieldset>
        </template>
      </UTabs>
    </UCard>

    <section class="col-span-3 flex flex-col gap-2">
      <section
        class="flex aspect-3/2 items-center justify-center bg-neutral-50 ring ring-neutral-300 dark:bg-neutral-950 dark:ring-neutral-700"
      >
        <!-- :variant="button.variants[color.value]" -->
        <UButton
          :color="color.value"
          :disabled="false"
          :label="button.label.value"
          :loading="false"
          :icon="button.icon.name"
          :size="button.size"
          :trailing-icon="button.trailingIcon.name"
          :to="button.link.to"
          variant="outline"
          :ui="{
            leadingIcon: 'text-[var(-primary)]',
            trailingIcon: 'text-[var(-neutral)] size-4',
          }"
          class="mx-auto font-bold"
        />
      </section>

      <section>
        <UTabs
          orientation="horizontal"
          variant="link"
          color="neutral"
          :items="items"
          class="w-full"
        >
          <template #codepen>
            <section class="p-4">
              Codepen
            </section>
          </template>

          <template #config>
            <section class="p-4">
              Config
            </section>
          </template>
        </UTabs>
      </section>
    </section>
  </section>
</template>
