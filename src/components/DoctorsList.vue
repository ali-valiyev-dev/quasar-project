<template>
  <div class="cards q-mb-xl">
    <q-card v-for="(doctor, index) in doctors" :key="index" flat bordered>
      <q-img :src="doctor.img" alt="Doctor Image" />

      <q-card-section>
        <h4 class="text-center no-margin">{{ doctor.name }}</h4>
        <p class="text-center">{{ doctor.specialty }}</p>
      </q-card-section>

      <q-separator />

      <q-card-actions class="q-pa-none">
        <q-btn
          to="/"
          no-caps
          unelevated
          square
          label="Randevu Al"
          padding="md sm md xl"
          icon-right="keyboard_arrow_right"
          class="full-width text-body1 text-secondary"
        />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
defineProps({
  doctors: Array,
})
</script>

<style>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 16px;
}
</style>
