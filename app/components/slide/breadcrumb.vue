<script setup lang="ts">
const items = ref([
  {
    label: 'Home',
  },
  {
    label: 'Slides',
    to: '/slides',
  },
])
</script>

<template>
  <UBreadcrumb separator-icon="i-lucide-arrow-right" :items="items" />
</template>
