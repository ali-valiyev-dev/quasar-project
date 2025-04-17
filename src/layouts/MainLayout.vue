<template>
  <q-layout view="hHh lpR fFf">
    <HeaderSection :drawer="drawer" @update:drawer="drawer = $event" />

    <q-drawer
      v-if="$q.screen.lt.lg"
      v-model="drawer"
      bordered
      overlay
      :width="$q.screen.lt.sm ? $q.screen.width : 260"
    >
      <div class="lt-md absolute-top row justify-end q-pa-md bg-white z-max">
        <q-btn flat dense icon="close" class="q-pa-none" @click="drawer = false" />
      </div>
      <LeftMenuList :miniState="miniState" />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import HeaderSection from 'components/HeaderSection.vue'

import { ref } from 'vue'
import LeftMenuList from 'components/LeftMenuList.vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const miniState = ref($q.screen.gt.md)
const drawer = ref(true)
</script>
