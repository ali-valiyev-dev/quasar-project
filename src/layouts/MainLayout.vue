<template>
  <q-layout view="hHh lpR fFf">
    <ToolbarSection />
    <HeaderSection :drawer="drawer" @update:drawer="drawer = $event" />

    <q-drawer v-if="$q.screen.lt.lg" v-model="drawer" bordered overlay :width="270">
      <q-btn
        dense
        round
        unelevated
        color="secondary"
        icon="chevron_left"
        @click="drawer = false"
        class="absolute z-top"
        style="top: 70px; right: -17px"
      />

      <div class="fixed-top q-pa-md">
        <q-img src="~assets/medicabil_logo.png" alt="Blog post" />
      </div>

      <LeftMenuList />

      <div class="social-icons fixed-bottom row justify-center q-pa-md">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <q-icon name="fab fa-facebook" size="sm" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <q-icon name="fab fa-twitter" size="sm" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <q-icon name="fab fa-instagram" size="sm" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <q-icon name="fab fa-youtube" size="sm" />
        </a>
      </div>
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

const drawer = ref(false)
</script>

<style scoped>
.social-icons {
  gap: 16px;
}

.social-icons a {
  color: #424242;
}
</style>
