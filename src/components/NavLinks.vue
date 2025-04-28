<template>
  <div class="nav-links">
    <router-link to="/" class="link" :class="{ active: route.path === '/' }">Ana Sayfa</router-link>
    <div
      class="relative-position"
      @mouseover="isKurumsalOpen = true"
      @mouseleave="isKurumsalOpen = false"
    >
      <button class="dropdown-button" :class="{ active: isKurumsalActive }">
        Kurumsal
        <q-icon name="expand_more" />
      </button>
      <ul v-if="isKurumsalOpen" class="dropdown-menu">
        <li v-for="(item, index) in KURUMSAL_LINKS" :key="index">
          <router-link :to="item.to" class="link" :class="{ active: route.path === item.to }">
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </div>

    <div
      class="relative-position"
      @mouseover="isHizmetOpen = true"
      @mouseleave="isHizmetOpen = false"
    >
      <button class="dropdown-button" :class="{ active: isHizmetActive }">
        Hizmet Alanlarımız
        <q-icon name="expand_more" />
      </button>
      <ul v-if="isHizmetOpen" class="dropdown-menu">
        <li v-for="(item, index) in HIZMET_LINKS" :key="index">
          <router-link :to="item.to" class="link" :class="{ active: route.path === item.to }">
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </div>

    <div
      class="relative-position"
      @mouseover="isUnitelerOpen = true"
      @mouseleave="isUnitelerOpen = false"
    >
      <button class="dropdown-button" :class="{ active: isUnitelerActive }">
        Ünitelerimiz
        <q-icon name="expand_more" />
      </button>
      <ul v-if="isUnitelerOpen" class="dropdown-menu">
        <li v-for="(item, index) in UNITELER_LINKS" :key="index">
          <router-link :to="item.to" class="link" :class="{ active: route.path === item.to }">
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </div>

    <router-link to="/Hekimler" class="link" :class="{ active: route.path === '/Hekimler' }">
      Hekimler
    </router-link>

    <router-link
      to="/blog-yazilari"
      class="link"
      :class="{ active: route.path === '/blog-yazilari' }"
    >
      Blog Yazıları
    </router-link>

    <div
      class="relative-position"
      @mouseover="isRehberOpen = true"
      @mouseleave="isRehberOpen = false"
    >
      <button class="dropdown-button" :class="{ active: isRehberActive }">
        Rehber
        <q-icon name="expand_more" />
      </button>
      <ul v-if="isRehberOpen" class="dropdown-menu">
        <li v-for="(item, index) in REHBER_LINKS" :key="index">
          <router-link :to="item.to" class="link" :class="{ active: route.path === item.to }">
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </div>

    <router-link to="/YalınSağlık" class="link" :class="{ active: route.path === '/YalınSağlık' }">
      Yalın Sağlık
    </router-link>
    <router-link to="/Dergi" class="link" :class="{ active: route.path === '/Dergi' }">
      Dergi
    </router-link>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const KURUMSAL_LINKS = [
  { label: 'Medicabil Hakkında', to: '/kurumsal/medicabil-hakkinda' },
  { label: 'Değerlerimiz', to: '/kurumsal/degerlerimiz' },
  { label: 'Yönetim Kadromuz', to: '/kurumsal/yonetim-kadromuz' },
  { label: 'Misyon & Vizyon & Kalite', to: '/kurumsal/misyon-vizyon-kalite' },
  { label: 'Sosyal Sorumluluk', to: '/kurumsal/sosyal-sorumluluk' },
  { label: 'Kalite Verilerimiz', to: '/kurumsal/kalite-verilerimiz' },
  { label: 'KVKK', to: '/kurumsal/kvkk' },
  { label: 'Taahhütname', to: '/kurumsal/taahhutname' },
  { label: 'Anlaşmalı Kurumlarımız', to: '/kurumsal/anlasmali-kurumlarimiz' },
  { label: 'Özel Sağlık Sigortaları', to: '/kurumsal/ozel-saglik-sigortalari' },
  { label: 'İnsan Kaynakları', to: '/kurumsal/insan-kaynaklari' },
  { label: 'Tez Başvurusu', to: '/kurumsal/tez-basvurusu' },
  { label: 'Hasta Hakları', to: '/kurumsal/hasta-haklari' },
  { label: 'Ziyaret Saatleri', to: '/kurumsal/ziyaret-saatleri' },
]

const HIZMET_LINKS = [
  { label: 'Tüm Hizmet Alanları', to: '/hizmet-alanlari/tum-hizmet-alanlari' },
  { label: 'Acil Servis', to: '/hizmet-alanlari/acil-servis' },
  { label: 'Ağız ve Diş Sağlığı', to: '/hizmet-alanlari/agiz-ve-dis-sagligi' },
  {
    label: 'Anesteziyoloji ve Reanimasyon',
    to: '/hizmet-alanlari/anesteziyoloji-ve-reanimasyon',
  },
  { label: 'Beslenme ve Diyetetik', to: '/hizmet-alanlari/beslenme-ve-diyetetik' },
  { label: 'Beyin ve Sinir Cerrahisi', to: '/hizmet-alanlari/beyin-ve-sinir-cerrahisi' },
  { label: 'Çocuk Cerrahisi', to: '/hizmet-alanlari/cocuk-cerrahisi' },
  {
    label: 'Çocuk Sağlığı ve Hastalıkları',
    to: '/hizmet-alanlari/cocuk-sagligi-ve-hastaliklari',
  },
  { label: 'Dahiliye', to: '/hizmet-alanlari/dahiliye' },
  { label: 'Dermatoloji (Cildiye)', to: '/hizmet-alanlari/dermatoloji-cildiye' },
  { label: 'Enfeksiyon Hastalıkları', to: '/hizmet-alanlari/enfeksiyon-hastaliklari' },
  { label: 'Fizik Tedavi', to: '/hizmet-alanlari/fizik-tedavi' },
  { label: 'Genel Cerrahi', to: '/hizmet-alanlari/genel-cerrahi' },
  { label: 'Göğüs Hastalıkları', to: '/hizmet-alanlari/gogus-hastaliklari' },
  { label: 'Göz Hastalıkları', to: '/hizmet-alanlari/goz-hastaliklari' },
  { label: 'Kalp ve Damar Cerrahisi', to: '/hizmet-alanlari/kalp-ve-damar-cerrahisi' },
  { label: 'Kadın Hastalıkları ve Doğum', to: '/hizmet-alanlari/kadin-hastaliklari-ve-dogum' },
  { label: 'Kardiyoloji', to: '/hizmet-alanlari/kardiyoloji' },
  { label: 'Klinik Psikoloji', to: '/hizmet-alanlari/klinik-psikoloji' },
  {
    label: 'Kulak Burun Boğaz Hastalıkları',
    to: '/hizmet-alanlari/kulak-burun-bogaz-hastaliklari',
  },
  {
    label: 'Nöroloji (Beyin ve Sinir Hastalıkları)',
    to: '/hizmet-alanlari/noroloji-beyin-ve-sinir-hastaliklari',
  },
  { label: 'Ortopedi ve Travmatoloji', to: '/hizmet-alanlari/ortopedi-ve-travmatoloji' },
  { label: 'Psikiyatri', to: '/hizmet-alanlari/psikiyatri' },
  { label: 'Radyoloji', to: '/hizmet-alanlari/radyoloji' },
  { label: 'Saç Ekimi Merkezi', to: '/hizmet-alanlari/sac-ekimi-merkezi' },
  { label: 'Üroloji', to: '/hizmet-alanlari/uroloji' },
]

const UNITELER_LINKS = [
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
]

const REHBER_LINKS = [
  { label: 'Haberler', to: '/rehber/haberler' },
  { label: 'Vloglar', to: '/rehber/vloglar' },
  { label: 'Labaratuvar Test Rehberi', to: '/rehber/labaratuvar-test-rehberi' },
  {
    label: 'Tahlil Sonucumu Nasıl Öğrenebilirim?',
    to: '/rehber/tahlil-sonucumu-nasil-ogrenebilirim',
  },
]

const isKurumsalOpen = ref(false)
const isHizmetOpen = ref(false)
const isUnitelerOpen = ref(false)
const isRehberOpen = ref(false)

const isKurumsalActive = computed(() => KURUMSAL_LINKS.some((link) => route.path === link.to))
const isHizmetActive = computed(() => HIZMET_LINKS.some((link) => route.path === link.to))
const isUnitelerActive = computed(() => UNITELER_LINKS.some((link) => route.path === link.to))
const isRehberActive = computed(() => REHBER_LINKS.some((link) => route.path === link.to))
</script>

<style scoped>
.nav-links {
  display: flex;
  gap: 16px;
}

.dropdown-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #424242;
  display: flex;
  align-items: center;
  gap: 4px;
}

.dropdown-button.active {
  color: #009ca7;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  max-height: calc(100vh - 150px);
  overflow-y: auto;
  background: white;
  box-shadow: 0 2px 8px #0000004d;
  border-radius: 4px;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 1000;
}

.dropdown-menu::-webkit-scrollbar {
  width: 5px;
}

.dropdown-menu::-webkit-scrollbar-thumb {
  background-color: #009ca7;
  border-radius: 4px;
}

.dropdown-menu::-webkit-scrollbar-thumb:hover {
  background-color: #007a85;
}

.dropdown-menu::-webkit-scrollbar-track {
  background-color: #f1f1f1;
  border-radius: 4px;
}

.dropdown-menu li .link {
  text-wrap: nowrap;
  padding-inline: 1rem;
  padding-block: 0.5rem;
}

.dropdown-menu li .link.active {
  background-color: rgba(0, 156, 167, 0.1) !important;
}

.dropdown-menu li .link:hover {
  background-color: #eee;
}

.link {
  display: block;
  align-items: center;
  padding-inline: 4px;
  text-decoration: none;
  color: #424242;
  font-size: 16px;
}

.link.active {
  color: #009ca7;
}
</style>
