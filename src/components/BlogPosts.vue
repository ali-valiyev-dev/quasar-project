<template>
  <div class="cards">
    <BlogPost v-for="blog in blogs" :key="blog.id" :blog="blog" />
  </div>
</template>

<script setup>
import BlogPost from './BlogPost.vue'

defineProps({
  blogs: Array,
})
</script>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 16px;
}
</style>
