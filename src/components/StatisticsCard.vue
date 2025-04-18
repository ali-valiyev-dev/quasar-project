<template>
  <q-card flat bordered class="q-pa-lg q-mx-auto stats-banner b">
    <q-card-section class="column row-sm b" style="row-gap: 30px">
      <q-item v-for="(stat, index) in stats" :key="index" class="column col text-center b">
        <q-icon :name="stat.icon" size="xl" class="text-primary q-mx-auto" />
        <q-item-section>
          <q-item-label class="text-h4 text-bold q-pt-sm">{{ stat.value }}</q-item-label>
          <q-item-label class="text-secondary">{{ stat.label }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-card-section>
  </q-card>
</template>

<script setup>
const stats = [
  {
    icon: 'hotel',
    value: '154',
    label: 'Yatak Sayısı',
  },
  {
    icon: 'groups',
    value: '27,500+',
    label: 'Kapalı Alan',
  },
  {
    icon: 'volunteer_activism',
    value: '170',
    label: 'Uzman Sağlık Personeli',
  },
  {
    icon: 'verified',
    value: '15',
    label: 'Yıllık Tecrübe',
  },
]
</script>

<style scoped>
.stats-banner {
  width: 100%;
  max-width: 1000px;
  background-image: url('../assets/bg_stats.png');
  background-size: cover;
  background-position: center;
}
</style>
