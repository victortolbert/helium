<script setup>
import { ImgComparisonSlider } from '@img-comparison-slider/vue'
</script>

<template>
  <ClientOnly>
    <ImgComparisonSlider>
      <!-- eslint-disable -->
      <img
        slot="first"
        style="width: 100%"
        src="https://img-comparison-slider.sneas.io/demo/images/before.webp"
      />

      <img
        slot="second"
        style="width: 100%"
        src="https://img-comparison-slider.sneas.io/demo/images/after.webp"
      />

       <svg slot="handle" width="100" xmlns="http://www.w3.org/2000/svg"  viewBox="-8 -3 16 6">
          <path
            stroke="#fff"
            d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2"
            stroke-width="1"
            fill="#fff"
            vector-effect="non-scaling-stroke"
          ></path>
        </svg>
      <!-- eslint-enable -->
    </ImgComparisonSlider>
  </ClientOnly>
</template>

<style>
  img-comparison-slider {
    --divider-width: 8px;
    --divider-color: #c0c0c0;
    --default-handle-opacity: 0.3;
  }
</style>
