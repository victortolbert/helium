<script setup lang="ts">
const tabs = ref([
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
])

const iconPositions = ref(['Top', 'Right', 'Left'])
const iconPosition = ref('Left')

const linkTypes = ref([
  'Link',
  'Overlay',
  'Close Active Overlay',
  'Approve Template',
  'Print Plans',
])
const linkType = ref('Link')

const themes = ref([
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
  'Neutral',
])
const theme = ref('Neutral')

const borderStyles = ref([
  'Solid',
  'Dashed',
  'Dotted',
  'Double',
  'Groove',
  'Ridge',
  'Inset',
  'Outset',
])
const borderStyle = ref('Solid')

const subCategories = ref([
  'Sub Category 1',
  'Sub Category 2',
  'Sub Category 3',
])
const subCategory = ref('')

const sizes = ref(['Small', 'Medium', 'Large'])
const size = ref('Medium')

const tabIndex = ref(0)
const carouselIndex = ref(0)
const marginTop = ref(0)
const marginRight = ref(0)
const marginBottom = ref(0)
const marginLeft = ref(0)
const paddingTop = ref(0)
const paddingRight = ref(0)
const paddingBottom = ref(0)
const paddingLeft = ref(0)
const borderWidth = ref(0)
const borderRadius = ref(0)
const width = ref(0)
const visibilityDelay = ref(0)
</script>

<template>
  <UTabs variant="link" :items="tabs" class="w-full">
    <template #overview>
      <fieldset class="mt-4 grid gap-4">
        <UFormField label="Button Text">
          <UInput class="w-full" />
        </UFormField>

        <UFormField label="Icon">
          <UInput class="w-full" type="file" />
        </UFormField>

        <UFormField label="Icon Position">
          <USelect
            v-model="iconPosition"
            placeholder=""
            :items="iconPositions"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Link Type">
          <USelect v-model="linkType" :items="linkTypes" class="w-full" />
        </UFormField>

        <UFormField label="Link">
          <UInput class="w-full" type="url" />
        </UFormField>

        <UFormField label="Tab ID">
          <UInput class="w-full" />
        </UFormField>

        <UFormField label="Tab Index/Number">
          <UInputNumber
            v-model="tabIndex"
            orientation="vertical"
            :min="0"
            :max="10"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Carousel ID">
          <UInput class="w-full" />
        </UFormField>

        <UFormField label="Carousel Index/Number">
          <UInputNumber
            v-model="carouselIndex"
            orientation="vertical"
            :min="0"
            :max="10"
            class="w-full"
          />
        </UFormField>
      </fieldset>
    </template>

    <template #styles>
      <fieldset class="mt-4 grid gap-4">
        <UFormField label="Theme">
          <USelect v-model="theme" :items="themes" class="w-full" />
        </UFormField>

        <h4 class="text-sm font-semibold">
          Margin
        </h4>

        <div class="grid grid-cols-4 gap-4">
          <UFormField label="Top">
            <UInputNumber
              v-model="marginTop"
              orientation="vertical"
              :min="0"
              :max="10"
              class="w-full"
            />
          </UFormField>
          <UFormField label="Right">
            <UInputNumber
              v-model="marginRight"
              orientation="vertical"
              :min="0"
              :max="10"
              class="w-full"
            />
          </UFormField>
          <UFormField label="Bottom">
            <UInputNumber
              v-model="marginBottom"
              orientation="vertical"
              :min="0"
              :max="10"
              class="w-full"
            />
          </UFormField>
          <UFormField label="Left">
            <UInputNumber
              v-model="marginLeft"
              orientation="vertical"
              :min="0"
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
              v-model="paddingTop"
              orientation="vertical"
              :min="0"
              :max="10"
              class="w-full"
            />
          </UFormField>
          <UFormField label="Right">
            <UInputNumber
              v-model="paddingRight"
              orientation="vertical"
              :min="0"
              :max="10"
              class="w-full"
            />
          </UFormField>
          <UFormField label="Bottom">
            <UInputNumber
              v-model="paddingBottom"
              orientation="vertical"
              :min="0"
              :max="10"
              class="w-full"
            />
          </UFormField>
          <UFormField label="Left">
            <UInputNumber
              v-model="paddingLeft"
              orientation="vertical"
              :min="0"
              :max="10"
              class="w-full"
            />
          </UFormField>
        </div>

        <UFormField label="Border Width">
          <UInputNumber
            v-model="borderWidth"
            orientation="vertical"
            :min="0"
            :max="10"
            class="w-full"
          />
        </UFormField>
        <UFormField label="Border Style">
          <USelect v-model="borderStyle" :items="borderStyles" class="w-full" />
        </UFormField>
        <UFormField label="Border Color">
          <UInput class="w-full" type="color" />
        </UFormField>
        <UFormField label="Border Radius">
          <UInputNumber
            v-model="borderRadius"
            orientation="vertical"
            :min="0"
            :max="10"
            class="w-full"
          />
        </UFormField>
      </fieldset>
    </template>

    <template #analytics>
      <fieldset class="mt-4 grid gap-4">
        <UCheckbox label="Override System Default Value" />

        <UFormField label="ClickStream Tag Value">
          <UInput class="w-full" />
        </UFormField>

        <UFormField label="Brand Key Message">
          <UInput class="w-full" />
        </UFormField>

        <UFormField label="Sub Category">
          <USelect
            v-model="subCategory"
            placeholder="Select category"
            :items="subCategories"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Button Name">
          <UInput class="w-full" />
        </UFormField>
      </fieldset>
    </template>

    <template #advanced>
      <fieldset class="mt-4 grid gap-4">
        <UFormField label="ID">
          <UInput class="w-full" />
        </UFormField>
        <UFormField label="Custom Class">
          <UInput class="w-full" />
        </UFormField>
        <UFormField label="Delay Visibility (seconds)">
          <UInputNumber
            v-model="visibilityDelay"
            orientation="vertical"
            :min="0"
            :max="10"
            class="w-full"
          />
        </UFormField>
        <UFormField label="Size">
          <USelect v-model="size" :items="sizes" class="w-full" />
        </UFormField>
        <UFormField label="Font Color">
          <UInput class="w-full" type="color" />
        </UFormField>
        <UFormField label="Font Size">
          <UInput class="w-full" />
        </UFormField>
        <UFormField label="Background Color ">
          <UInput class="w-full" type="color" />
        </UFormField>
        <UFormField label="Width">
          <UInputNumber
            v-model="width"
            orientation="vertical"
            :min="0"
            :max="10"
            class="w-full"
          />
        </UFormField>
      </fieldset>
    </template>
  </UTabs>
</template>
