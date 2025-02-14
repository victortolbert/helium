<script setup lang="ts">
const items = ref(['Backlog', 'Todo', 'In Progress', 'Done'])
const value = ref([])
</script>

<template>
  <UInputMenu v-model="value" multiple :items="items" />
</template>
