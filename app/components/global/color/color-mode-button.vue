<script setup>
import { useColorMode } from '@vueuse/core'

const mode = useColorMode()
</script>

<template>
  <UButton
    :icon="mode === 'dark' ? 'i-ph-moon-duotone' : 'i-ph-sun-duotone'"
    color="neutral"
    variant="link"
    @click="mode = mode === 'dark' ? 'light' : 'dark'"
  />
</template>
