<script setup lang="ts">
const { commandPalette, help, shortcuts, slideover } = useUiStore()

const items = ref([
  {
    label: 'Profile',
    icon: 'i-lucide-user',
  },
  {
    label: 'Figma',
    icon: 'i-ph-figma-logo-duotone',
  },
  {
    label: 'Settings',
    icon: 'i-lucide-cog',
  },
])

const themeItems = ref([
  {
    label: 'System',
  },
  {
    label: 'Light',
  },
  {
    label: 'Dark',
  },
])

const open = ref(false)

defineShortcuts({
  'g-d': () => navigateToDashboard(),
  '?': () => openHelpModal(),
  'meta_k': () => openCommandPalette(),
  '/': () => toggleShortcutsModal(),
  'o': () => open.value = !open.value,
})

function navigateToDashboard() {
  console.log('Navigating to dashboard')
}
function openHelpModal() {
  help.open = true
}
function toggleShortcutsModal() {
  shortcuts.open = true
}
function openCommandPalette() {
  commandPalette.open = true
}
</script>

<template>
  <div class="flex items-center justify-between gap-4">
    <div class="flex items-center gap-4">
      <USlideover
        v-model="slideover.open"
        title="Left Slideover"
        side="left"
        :ui="{ footer: 'justify-end' }"
      >
        <UButton color="neutral" variant="ghost">
          <UIcon name="i-ph-sidebar-simple-duotone" class="size-7" />
          <!-- <UIcon name="i-ph-sidebar-fill" class="size-7" /> -->
        </UButton>

        <template #body>
          <Placeholder class="h-full" />
        </template>

        <template #footer>
          <UButton
            label="Cancel"
            color="neutral"
            variant="outline"
            @click="slideover.open = false"
          />
          <UButton label="Submit" color="primary" variant="outline" />
        </template>
      </USlideover>

      <USeparator orientation="vertical" class="h-6" color="neutral" />

      <UIcon name="i-logos-adobe-icon" class="size-7 hidden" />

      <svg
        class="size-7"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M2 18a2 2 0 0 0 1.7 3h9.7l-2.7-4.5h-2L12 11l6 10h2.3a2 2 0 0 0 1.7-3L13.8 4a2 2 0 0 0-3.6 0Z"
        />
      </svg>

      <UButton
        color="neutral"
        variant="ghost"
        to="/"
        class="hidden"
      >
        <UIcon name="i-ph-arrow-fat-left-duotone" class="size-7" />
      </UButton>

      <USeparator orientation="vertical" class="hidden h-6" color="neutral" />

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']" class="hidden">
        <UButton color="neutral" variant="ghost" to="/">
          <UContextMenu
            size="xl"
            :items="themeItems"
            :ui="{
              content: 'w-48',
            }"
          >
            <div class="flex items-center justify-center">
              <UIcon name="i-ph-house-simple-duotone" class="size-7" />
            </div>
          </UContextMenu>
        </UButton>
      </UTooltip>

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']" class="hidden">
        <UButton label="Open" color="neutral" variant="subtle" />
      </UTooltip>
    </div>

    <div class="h-10 flex-1" />

    <UButton variant="outline" class="inline-flex items-center gap-1 rounded-full">
      <UIcon name="i-ph-question-duotone" class="-ml-0.5 size-4 fill-gray-600 dark:fill-gray-500" />
      <kbd class="font-sans text-xs/4 text-gray-500 dark:text-gray-400">⌘K</kbd>
    </UButton>

    <ColorModeButton />

    <div>
      <UDropdownMenu
        v-model:open="open"
        :items="items"
        :content="{
          align: 'end',
          side: 'bottom',
          sideOffset: 8,
        }"
        :ui="{
          content: 'w-48',
        }"
      >
        <UButton
          label="Open"
          color="neutral"
          variant="ghost"
        >
          <UIcon
            :name="open ? 'i-ph-x' : 'i-ph-list'"
            class="size-7"
          />
        </UButton>
      </UDropdownMenu>
    </div>
  </div>
</template>
