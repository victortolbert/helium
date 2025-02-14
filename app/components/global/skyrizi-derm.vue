<script setup lang="ts"></script>

<template>
  <UContainer
    :ui="{ base: 'max-w-[var(--ui-container)] mx-auto px-4 sm:px-6 lg:px-8 ' }"
  >
    <UCard
      :ui="{
        root: 'w-256 h-192 flex flex-col shadow-lg relative divide-transparent',
        body: 'p-0 py-0 sm:p-0 flex-1 bg-skyrizi-blue',
      }"
      class="mt-2"
    >
      <template #header>
        <SkyriziDermHeader />
      </template>

      <template #default>
        <SkyriziDermMain />
      </template>

      <template #footer>
        <SkyriziDermFooter />
      </template>
    </UCard>
  </UContainer>
</template>
