<template>
  <q-page padding class="page q-py-xl">
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
  display: flex;
  flex-direction: column;
  gap: 100px;
}
</style>
