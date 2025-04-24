<template>
  <div class="cards row justify-center">
    <div class="col-md" v-for="(blog, index) in blogs" :key="index">
      <BlogPost :title="blog.title" :body="blog.body" :img="blog.img" :link="blog.link" />
    </div>
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
  gap: 16px;
}
</style>
