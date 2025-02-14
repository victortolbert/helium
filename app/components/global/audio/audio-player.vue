<script setup>
import { onMounted, useTemplateRef } from 'vue'

definePageMeta({
  title: 'My home page',
})

const audio = useTemplateRef('audio')
const playPauseButton = useTemplateRef('playPauseButton')

function togglePlayPause() {
  if (audio.value.paused) {
    audio.value.play()
    playPauseButton.value.textContent = 'Playing...'
  }
  else {
    audio.value.pause()
    playPauseButton.value.textContent = 'Play'
  }
}

// Event listener to reset button text when audio ends
// audio.value.addEventListener('ended', () => {
//   playPauseButton.value.textContent = 'Play'
// })

onMounted(() => {
  if (audio.value) {
    audio.value.addEventListener('ended', () => {
      console.log('Audio playback ended')
      // Do something when the audio ends
      playPauseButton.value.textContent = 'Play'
    })
  }
})
</script>

<template>
  <div>
    <!-- Audio element (hidden) -->
    <audio
      ref="audio"
      src="../resources/sound/skyrizi.mp3"
      style="display: none"
    />

    <!-- Play/Pause Button -->
    <button
      ref="playPauseButton"
      style="padding: 10px 20px; font-size: 16px; cursor: pointer"
      @click="togglePlayPause()"
    >
      Play
    </button>

    <div class="flex gap-1">
      <UButton variant="outline" icon="i-ph-skip-back-duotone" />
      <UButton variant="outline" icon="i-ph-play-duotone" />
      <UButton variant="outline" icon="i-ph-pause-duotone" />
      <UButton variant="outline" icon="i-ph-skip-forward-duotone" />
    </div>
  </div>
</template>
