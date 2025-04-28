<template>
  <q-card flat bordered class="column justify-between">
    <q-img fit="cover" :src="item.img" alt="Blog post" />
    <q-card-section class="col-grow column justify-between">
      <h3 class="ellipsis-2-lines text-h6 text-primary q-mt-none q-mb-sm">
        {{ item.title }}
      </h3>
      <p
        v-if="item.content"
        class="ellipsis-3-lines text-subtitle1 text-weight-light text-grey-10 q-mx-auto"
      >
        {{ item.content }}
      </p>
      <span class="text-body2 text-primary">{{ item.date }}</span>
    </q-card-section>

    <q-separator />
    <q-card-actions class="q-pa-none">
      <q-btn
        :to="`/${path}/${item.id}`"
        no-caps
        flat
        label="Devamını Okuyun"
        padding="md sm md xl"
        icon-right="keyboard_arrow_right"
        color="secondary"
        class="full-width text-body1"
      />
    </q-card-actions>
  </q-card>
</template>

<script setup>
defineProps({
  item: Object,
  path: String,
})
</script>
