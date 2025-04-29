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
          :href="menuItem.href"
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
      { to: '/hizmet-alanlari/tum-hizmet-alanlari', label: 'Tüm Hizmet Alanları' },
      { to: '/hizmet-alanlari/acil-servis', label: 'Acil Servis' },
      { to: '/hizmet-alanlari/agiz-ve-dis-sagligi', label: 'Ağız ve Diş Sağlığı' },
      {
        to: '/hizmet-alanlari/anesteziyoloji-ve-reanimasyon',
        label: 'Anesteziyoloji ve Reanimasyon',
      },
      { to: '/hizmet-alanlari/beslenme-ve-diyetetik', label: 'Beslenme ve Diyetetik' },
      { to: '/hizmet-alanlari/beyin-ve-sinir-cerrahisi', label: 'Beyin ve Sinir Cerrahisi' },
      { to: '/hizmet-alanlari/cocuk-cerrahisi', label: 'Çocuk Cerrahisi' },
      {
        to: '/hizmet-alanlari/cocuk-sagligi-ve-hastaliklari',
        label: 'Çocuk Sağlığı ve Hastalıkları',
      },
      { to: '/hizmet-alanlari/dahiliye', label: 'Dahiliye' },
      { to: '/hizmet-alanlari/dermatoloji', label: 'Dermatoloji (Cildiye)' },
      { to: '/hizmet-alanlari/enfeksiyon-hastaliklari', label: 'Enfeksiyon Hastalıkları' },
      { to: '/hizmet-alanlari/fizik-tedavi', label: 'Fizik Tedavi' },
      { to: '/hizmet-alanlari/genel-cerrahi', label: 'Genel Cerrahi' },
      { to: '/hizmet-alanlari/gogus-hastaliklari', label: 'Göğüs Hastalıkları' },
      { to: '/hizmet-alanlari/goz-hastaliklari', label: 'Göz Hastalıkları' },
      { to: '/hizmet-alanlari/kalp-ve-damar-cerrahisi', label: 'Kalp ve Damar Cerrahisi' },
      { to: '/hizmet-alanlari/kadin-hastaliklari-ve-dogum', label: 'Kadın Hastalıkları ve Doğum' },
      { to: '/hizmet-alanlari/kardiyoloji', label: 'Kardiyoloji' },
      { to: '/hizmet-alanlari/klinik-psikoloji', label: 'Klinik Psikoloji' },
      { to: '/hizmet-alanlari/kulak-burun-bogaz', label: 'Kulak Burun Boğaz Hastalıkları' },
      { to: '/hizmet-alanlari/noroloji', label: 'Nöroloji (Beyin ve Sinir Hastalıkları)' },
      { to: '/hizmet-alanlari/ortopedi-ve-travmatoloji', label: 'Ortopedi ve Travmatoloji' },
      { to: '/hizmet-alanlari/psikiyatri', label: 'Psikiyatri' },
      { to: '/hizmet-alanlari/radyoloji', label: 'Radyoloji' },
      { to: '/hizmet-alanlari/sac-ekimi-merkezi', label: 'Saç Ekimi Merkezi' },
      { to: '/hizmet-alanlari/uroloji', label: 'Üroloji' },
    ],
  },
  {
    icon: 'fa-solid fa-hospital',
    label: 'Ünitelerimiz',
    children: [
      { label: 'Tüm Üniteler', to: '/uniteler/tum-uniteler' },
      { label: 'Acil Servis', to: '/uniteler/acil-servis' },
      { label: 'Ambulans Hizmetleri', to: '/uniteler/ambulans-hizmetleri' },
      { label: 'Ameliyathaneler', to: '/uniteler/ameliyathaneler' },
      { label: 'Check Up', to: '/uniteler/check-up' },
      { label: 'Doğum Ünitesi', to: '/uniteler/dogum-unitesi' },
      { label: 'Eforlu EKG', to: '/uniteler/eforlu-ekg' },
      { label: 'El Cerrahisi Merkezi', to: '/uniteler/el-cerrahisi-merkezi' },
      { label: 'Endoskopi Ünitesi', to: '/uniteler/endoskopi-unitesi' },
      { label: 'Fonksiyonel Tıp', to: '/uniteler/fonksiyonel-tip' },
      {
        label: 'Fizik Tedavi ve Rehabilitasyon Ünitesi',
        to: '/uniteler/fizik-tedavi-ve-rehabilitasyon-unitesi',
      },
      { label: 'Klinik Biyokimya Laboratuvarı', to: '/uniteler/klinik-biyokimya-laboratuvari' },
      { label: 'Merkez Laboratuvarı', to: '/uniteler/merkez-laboratuvari' },
      { label: 'Medikal Estetik', to: '/uniteler/medikal-estetik' },
      { label: 'Obezite Cerrahisi Birimi', to: '/uniteler/obezite-cerrahisi-birimi' },
      { label: 'Poliklinikler', to: '/uniteler/poliklinikler' },
      { label: 'Odyoloji Ünitesi', to: '/uniteler/odyoloji-unitesi' },
      { label: 'Uyku Laboratuvarı', to: '/uniteler/uyku-laboratuvari' },
      { label: 'Yoğun Bakım Ünitesi', to: '/uniteler/yogun-bakim-unitesi' },
    ],
  },
  {
    href: 'https://online.medicabil.com',
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
      {
        to: '/rehber/tahlil-sonucumu-nasil-ogrenebilirim',
        label: 'Tahlil Sonucumu Nasıl Öğrenebilirim?',
      },
    ],
  },
  {
    href: 'https://yalinsaglikenstitusu.com',
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
