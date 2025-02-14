<script setup lang="ts">
const items = ref(['Backlog', 'Todo', 'In Progress', 'Done'])
const value = ref('Todo')
</script>

<template>
  <USelectMenu v-model="value" :items="items" class="w-48" />
</template>
