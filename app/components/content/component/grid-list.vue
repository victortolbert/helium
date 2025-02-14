<script setup lang="ts">
const components = [
  {
    title: 'Button',
    description: 'A button is a clickable element that allows users to interact with the application. It is used to trigger actions, such as submitting a form or navigating to a new page.',
    source: '/resources/images/certificates/ux-design-leadership.png',
    urls: {
      course: 'https://app.uxcel.com/courses/ux-design-leadership',
      certificate: 'https://app.uxcel.com/certificates/XNECG7302F6O',
    },
  },
  {
    title: 'Tabs Header',
    description: 'A tabs header is a component that allows users to navigate between different sections of a page. It is used to organize content and make it easier to find.',
    source: '/resources/images/certificates/ux-design-leadership.png',
    urls: {
      course: 'https://app.uxcel.com/courses/ux-design-leadership',
      certificate: 'https://app.uxcel.com/certificates/XNECG7302F6O',
    },
  },
]
</script>

<template>
  <!-- sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 -->
  <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8  w-full">
    <li v-for="component in components" :key="component.source" class="relative">
      <ULink :to="component.urls.course" class="group overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
        <img :src="component.source" alt="" class="pointer-events-none aspect-10/7 object-cover group-hover:opacity-75">
        <button type="button" class="absolute inset-0 focus:outline-hidden">
          <span class="sr-only">View details for {{ component.title }}</span>
        </button>
      </ULink>
      <!-- text-gray-900 -->
      <p class="pointer-events-none mt-2 block truncate text-sm font-medium ">
        {{ component.title }}
      </p>
      <!-- text-gray-500 -->
      <p class="pointer-events-none block text-sm font-medium">
        {{ component.description }}
      </p>
    </li>
  </ul>
</template>
