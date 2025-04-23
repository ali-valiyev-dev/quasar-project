<template>
  <q-scroll-area
    class="fit q-pb-md"
    style="padding: 120px 0 60px 0"
    :horizontal-thumb-style="{ opacity: 0 }"
  >
    <q-list>
      <div
        v-for="menuItem in menuItems"
        :key="menuItem.label"
        clickable
        @click="activeTab = menuItem.label"
      >
        <MenuItem
          v-if="!menuItem.children"
          :to="menuItem.to"
          :icon="menuItem.icon"
          :label="menuItem.label"
          :action="menuItem.action"
          :isActive="isActiveMenuItem(menuItem)"
          @item-clicked="handleMenuItemClick(menuItem)"
        />

        <DropdownMenuItem
          v-else
          :label="menuItem.label"
          :icon="menuItem.icon"
          :activeTab="activeTab"
        >
          <MenuItem
            v-for="childItem in menuItem.children"
            :key="childItem.label"
            :to="childItem.to"
            :label="childItem.label"
            :action="childItem.action"
            :isActive="isActiveMenuItem(childItem)"
            @item-clicked="handleMenuItemClick(childItem)"
          />
        </DropdownMenuItem>
      </div>
    </q-list>
  </q-scroll-area>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import MenuItem from './MenuItem.vue'
import DropdownMenuItem from './DropdownMenuItem.vue'

const route = useRoute()
const activeMenuItem = ref(null)
const activeTab = ref(null)

const menuItems = ref([
  {
    to: '/',
    icon: 'fa-solid fa-house',
    label: 'Ana sayfa',
  },
  {
    icon: 'fa-solid fa-building-columns',
    label: 'Kurumsal',
    children: [
      { to: '/kurumsal/medicabil-hakkinda', label: 'Medicabil Hakkında' },
      { to: '/kurumsal/degerlerimiz', label: 'Değerlerimiz' },
      { to: '/kurumsal/yonetim-kadromuz', label: 'Yönetim Kadromuz' },
      { to: '/kurumsal/misyon-vizyon-kalite', label: 'Misyon & Vizyon & Kalite' },
      { to: '/kurumsal/sosyal-sorumluluk', label: 'Sosyal Sorumluluk' },
      { to: '/kurumsal/kalite-verilerimiz', label: 'Kalite Verilerimiz' },
      { to: '/kurumsal/kvkk', label: 'KVKK' },
      { to: '/kurumsal/taahhutname', label: 'Taahhütname' },
      { to: '/kurumsal/anlasmali-kurumlarimiz', label: 'Anlaşmalı Kurumlarımız' },
      { to: '/kurumsal/ozel-saglik-sigortalari', label: 'Özel Sağlık Sigortaları' },
      { to: '/kurumsal/insan-kaynaklari', label: 'İnsan Kaynakları' },
      { to: '/kurumsal/tez-basvurusu', label: 'Tez Başvurusu' },
      { to: '/kurumsal/hasta-haklari', label: 'Hasta Hakları' },
      { to: '/kurumsal/ziyaret-saatleri', label: 'Ziyaret Saatleri' },
    ],
  },
  {
    icon: 'fa-solid fa-heart-pulse',
    label: 'Hizmetler',
    children: [
      { to: '/hizmetler/tum-hizmet-alanlari', label: 'Tüm Hizmet Alanları' },
      { to: '/hizmetler/acil-servis', label: 'Acil Servis' },
      { to: '/hizmetler/agiz-ve-dis-sagligi', label: 'Ağız ve Diş Sağlığı' },
      { to: '/hizmetler/anesteziyoloji-ve-reanimasyon', label: 'Anesteziyoloji ve Reanimasyon' },
      { to: '/hizmetler/beslenme-ve-diyetetik', label: 'Beslenme ve Diyetetik' },
      { to: '/hizmetler/beyin-ve-sinir-cerrahisi', label: 'Beyin ve Sinir Cerrahisi' },
      { to: '/hizmetler/cocuk-cerrahisi', label: 'Çocuk Cerrahisi' },
      { to: '/hizmetler/cocuk-sagligi-ve-hastaliklari', label: 'Çocuk Sağlığı ve Hastalıkları' },
      { to: '/hizmetler/dahiliye', label: 'Dahiliye' },
      { to: '/hizmetler/dermatoloji', label: 'Dermatoloji (Cildiye)' },
      { to: '/hizmetler/enfeksiyon-hastaliklari', label: 'Enfeksiyon Hastalıkları' },
      { to: '/hizmetler/fizik-tedavi', label: 'Fizik Tedavi' },
      { to: '/hizmetler/genel-cerrahi', label: 'Genel Cerrahi' },
      { to: '/hizmetler/gogus-hastaliklari', label: 'Göğüs Hastalıkları' },
      { to: '/hizmetler/goz-hastaliklari', label: 'Göz Hastalıkları' },
      { to: '/hizmetler/kalp-ve-damar-cerrahisi', label: 'Kalp ve Damar Cerrahisi' },
      { to: '/hizmetler/kadin-hastaliklari-ve-dogum', label: 'Kadın Hastalıkları ve Doğum' },
      { to: '/hizmetler/kardiyoloji', label: 'Kardiyoloji' },
      { to: '/hizmetler/klinik-psikoloji', label: 'Klinik Psikoloji' },
      { to: '/hizmetler/kulak-burun-bogaz', label: 'Kulak Burun Boğaz Hastalıkları' },
      { to: '/hizmetler/noroloji', label: 'Nöroloji (Beyin ve Sinir Hastalıkları)' },
      { to: '/hizmetler/ortopedi-ve-travmatoloji', label: 'Ortopedi ve Travmatoloji' },
      { to: '/hizmetler/psikiyatri', label: 'Psikiyatri' },
      { to: '/hizmetler/radyoloji', label: 'Radyoloji' },
      { to: '/hizmetler/sac-ekimi-merkezi', label: 'Saç Ekimi Merkezi' },
      { to: '/hizmetler/uroloji', label: 'Üroloji' },
    ],
  },
  {
    to: '/ünitelerimiz',
    icon: 'fa-solid fa-hospital',
    label: 'Ünitelerimiz',
  },
  {
    to: '/hekimler',
    icon: 'fa-solid fa-user-doctor',
    label: 'Hekimler',
  },
  {
    to: '/blog-yazilari',
    icon: 'fa-solid fa-pen-nib',
    label: 'Blog Yazıları',
  },
  {
    icon: 'fa-solid fa-book-open',
    label: 'Rehber',
    children: [
      { to: '/rehber/haberler', label: 'Haberler' },
      { to: '/rehber/vlog', label: 'Vlog' },
      { to: '/rehber/labaratuvar-test-rehberi', label: 'Labaratuvar Test Rehberi' },
      { to: '/rehber/tahlil-sonucu', label: 'Tahlil Sonucumu Nasıl Öğrenebilirim?' },
    ],
  },
  {
    to: '/yalin-saglik',
    icon: 'fa-solid fa-leaf',
    label: 'Yalın Sağlık',
  },
  {
    to: '/dergi',
    icon: 'fa-solid fa-book-journal-whills',
    label: 'Dergi',
  },
])

function handleMenuItemClick(menuItem) {
  activeMenuItem.value = menuItem
  if (menuItem.action) {
    menuItem.action()
  }
}

function isActiveMenuItem(menuItem) {
  return activeMenuItem.value === menuItem
}

function setActiveMenuItemFromRoute() {
  const findActiveMenuItem = (items) => {
    for (const item of items) {
      if (item.to === route.path) {
        activeMenuItem.value = item
        return
      }
      if (item.children) {
        findActiveMenuItem(item.children)
      }
    }
  }
  findActiveMenuItem(menuItems.value)
}

watch(() => route.path, setActiveMenuItemFromRoute)

setActiveMenuItemFromRoute()
</script>
