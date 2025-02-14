<template>
  <section class="mt-8">
    <article class="grid grid-cols-2 gap-4">
      <!--
        <h4>Components</h4>
        <ul>
          <li>Button</li>
          <li>Carousel</li>
          <li>Container</li>
          <li>Chart</li>
          <li>Formulary Data</li>
          <li>Icon</li>
          <li>Image</li>
          <li>Input</li>
          <li>Logo</li>
          <li>Modal</li>
          <li>Safety Bar</li>
          <li>Tabs</li>
          <li>Table</li>
        </ul>

        <p class="text-[var(--ui-secondary)]">
          Important Safety Information
        </p>
      -->
      <section class="grid gap-4">
        <div class="text-[var(--ui-text-dimmed)]">
          Least prominent text
        </div>
        <div class="text-[var(--ui-text-muted)]">
          Slightly muted text
        </div>
        <div class="text-[var(--ui-text-toned)]">
          Moderately prominent text
        </div>
        <div class="text-[var(--ui-text)]">
          Default text color
        </div>
        <div class="text-[var(--ui-text-highlighted)]">
          Most prominent text
        </div>
      </section>

      <section class="grid gap-4">
        <div class="rounded bg-[var(--ui-bg)] p-2 shadow">
          Main background color
        </div>
        <div class="rounded bg-[var(--ui-bg-muted)] p-2 shadow">
          Subtle background
        </div>
        <div class="rounded bg-[var(--ui-bg-elevated)] p-2 shadow">
          Slightly elevated background
        </div>
        <div class="rounded bg-[var(--ui-bg-accented)] p-2 shadow">
          More prominent background
        </div>
        <div
          class="rounded bg-[var(--ui-bg-inverted)] p-2 text-neutral-200 shadow"
        >
          Inverted background color
        </div>
      </section>

      <section class="grid gap-4">
        <div class="rounded border border-[var(--ui-border)] p-2 shadow">
          Default border color
        </div>
        <div class="rounded border border-[var(--ui-border-muted)] p-2 shadow">
          Subtle border
        </div>
        <div
          class="rounded border border-[var(--ui-border-accented)] p-2 shadow"
        >
          More prominent border
        </div>
        <div
          class="rounded border border-[var(--ui-border-inverted)] p-2 shadow"
        >
          Inverted border color
        </div>
      </section>
    </article>
  </section>
</template>
