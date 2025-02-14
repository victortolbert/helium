<script setup lang="ts">
const route = useRoute()

const items = computed(() => [
  {
    label: 'Docs',
    to: '/getting-started',
    active: route.path.startsWith('/getting-started'),
  },
])
</script>

<template>
  <UHeader>
    <template #title>
      <Logo class="h-6 w-auto" />
    </template>

    <template #right>
      <UNavigationMenu :items="items" />

      <UColorModeButton />

      <!-- <UTooltip text="Open on BitBucket" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-simple-icons-bitbucket"
          aria-label="GitHub"
        />
      </UTooltip> -->
    </template>
  </UHeader>
</template>
