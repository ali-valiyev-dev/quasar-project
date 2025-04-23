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
      <button class="dropdown-button" :class="{ active: isHizmetOpenActive }">
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

    <router-link
      to="/Ünitelerimiz"
      class="link"
      :class="{ active: route.path === '/Ünitelerimiz' }"
    >
      Ünitelerimiz
    </router-link>
    <router-link to="/Hekimler" class="link" :class="{ active: route.path === '/Hekimler' }">
      Hekimler
    </router-link>
    <router-link
      to="/BlogYazıları"
      class="link"
      :class="{ active: route.path === '/BlogYazıları' }"
    >
      Blog Yazıları
    </router-link>

    <div
      class="relative-position"
      @mouseover="isRehberOpen = true"
      @mouseleave="isRehberOpen = false"
    >
      <button class="dropdown-button" :class="{ active: isRehberOpenActive }">
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
  { label: 'Tüm Hizmet Alanları', to: '/hizmet-alanlarimiz/tum-hizmet-alanlari' },
  { label: 'Acil Servis', to: '/hizmet-alanlarimiz/acil-servis' },
  { label: 'Ağız ve Diş Sağlığı', to: '/hizmet-alanlarimiz/agiz-ve-dis-sagligi' },
  {
    label: 'Anesteziyoloji ve Reanimasyon',
    to: '/hizmet-alanlarimiz/anesteziyoloji-ve-reanimasyon',
  },
  { label: 'Beslenme ve Diyetetik', to: '/hizmet-alanlarimiz/beslenme-ve-diyetetik' },
  { label: 'Beyin ve Sinir Cerrahisi', to: '/hizmet-alanlarimiz/beyin-ve-sinir-cerrahisi' },
  { label: 'Çocuk Cerrahisi', to: '/hizmet-alanlarimiz/cocuk-cerrahisi' },
  {
    label: 'Çocuk Sağlığı ve Hastalıkları',
    to: '/hizmet-alanlarimiz/cocuk-sagligi-ve-hastaliklari',
  },
  { label: 'Dahiliye', to: '/hizmet-alanlarimiz/dahiliye' },
  { label: 'Dermatoloji (Cildiye)', to: '/hizmet-alanlarimiz/dermatoloji-cildiye' },
  { label: 'Enfeksiyon Hastalıkları', to: '/hizmet-alanlarimiz/enfeksiyon-hastaliklari' },
  { label: 'Fizik Tedavi', to: '/hizmet-alanlarimiz/fizik-tedavi' },
  { label: 'Genel Cerrahi', to: '/hizmet-alanlarimiz/genel-cerrahi' },
  { label: 'Göğüs Hastalıkları', to: '/hizmet-alanlarimiz/gogus-hastaliklari' },
  { label: 'Göz Hastalıkları', to: '/hizmet-alanlarimiz/goz-hastaliklari' },
  { label: 'Kalp ve Damar Cerrahisi', to: '/hizmet-alanlarimiz/kalp-ve-damar-cerrahisi' },
  { label: 'Kadın Hastalıkları ve Doğum', to: '/hizmet-alanlarimiz/kadin-hastaliklari-ve-dogum' },
  { label: 'Kardiyoloji', to: '/hizmet-alanlarimiz/kardiyoloji' },
  { label: 'Klinik Psikoloji', to: '/hizmet-alanlarimiz/klinik-psikoloji' },
  {
    label: 'Kulak Burun Boğaz Hastalıkları',
    to: '/hizmet-alanlarimiz/kulak-burun-bogaz-hastaliklari',
  },
  {
    label: 'Nöroloji (Beyin ve Sinir Hastalıkları)',
    to: '/hizmet-alanlarimiz/noroloji-beyin-ve-sinir-hastaliklari',
  },
  { label: 'Ortopedi ve Travmatoloji', to: '/hizmet-alanlarimiz/ortopedi-ve-travmatoloji' },
  { label: 'Psikiyatri', to: '/hizmet-alanlarimiz/psikiyatri' },
  { label: 'Radyoloji', to: '/hizmet-alanlarimiz/radyoloji' },
  { label: 'Saç Ekimi Merkezi', to: '/hizmet-alanlarimiz/sac-ekimi-merkezi' },
  { label: 'Üroloji', to: '/hizmet-alanlarimiz/uroloji' },
]

const REHBER_LINKS = [
  { label: 'Haberler', to: '/rehber/haberler' },
  { label: 'Vlog', to: '/rehber/vlog' },
  { label: 'Labaratuvar Test Rehberi', to: '/rehber/labaratuvar-test-rehberi' },
  {
    label: 'Tahlil Sonucumu Nasıl Öğrenebilirim?',
    to: '/rehber/tahlil-sonucumu-nasil-ogrenebilirim',
  },
]

const isKurumsalOpen = ref(false)
const isHizmetOpen = ref(false)
const isRehberOpen = ref(false)

const isKurumsalActive = computed(() => KURUMSAL_LINKS.some((link) => route.path === link.to))
const isHizmetOpenActive = computed(() => HIZMET_LINKS.some((link) => route.path === link.to))
const isRehberOpenActive = computed(() => REHBER_LINKS.some((link) => route.path === link.to))
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
