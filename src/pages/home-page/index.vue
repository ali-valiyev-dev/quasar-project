<template>
  <q-page>
    <ImageCarousel />
    <PageContentWrapper class="wrapper">
      <StatisticsCard class="lt-md" />
      <IntroCard />
      <MedicalServices />
      <OverviewCard />
      <CardsWrapper :items="blogs" path="blog-yazilari" />
    </PageContentWrapper>
  </q-page>
</template>

<script setup>
import { blogs } from './data'
import { CardsWrapper, PageContentWrapper } from 'src/components'
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
