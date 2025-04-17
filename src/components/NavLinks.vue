<template>
  <div class="gt-md nav-links">
    <div class="dropdown" @mouseover="isKurumsalOpen = true" @mouseleave="isKurumsalOpen = false">
      <button class="dropdown-button">
        Kurumsal
        <q-icon name="expand_more" />
      </button>
      <ul v-if="isKurumsalOpen" class="dropdown-menu">
        <li v-for="(item, index) in kurumsalLinks" :key="index">
          <router-link :to="`/${item.replace(/ /g, '')}`" class="link">
            {{ item }}
          </router-link>
        </li>
      </ul>
    </div>

    <div class="dropdown" @mouseover="isHizmetOpen = true" @mouseleave="isHizmetOpen = false">
      <button class="dropdown-button">
        Hizmet Alanlarımız
        <q-icon name="expand_more" />
      </button>
      <ul v-if="isHizmetOpen" class="dropdown-menu">
        <li v-for="(item, index) in hizmetLinks" :key="index">
          <router-link :to="`/${item.replace(/ /g, '')}`" class="link">
            {{ item }}
          </router-link>
        </li>
      </ul>
    </div>

    <router-link to="/Ünitelerimiz" class="link">Ünitelerimiz</router-link>
    <router-link to="/Hekimler" class="link">Hekimler</router-link>
    <router-link to="/BlogYazıları" class="link">Blog Yazıları </router-link>

    <div class="dropdown" @mouseover="isRehberOpen = true" @mouseleave="isRehberOpen = false">
      <button class="dropdown-button">
        Rehber
        <q-icon name="expand_more" />
      </button>
      <ul v-if="isRehberOpen" class="dropdown-menu">
        <li v-for="(item, index) in rehberLinks" :key="index">
          <router-link :to="`/${item.replace(/ /g, '')}`" class="link">
            {{ item }}
          </router-link>
        </li>
      </ul>
    </div>

    <router-link to="/YalınSağlık" class="link">Yalın Sağlık </router-link>
    <router-link to="/Dergi" class="link">Dergi</router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isKurumsalOpen = ref(false)
const isHizmetOpen = ref(false)
const isRehberOpen = ref(false)

const kurumsalLinks = ref([
  'Medicabil Hakkında',
  'Değerlerimiz',
  'Yönetim Kadromuz',
  'Misyon & Vizyon & Kalite',
  'Sosyal Sorumluluk',
  'Kalite Verilerimiz',
  'KVKK',
  'Taahhütname',
  'Anlaşmalı Kurumlarımız',
  'Özel Sağlık Sigortaları',
  'İnsan Kaynakları',
  'Tez Başvurusu',
  'Hasta Hakları',
  'Ziyaret Saatleri',
])

const hizmetLinks = ref([
  'Tüm Hizmet Alanları',
  'Acil Servis',
  'Ağız ve Diş Sağlığı',
  'Anesteziyoloji ve Reanimasyon',
  'Beslenme ve Diyetetik',
  'Beyin ve Sinir Cerrahisi',
  'Çocuk Cerrahisi',
  'Çocuk Sağlığı ve Hastalıkları',
  'Dahiliye',
  'Dermatoloji (Cildiye)',
  'Enfeksiyon Hastalıkları',
  'Fizik Tedavi',
  'Genel Cerrahi',
  'Göğüs Hastalıkları',
  'Göz Hastalıkları',
  'Kalp ve Damar Cerrahisi',
  'Kadın Hastalıkları ve Doğum',
  'Kardiyoloji',
  'Klinik Psikoloji',
  'Kulak Burun Boğaz Hastalıkları',
  'Nöroloji (Beyin ve Sinir Hastalıkları)',
  'Ortopedi ve Travmatoloji',
  'Psikiyatri',
  'Radyoloji',
  'Saç Ekimi Merkezi',
  'Üroloji',
])

const rehberLinks = ref([
  'Haberler',
  'Vlog',
  'Labaratuvar Test Rehberi',
  'Tahlil Sonucumu Nasıl Öğrenebilirim?',
])
</script>

<style scoped>
.nav-links {
  display: flex;
  gap: 16px;
}

.dropdown {
  position: relative;
}

.dropdown-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #193768;
  display: flex;
  align-items: center;
  gap: 4px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid #eee;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 1000;
}

.dropdown-menu li {
  text-wrap: nowrap;
  padding: 8px 12px;
}

.dropdown-menu li:hover {
  background: #eee;
}

.link {
  display: block;
  align-items: center;
  padding-inline: 4px;
  text-decoration: none;
  color: #193768;
  font-size: 16px;
}
</style>
