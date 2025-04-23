<template>
  <header bordered class="sticky-header bg-white">
    <div class="column q-px-md">
      <div class="full-width row no-wrap items-center">
        <q-btn
          dense
          flat
          round
          unelevated
          color="secondary"
          icon="menu"
          aria-label="Menu"
          class="lt-lg q-mr-md"
          @click="toggleDrawer"
        />

        <q-toolbar-title class="col-auto q-my-sm q-my-md-md no-padding" style="height: 40px">
          <router-link to="/" style="text-decoration: none">
            <img
              src="~assets/medicabil_logo.png"
              alt="Medicabil Logo"
              height="100%"
              class="rounded-borders"
            />
          </router-link>
        </q-toolbar-title>
        <q-space />

        <NavLinks class="gt-md" />

        <q-space />
        <q-btn
          dense
          outline
          rounded
          unelevated
          icon="search"
          padding="sm"
          aria-label="Search"
          color="secondary"
          @click="showSearch = true"
        />
      </div>
    </div>

    <q-select
      v-if="showSearch"
      v-model="searchQuery"
      autofocus
      filled
      hide-dropdown-icon
      color="secondary"
      class="absolute full-width bg-white"
    >
      <template #append>
        <q-btn
          dense
          flat
          use-input
          rounded
          unelevated
          icon="close"
          size="md"
          color="secondary"
          aria-label="Search"
          @click="showSearch = false"
        />
      </template>
    </q-select>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import NavLinks from './NavLinks.vue'

const props = defineProps({
  drawer: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['update:drawer'])

const showSearch = ref(false)
const searchQuery = ref('Ara...')

const toggleDrawer = () => {
  emit('update:drawer', !props.drawer)
}
</script>

<style scoped>
.sticky-header {
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid #e0e0e0;
}
</style>
