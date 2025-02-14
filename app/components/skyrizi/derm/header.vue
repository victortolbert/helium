<script setup lang="ts">
const { commandPalette, help, shortcuts, slideover } = useUiStore()

const items = ref([
  {
    label: 'Profile',
    icon: 'i-lucide-user',
  },
  {
    label: 'Billing',
    icon: 'i-lucide-credit-card',
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
defineShortcuts({
  'g-d': () => navigateToDashboard(),
  '?': () => openHelpModal(),
  'meta_k': () => openCommandPalette(),
  '/': () => toggleShortcutsModal(),
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
  <!--
    class="absolute top-0 left-0 z-2 flex w-full items-center bg-skyrizi-dark-blue p-3 text-xs font-semibold text-white"
   -->
  <header class="flex items-center justify-between gap-4">
    <div class="flex items-center gap-4">
      <USlideover
        v-model="slideover.open"
        side="left"
        :ui="{ footer: 'justify-end' }"
      >
        <UButton color="neutral" variant="ghost">
          <UIcon name="i-ph-dots-three-duotone" class="size-7" />
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

      <UButton
        color="neutral"
        variant="ghost"
        to="/"
        class="hidden"
      >
        <UIcon name="i-ph-arrow-fat-left-duotone" class="size-7" />
      </UButton>

      <USeparator orientation="vertical" class="hidden h-6" color="neutral" />

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
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

    <div class="flex-1">
      <div class="text-xs font-bold">
        <UModal>
          <template #title>
            <h1 class="text-lg text-primary">
              INDICATIONS AND IMPORTANT SAFETY INFORMATION FOR SKYRIZI®
              (risankizumab-rzaa)<sup>1</sup>
            </h1>
          </template>

          <ULink as="button" class="underline">
            Tap here
          </ULink>

          <template #body>
            <SkyriziImportantSafetyInformation />
          </template>
        </UModal>
        for SKYRIZI Indications and additional Important Safety Information.
        <ULink as="button" class="underline">
          See accompanying Full Prescribing Information
        </ULink>
      </div>

      <div class="flex hidden items-center gap-3">
        <div>
          <UButton icon="i-lucide-ellipsis" variant="ghost" size="xl" />
          <UButton icon="i-lucide-arrow-big-left" variant="ghost" size="xl" />
          <UButton icon="i-lucide-house" variant="ghost" size="xl" />
        </div>
        <div class="flex flex-col">
          <p>
            <ULink raw as="button" class="cursor-pointer underline">
              Tap Here
            </ULink>
            for SKYRIZI Indications and additional Important Safety Information.
          </p>
          <p>
            <ULink raw as="button" class="cursor-pointer underline">
              Tap Here
            </ULink>
            for HUMIRA Indications and Important Safety Information, including
            BOXED WARNING on Serious Infections and Malignancy.
          </p>
        </div>
      </div>
    </div>

    <ColorModeButton />

    <div>
      <UDropdownMenu
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
        <!-- <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" /> -->
        <UButton color="neutral" variant="ghost">
          <UIcon name="i-ph-list-duotone" class="size-7" />
        </UButton>
      </UDropdownMenu>
    </div>
  </header>
</template>
