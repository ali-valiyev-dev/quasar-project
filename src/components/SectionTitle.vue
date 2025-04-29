<template>
  <div>
    <h3 class="title text-h4 q-mt-none text-center q-mx-auto q-ml-md-none q-mr-md-auto">
      {{ title }}
    </h3>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.title {
  width: max-content;
  border-bottom: 2px solid #009aa2;
}
</style>
