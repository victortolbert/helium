<script setup lang="ts">
const files = [
  // {
  //   title: 'Color Psychology',
  //   size: '3.9 MB',
  //   source: '/resources/images/certificates/color-psychology.png',
  // },
  // {
  //   title: 'Common Design Patterns',
  //   size: '3.9 MB',
  //   source: '/resources/images/certificates/ai-in-ui-ux-design.png',
  // },
  // {
  //   title: 'AI in UX Design',
  //   size: '3.9 MB',
  //   source: '/resources/images/certificates/ai-in-ui-ux-design.png',
  // },
  // {
  //   title: 'CSS for Designers',
  //   size: '3.9 MB',
  //   source: '/resources/images/certificates/css-for-designers.png',
  // },
  // {
  //   title: 'Design Accessibility',
  //   size: '3.9 MB',
  //   source: '/resources/images/certificates/design-accessibility.png',
  // },
  // {
  //   title: 'Design Composition',
  //   size: '3.9 MB',
  //   source: '/resources/images/certificates/design-composition.png',
  // },
  // {
  //   title: 'Design Terminology',
  //   size: '3.9 MB',
  //   source: '/resources/images/certificates/design-terminology.png',
  // },
  // {
  //   title: 'HTML for Designers',
  //   size: '3.9 MB',
  //   source: '/resources/images/certificates/html-for-designers.png',
  // },
  // {
  //   title: 'Introduction to Figma',
  //   size: '3.9 MB',
  //   source: '/resources/images/certificates/introduction-to-figma.png',
  // },
  // {
  //   title: 'Mobile Design',
  //   size: '3.9 MB',
  //   source: '/resources/images/certificates/mobile-design.png',
  // },
  // {
  //   title: 'Typography',
  //   size: '3.9 MB',
  //   source: '/resources/images/certificates/typography.png',
  // },
  // {
  //   title: 'UI Components I',
  //   size: '3.9 MB',
  //   source: '/resources/images/certificates/ui-components-1.png',
  // },
  // {
  //   title: 'UI Components II',
  //   size: '3.9 MB',
  //   source: '/resources/images/certificates/ui-components-2.png',
  // },
  // {
  //   title: 'UX Design Foundations',
  //   size: '3.9 MB',
  //   source: '/resources/images/certificates/ux-design-foundations.png',
  // },
  {
    title: 'UX Design Leadership',
    size: '3.9 MB',
    source: '/resources/images/certificates/ux-design-leadership.png',
    urls: {
      course: 'https://app.uxcel.com/courses/ux-design-leadership',
      certificate: 'https://app.uxcel.com/certificates/XNECG7302F6O',
    },
  },
  // {
  //   title: 'UX Design Patterns with Checklist Design',
  //   size: '3.9 MB',
  //   source: '/resources/images/certificates/ux-design-patterns-with-checklist-design.png',
  // },
  // {
  //   title: 'UX Writing',
  //   size: '3.9 MB',
  //   source: '/resources/images/certificates/ux-writing.png',
  // },
  // {
  //   title: 'Wireframing',
  //   size: '3.9 MB',
  //   source: '/resources/images/certificates/wireframing.png',
  // },
]
</script>

<template>
  <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 w-full">
    <li v-for="file in files" :key="file.source" class="relative">
      <ULink :to="file.urls.course" class="group overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
        <img :src="file.source" alt="" class="pointer-events-none aspect-10/7 object-cover group-hover:opacity-75">
        <button type="button" class="absolute inset-0 focus:outline-hidden">
          <span class="sr-only">View details for {{ file.title }}</span>
        </button>
      </ULink>
      <!-- text-gray-900 -->
      <p class="pointer-events-none mt-2 block truncate text-sm font-medium ">
        {{ file.title }}
      </p>
      <!-- text-gray-500 -->
      <p class="pointer-events-none block text-sm font-medium">
        {{ file.size }}
      </p>
    </li>
  </ul>
</template>
