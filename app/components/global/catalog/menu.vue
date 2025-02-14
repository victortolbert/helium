<script setup lang="ts">
const items = ref([
  [
    {
      label: 'Guide',
      icon: 'i-ph-graduation-cap-duotone',
      children: [
        {
          label: 'Introduction',
          description: 'Fully styled and customizable components for Nuxt.',
          icon: 'i-ph-house-duotone',
        },
        {
          label: 'Installation',
          description:
            'Learn how to install and configure Nuxt UI in your application.',
          icon: 'i-ph-cloud-arrow-down-duotone',
        },
        {
          label: 'Icons',
          icon: 'i-ph-smiley-duotone',
          description:
            'You have nothing to do, @nuxt/icon will handle it automatically.',
        },
        {
          label: 'Colors',
          icon: 'i-ph-swatches-duotone',
          description:
            'Choose a primary and a neutral color from your Tailwind CSS theme.',
        },
        {
          label: 'Theme',
          icon: 'i-ph-gear-fine-duotone',
          description:
            'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
        },
      ],
    },
    {
      label: 'Components',
      icon: 'i-ph-cube-duotone',
      to: '/components',
      children: [
        {
          label: 'Button',
          icon: 'i-ph-file-text-duotone',
          description: '',
          to: '/components/button',
        },
        {
          label: 'Callout',
          icon: 'i-ph-file-text-duotone',
          description: '',
          to: '/components/callout',
        },
        {
          label: 'Carousel',
          icon: 'i-ph-file-text-duotone',
          description: '',
          to: '/components/carousel',
        },
        {
          label: 'Container',
          icon: 'i-ph-file-text-duotone',
          description: '',
          to: '/components/container',
        },
        {
          label: 'Experience Fragment',
          icon: 'i-ph-file-text-duotone',
          description: '',
          to: '/components/experience-fragment',
        },
        {
          label: 'Formulary Lookup',
          icon: 'i-ph-file-text-duotone',
          description: '',
          to: '/components/formulary-lookup',
        },
        {
          label: 'Image',
          icon: 'i-ph-file-text-duotone',
          description: '',
          to: '/components/image',
        },
        {
          label: 'Safety Bar',
          icon: 'i-ph-file-text-duotone',
          description: '',
          to: '/components/safety-bar',
        },
        {
          label: 'Text',
          icon: 'i-ph-file-text-duotone',
          description: '',
          to: '/components/text',
        },
        {
          label: 'Tabs Header',
          icon: 'i-ph-file-text-duotone',
          description: '',
          to: '/components/tabs-header',
        },
        {
          label: 'Vertical Navigation',
          icon: 'i-ph-file-text-duotone',
          description: '',
          to: '/components/vertical-navigation',
        },
      ],
    },
    {
      label: 'Templates',
      icon: 'i-ph-database-duotone',
      children: [
        {
          label: 'Slide',
          icon: 'i-ph-file-text-duotone',
          description: 'Define shortcuts for your application.',
          to: '/slide',
        },
      ],
    },
  ],
])
</script>

<template>
  <UNavigationMenu
    orientation="vertical"
    :items
    class="data-[orientation=vertical]:w-48"
  />
</template>
