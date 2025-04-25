<template>
  <div class="bg-primary relative-position">
    <q-img :ratio="10 / 2" :src="img" error-src="src/assets/bg_breadcrumbs.jpg" loading="eager" />

    <div class="gt-xs absolute-center full-width">
      <h2 class="text-weight-medium text-white text-no-wrap q-my-md q-my-md-lg text-center">
        {{ breadcrumbs[breadcrumbs.length - 1].label }}
      </h2>

      <q-breadcrumbs
        active-color="white"
        separator-color="white"
        align="center"
        class="text-h6 text-weight-regular text-white"
      >
        <q-breadcrumbs-el label="Ana Sayfa" icon="home" to="/" />

        <q-breadcrumbs-el
          v-for="(breadcrumb, index) in breadcrumbs"
          :key="index"
          :label="breadcrumb.label"
          :to="breadcrumb.to"
        />
      </q-breadcrumbs>
    </div>
  </div>
</template>

<script setup>
defineProps({
  img: String,
  breadcrumbs: Array,
})
</script>

<style scoped>
.q-img {
  opacity: 0.4;
}
</style>
