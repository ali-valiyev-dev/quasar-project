<template>
  <q-card flat bordered class="card">
    <q-card-section class="no-padding">
      <q-img fit="cover" src="../assets/blog_cover_1.jpg" alt="Blog post" />
    </q-card-section>

    <q-card-section class="col text-left q-pa-md">
      <h3 class="text-h6 text-primary truncate title">
        {{ title }}
      </h3>
      <p class="text-subtitle1 text-weight-light text-grey-10 q-mx-auto truncate body">
        {{ body }}
      </p>
    </q-card-section>

    <q-separator />

    <q-card-actions align="right" class="q-pa-none">
      <q-btn
        :to="link"
        no-caps
        flat
        label="Devamını Okuyun"
        padding="md sm md xl"
        icon-right="keyboard_arrow_right"
        color="secondary "
        class="full-width"
      />
    </q-card-actions>
  </q-card>
</template>

<script setup>
defineProps({
  title: String,
  body: String,
  image: String,
  link: String,
})
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 400px;
  overflow: hidden;
}

.truncate {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.title {
  -webkit-line-clamp: 2;
}

.body {
  -webkit-line-clamp: 3;
}
</style>
