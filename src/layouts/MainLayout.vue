<template>
  <q-layout view="hHh lpR fFf">
    <ToolbarSection />
    <HeaderSection :drawer="drawer" @update:drawer="drawer = $event" />

    <q-drawer
      v-if="$q.screen.lt.lg"
      v-model="drawer"
      bordered
      overlay
      :width="$q.screen.lt.sm ? $q.screen.width : 260"
    >
      <div class="lt-md absolute-top row q-px-md q-py-sm bg-white z-max">
        <q-btn flat dense icon="close" class="q-pa-none q-ml-auto" @click="drawer = false" />
      </div>

      <LeftMenuList :miniState="miniState" />
    </q-drawer>

    <q-page-container style="max-width: 1200px; margin-inline: auto">
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

const miniState = ref($q.screen.gt.md)
const drawer = ref(true)
</script>
