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
// Record<string, string>
interface Variant {
  label: string
  value: string
  classList?: string
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
  variants: Record<string, Variant>
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
      value: '0',
    },
    {
      label: 'Styles',
      slot: 'styles',
      value: '1',
    },
    {
      label: 'Analytics',
      slot: 'analytics',
      value: '2',
    },
    {
      label: 'Advanced',
      slot: 'advanced',
      value: '3',
    },
  ],

  label: {
    value: 'Send email',
    maxLength: 50,
  },

  // button.variants[color.value]
  variants: {
    primary: {
      label: 'Primary',
      value: 'primary',
      classList: 'bg-skyrizi-blue hover:bg-skyrizi-blue/80',
    },

    secondary: {
      label: 'Secondary',
      value: 'secondary',
      classList: 'bg-skyrizi-blue hover:bg-skyrizi-blue/80',
    },

    success: {
      label: 'Success',
      value: 'success',
      classList: 'bg-skyrizi-blue hover:bg-skyrizi-blue/80',
    },

    info: {
      label: 'Info',
      value: 'info',
      classList: 'bg-skyrizi-blue hover:bg-skyrizi-blue/80',
    },

    warning: {
      label: 'Warning',
      value: 'warning',
      classList: 'bg-skyrizi-blue hover:bg-skyrizi-blue/80',
    },

    error: {
      label: 'Error',
      value: 'error',
      classList: 'bg-skyrizi-blue hover:bg-skyrizi-blue/80',
    },

    neutral: {
      label: 'Neutral',
      value: 'neutral',
      classList: 'bg-skyrizi-blue hover:bg-skyrizi-blue/80',
    },

    derm: {
      label: 'Derm',
      value: 'derm',
      classList: 'bg-skyrizi-blue hover:bg-skyrizi-blue/80',
    },

    humira: {
      label: 'Humira',
      value: 'humira',
      classList: 'bg-skyrizi-plum hover:bg-skyrizi-plum/80 text-white',
    },

    gastro: {
      label: 'Gastro',
      value: 'gastro',
      classList: 'bg-red-600 hover:bg-red-500',
    },
  },

  size: 'md',
  sizes: ['xs', 'sm', 'md', 'lg', 'xl'],
  link: {
    to: 'https://example.com',
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

const items = ref([
  // {
  //   label: 'CodePen',
  //   icon: 'i-ph-codepen-logo-duotone',
  //   slot: 'codepen',
  // },
  // {
  //   label: 'config',
  //   icon: 'i-ph-brackets-curly-duotone',
  //   slot: 'config',
  // },
  // {
  //   label: 'Markdown',
  //   icon: 'i-vscode-icons-file-type-markdown',
  //   slot: 'markdown',
  // },
  // {
  //   label: 'Tailwind',
  //   icon: 'i-vscode-icons-file-type-tailwind',
  //   slot: 'tailwind',
  // },

  {
    label: 'Properties',
    icon: '',
    slot: 'properties',
  },
  {
    label: 'Code',
    icon: 'i-ph-code-duotone',
    slot: 'code',
  },
  {
    label: 'Style',
    icon: 'i-ph-palette-duotone',
    slot: 'style',
  },
  {
    label: 'Preview',
    icon: 'i-ph-eye-duotone',
    slot: 'preview',
  },
  // {
  //   label: 'React',
  //   icon: 'i-vscode-icons-file-type-reactjs',
  //   slot: 'react',
  // },
  // {
  //   label: 'Vue',
  //   icon: 'i-vscode-icons-file-type-vue',
  //   slot: 'vue',
  // },
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

const data = ref([
  {
    id: '4600',
    date: '2024-03-11T15:30:00',
    status: 'paid',
    email: 'james.anderson@example.com',
    amount: 594,
  },
  {
    id: '4599',
    date: '2024-03-11T10:10:00',
    status: 'failed',
    email: 'mia.white@example.com',
    amount: 276,
  },
  {
    id: '4598',
    date: '2024-03-11T08:50:00',
    status: 'refunded',
    email: 'william.brown@example.com',
    amount: 315,
  },
  {
    id: '4597',
    date: '2024-03-10T19:45:00',
    status: 'paid',
    email: 'emma.davis@example.com',
    amount: 529,
  },
  {
    id: '4596',
    date: '2024-03-10T15:55:00',
    status: 'paid',
    email: 'ethan.harris@example.com',
    amount: 639,
  },
])

const active = ref('0')
</script>

<template>
  <article
    class="grid grid-cols-12 h-full ring-1 ring-neutral-300 dark:ring-neutral-700"
  >
    <section class="col-span-3 ring-1 ring-neutral-300 dark:ring-neutral-700">
      <UCard
        :ui="{
          root: 'flex flex-col h-full ring-1 ring-neutral-300 dark:ring-neutral-700 rounded-none shadow-none border-none',
          header: 'p-0 sm:p-0  ring-1 ring-neutral-300 dark:ring-neutral-700',
          body: 'flex-1 ring-1 ring-neutral-300 dark:ring-neutral-700 p-0 sm:p-0 rounded-none shadow-none',
          footer: ' ',
        }"
      >
        <template #header>
          <SlideMainHeader />
        </template>

        <template #default>
          <UFormField class="p-4 py-2 xl:p-0">
            <USelect
              v-model="active"
              variant="outline"
              value-key="value"
              :items="button.tabs"
              class="w-full block"
              :ui="{
                base: 'inline-flex items-center xl:hidden',
              }"
            />
          </UFormField>

          <aside>
            <UTabs
              v-model="active"
              label-key="label"
              color="neutral"
              variant="link"
              :items="button.tabs"
              class="w-full"
              :ui="{
                root: 'p-0 lg:p-0',
                trigger: '',
                list: 'hidden xl:block',
                indicator: '',
                label: '',
                content: 'pl-4 pr-4 overflow-y-scroll',
                leadingIcon: 'border',
                leadingAvatar: 'border',
                leadingAvatarSize: 'border',
              }"
            >
              <template #overview>
                <fieldset class="my-4 grid gap-4">
                  <UFormField label="Label">
                    <UInput
                      v-model="button.label.value"
                      color="neutral"
                      variant="outline"
                      :maxlength="button.label.maxLength"
                      aria-describedby="character-count"
                      :ui="{ trailing: 'pointer-events-none' }"
                      class="w-full"
                    >
                      <template #trailing>
                        <div
                          id="character-count"
                          class="text-xs text-[var(--ui-text-muted)] tabular-nums"
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
                        variant="outline"
                        class="w-full"
                        type="url"
                      />
                    </UFormField>

                    <UFormField label="Link Type" class="col-span-12">
                      <USelect
                        v-model="button.link.type"
                        color="neutral"
                        variant="outline"
                        :items="button.link.types"
                        class="w-full"
                      />
                    </UFormField>
                  </div>

                  <div class="grid gap-4 lg:grid-cols-2">
                    <UFormField label="Icon">
                      <UInput
                        color="neutral"
                        variant="outline"
                        class="w-full"
                        type="file"
                      />
                    </UFormField>

                    <UFormField label="Icon Position">
                      <USelect
                        v-model="button.icon.position"
                        color="neutral"
                        variant="outline"
                        placeholder=""
                        :items="['Top', 'Right', 'Left']"
                        class="w-full"
                      />
                    </UFormField>
                  </div>

                  <div class="grid gap-4 lg:grid-cols-2">
                    <UFormField label="Tab ID">
                      <UInput
                        v-model="button.tab.id"
                        color="neutral"
                        variant="outline"
                        class="w-full"
                      />
                    </UFormField>

                    <UFormField label="Tab Index/Number">
                      <UInputNumber
                        v-model="button.tab.index"
                        color="neutral"
                        variant="outline"
                        orientation="horizontal"
                        :min="0"
                        :max="10"
                        class="w-full text-center"
                      />
                    </UFormField>
                  </div>

                  <div class="grid gap-4 lg:grid-cols-2">
                    <UFormField label="Carousel ID">
                      <UInput color="neutral" variant="outline" class="w-full" />
                    </UFormField>

                    <UFormField label="Carousel Index/Number">
                      <UInputNumber
                        v-model="button.carousel.index"
                        color="neutral"
                        variant="outline"
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
                <fieldset class="my-4 grid gap-4">
                  <UFormField label="Theme">
                    <USelect
                      v-model="color.value"
                      color="neutral"
                      variant="outline"
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
                        variant="outline"
                        orientation="horizontal"
                        :max="10"
                        class="w-full"
                      />
                    </UFormField>

                    <UFormField label="Right">
                      <UInputNumber
                        v-model="button.margin.right"
                        color="neutral"
                        variant="outline"
                        orientation="horizontal"
                        :max="10"
                        class="w-full"
                      />
                    </UFormField>

                    <UFormField label="Bottom">
                      <UInputNumber
                        v-model="button.margin.bottom"
                        color="neutral"
                        variant="outline"
                        orientation="horizontal"
                        :max="10"
                        class="w-full"
                      />
                    </UFormField>

                    <UFormField label="Left">
                      <UInputNumber
                        v-model="button.margin.left"
                        color="neutral"
                        variant="outline"
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
                        variant="outline"
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
                        variant="outline"
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
                        variant="outline"
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
                        variant="outline"
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
                        variant="outline"
                        class="w-full"
                        type="color"
                      />
                    </UFormField>

                    <UFormField label="Width" class="col-span-4">
                      <UInputNumber
                        v-model="button.border.width"
                        color="neutral"
                        variant="outline"
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
                        variant="outline"
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
                        variant="outline"
                        :items="button.border.styles"
                        class="w-full"
                      />
                    </UFormField>
                  </div>
                </fieldset>
              </template>

              <template #analytics>
                <fieldset class="my-4 grid gap-4">
                  <UCheckbox
                    label="Override System Default Value"
                    color="neutral"
                    variant="outline"
                  />

                  <UFormField label="ClickStream Tag Value">
                    <UInput color="neutral" variant="outline" class="w-full" />
                  </UFormField>

                  <UFormField label="Brand Key Message">
                    <UInput color="neutral" variant="outline" class="w-full" />
                  </UFormField>

                  <UFormField label="Sub Category">
                    <USelect
                      v-model="subCategory"
                      color="neutral"
                      variant="outline"
                      placeholder="Select category"
                      :items="subCategories"
                      class="w-full"
                    />
                  </UFormField>

                  <UFormField label="Button Name">
                    <UInput color="neutral" variant="outline" class="w-full" />
                  </UFormField>
                </fieldset>
              </template>

              <template #advanced>
                <fieldset class="my-4 grid gap-4">
                  <div class="grid grid-cols-2 gap-4">
                    <UFormField label="ID">
                      <UInput color="neutral" variant="outline" class="w-full" />
                    </UFormField>

                    <UFormField label="Custom Class">
                      <UInput color="neutral" variant="outline" class="w-full" />
                    </UFormField>
                  </div>

                  <UFormField label="Delay Visibility (seconds)">
                    <UInputNumber
                      v-model="button.visibility.delay"
                      color="neutral"
                      variant="outline"
                      orientation="horizontal"
                      :min="0"
                      :max="10"
                      class="w-full"
                    />
                  </UFormField>

                  <UFormField label="Font Size">
                    <UInput color="neutral" variant="outline" class="w-full" />
                  </UFormField>

                  <div class="grid gap-4 lg:grid-cols-2">
                    <UFormField label="Font Color">
                      <UInput
                        color="neutral"
                        variant="outline"
                        class="w-full"
                        type="color"
                      />
                    </UFormField>

                    <UFormField label="Background Color">
                      <UInput
                        color="neutral"
                        variant="outline"
                        class="w-full"
                        type="color"
                      />
                    </UFormField>
                  </div>

                  <div class="grid grid-cols-2 gap-4">
                    <UFormField label="Size">
                      <USelect
                        v-model="button.size"
                        color="neutral"
                        variant="outline"
                        :items="button.sizes"
                        class="w-full"
                      />
                    </UFormField>

                    <UFormField label="Width">
                      <UInputNumber
                        v-model="button.width"
                        color="neutral"
                        variant="outline"
                        orientation="horizontal"
                        :min="0"
                        :max="10"
                        class="w-full"
                      />
                    </UFormField>
                  </div>
                </fieldset>
              </template>
            </UTabs>
          </aside>
        </template>

        <template #footer>
          <div class="grid grid-cols-2 gap-4">
            <UButton
              color="primary"
              variant="solid"
              label="Submit"
              class="flex w-full justify-center font-semibold"
              @click="submit"
            />
            <UButton
              color="neutral"
              variant="outline"
              label="Cancel"
              class="flex w-full justify-center font-semibold"
            />
          </div>
        </template>
      </UCard>
    </section>

    <section
      class="col-span-6 flex flex-col gap-2 ring-1 ring-neutral-300 dark:ring-neutral-700"
    >
      <!-- bg-skyrizi-derm -->
      <section
        class="flex aspect-video items-center justify-center bg-cover bg-no-repeat ring-1 ring-neutral-300 dark:bg-neutral-950 dark:ring-neutral-700"
      >
        <!-- :variant="button.variants[color.value]" -->
        <!-- <UButton
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
            leadingIcon: 'text-[var(--ui-primary)]',
            trailingIcon: 'text-[var(--ui-neutral)] size-4',
          }"
          class="mx-auto font-semibold"
        /> -->
        <Signature />
      </section>

      <section>
        <UTabs
          orientation="horizontal"
          variant="link"
          color="neutral"
          :items="items"
          class="w-full"
          :ui="{
            root: '',
            trigger: '',
            list: '',
            indicator: '',
            label: '',
            content: '',
            leadingIcon: '',
            leadingAvatar: '',
            leadingAvatarSize: '',
          }"
        >
          <template #properties>
            <section class="p-4">
              <ProseTable>
                <ProseThead>
                  <ProseTr>
                    <ProseTh>Prop</ProseTh>
                    <ProseTh>Default</ProseTh>
                  </ProseTr>
                </ProseThead>
                <ProseTbody>
                  <ProseTr>
                    <ProseTd>
                      <ProseCode>color</ProseCode>
                    </ProseTd>
                    <ProseTd>
                      <ProseCode>neutral</ProseCode>
                    </ProseTd>
                  </ProseTr>
                </ProseTbody>
              </ProseTable>
            </section>
          </template>

          <template #style>
            Style
          </template>

          <template #tailwind>
            <section class="p-4">
              Tailwind
            </section>
          </template>

          <template #markdown>
            <section class="p-4">
              Markdown
            </section>
          </template>

          <template #preview>
            <section class="p-4">
              Preview
            </section>
          </template>
        </UTabs>
        <!-- <UTable :data="data" class="flex-1" /> -->
        <!-- <CatalogTable /> -->
      </section>
    </section>
  </article>
</template>
