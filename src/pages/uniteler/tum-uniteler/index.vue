<template>
  <q-page>
    <PageHeader
      img="~assets/services.jpg"
      :breadcrumbs="[{ label: 'Üniteler' }, { label: 'Tüm Üniteler' }]"
    />
    <div class="q-mx-auto q-py-lg q-py-sm-xl q-px-sm q-px-sm-lg q-px-md-xl">
      <q-list v-if="services.length" class="q-mt-lg">
        <q-item
          :to="service.to"
          v-for="service in services"
          :key="service.id"
          clickable
          class="q-pa-lg"
        >
          <q-item-section avatar>
            <q-icon name="task_alt" size="md" color="secondary" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ service.name }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <div v-else class="text-subtitle1 text-center text-grey-8 q-mt-xl">
        Bu hastane için hizmet bulunmamaktadır.
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { PageHeader } from 'src/components/index'
import { services } from './data'
</script>

<style scoped>
.q-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 8px;
}

.q-item {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  color: #424242;
}
</style>
