<template>
  <USlideover
    :overlay="false"
    :dismissible="false"
    side="left"
    title="Slideover with side"
  >
    <UButton label="Open" color="neutral" variant="subtle" />

    <template #body>
      <Placeholder class="h-full min-h-48" />
    </template>
  </USlideover>
</template>
