<script setup lang="ts"></script>

<template>
  <header
    class="absolute z-2 flex h-13 w-full items-center bg-skyrizi-dark-blue p-3 text-xs font-semibold text-white"
  >
    <div class="flex w-full items-center justify-between">
      <div class="flex items-center gap-3">
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
      <div>
        <UButton icon="i-lucide-menu" variant="ghost" size="xl" />
      </div>
    </div>
  </header>
</template>
