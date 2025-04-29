<template>
  <footer class="column">
    <div class="links-container row q-mx-auto text-white q-py-xl q-px-sm q-px-sm-lg q-px-md-xl">
      <div class="col-12 col-sm-6 col-md">
        <h5>Hasta ve Ziyaretçiler</h5>
        <q-list dense class="column">
          <router-link
            v-for="(link, index) in patientLinks"
            :key="index"
            :to="link.to"
            class="text-body1"
          >
            {{ link.label }}
          </router-link>
        </q-list>
      </div>

      <div class="col-12 col-sm-6 col-md">
        <h5>Kuruluşlarımız</h5>
        <q-list dense class="column">
          <template v-for="(link, index) in organizationLinks" :key="index">
            <router-link v-if="link.to" :to="link.to" class="text-body1">
              {{ link.label }}
            </router-link>
            <a
              v-else
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="text-body1"
            >
              {{ link.label }}
            </a>
          </template>
        </q-list>
      </div>

      <div class="col-12 col-md">
        <h5>İletişim</h5>
        <q-list dense class="contact-types column text-body1">
          <q-item>
            <q-item-section class="col-shrink" avatar>
              <q-icon name="email" />
            </q-item-section>

            <q-item-section>
              <q-item-label>
                <a href="mailto:info@medicabil.com">info@medicabil.com</a>
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section class="col-shrink" avatar>
              <q-icon name="phone" />
            </q-item-section>

            <q-item-section>
              <q-item-label>
                <a href="tel:444 8 112"> 444 8 112 </a>
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section class="col-shrink" avatar>
              <q-icon name="place" />
            </q-item-section>
            <q-item-section>
              <q-item-label>
                <a
                  href="https://www.google.com/maps?q=Nilüfer,+Bursa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nilüfer / Bursa
                </a>
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section class="col-shrink" avatar>
              <q-icon name="place" />
            </q-item-section>
            <q-item-section>
              <q-item-label>
                <a
                  href="https://www.google.com/maps?q=Yıldırım,+Bursa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Yıldırım / Bursa
                </a>
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>

        <div class="apps row items-center q-mt-lg">
          <a
            href="https://apps.apple.com/tr/app/medicabil/id1383657293"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../assets/app_store.svg" alt="App Store" class="app-icon" />
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.kuarkdijital.medicabil&hl=es_NI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../assets/google_play.svg" alt="Google Play" class="app-icon" />
          </a>
        </div>
      </div>
    </div>

    <q-separator class="bg-white" />

    <div class="socials-container q-mx-auto">
      <div
        class="row items-center justify-center justify-sm-between text-white q-py-md q-px-sm q-px-sm-lg q-px-md-xl"
      >
        <span class="text-body2">Copyright ©2025 Özel Medicabil Hastanesi</span>

        <div class="social-icons row items-center q-pl-md">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <q-icon name="fab fa-facebook" size="xs" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <q-icon name="fab fa-twitter" size="xs" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <q-icon name="fab fa-instagram" size="xs" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <q-icon name="fab fa-youtube" size="xs" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const patientLinks = [
  { label: 'Online İşlemler', to: '/' },
  { label: 'Medicabil Hakkında', to: '/kurumsal/medicabil-hakkinda' },
  {
    label: 'Misyon & Vizyon & Kalite Politikamız',
    to: '/kurumsal/misyon-vizyon-kalite',
  },
  { label: 'Değerlerimiz', to: '/kurumsal/degerlerimiz' },
  { label: 'Yönetim Kadromuz', to: '/kurumsal/yonetim-kadromuz' },
  { label: 'İş Başvurusu', to: '/kurumsal/is-basvurusu' },
  { label: 'Sosyal Sorumluluk', to: '/kurumsal/sosyal-sorumluluk' },
  { label: 'Kalite Verilerimiz', to: '/kurumsal/kalite-verilerimiz' },
  { label: 'Kişisel Verilerin Korunma Kanunu', to: '/kurumsal/kvkk' },
  { label: 'Taahhütname', to: '/kurumsal/taahhutname' },
  { label: 'Anlaşmalı Kurumlarımız', to: '/kurumsal/anlasmali-kurumlarimiz' },
  { label: 'Özel Sağlık Sigortaları', to: '/kurumsal/ozel-saglik-sigortalari' },
  { label: 'Hasta Hakları', to: '/kurumsal/hasta-haklari' },
  { label: 'Ziyaret Saatleri', to: '/kurumsal/ziyaret-saatleri' },
]

const organizationLinks = [
  { label: 'Nilüfer Hastanesi', to: '/nilufer-hastanesi' },
  { label: 'Yıldırım Hastanesi', to: '/yildirim-hastanesi' },
  { label: 'Medicabil Evde Bakım Merkezi', to: '/medicabil-evde-bakim-merkezi' },
  { label: 'Yalın Sağlık Enstitüsü', href: 'https://yalinsaglikenstitusu.com' },
]
</script>

<style lang="scss" scoped>
footer {
  background-image: url('src/assets/bg_footer.png');
  background-size: cover;
  background-position: center;
  background-color: #003781;

  .links-container {
    width: 100%;
    max-width: 1200px;
    row-gap: 50px;

    .q-list {
      gap: 16px;

      * {
        width: max-content;
      }
    }

    .contact-types {
      gap: 12px;

      .q-item {
        padding: 0;
      }
    }

    .apps {
      gap: 16px;

      .app-icon {
        width: 150px;
        cursor: pointer;
      }
    }

    h5 {
      margin: 0 0 16px 0;
    }
  }

  .socials-container {
    width: 100%;
    max-width: 1200px;

    .social-icons {
      gap: 16px;
    }
  }

  a {
    text-decoration: none;
    color: #fff;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
