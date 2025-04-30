<template>
  <q-page>
    <PageHeader
      img="~assets/services.jpg"
      :breadcrumbs="[{ label: 'Hizmet Alanları' }, { label: 'Tüm Hizmet Alanları' }]"
    />
    <div class="q-mx-auto q-py-lg q-py-sm-xl q-px-sm q-px-sm-lg q-px-md-xl">
      <q-select
        v-model="selectedBranch"
        :options="branches"
        label="Hastane Seçiniz"
        option-value="id"
        option-label="name"
        outlined
        color="secondary"
      >
        <template v-slot:prepend>
          <q-icon name="apartment" color="secondary" />
        </template>
      </q-select>

      <q-list v-if="filteredServices.length" class="q-mt-lg">
        <q-item
          :to="service.to"
          v-for="service in filteredServices"
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
import { ref, computed } from 'vue'
import { PageHeader } from 'src/components/index'
import { branches, services } from './data'

const selectedBranch = ref(branches[0])

const filteredServices = computed(() => {
  const branch = branches.find((b) => b.name === selectedBranch.value?.name)
  return branch ? services[branch.name] || [] : []
})
</script>

<style scoped>
.q-select {
  width: 250px;
  justify-self: center;
}

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
