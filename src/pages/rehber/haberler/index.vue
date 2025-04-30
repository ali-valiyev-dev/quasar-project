<template>
  <q-page>
    <PageHeader img="~assets/bg_breadcrumbs.jpg" :breadcrumbs="[{ label: 'Haberler' }]" />

    <PageContentWrapper>
      <CardsWrapper :items="paginatedNews" path="haberler" />

      <div class="row justify-center q-mt-xl">
        <q-pagination
          v-model="current"
          :max="totalPages"
          :max-pages="6"
          boundary-numbers
          direction-links
          outline
          color="grey-6"
          active-design="unelevated"
          active-color="secondary"
          active-text-color="white"
          @update:model-value="handlePageChange"
        />
      </div>
    </PageContentWrapper>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import { PageContentWrapper, PageHeader, CardsWrapper } from 'src/components/index'
import { news } from './data'

const newsPerPage = 9

const current = ref(1)

const totalPages = computed(() => Math.ceil(news.length / newsPerPage))

const paginatedNews = computed(() => {
  const start = (current.value - 1) * newsPerPage
  const end = start + newsPerPage
  return news.slice(start, end)
})

const handlePageChange = (page) => {
  current.value = page
}
</script>
