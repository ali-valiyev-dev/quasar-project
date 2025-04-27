<template>
  <q-page>
    <PageHeader img="src/assets/bg_breadcrumbs.jpg" :breadcrumbs="[{ label: 'Blog' }]" />

    <PageContentWrapper>
      <BlogPosts :blogs="paginatedBlogs" />

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
import { PageContentWrapper, PageHeader, BlogPosts } from 'src/components/index'
import { blogs } from './data'

const blogsPerPage = 9

const current = ref(1)

const totalPages = computed(() => Math.ceil(blogs.length / blogsPerPage))

const paginatedBlogs = computed(() => {
  const start = (current.value - 1) * blogsPerPage
  const end = start + blogsPerPage
  return blogs.slice(start, end)
})

const handlePageChange = (page) => {
  current.value = page
}
</script>
