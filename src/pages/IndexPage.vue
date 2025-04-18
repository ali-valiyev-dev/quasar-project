<template>
  <q-page padding class="page">
    <ImageCarousel />
    <IntroCard />
    <MedicalServices />
  </q-page>
</template>

<script setup>
import ImageCarousel from 'src/components/ImageCarousel.vue'
import IntroCard from 'src/components/IntroCard.vue'
import MedicalServices from 'src/components/MedicalServices.vue'
</script>

<style scoped>
.page {
  display: grid;
  gap: 100px;
}
</style>
