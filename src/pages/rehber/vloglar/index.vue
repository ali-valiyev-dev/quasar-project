<template>
  <q-page>
    <PageHeader img="src/assets/bg_breadcrumbs.jpg" :breadcrumbs="[{ label: 'Vlogs' }]" />

    <PageContentWrapper>
      <CardsWrapper :items="paginatedVlogs" path="vloglar" />

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
import { vlogs } from './data'

const vlogsPerPage = 9

const current = ref(1)

const totalPages = computed(() => Math.ceil(vlogs.length / vlogsPerPage))

const paginatedVlogs = computed(() => {
  const start = (current.value - 1) * vlogsPerPage
  const end = start + vlogsPerPage
  return vlogs.slice(start, end)
})

const handlePageChange = (page) => {
  current.value = page
}
</script>
