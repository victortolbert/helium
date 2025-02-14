<script setup lang="ts">
const title = 'Roadmap'
const description = ''

useSeoMeta({
  titleTemplate: '%s - ',
  title,
  ogTitle: '',
  description,
})

defineOgImageComponent('Docs')

const appConfig = useAppConfig()
const colorMode = useColorMode()

const token = ''

const src = computed(() => `https://volta.net/embed/${token}?theme=${colorMode.value}&gray=${appConfig.ui.colors.neutral}&primary=${appConfig.ui.colors.primary}`)
</script>

<template>
  <div class="h-[calc(100vh-var(--ui-header-height))]">
    <ClientOnly>
      <iframe :src="src" width="100%" height="100%" />
    </ClientOnly>
  </div>
</template>
