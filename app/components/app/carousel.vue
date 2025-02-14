<script>
// import Swiper core and required modules
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
// import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    const onReachEnd = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
      onReachEnd,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    }
  },
}
</script>

<template>
  <Swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="false"
    @swiper="onSwiper"
    @slide-change="onSlideChange"
    @reach-end="onReachEnd"
  >
    <SwiperSlide v-for="n in 6" :key="n">
      <div class="h-96 rounded border p-4 shadow">
        Slide {{ n }}
      </div>
    </SwiperSlide>
  </Swiper>
</template>
