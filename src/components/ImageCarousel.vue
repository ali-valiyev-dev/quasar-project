<template>
  <q-carousel
    animated
    v-model="slide"
    navigation
    padding
    infinite
    autoplay
    arrows
    transition-prev="slide-right"
    transition-next="slide-left"
    @mouseenter="autoplay = false"
    @mouseleave="autoplay = true"
    control-color="primary"
    control-type="push"
    class="rounded-borders"
    style="height: 700px"
  >
    <q-carousel-slide
      :name="1"
      style="height: fit-content"
      img-src="../assets/slider_image_1.jpg"
    />
    <q-carousel-slide
      :name="2"
      style="height: fit-content"
      img-src="../assets/slider_image_2.jpg"
    />
    <q-carousel-slide
      :name="3"
      style="height: fit-content"
      img-src="../assets/slider_image_3.jpg"
    />
    <q-carousel-slide
      :name="4"
      style="height: fit-content"
      img-src="../assets/slider_image_4.jpg"
    />
  </q-carousel>
</template>

<script setup>
import { ref } from 'vue'

const slide = ref(1)
</script>
