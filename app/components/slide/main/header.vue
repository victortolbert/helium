<script setup lang="ts">
const components = ref([
  {
    label: 'Button',
  },
  {
    label: 'Callout',
  },
  {
    label: 'Carousel',
  },
  {
    label: 'Container',
  },
  {
    label: 'Image',
  },
  {
    label: 'Media Object',
  },
  {
    label: 'Modal',
  },
  {
    label: 'Safety Bar',
  },
  {
    label: 'Tabs Header',
  },
  {
    label: 'Typography',
  },
])

const value = ref({
  label: 'Button',
})
</script>

<template>
  <header class="flex items-center justify-between">
    <div class="flex-1">
      <USelectMenu
        v-model="value"
        variant="none"
        :items="components"
        class="w-full font-bold"
        size="xl"
      />

      <!-- <UInputMenu v-model="value" :items="components" size="xl" class="w-full" /> -->

      <!-- <UDropdownMenu
        :items="components"
        :content="{
          align: 'start',
          side: 'bottom',
          sideOffset: 8,
        }"
        :ui="{
          content: 'w-48',
        }"
      >
        <UButton label="Components" icon="i-lucide-menu" color="neutral" variant="outline" class="w-full" size="xl" />
      </UDropdownMenu> -->

      <!-- <UButtonGroup class="w-full">
        <UButton color="neutral" variant="subtle" label="Settings" class="w-full" size="xl" />

        <UDropdownMenu
          :items="components"
          :content="{
            align: 'start',
          }"
          :ui="{
            content: 'w-full',
          }"
        >
          <UButton
            color="neutral"
            variant="outline"
            icon="i-lucide-chevron-down"
          />
        </UDropdownMenu>
      </UButtonGroup> -->
    </div>

    <!-- class="text-abbvie-light rounded bg-(--brand-color) p-2" -->

    <div class="flex items-center gap-2 text-neutral-500">
      <USlideover>
        <UButton color="neutral" variant="ghost">
          <UIcon class="size-5" name="i-ph-question-duotone" />
        </UButton>

        <template #content>
          <Placeholder class="m-4 h-full" />
        </template>
      </USlideover>

      <UButton variant="subtle" class="hidden">
        <UIcon class="size-5" name="i-ph-arrow-circle-up-right-duotone" />
      </UButton>

      <UButton variant="subtle" class="hidden">
        <UIcon class="size-5" name="i-ph-x-circle-duotone" />
      </UButton>

      <UButton color="neutral" variant="subtle" class="hidden">
        <UIcon class="size-5" name="i-ph-check-circle-duotone" />
      </UButton>
    </div>
  </header>
</template>
