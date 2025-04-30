const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/home-page/index.vue') },
      {
        path: 'kurumsal',
        children: [
          {
            path: 'medicabil-hakkinda',
            component: () => import('pages/kurumsal/medicabil-hakkinda/index.vue'),
          },
          {
            path: 'degerlerimiz',
            component: () => import('pages/kurumsal/degerlerimiz/index.vue'),
          },
          {
            path: 'yonetim-kadromuz',
            component: () => import('pages/kurumsal/yonetim-kadromuz/index.vue'),
          },
          {
            path: 'misyon-vizyon-kalite',
            component: () => import('pages/kurumsal/misyon-vizyon-kalite/index.vue'),
          },
          {
            path: 'sosyal-sorumluluk',
            component: () => import('pages/kurumsal/sosyal-sorumluluk/index.vue'),
          },
          {
            path: 'kalite-verilerimiz',
            component: () => import('pages/kurumsal/kalite-verilerimiz/index.vue'),
          },
          { path: 'kvkk', component: () => import('pages/kurumsal/kvkk/index.vue') },
          { path: 'taahhutname', component: () => import('pages/kurumsal/taahhutname/index.vue') },
          {
            path: 'anlasmali-kurumlarimiz',
            component: () => import('pages/kurumsal/anlasmali-kurumlarimiz/index.vue'),
          },
          {
            path: 'ozel-saglik-sigortalari',
            component: () => import('pages/kurumsal/ozel-saglik-sigortalari/index.vue'),
          },
          {
            path: 'insan-kaynaklari',
            component: () => import('pages/kurumsal/insan-kaynaklari/index.vue'),
          },
          {
            path: 'tez-basvurusu',
            component: () => import('pages/kurumsal/tez-basvurusu/index.vue'),
          },
          {
            path: 'hasta-haklari',
            component: () => import('pages/kurumsal/hasta-haklari/index.vue'),
          },
          {
            path: 'ziyaret-saatleri',
            component: () => import('pages/kurumsal/ziyaret-saatleri/index.vue'),
          },
        ],
      },
      {
        path: 'hizmet-alanlari',
        children: [
          {
            path: 'tum-hizmet-alanlari',
            component: () => import('src/pages/hizmet-alanlari/tum-hizmet-alanlari/index.vue'),
          },
          {
            path: 'acil-servis',
            component: () => import('src/pages/hizmet-alanlari/acil-servis/index.vue'),
          },
          {
            path: 'agiz-ve-dis-sagligi',
            component: () => import('src/pages/hizmet-alanlari/agiz-ve-dis-sagligi/index.vue'),
          },
          {
            path: 'anesteziyoloji-ve-reanimasyon',
            component: () =>
              import('src/pages/hizmet-alanlari/anesteziyoloji-ve-reanimasyon/index.vue'),
          },
          {
            path: 'beslenme-ve-diyetetik',
            component: () => import('src/pages/hizmet-alanlari/beslenme-ve-diyetetik/index.vue'),
          },
          //     {
          //       path: 'beyin-ve-sinir-cerrahisi',
          //       component: () => import('pages/hizmet-alanlari/beyin-ve-sinir-cerrahisi/index.vue'),
          //     },
          //     {
          //       path: 'cocuk-cerrahisi',
          //       component: () => import('pages/hizmet-alanlari/cocuk-cerrahisi/index.vue'),
          //     },
          //     {
          //       path: 'cocuk-sagligi-ve-hastaliklari',
          //       component: () => import('pages/hizmet-alanlari/cocuk-sagligi-ve-hastaliklari/index.vue'),
          //     },
          //     {
          //       path: 'dahiliye',
          //       component: () => import('pages/hizmet-alanlari/dahiliye/index.vue'),
          //     },
          //     {
          //       path: 'dermatoloji-cildiye',
          //       component: () => import('pages/hizmet-alanlari/dermatoloji-cildiye/index.vue'),
          //     },
          //     {
          //       path: 'enfeksiyon-hastaliklari',
          //       component: () => import('pages/hizmet-alanlari/enfeksiyon-hastaliklari/index.vue'),
          //     },
          //     {
          //       path: 'fizik-tedavi',
          //       component: () => import('pages/hizmet-alanlari/fizik-tedavi/index.vue'),
          //     },
          //     {
          //       path: 'genel-cerrahi',
          //       component: () => import('pages/hizmet-alanlari/genel-cerrahi/index.vue'),
          //     },
          //     {
          //       path: 'gogus-hastaliklari',
          //       component: () => import('pages/hizmet-alanlari/gogus-hastaliklari/index.vue'),
          //     },
          //     {
          //       path: 'goz-hastaliklari',
          //       component: () => import('pages/hizmet-alanlari/goz-hastaliklari/index.vue'),
          //     },
          //     {
          //       path: 'kalp-ve-damar-cerrahisi',
          //       component: () => import('pages/hizmet-alanlari/kalp-ve-damar-cerrahisi/index.vue'),
          //     },
          //     {
          //       path: 'kadin-hastaliklari-ve-dogum',
          //       component: () => import('pages/hizmet-alanlari/kadin-hastaliklari-ve-dogum/index.vue'),
          //     },
          //     {
          //       path: 'kardiyoloji',
          //       component: () => import('pages/hizmet-alanlari/kardiyoloji/index.vue'),
          //     },
          //     {
          //       path: 'klinik-psikoloji',
          //       component: () => import('pages/hizmet-alanlari/klinik-psikoloji/index.vue'),
          //     },
          //     {
          //       path: 'kulak-burun-bogaz-hastaliklari',
          //       component: () => import('pages/hizmet-alanlari/kulak-burun-bogaz-hastaliklari/index.vue'),
          //     },
          //     {
          //       path: 'noroloji-beyin-ve-sinir-hastaliklari',
          //       component: () => import('pages/hizmet-alanlari/noroloji-beyin-ve-sinir-hastaliklari/index.vue'),
          //     },
          //     {
          //       path: 'ortopedi-ve-travmatoloji',
          //       component: () => import('pages/hizmet-alanlari/ortopedi-ve-travmatoloji/index.vue'),
          //     },
          //     {
          //       path: 'psikiyatri',
          //       component: () => import('pages/hizmet-alanlari/psikiyatri/index.vue'),
          //     },
          //     {
          //       path: 'radyoloji',
          //       component: () => import('pages/hizmet-alanlari/radyoloji/index.vue'),
          //     },
          //     {
          //       path: 'sac-ekimi-merkezi',
          //       component: () => import('pages/hizmet-alanlari/sac-ekimi-merkezi/index.vue'),
          //     },
          //     {
          //       path: 'uroloji',
          //       component: () => import('pages/hizmet-alanlari/uroloji/index.vue'),
          //     },
        ],
      },
      {
        path: 'uniteler',
        children: [
          {
            path: 'tum-uniteler',
            component: () => import('src/pages/uniteler/tum-uniteler/index.vue'),
          },
          {
            path: 'acil-servis',
            component: () => import('src/pages/uniteler/acil-servis/index.vue'),
          },
          // {
          //   path: 'ambulans-hizmetleri',
          //   component: () => import('pages/uniteler/ambulans-hizmetleri/index.vue'),
          // },
          // {
          //   path: 'ameliyathaneler',
          //   component: () => import('pages/uniteler/ameliyathaneler/index.vue'),
          // },
          // {
          //   path: 'check-up',
          //   component: () => import('pages/uniteler/check-up/index.vue'),
          // },
          // {
          //   path: 'dogum-unitesi',
          //   component: () => import('pages/uniteler/dogum-unitesi/index.vue'),
          // },
          // {
          //   path: 'eforlu-ekg',
          //   component: () => import('pages/uniteler/eforlu-ekg/index.vue'),
          // },
          // {
          //   path: 'el-cerrahisi-merkezi',
          //   component: () => import('pages/uniteler/el-cerrahisi-merkezi/index.vue'),
          // },
          // {
          //   path: 'endoskopi-unitesi',
          //   component: () => import('pages/uniteler/endoskopi-unitesi/index.vue'),
          // },
          // {
          //   path: 'fonksiyonel-tip',
          //   component: () => import('pages/uniteler/fonksiyonel-tip/index.vue'),
          // },
          // {
          //   path: 'fizik-tedavi-ve-rehabilitasyon-unitesi',
          //   component: () =>
          //     import('pages/uniteler/fizik-tedavi-ve-rehabilitasyon-unitesi/index.vue'),
          // },
          // {
          //   path: 'klinik-biyokimya-laboratuvari',
          //   component: () => import('pages/uniteler/klinik-biyokimya-laboratuvari/index.vue'),
          // },
          // {
          //   path: 'merkez-laboratuvari',
          //   component: () => import('pages/uniteler/merkez-laboratuvari/index.vue'),
          // },
          // {
          //   path: 'medikal-estetik',
          //   component: () => import('pages/uniteler/medikal-estetik/index.vue'),
          // },
          // {
          //   path: 'obezite-cerrahisi-birimi',
          //   component: () => import('pages/uniteler/obezite-cerrahisi-birimi/index.vue'),
          // },
          // {
          //   path: 'poliklinikler',
          //   component: () => import('pages/uniteler/poliklinikler/index.vue'),
          // },
          // {
          //   path: 'odyoloji-unitesi',
          //   component: () => import('pages/uniteler/odyoloji-unitesi/index.vue'),
          // },
          // {
          //   path: 'uyku-laboratuvari',
          //   component: () => import('pages/uniteler/uyku-laboratuvari/index.vue'),
          // },
          // {
          //   path: 'yogun-bakim-unitesi',
          //   component: () => import('pages/uniteler/yogun-bakim-unitesi/index.vue'),
          // },
        ],
      },
      // { path: 'Hekimler', component: () => import('pages/Hekimler/index.vue') },
      { path: 'blog-yazilari', component: () => import('pages/blog-yazilari/index.vue') },
      { path: 'blog-yazilari/:id', component: () => import('pages/blog-yazilari/_id/index.vue') },
      {
        path: 'rehber',
        children: [
          { path: 'haberler', component: () => import('pages/rehber/haberler/index.vue') },
          { path: 'vloglar', component: () => import('src/pages/rehber/vloglar/index.vue') },
          {
            path: 'labaratuvar-test-rehberi',
            component: () => import('pages/rehber/labaratuvar-test-rehberi/index.vue'),
          },
          {
            path: 'tahlil-sonucumu-nasil-ogrenebilirim',
            component: () => import('pages/rehber/tahlil-sonucumu-nasil-ogrenebilirim/index.vue'),
          },
        ],
      },
      { path: 'haberler/:id', component: () => import('pages/rehber/haberler/_id/index.vue') },
      { path: 'vloglar/:id', component: () => import('pages/rehber/vloglar/_id/index.vue') },
      // { path: 'Dergi', component: () => import('pages/Dergi/index.vue') },
      {
        path: '/:catchAll(.*)',
        component: () => import('pages/not-found/index.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)',
    component: () => import('pages/not-found/index.vue'),
  },
]

export default routes
