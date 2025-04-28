<template>
  <div class="cards">
    <Card v-for="item in items" :key="item.id" :item="item" :path="path" />
  </div>
</template>

<script setup>
import Card from './Card.vue'

defineProps({
  items: Array,
  path: String,
})
</script>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 16px;
}
</style>
