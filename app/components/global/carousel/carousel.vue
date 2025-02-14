<script setup lang="ts">
const items = [
  '/content/dam/skyrizihcpivy/isa/template-assets/background.png',
  'https://picsum.photos/1024/768?random=2',
  'https://picsum.photos/1024/768?random=3',
  'https://picsum.photos/1024/768?random=4',
  'https://picsum.photos/1024/768?random=5',
  'https://picsum.photos/1024/768?random=6',
]
</script>

<template>
  <div>
    <UCarousel
      v-slot="{ item }"
      :items="items"
      :ui="{ item: 'basis-1/3' }"
      class="mx-auto w-full max-w-screen-lg"
    >
      <img
        :src="item"
        width="1024"
        height="768"
        class="rounded-lg"
      >
    </UCarousel>
  </div>
</template>
