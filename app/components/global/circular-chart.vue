<script setup lang="ts">
interface Props {
  value?: number
  stroke?: string
}

const props = withDefaults(defineProps<Props>(), {
  value: 50,
  stroke: '3',
})
</script>

<template>
  <svg
    data-component="circular-chart"
    viewBox="0 0 36 36"
    class="mx-auto md:my-2"
  >
    <path
      class="fill-none stroke-skyrizi-gray"
      :stroke-width="stroke"
      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
    />
    <path
      class="circle fill-none stroke-skyrizi-blue"
      :stroke-dasharray="`${value}, 100`"
      :stroke-width="stroke"
      stroke-linecap="butt"
      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
    />
    <text
      style="font-size: 0.5em; text-anchor: middle"
      class="percentage fill-skyrizi-slate-gray"
      x="18"
      y="20.35"
    >
      {{ value }}%
    </text>
  </svg>
</template>

<style scoped>
.circle {
  animation: progress 1s ease-out forwards;
}

@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
}
</style>
