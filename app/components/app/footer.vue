<script setup lang="ts">
import { format } from 'date-fns'

const config = useRuntimeConfig()
const currentYear = format(new Date(), 'yyyy')
</script>

<template>
  <div
    class="mt-2 flex items-center justify-center gap-1 text-xs text-neutral-400"
  >
    <a
      class="font-semibold transition hover:text-white"
      href="https://github.com/zackha/habit"
      target="_blank"
    >Habit v{{ config.public.version }}</a>
    - by
    <a
      class="font-semibold transition hover:text-white"
      href="https://github.com/zackha"
      target="_blank"
    >Sefa Bulak</a>
    {{ currentYear }}
  </div>
</template>

<style>
  .app-footer {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 0.75rem;
    color: var(--color-neutral-400);
  }

  .footer a {
    font-weight: 600;
    transition: color 0.2s;
  }

  .footer a:hover {
    color: var(--color-white);
  }
</style>
