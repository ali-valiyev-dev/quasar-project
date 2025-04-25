<template>
  <q-card flat bordered>
    <q-img fit="cover" :src="blog.img" alt="Blog post" />
    <q-card-section class="col text-left q-pa-md">
      <h3 class="text-h6 text-primary truncate title">
        {{ blog.title }}
      </h3>
      <p
        v-if="blog.body"
        class="text-subtitle1 text-weight-light text-grey-10 q-mx-auto truncate body"
      >
        {{ blog.body }}
      </p>
      <span class="text-body2 text-primary">{{ blog.date }}</span>
    </q-card-section>
    <q-separator />
    <q-card-actions class="q-pa-none">
      <q-btn
        :to="blog.link"
        no-caps
        flat
        label="Devamını Okuyun"
        padding="md sm md xl"
        icon-right="keyboard_arrow_right"
        color="secondary "
        class="full-width text-body1"
      />
    </q-card-actions>
  </q-card>
</template>

<script setup>
defineProps({
  blog: Object,
})
</script>

<style scoped>
.q-card {
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
