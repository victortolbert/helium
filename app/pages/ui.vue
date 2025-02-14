<script setup lang="ts">
</script>

<template>
  <div>
    <!--
    /* --ui-container: var(--container-5xl); */
    /* --ui-radius: var(--radius-sm); */

    /* --ui-text-dimmed: var(--ui-color-neutral-400); */
    /* --ui-text-muted: var(--ui-color-neutral-500); */
    /* --ui-text-toned: var(--ui-color-neutral-600); */
    /* --ui-text: var(--ui-color-neutral-700); */
    /* --ui-text-highlighted: var(--ui-color-neutral-900); */

    /* --ui-bg: var(--color-white); */
    /* --ui-bg-muted: var(--ui-color-neutral-50); */
    /* --ui-bg-elevated: var(--ui-color-neutral-100); */
    /* --ui-bg-accented: var(--ui-color-neutral-200); */
    /* --ui-bg-inverted: var(--ui-color-neutral-900); */

    /* --ui-border: var(--ui-color-neutral-200); */
    /* --ui-border-muted: var(--ui-color-neutral-200); */
    /* --ui-border-accented: var(--ui-color-neutral-300); */
    /* --ui-border-inverted: var(--ui-color-neutral-900); */
  -->

    <div class="w-256 h-192 bg-grid-overlay bg-[20px_center]">
      <Placeholder class="h-16" />
      <div class="grid grid-cols-3 gap-4 border border-red-500 m-5">
        <div class="bg-[var(--ui-bg)] h-8 aspect-video" /> default
        <div class="bg-[var(--ui-bg-muted)] h-8 aspect-video" /> muted
        <div class="bg-[var(--ui-bg-elevated)] h-8 aspect-video" /> elevated
        <div class="bg-[var(--ui-bg-accented)] h-8 aspect-video" /> accented
        <div class="bg-[var(--ui-bg-inverted)] h-8 aspect-video" /> inverted

        <div class="border border-[var(--ui-border)] h-8 aspect-video">
          default
        </div>
        <div class="border border-[var(--ui-border-muted)] h-8 aspect-video">
          muted
        </div>
        <div class="border border-[var(--ui-border-accented)] h-8 aspect-video">
          accented
        </div>
        <div class="border border-[var(--ui-border-inverted)] h-8 aspect-video">
          inverted
        </div>
        <div class="text-[var(--ui-text-dimmed)] h-8 aspect-video">
          dimmed
        </div>
        <div class="text-[var(--ui-text-muted)] h-8 aspect-video">
          muted
        </div>
        <div class="text-[var(--ui-text-toned)] h-8 aspect-video">
          toned
        </div>
        <div class="text-[var(--ui-text-highlighted)] h-8 aspect-video">
          highlighted
        </div>
        <div class="text-[var(--ui-border-inverted)] h-8 aspect-video">
          dimmed
        </div>
      </div>
    </div>
    <ColorModeButton />

    <svg
      width="80"
      height="4"
      viewBox="0 0 80 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="80"
        height="1"
        fill="#0000FF"
        fill-opacity="0.1"
      />
      <rect
        y="1"
        width="20"
        height="3"
        fill="white"
        fill-opacity="0.1"
      />
      <rect
        x="20"
        y="1"
        width="60"
        height="3"
        fill="#FF0000"
        fill-opacity="0.1"
      />
    </svg>

    <div class="bg-[var(--ui-bg)] h-8 aspect-video" /> default
    <div class="bg-[var(--ui-bg-muted)] h-8 aspect-video" /> muted
    <div class="bg-[var(--ui-bg-elevated)] h-8 aspect-video" /> elevated
    <div class="bg-[var(--ui-bg-accented)] h-8 aspect-video" /> accented
    <div class="bg-[var(--ui-bg-inverted)] h-8 aspect-video" /> inverted

    <div class="border border-[var(--ui-border)] h-8 aspect-video">
      default
    </div>
    <div class="border border-[var(--ui-border-muted)] h-8 aspect-video">
      muted
    </div>
    <div class="border border-[var(--ui-border-accented)] h-8 aspect-video">
      accented
    </div>
    <div class="border border-[var(--ui-border-inverted)] h-8 aspect-video">
      inverted
    </div>
    <div class="text-[var(--ui-text-dimmed)] h-8 aspect-video">
      dimmed
    </div>
    <div class="text-[var(--ui-text-muted)] h-8 aspect-video">
      muted
    </div>
    <div class="text-[var(--ui-text-toned)] h-8 aspect-video">
      toned
    </div>
    <div class="text-[var(--ui-text-highlighted)] h-8 aspect-video">
      highlighted
    </div>
    <div class="text-[var(--ui-border-inverted)] h-8 aspect-video">
      dimmed
    </div>
  </div>
</template>
