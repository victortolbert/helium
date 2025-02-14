<script setup lang="ts">
import { ref } from 'vue'

const colors = ref({
  'skyrizi-blue': { background: '#00A3DF', foreground: 'black' },
  'skyrizi-blue-60': { background: '#66C8EC', foreground: 'black' },
  'skyrizi-blue-30': { background: '#B2E3F5', foreground: 'black' },
  'skyrizi-plum': { background: '#B41955', foreground: 'white' },
  'skyrizi-slate-gray': { background: '#50535A', foreground: 'white' },
  'skyrizi-slate-gray-55': { background: '#9FA0A4', foreground: 'black' },
  'skyrizi-slate-gray-25': { background: '#D3D4D5', foreground: 'black' },
  'skyrizi-gray': { background: '#E9EAE8', foreground: 'black' },
  'skyrizi-royal-blue': { background: '#004C97', foreground: 'white' },
  'skyrizi-mint-green': { background: '#6ABC8D', foreground: 'black' },
  'skyrizi-pine-green': { background: '#248A6B', foreground: 'black' },
  'skyrizi-sandy-yellow': { background: '#F39200', foreground: 'black' },
  'skyrizi-vermillion': { background: '#E84127', foreground: 'black' },
  'skyrizi-fortify-green': { background: '#4DABB0', foreground: 'black' },
  'skyrizi-motivate-blue': { background: '#0074BB', foreground: 'white' },
  'skyrizi-advance-purple': { background: '#5F6DD1', foreground: 'black' },
})
</script>

<template>
  <div class="grid grid-cols-4 flex-wrap items-baseline gap-x-2 gap-y-0">
    <div
      v-for="(color, name) in colors"
      :key="name"
      class="rounded px-4 py-2 text-2xs font-bold tracking-wider"
      :style="{
        backgroundColor: color.background,
        color: color.foreground,
      }"
    >
      {{ name.replace(/^skyrizi-/, '') }}
    </div>
  </div>
</template>
