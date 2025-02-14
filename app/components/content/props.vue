<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'
import { ref, resolveComponent } from 'vue'

const UBadge = resolveComponent('UBadge')

interface Prop {
  prop: string
  default: string
  type: 'string' | 'failed' | 'refunded'
}

const data = ref<Prop[]>([
  {
    prop: 'name',
    default: '',
    type: 'string',
  },
  {
    prop: 'size',
    default: 'md',
    type: 'string',
  },
  {
    prop: 'color',
    default: 'neutral',
    type: 'string',
  },
])
const columns: TableColumn<Prop>[] = [
  {
    accessorKey: 'prop',
    header: 'Prop',
  },
  {
    accessorKey: 'default',
    header: 'Default',
  },
  {
    accessorKey: 'type',
    header: 'Type',
  },
]
/**
 * | Prop    | Default   | Type                     |
 * | ------- | --------- | ------------------------ |
 * | `name`  |           | `string`{lang="ts-type"} |
 * | `size`  | `md`      | `string`{lang="ts-type"} |
 * | `color` | `neutral` | `string`{lang="ts-type"} |
 */
</script>

<template>
  <UTable
    sticky
    :data="data"
    :columns="columns"
    class="flex-1 max-h-[312px]"
  >
    <template #prop-cell="{ row }">
      <p class="font-bold font-medium text-[var(--ui-text-highlighted)]">
        {{ row.original.prop }}
      </p>
    </template>
  </UTable>
</template>
