<script setup>
const toast = useToast()
const prompt = ref('')
const steps = ref(4)
const src = ref('')
const loading = ref(false)
const style = ref('none')

async function generateImage() {
  if (loading.value || !prompt.value) return
  loading.value = true

  const { pathname } = await $fetch('/api/generate', {
    method: 'POST',
    body: {
      prompt: prompt.value,
      style: style.value,
      steps: steps.value,
    },
  }).catch((error) => {
    toast.add({
      title: 'Error',
      description: error.message,
      color: 'red',
    })
  })

  src.value = `/images/${pathname}`
  loading.value = false
}
</script>

<template>
  <div class="flex flex-col gap-4 w-full max-w-[420px] p-4 lg:p-0">
    <form class="w-full grid gap-4" @submit.prevent="generateImage()">
      <UFormField label="Image prompt">
        <UTextarea
          v-model="prompt"
          placeholder="A beautiful landscape with a river and mountains"
          class="w-full"
          autoresize
        />
      </UFormField>

      <UFormField label="Image style">
        <USelect
          v-model="style"
          :items="[
            'none',
            'photorealistic',
            'comic-book',
            'neon-punk',
            'isometric',
            'line-art',
            'pixel-art',
            '3d-model',
          ]"
          icon="i-ph-paint-brush-duotone"
          class="w-full"
        />
      </UFormField>

      <UFormField :label="`Number of steps (${steps})`">
        <USlider
          v-model="steps"
          :min="4"
          :max="8"
          size="sm"
        />
      </UFormField>

      <UButton
        type="submit"
        color="neutral"
        variant="outline"
        :loading="loading"
        :disabled="!prompt"
        class="w-full flex items-center justify-center"
      >
        Generate
      </UButton>
    </form>

    <img v-if="src" :src="src" class="w-full max-w-[420px]">
  </div>
</template>
