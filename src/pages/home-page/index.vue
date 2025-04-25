<template>
  <q-page>
    <PageContentWrapper class="wrapper">
      <ImageCarousel />
      <IntroCard />
      <MedicalServices />
      <OverviewCard />
      <BlogPosts :blogs="blogs" />
    </PageContentWrapper>
  </q-page>
</template>

<script setup>
import { BlogPosts, PageContentWrapper } from 'src/components'
import { ImageCarousel, IntroCard, MedicalServices, OverviewCard } from './components'
import { blogs } from './data'
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 100px;
}
</style>
