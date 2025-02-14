<template>
  <div class="relative">
    <div class="flex justify-between">
      <SlideLogo class="text-neutral-200 hover:text-white" />
      <SkyriziDermSafetyBar class="absolute -top-4 -right-4 z-1" />
    </div>

    <UCard
      class="absolute top-36 h-104"
      :ui="{ root: 'rounded', body: 'p-0 sm:p-0  rounded' }"
    >
      <SkyriziDermAccessTabs />
    </UCard>

    <!-- <SkyriziSearchInput /> -->
    <!-- <SubscribeForm /> -->
  </div>
</template>
