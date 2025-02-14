<script lang="ts" setup>
import { computed, ref } from 'vue'

interface ComponentProp {
  name: string
  type: string
  required: boolean
}

const componentName = ref('Button')
const description = ref('A simple button component')

const props = ref<ComponentProp[]>([{
  name: '',
  type: 'String',
  required: false,
}])
const currentTab = ref('HTL')

const tabs = ['HTL', 'Policy', 'Script', 'Style', 'Vue Prototype']

const value = ref('Backlog')

const tabItems = [
  {
    label: 'HTL',
    slot: 'htl',
    icon: '',
  },
  {
    label: 'Policy',
    slot: 'policy',
    icon: '',
  },
  {
    slot: 'script',
    label: 'Script',
    icon: '',
  },
  {
    label: 'Style',
    slot: 'style',
    icon: '',
  },
  {
    label: 'Vue Prototype',
    slot: 'vue-prototype',
    icon: '',
  },
]

const availableTypes = ['String', 'Number', 'Boolean', 'Array', 'Object']

function addProp() {
  props.value.push({
    name: '',
    type: 'String',
    required: false,
  })
}

function removeProp(index: number) {
  props.value = props.value.filter((_, i) => i !== index)
}

function generateHTL() {
  return `<!--
  /*
  * ${componentName.value} Component
  * ${description.value}
  **/
-->
  <div
    data-component="${componentName.value.toLowerCase()}"
    data-sly-use.model="com.example.models.${componentName.value}Model"
  >
    ${props.value.map(
      prop => `<div data-property="${prop.name.toLowerCase()}" \${model.${prop.name} @ context='html'}></div>`,
    )
      .join('\n    ')}
</div>`
}

function generatePolicy() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<jcr:root
  xmlns:sling="http://sling.apache.org/jcr/sling/1.0"
  xmlns:jcr="http://www.jcp.org/jcr/1.0"
  jcr:primaryType="nt:unstructured"
  components="${componentName.value.toLowerCase()}"
>
  <jcr:content jcr:primaryType="nt:unstructured">
      ${props.value
        .map(
          prop => `<${prop.name.toLowerCase()}jcr:primaryType="nt:unstructured" required="${prop.required}" type="${prop.type}" />`,
        )
        .join('\n        ')}
  </jcr:content>
</jcr:root>`
}

function generateScript() {
  return `defineProps<Props>()

interface Props {
  ${props.value
    .map(prop => `${prop.name}${prop.required ? '' : '?'}: ${prop.type.toLowerCase()}`)
    .join('\n  ')}
}`
}

function generateVuePrototype() {
  return `<div class="${componentName.value.toLowerCase()}">
    ${props.value
      .map(prop => `<div class="${prop.name.toLowerCase()}">
        {{ ${prop.name} }}
      </div>`)
      .join('\n    ')}
  </div>`
}

function generateStyle() {
  return `.${componentName.value.toLowerCase()} {
    ${props.value
      .map(prop => `--${prop.name.toLowerCase()}: ${prop.type === 'String' ? '""' : 0};`)
      .join('\n    ')}
  }`
}

const getCurrentCode = computed(() => {
  switch (currentTab.value) {
    case 'HTL Template':
      return generateHTL()

    case 'Policy':
      return generatePolicy()

    case 'Vue Prototype':
      return generateVuePrototype()

    case 'Script':
      return generateScript()

    case 'Style':
      return generateStyle()

    default:
      return ''
  }
})
</script>

<template>
  <div class="w-full max-w-4xl p-6 rounded-lg shadow">
    <div class="mb-6">
      <h2 class="text-2xl font-bold mb-4">
        AEM Component Generator
      </h2>
    </div>

    <div class="space-y-6">
      <!-- Component Details -->
      <div class="grid gap-4">
        <u-form-field label="Component Name">
          <u-input
            v-model="componentName"
            class="w-full"
            placeholder="MyComponent"
          />
        </u-form-field>

        <u-form-field label="Description">
          <u-input
            v-model="description"
            class="w-full"
            placeholder="A brief description of the component"
          />
        </u-form-field>
      </div>

      <!-- Properties -->
      <div>
        <u-form-field label="Properties">
          <div v-for="(prop, index) in props" :key="index" class="grid grid-cols-3 gap-2 mb-2">
            <u-input
              v-model="prop.name"
              placeholder="Property name"
            />

            <USelect v-model="value" :items="availableTypes" class="w-48" />

            <!-- <select
              v-model="prop.type"
              class="p-2 border rounded"
            >
              <option v-for="type in availableTypes" :key="type" :value="type">
                {{ type }}
              </option>
            </select> -->

            <u-button
              class="flex justify-center"
              @click="removeProp(index)"
            >
              Remove
            </u-button>
          </div>
        </u-form-field>

        <u-button
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-2"
          @click="addProp"
        >
          Add Property
        </u-button>
      </div>

      <u-tabs
        orientation="horizontal"
        variant="link"
        color="neutral"
        :items="tabItems"
        class="w-full"
      >
        <template #htl="{ item }">
          <u-textarea
            :value="generateHTL"
            autoresize
            readonly
            class="w-full h-64 p-4 font-mono text-sm"
          />
        </template>
      </u-tabs>

      <!-- Generated Code Tabs -->
      <!-- <div>
        <div class="border-b border-gray-200">
          <nav class="-mb-px flex space-x-8">
            <u-button
              v-for="tab in tabs"
              :key="tab"
              class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" :class="[
                currentTab === tab
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
              ]"
              @click="currentTab = tab"
            >
              {{ tab }}
            </u-button>
          </nav>
        </div>

        <div class="mt-4">
          <u-textarea
            :value="getCurrentCode"
            readonly
            class="w-full h-64 p-4 font-mono text-sm"
          />
        </div>
      </div> -->
    </div>
  </div>
</template>
