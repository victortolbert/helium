<template>
  <UContainer>
    <div
      class="not-prose relative overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800/25"
    >
      <div
        style="background-position: 10px 10px"
        class="bg-grid-slate-100 dark:bg-grid-slate-700/25 absolute inset-0 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
      />
      <div class="relative overflow-auto rounded-xl p-8">
        <div class="flex flex-col gap-8">
          <div>
            <span
              class="mb-3 font-mono text-sm font-medium text-slate-500 dark:text-slate-400"
            >font-stretch-extra-condensed</span>
            <p
              class="font-[system-ui] text-xl font-medium text-slate-900 [font-stretch:extra-condensed] dark:text-slate-200"
            >
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
          <div>
            <span
              class="mb-3 font-mono text-sm font-medium text-slate-500 dark:text-slate-400"
            >font-stretch-condensed</span>
            <p
              class="font-[system-ui] text-xl font-medium text-slate-900 [font-stretch:condensed] dark:text-slate-200"
            >
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
          <div>
            <span
              class="mb-3 font-mono text-sm font-medium text-slate-500 dark:text-slate-400"
            >font-stretch-normal</span>
            <p
              class="font-[system-ui] text-xl font-medium text-slate-900 [font-stretch:normal] dark:text-slate-200"
            >
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
          <div>
            <span
              class="mb-3 font-mono text-sm font-medium text-slate-500 dark:text-slate-400"
            >font-stretch-expanded</span>
            <p
              class="font-[system-ui] text-xl font-medium text-slate-900 [font-stretch:expanded] dark:text-slate-200"
            >
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
          <div>
            <span
              class="mb-3 font-mono text-sm font-medium text-slate-500 dark:text-slate-400"
            >font-stretch-extra-expanded</span>
            <p
              class="font-[system-ui] text-xl font-medium text-slate-900 [font-stretch:extra-expanded] dark:text-slate-200"
            >
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
        </div>
      </div>
      <div
        class="pointer-events-none absolute inset-0 rounded-xl border border-black/5 dark:border-white/5"
      />
    </div>
  </UContainer>
</template>
