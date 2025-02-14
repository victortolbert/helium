<script setup lang="ts">
const items = ref([
  {
    label: 'System',
  },
  {
    label: 'Light',
  },
  {
    label: 'Dark',
  },
])
</script>

<template>
  <UContextMenu
    size="xl"
    :items="items"
    :ui="{
      content: 'w-48',
    }"
  >
    <div class="flex items-center justify-center">
      <UIcon name="i-ph-house-simple-duotone" class="size-7" />
    </div>
  </UContextMenu>
</template>
