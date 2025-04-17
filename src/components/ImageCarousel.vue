<template>
  <q-carousel
    animated
    v-model="slide"
    navigation
    padding
    infinite
    arrows
    transition-prev="slide-right"
    transition-next="slide-left"
    @mouseenter="autoplay = false"
    @mouseleave="autoplay = true"
    control-color="secondary"
    class="carousel rounded-borders"
  >
    <q-carousel-slide :name="1" img-src="../assets/slider_image_1.jpg" />
    <q-carousel-slide :name="2" img-src="../assets/slider_image_2.jpg" />
    <q-carousel-slide :name="3" img-src="../assets/slider_image_3.jpg" />
    <q-carousel-slide :name="4" img-src="../assets/slider_image_4.jpg" />
  </q-carousel>
</template>

<script setup>
import { ref } from 'vue'

const slide = ref(1)
</script>

<style scoped>
.carousel {
  height: 100%;
  max-height: 700px;
  aspect-ratio: 16 / 7;
  margin-inline: auto;
}
</style>
