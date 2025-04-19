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
import ImageCarousel from 'src/components/ImageCarousel.vue'
import IntroCard from 'src/components/IntroCard.vue'
import MedicalServices from 'src/components/MedicalServices.vue'
import OverviewCard from 'src/components/OverviewCard.vue'
import BlogPosts from 'src/components/BlogPosts.vue'
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 100px;
}
</style>
