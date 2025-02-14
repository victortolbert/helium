<script setup lang="ts">
const items = [
  {
    label: 'Overview',
    to: '/skyrizi/derm',
  },
  {
    label: 'Dosing',
    to: '/skyrizi/derm/dosing',
  },
  {
    label: 'Safety',
    to: '/skyrizi/derm/safety',
  },
  {
    label: 'Access',
    to: '/skyrizi/derm/access',
  },
]
</script>

<template>
  <UNavigationMenu :items="items" class="w-full justify-center" />
</template>
