<template>
  <div class="bg-primary relative-position">
    <q-img :ratio="5 / 1" :src="img" placeholder-src="~assets/bg_breadcrumbs.jpg" />

    <div class="absolute-center">
      <h2 class="text-weight-medium text-white">{{ title }}</h2>

      <q-breadcrumbs
        active-color="primary"
        align="center"
        class="text-h6 text-weight-regular text-white"
      >
        <q-breadcrumbs-el label="Ana Sayfa" icon="home" to="/" />

        <q-breadcrumbs-el
          v-for="(breadcrumb, index) in breadcrumbs"
          :key="index"
          :label="breadcrumb.label"
          :to="breadcrumb.to"
          class="text-white"
        />
      </q-breadcrumbs>
    </div>
  </div>
</template>

<script setup>
defineProps({
  img: String,
  title: String,
  breadcrumbs: Array,
})
</script>

<style scoped>
.q-img {
  opacity: 0.7;
}
</style>
