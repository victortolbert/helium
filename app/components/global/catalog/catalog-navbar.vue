<script setup lang="ts">
// import { storeToRefs } from 'pinia'

// const uiStore = useUiStore()
// const { navigation } = storeToRefs(uiStore)
const items = ref([
  // {
  //   label: 'Components',
  //   type: 'label',
  // },
  {
    label: 'Tokens',
    icon: 'i-ph-tag-duotone',
    description: 'A set of design tokens for UI consistency.',
    children: [
      {
        label: 'Color',
        icon: 'i-ph-palette-duotone',
        to: '/color',
        description: 'A color token selector for consistent UI colors.',
      },
      {
        label: 'Spacing',
        icon: 'i-ph-ruler-duotone',
        to: '/spacing',
        description: 'Guidelines for spacing and layout.',
      },
      {
        label: 'Typography',
        icon: 'i-ph-text-t-duotone',
        to: '/typography',
        description: 'Typography tokens for fonts and sizes.',
      },
      {
        label: 'Icons',
        icon: 'i-ph-smiley-duotone',
        to: '/icons',
        description: 'A collection of scalable icons for your interface.',
      },
    ],
  },
  {
    label: 'Elements',
    icon: 'i-ph-stack-duotone',
    description: 'Basic UI elements for building interfaces.',
    defaultOpen: true,
    children: [
      {
        label: 'Button',
        icon: 'i-ph-hand-pointing-duotone',
        to: '/button',
        description: 'A clickable button element.',
      },
      {
        label: 'Callout',
        icon: 'i-ph-megaphone-simple-duotone',
        to: '/callout',
        description: 'A callout box for highlighting information.',
      },
      {
        label: 'Card',
        icon: 'i-ph-credit-card-duotone',
        to: '/card',
        description: 'A card layout component for displaying content.',
      },
      {
        label: 'Carousel',
        icon: 'i-ph-circles-four-duotone',
        to: '/carousel',
      },
      {
        label: 'Container',
        icon: 'i-ph-square-duotone',
        to: '/container',
        description: 'A container element for grouping sections.',
      },
      {
        label: 'Columns',
        icon: 'i-ph-columns-duotone',
        to: '/columns',
        description: '',
      },
      {
        label: 'Formulary',
        icon: 'i-ph-list-duotone',
        to: '/formulary',
        description: 'A form component to gather user inputs.',
      },
      {
        label: 'Image',
        icon: 'i-ph-image-duotone',
        to: '/image',
        description: '',
      },
      {
        label: 'Media Object',
        icon: 'i-ph-film-reel-duotone',
        to: '/media-object',
        description: 'A media object for displaying images or videos.',
      },
      {
        label: 'Modal',
        icon: 'i-ph-app-window-duotone',
        to: '/modal',
        description: 'A modal dialog for temporary interactions.',
      },
      {
        label: 'Navigation',
        icon: 'i-ph-compass-duotone',
        to: '/navigation',
        description: 'A navigation component for site menus.',
      },
      {
        label: 'Safety Bar',
        icon: 'i-ph-shield-duotone',
        to: '/safety-bar',
        description: 'A safety bar for alerts or warnings.',
      },
      {
        label: 'Tabs Header',
        icon: 'i-ph-tabs-duotone',
        to: '/tabs-header',
        description: 'A tabbed interface component.',
      },
      {
        label: 'Table',
        icon: 'i-ph-table-duotone',
        to: '/table',
        description: 'A table component for displaying data.',
      },
      {
        label: 'Text',
        icon: 'i-ph-text-duotone',
        to: '/text',
        description: 'A text component for rich content.',
      },
    ],
  },
  {
    label: 'Patterns',
    icon: 'i-ph-grid-four-duotone',
    description: 'Predefined layout patterns to speed up design.',
    children: [
      {
        label: 'Placeholder',
        icon: 'i-ph-file-duotone',
        to: '/examples/image/placeholder',
        description: 'A placeholder component for temporary content.',
      },
    ],
  },
  {
    label: 'Templates',
    icon: 'i-ph-layout-duotone',
    description: 'A collection of ready-to-use page templates.',
    children: [
      {
        label: 'Calendar',
        icon: 'i-ph-calendar-duotone',
        to: '/calendar',
        description: 'A calendar component for managing and displaying dates.',
      },
    ],
  },
  {
    label: 'Experiments',
    icon: 'i-ph-flask-duotone',
    description: '',
    children: [
      {
        label: 'Compare',
        icon: 'i-ph-arrows-left-right-duotone',
        to: '/image-compare',
        description: 'A component to compare visual elements side-by-side.',
      },
    ],
  },
])
</script>

<template>
  <u-navigation-menu
    highlight
    color="neutral"
    orientation="vertical"
    :items="items"
    class="data-[orientation=horizontal]:border-b border-[var(--ui-border)] data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-48"
  />
</template>
