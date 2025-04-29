<template>
  <div class="relative-position q-pb-md-xl q-mb-md-xl">
    <q-carousel
      animated
      v-model="slide"
      padding
      infinite
      :autoplay="autoplay"
      swipeable
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      control-color="secondary"
      class="carousel q-mx-auto"
    >
      <q-carousel-slide
        :name="1"
        img-src="~assets/carousel/carousel_img_1.jpg"
        @click="navigateTo('/check-up-kardiyoloji')"
      />
      <q-carousel-slide
        :name="2"
        img-src="~assets/carousel/carousel_img_2.jpg"
        @click="navigateTo('/medicabil-aksam-poliklinik')"
      />
      <q-carousel-slide
        :name="3"
        img-src="~assets/carousel/carousel_img_3.jpg"
        @click="navigateTo('/kaizen-award-turkiye-de-1-ve-dunyada-7-olduk')"
      />
      <q-carousel-slide
        :name="4"
        img-src="~assets/carousel/carousel_img_4.jpg"
        @click="navigateTo('/ortopedide-robotik-cerrahi-tr')"
      />
      <q-carousel-slide
        :name="5"
        img-src="~assets/carousel/carousel_img_5.jpg"
        @click="navigateTo('https://www.medicabilevde.com')"
      />
      <q-carousel-slide
        :name="6"
        img-src="~assets/carousel/carousel_img_6.jpg"
        @click="navigateTo('https://online.fliphtml5.com/nqhcl/nztx/#p=1')"
      />
    </q-carousel>

    <StatisticsCard class="gt-sm stats" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import StatisticsCard from './StatisticsCard.vue'

const slide = ref(1)
const autoplay = ref(true)
const router = useRouter()

const navigateTo = (path) => {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    window.open(path, '_blank')
  } else {
    router.push(path)
  }
}
</script>

<style scoped>
.carousel {
  aspect-ratio: 16/7;
  height: 100%;
  width: 100%;
}

.stats {
  position: absolute;
  bottom: -50px;
  left: 0;
  right: 0;
}
</style>
