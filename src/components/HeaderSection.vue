<template>
  <q-header bordered class="bg-white text-primary">
    <!-- Top toolbar with nav buttons -->
    <q-toolbar class="column">
      <div class="full-width row items-center q-py-md" style="gap: 16px">
        <q-btn
          to="/"
          no-caps
          no-wrap
          dense
          padding="sm xl"
          outline
          label="İletişim"
          class="col col-sm-auto bg-primary text-white rounded-borders"
        />
        <q-btn
          to="/"
          no-caps
          no-wrap
          dense
          padding="sm xl"
          outline
          label="E-Sonuç"
          class="col col-sm-auto bg-primary text-white rounded-borders"
        />
        <q-btn
          to="/"
          no-caps
          no-wrap
          dense
          padding="sm xl"
          outline
          label="E-Randevu"
          class="col col-sm-auto bg-primary text-white rounded-borders"
        />
        <q-space class="gt-xs" />
        <q-btn-dropdown outline dense no-wrap auto-close label="en" class="gt-xs q-pl-sm" />
      </div>

      <q-separator />

      <!-- Sticky navbar nav links -->
      <div class="full-width row items-center">
        <q-btn dense flat round icon="menu" aria-label="Menu" class="lt-lg" @click="toggleDrawer" />

        <q-toolbar-title class="col-auto q-my-md" style="height: 50px">
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
        <NavLinks />
        <q-space />
        <q-btn
          dense
          flat
          rounded
          icon="search"
          size="lg"
          aria-label="Search"
          class="bg-grey-3 text-grey-8"
          @click="showSearch = true"
        />
      </div>
    </q-toolbar>

    <q-select v-if="showSearch" v-model="searchQuery" filled hide-dropdown-icon>
      <template #append>
        <q-btn
          dense
          flat
          use-input
          auto-focus
          icon="close"
          size="xs"
          class="grey text-grey-8"
          aria-label="Search"
          @click="showSearch = false"
        />
      </template>
    </q-select>
  </q-header>
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
