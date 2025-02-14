<script setup lang="ts">
const items = [
  {
    label: 'Overview',
    to: '/',
  },
  // {
  //   label: 'Dosing',
  //   to: '/slides/dosing',
  // },
  // {
  //   label: 'Safety',
  //   to: '/slides/safety',

  // },
  // {
  //   label: 'Access',
  //   to: '/slides/access',
  // },
]
</script>

<template>
  <nav class="flex justify-center gap-4">
    <ULink
      v-for="item in items"
      :key="item.label"
      :label="item.label"
      :to="item.to"
      :items="items"
      as="button"
    >
      {{ item.label }}
    </ULink>
  </nav>
</template>
