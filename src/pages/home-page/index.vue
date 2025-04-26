<template>
  <q-page>
    <ImageCarousel />
    <PageContentWrapper class="wrapper">
      <StatisticsCard class="lt-md" />
      <IntroCard />
      <MedicalServices />
      <OverviewCard />
      <BlogPosts :blogs="blogs" />
    </PageContentWrapper>
  </q-page>
</template>

<script setup>
import { blogs } from './data'
import { BlogPosts, PageContentWrapper } from 'src/components'
import {
  StatisticsCard,
  ImageCarousel,
  IntroCard,
  MedicalServices,
  OverviewCard,
} from './components'
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 100px;
}
</style>
