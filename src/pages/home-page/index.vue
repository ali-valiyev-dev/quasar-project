<template>
  <q-page padding class="page q-py-xl q-mx-auto">
    <ImageCarousel />
    <IntroCard />
    <MedicalServices />
    <OverviewCard />
    <BlogPosts />
  </q-page>
</template>

<script setup>
import {
  ImageCarousel,
  IntroCard,
  MedicalServices,
  OverviewCard,
  BlogPosts,
} from './components/index.js'
</script>

<style scoped>
.page {
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 100px;
}
</style>
