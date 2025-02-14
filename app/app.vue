<script setup>
const title = 'Catalog'
const description = ''

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogSiteName: '',
  ogImage: '',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <UApp :toaster="{ position: 'top-center', duration: 300 }" data-component="App" class="w-full before:content-[attr(data-component)]">
    <div
      class="bg-black min-h-[100dvh] overflow-x-auto relative"
      :class="{
        'flex flex-col md:block': $router.currentRoute.value.fullPath !== '/examples/image/gallery',
      }"
    >
      <NuxtRouteAnnouncer />

      <NuxtLoadingIndicator />

      <div>
        <NuxtPage />
      </div>
    </div>
  </UApp>
</template>

<style>
html {
  scrollbar-gutter: stable;
  scrollbar-gutter: stable both-edges;
}

html {
  overflow-y: scroll;
  scrollbar-gutter: stable;
}

#__nuxt {
  height: 100vh;
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}

.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
.animate-text-slide {
  animation: text-slide 15s cubic-bezier(0.83, 0, 0.17, 1) infinite;
}

@keyframes text-slide {
  0%,
  100% {
    transform: translateY(0%);
  }

  16% {
    transform: translateY(-16.66%);
  }

  32% {
    transform: translateY(-33.33%);
  }

  48% {
    transform: translateY(-50%);
  }

  64% {
    transform: translateY(-66.66%);
  }

  80% {
    transform: translateY(-83.33%);
  }
}

.is-invalid {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}

.swing {
  transition: all 0.75s ease;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
