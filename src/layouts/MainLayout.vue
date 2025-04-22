<template>
  <q-layout view="hHh lpR fFf">
    <ToolbarSection />
    <HeaderSection :drawer="drawer" @update:drawer="drawer = $event" />

    <q-drawer v-if="$q.screen.lt.lg" v-model="drawer" bordered overlay :width="270">
      <div class="absolute z-top" style="top: 65px; right: -17px">
        <q-btn
          dense
          round
          unelevated
          color="secondary"
          icon="chevron_left"
          @click="drawer = false"
        />
      </div>

      <LeftMenuList />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-page-scroller class="gt-md" position="bottom-right" :scroll-offset="300" :offset="[30, 80]">
      <q-btn
        unelevated
        rounded
        padding="md"
        icon="keyboard_double_arrow_up"
        aria-label="Scroll to top"
        class="bg-secondary text-white"
      />
    </q-page-scroller>

    <FooterSection />
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import LeftMenuList from 'components/LeftMenuList.vue'
import HeaderSection from 'components/HeaderSection.vue'
import FooterSection from 'components/FooterSection.vue'
import ToolbarSection from 'components/ToolbarSection.vue'

const $q = useQuasar()

const drawer = ref(true)
</script>
