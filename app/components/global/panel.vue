<template>
  <div class="callout">
    <h2 v-if="$slots.title" class="text-[var(--color-primary)] font-bold">
      <slot name="title" mdc-unwrap="p" />
    </h2>
    <slot />
  </div>
</template>
