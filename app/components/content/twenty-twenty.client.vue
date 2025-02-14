<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  before: {
    type: String,
    required: true,
  },
  beforeLabel: {
    type: String,
  },
  after: {
    type: String,
    required: true,
  },
  afterLabel: {
    type: String,
  },
  offset: {
    type: [String, Number],
    default: 0.5,
    validator: (value: number) => (value > 0 && value <= 1),
  },
  keyboardStep: {
    type: [String, Number],
    default: 0.2,
    validator: (value: number) => (value > 0 && value <= 1),
  },
})

const imgOffset = ref(null)
const slideOffset = ref(props.offset)
const sliding = ref(false)
const containerStyle = ref({})
const overlayStyle = ref({})

const handleStyle = computed(() => {
  const size = 40
  return {
    width: `${size}px`,
    height: `${size}px`,
    top: `calc(50% - ${size / 2}px)`,
    left: `calc(${Number(slideOffset.value) * 100}% - ${Number(size) / 2}px)`,
  }
})

const w = computed(() => {
  return imgOffset.value ? imgOffset.value.width : null
})

const h = computed(() => {
  return imgOffset.value ? imgOffset.value.height : null
})

const x = computed(() => {
  return w.value * Number(slideOffset.value)
})

const beforeImgStyle = computed(() => {
  return { clip: `rect(0, ${x.value}px, ${h.value}px, 0)` }
})

const floatOffset = computed(() => {
  return Number.parseFloat(slideOffset.value.toString())
})

const floatKeyboardStep = computed(() => {
  return typeof props.keyboardStep === 'string' ? Number.parseFloat(props.keyboardStep) : props.keyboardStep
})

function setDimensions() {
  const img = document.querySelector('img')
  imgOffset.value = img.getBoundingClientRect()
  containerStyle.value = { width: `${w.value}px`, height: `${h.value}px` }
}

function startSlide(event) {
  sliding.value = true
  moveSlide(event)
  overlayStyle.value = { opacity: 0 }
}

function handleArrowNavigation(event) {
  return moveSlide(event)
}

function moveSlide(event) {
  if (sliding.value) {
    let x = (event.touches ? event.touches[0].pageX : event.pageX) - imgOffset.value.left
    x = (x < 0) ? 0 : ((x > w.value) ? w.value : x)
    slideOffset.value = (x / w.value)
  }
  if (event.key) {
    switch (event.key) {
      case 'Left': // IE/Edge key
      case 'ArrowLeft': slideOffset.value = ((floatOffset.value - floatKeyboardStep.value) >= 0) ? floatOffset.value - floatKeyboardStep.value : 0; break
      case 'Right': // IE/Edge key
      case 'ArrowRight': slideOffset.value = ((floatOffset.value + floatKeyboardStep.value) <= 1) ? floatOffset.value + floatKeyboardStep.value : 1; break
      default:
    }
  }
}

function endSlide() {
  sliding.value = false
  overlayStyle.value = {}
}

function resize() {
  containerStyle.value = {}
  nextTick(() => setDimensions())
}

onMounted(() => {
  document.addEventListener('touchmove', moveSlide)
  document.addEventListener('touchend', endSlide)
  document.addEventListener('mousemove', moveSlide)
  document.addEventListener('mouseup', endSlide)
  window.addEventListener('resize', resize)
})

onBeforeUnmount(() => {
  document.removeEventListener('touchmove', moveSlide)
  document.removeEventListener('touchend', endSlide)
  document.removeEventListener('mousemove', moveSlide)
  document.removeEventListener('mouseup', endSlide)
  window.removeEventListener('resize', resize)
})
</script>

<template>
  <div
    class="twentytwenty-container"
    :style="containerStyle"
    @touchstart="startSlide"
    @mousedown="startSlide"
  >
    <img
      :src="after"
      alt="after"
      @mousedown.prevent
      @load="setDimensions"
    >

    <img
      :src="before"
      alt="before"
      :style="beforeImgStyle"
      @mousedown.prevent
    >

    <div
      class="twentytwenty-overlay"
      :style="overlayStyle"
    >
      <div v-if="beforeLabel" class="twentytwenty-before-label">
        {{ beforeLabel }}
      </div>
      <div v-if="afterLabel" class="twentytwenty-after-label">
        {{ afterLabel }}
      </div>
    </div>

    <div
      class="twentytwenty-handle"
      :style="handleStyle"
      tabindex="0"
      @keydown="handleArrowNavigation"
    >
      <div class="twentytwenty-arrow-left" />
      <div class="twentytwenty-arrow-right" />
    </div>
  </div>
</template>

<style>
.twentytwenty-container {
  z-index: 9999;
  position: relative;
  overflow: hidden;
  box-sizing: content-box;
}
.twentytwenty-container img {
  max-width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  user-select: none;
  z-index: 20;
}
.twentytwenty-container .twentytwenty-overlay {
  z-index: 25;
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition-property: opacity;
  transition-duration: 0.5s;
}
.twentytwenty-container .twentytwenty-overlay .twentytwenty-before-label,
.twentytwenty-container .twentytwenty-overlay .twentytwenty-after-label {
  user-select: none;
  position: absolute;
  font-size: 0.8em;
  top: calc(50% - 0.4em - 5px);
  padding: 10px;
  background: rgba(255, 255, 255, 0.4);
  color: white;
}
.twentytwenty-container .twentytwenty-overlay .twentytwenty-before-label {
  left: 0;
}
.twentytwenty-container .twentytwenty-overlay .twentytwenty-after-label {
  right: 0;
}
.twentytwenty-container:hover > .twentytwenty-overlay {
  opacity: 1;
}
.twentytwenty-container .twentytwenty-handle {
  cursor: move;
  z-index: 30;
  position: absolute;
  background: none;
  border: 4px solid white;
  border-radius: 50px;
  margin-left: -4px;
  margin-top: -4px;
  user-select: none;
}
.twentytwenty-container .twentytwenty-handle:active,
.twentytwenty-container .twentytwenty-handle:focus {
  outline: 0;
}
.twentytwenty-container .twentytwenty-handle:before, .twentytwenty-container .twentytwenty-handle:after {
  content: "";
  border: 2px solid white;
  height: 9999px;
  position: absolute;
  left: calc(50% - 2px);
}
.twentytwenty-container .twentytwenty-handle:before {
  top: 40px;
}
.twentytwenty-container .twentytwenty-handle:after {
  bottom: 40px;
}
.twentytwenty-container .twentytwenty-arrow-right,
.twentytwenty-container .twentytwenty-arrow-left {
  user-select: none;
  position: relative;
  width: 0;
  height: 0;
}
.twentytwenty-container .twentytwenty-arrow-right {
  bottom: 10px;
  left: 23px;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid white;
}
.twentytwenty-container .twentytwenty-arrow-left {
  top: 10px;
  left: 7px;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid white;
}
</style>
