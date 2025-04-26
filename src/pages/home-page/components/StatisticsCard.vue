<template>
  <q-card flat bordered class="q-py-xl q-px-lg q-mx-auto">
    <q-card-section class="column row-sm no-padding" style="row-gap: 30px">
      <q-item v-for="(stat, index) in stats" :key="index" class="column col text-center">
        <q-icon :name="stat.icon" size="xl" class="text-secondary q-mx-auto" />
        <q-item-section>
          <q-item-label class="text-h4 text-grey-10 text-bold q-mt-sm">
            {{ stat.value }}
          </q-item-label>
          <q-item-label class="text-body1 text-grey-7">{{ stat.label }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { stats } from '../data'
</script>

<style scoped>
.q-card {
  width: 100%;
  max-width: 1000px;
  background-image: url('src/assets/bg_stats.png');
  background-size: cover;
  background-position: center;
}

.q-item {
  min-width: 200px;
}
</style>
