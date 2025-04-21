<template>
  <div>
    <div>
      <h2 class="title text-h4 q-mt-none q-mb-xl text-center q-mx-auto q-ml-md-none q-mr-md-auto">
        Blog
      </h2>
    </div>

    <div class="cards row justify-center">
      <div class="col-md" v-for="(blog, index) in blogs" :key="index">
        <BlogPost :title="blog.title" :body="blog.body" :image="blog.image" :link="blog.link" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { blogs } from '../data'
import BlogPost from './BlogPost.vue'
</script>

<style scoped>
.title {
  width: max-content;
  border-bottom: 2px solid #000;
  border-color: #009aa2;
}

.cards {
  gap: 16px;
}
</style>
