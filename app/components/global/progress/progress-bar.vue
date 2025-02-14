<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    value?: number | string
    max?: number | string
    backgroundClass?: string
    fillClass?: string
  }>(),
  {
    value: 50,
    max: 100,
    backgroundClass: 'bg-gray-200 border-gray-200',
    fillClass: 'bg-black border-black',
  },
)

const progressPercentage = computed(() => {
  const value = Number(props.value)
  const max = Number(props.max)

  if (Number.isNaN(value) || Number.isNaN(max)) {
    return 0
  }

  return Math.round((value / max) * 100)
})
</script>

<template>
  <div
    class="relative w-full"
    role="progressbar"
    :title="`${progressPercentage}%`"
    aria-valuemin="0"
    :aria-valuemax="max"
    :aria-valuenow="value"
  >
    <div
      class="c-Progress__background h-[20px] rounded-full border border-gray-400"
      :class="[backgroundClass]"
    />
    <div
      class="c-Progress__fill absolute top-px left-px h-[18px] rounded-full border-1 border-white"
      :class="[fillClass]"
      :style="`width: ${progressPercentage}%`"
    />
  </div>
</template>

<style scoped>
.c-Progress__background {
  /* border: 1px solid black; */
}

.c-Progress__fill {
  /* position: absolute; */
  /* top: 0; */
  /* left: 0; */
  /* background-color: black; */
  /* border: 1px solid black; */
  min-width: 16px;
  transition: 0.2s cubic-bezier(0.4, 0, 0.6, 1);
}
</style>
