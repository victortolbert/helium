<script setup>
const items = ref([
  [
    {
      label: 'Links',
      type: 'label',
    },
    {
      label: 'Examples',
      icon: 'i-lucide-book-open',
      defaultOpen: true,
      children: [
        {
          label: 'Compare',
          icon: 'i-ph-terminal-window-duotone',
          to: '/examples/image/compare',
        },
        {
          label: 'Placeholder',
          icon: 'i-ph-terminal-window-duotone',
          to: '/examples/image/placeholder',
        },
      ],
    },
  ],
])
</script>

<template>
  <UContainer>
    <article class="min-h-screen mx-auto">
      <!-- <Breadcrumbs class="mt-1.5 mb-12" /> -->
      <div class="grid grid-cols-12 gap-8">
        <aside class="col-span-3 border rounded dark:border-gray-800">
          <section class="p-8">
            <UNavigationMenu
              highlight
              color="neutral"
              orientation="vertical"
              :items="items"
              class="data-[orientation=horizontal]:border-b border-[var(--ui-border)] data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-48"
            />
          </section>
        </aside>
        <section class="col-span-9">
          <NuxtPage />
        </section>
      </div>
    </article>
  </UContainer>
</template>
