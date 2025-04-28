<template>
  <div class="cards">
    <q-card v-for="(doctor, index) in doctors" :key="index" flat bordered>
      <q-img fit="cover" :src="doctor.img" alt="Doctor Image">
        <div class="absolute-bottom text-center no-padding" style="z-index: 1">
          <h3 class="text-h6 q-mt-md q-mb-none">{{ doctor.name }}</h3>
          <p class="text-body1 q-mt-none q-mb-sm">
            {{ doctor.specialty }}
          </p>

          <q-separator color="white" />

          <q-btn
            to="/"
            no-caps
            no-wrap
            unelevated
            square
            padding="sm lg"
            label="Randevu Al"
            icon-right="keyboard_arrow_right"
            class="full-width text-body1"
          />
        </div>
      </q-img>
    </q-card>
  </div>
</template>

<script setup>
defineProps({
  doctors: Array,
})
</script>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 16px;
}
</style>
