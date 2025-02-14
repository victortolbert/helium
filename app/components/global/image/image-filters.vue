<script setup lang="ts">
defineEmits(['resetFilter', 'closeFilter'])
</script>

<template>
  <div class="p-5 flex flex-col justify-between w-[350px] bg-gray-900 z-50 rounded-lg border border-zinc-700">
    <div>
      <span class="text-white">Filters</span>
      <div class="mt-[28px] ">
        <slot />
      </div>
    </div>
    <UButton
      label="Reset"
      color="neutral"
      variant="outline"
      class="text-gray-400 hover:text-gray-300 transition-colors duration-200 w-fit"
      @click="$emit('resetFilter')"
    />
    <UButton
      icon="i-ph-x-duotone"
      variant="ghost"
      color="neutral"
      size="xs"
      class="flex absolute top-4 right-4"
      @click="$emit('closeFilter')"
    />
  </div>
</template>
