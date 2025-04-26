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
        path: 'hizmet-alanlarimiz',
        children: [
          {
            path: 'tum-hizmet-alanlari',
            component: () => import('pages/hizmet-alanlarimiz/tum-hizmet-alanlari/index.vue'),
          },
          {
            path: 'acil-servis',
            component: () => import('pages/hizmet-alanlarimiz/acil-servis/index.vue'),
          },
          {
            path: 'agiz-ve-dis-sagligi',
            component: () => import('pages/hizmet-alanlarimiz/agiz-ve-dis-sagligi/index.vue'),
          },
          {
            path: 'anesteziyoloji-ve-reanimasyon',
            component: () =>
              import('pages/hizmet-alanlarimiz/anesteziyoloji-ve-reanimasyon/index.vue'),
          },
          {
            path: 'beslenme-ve-diyetetik',
            component: () => import('pages/hizmet-alanlarimiz/beslenme-ve-diyetetik/index.vue'),
          },
          //     {
          //       path: 'beyin-ve-sinir-cerrahisi',
          //       component: () => import('pages/beyin-ve-sinir-cerrahisi/index.vue'),
          //     },
          //     {
          //       path: 'cocuk-cerrahisi',
          //       component: () => import('pages/cocuk-cerrahisi/index.vue'),
          //     },
          //     {
          //       path: 'cocuk-sagligi-ve-hastaliklari',
          //       component: () => import('pages/cocuk-sagligi-ve-hastaliklari/index.vue'),
          //     },
          //     {
          //       path: 'dahiliye',
          //       component: () => import('pages/dahiliye/index.vue'),
          //     },
          //     {
          //       path: 'dermatoloji-cildiye',
          //       component: () => import('pages/dermatoloji-cildiye/index.vue'),
          //     },
          //     {
          //       path: 'enfeksiyon-hastaliklari',
          //       component: () => import('pages/enfeksiyon-hastaliklari/index.vue'),
          //     },
          //     {
          //       path: 'fizik-tedavi',
          //       component: () => import('pages/fizik-tedavi/index.vue'),
          //     },
          //     {
          //       path: 'genel-cerrahi',
          //       component: () => import('pages/genel-cerrahi/index.vue'),
          //     },
          //     {
          //       path: 'gogus-hastaliklari',
          //       component: () => import('pages/gogus-hastaliklari/index.vue'),
          //     },
          //     {
          //       path: 'goz-hastaliklari',
          //       component: () => import('pages/goz-hastaliklari/index.vue'),
          //     },
          //     {
          //       path: 'kalp-ve-damar-cerrahisi',
          //       component: () => import('pages/kalp-ve-damar-cerrahisi/index.vue'),
          //     },
          //     {
          //       path: 'kadin-hastaliklari-ve-dogum',
          //       component: () => import('pages/kadin-hastaliklari-ve-dogum/index.vue'),
          //     },
          //     {
          //       path: 'kardiyoloji',
          //       component: () => import('pages/kardiyoloji/index.vue'),
          //     },
          //     {
          //       path: 'klinik-psikoloji',
          //       component: () => import('pages/klinik-psikoloji/index.vue'),
          //     },
          //     {
          //       path: 'kulak-burun-bogaz-hastaliklari',
          //       component: () => import('pages/kulak-burun-bogaz-hastaliklari/index.vue'),
          //     },
          //     {
          //       path: 'noroloji-beyin-ve-sinir-hastaliklari',
          //       component: () => import('pages/noroloji-beyin-ve-sinir-hastaliklari/index.vue'),
          //     },
          //     {
          //       path: 'ortopedi-ve-travmatoloji',
          //       component: () => import('pages/ortopedi-ve-travmatoloji/index.vue'),
          //     },
          //     {
          //       path: 'psikiyatri',
          //       component: () => import('pages/psikiyatri/index.vue'),
          //     },
          //     {
          //       path: 'radyoloji',
          //       component: () => import('pages/radyoloji/index.vue'),
          //     },
          //     {
          //       path: 'sac-ekimi-merkezi',
          //       component: () => import('pages/sac-ekimi-merkezi/index.vue'),
          //     },
          //     {
          //       path: 'uroloji',
          //       component: () => import('pages/uroloji/index.vue'),
          //     },
        ],
      },
      {
        path: 'unitelerimiz',
        children: [
          {
            path: 'tum-uniteler',
            component: () => import('pages/unitelerimiz/tum-uniteler/index.vue'),
          },
          // {
          //   path: 'acil-servis',
          //   component: () => import('pages/unitelerimiz/acil-servis/index.vue'),
          // },
          // {
          //   path: 'ambulans-hizmetleri',
          //   component: () => import('pages/unitelerimiz/ambulans-hizmetleri/index.vue'),
          // },
          // {
          //   path: 'ameliyathaneler',
          //   component: () => import('pages/unitelerimiz/ameliyathaneler/index.vue'),
          // },
          // {
          //   path: 'check-up',
          //   component: () => import('pages/unitelerimiz/check-up/index.vue'),
          // },
          // {
          //   path: 'dogum-unitesi',
          //   component: () => import('pages/unitelerimiz/dogum-unitesi/index.vue'),
          // },
          // {
          //   path: 'eforlu-ekg',
          //   component: () => import('pages/unitelerimiz/eforlu-ekg/index.vue'),
          // },
          // {
          //   path: 'el-cerrahisi-merkezi',
          //   component: () => import('pages/unitelerimiz/el-cerrahisi-merkezi/index.vue'),
          // },
          // {
          //   path: 'endoskopi-unitesi',
          //   component: () => import('pages/unitelerimiz/endoskopi-unitesi/index.vue'),
          // },
          // {
          //   path: 'fonksiyonel-tip',
          //   component: () => import('pages/unitelerimiz/fonksiyonel-tip/index.vue'),
          // },
          // {
          //   path: 'fizik-tedavi-ve-rehabilitasyon-unitesi',
          //   component: () =>
          //     import('pages/unitelerimiz/fizik-tedavi-ve-rehabilitasyon-unitesi/index.vue'),
          // },
          // {
          //   path: 'klinik-biyokimya-laboratuvari',
          //   component: () => import('pages/unitelerimiz/klinik-biyokimya-laboratuvari/index.vue'),
          // },
          // {
          //   path: 'merkez-laboratuvari',
          //   component: () => import('pages/unitelerimiz/merkez-laboratuvari/index.vue'),
          // },
          // {
          //   path: 'medikal-estetik',
          //   component: () => import('pages/unitelerimiz/medikal-estetik/index.vue'),
          // },
          // {
          //   path: 'obezite-cerrahisi-birimi',
          //   component: () => import('pages/unitelerimiz/obezite-cerrahisi-birimi/index.vue'),
          // },
          // {
          //   path: 'poliklinikler',
          //   component: () => import('pages/unitelerimiz/poliklinikler/index.vue'),
          // },
          // {
          //   path: 'odyoloji-unitesi',
          //   component: () => import('pages/unitelerimiz/odyoloji-unitesi/index.vue'),
          // },
          // {
          //   path: 'uyku-laboratuvari',
          //   component: () => import('pages/unitelerimiz/uyku-laboratuvari/index.vue'),
          // },
          // {
          //   path: 'yogun-bakim-unitesi',
          //   component: () => import('pages/unitelerimiz/yogun-bakim-unitesi/index.vue'),
          // },
        ],
      },
      // { path: 'Hekimler', component: () => import('pages/Hekimler/index.vue') },
      // { path: 'BlogYazıları', component: () => import('pages/BlogYazıları/index.vue') },
      // {
      //   path: 'rehber',
      //   children: [
      //     { path: 'haberler', component: () => import('pages/haberler/index.vue') },
      //     { path: 'vlog', component: () => import('pages/vlog/index.vue') },
      //     {
      //       path: 'labaratuvar-test-rehberi',
      //       component: () => import('pages/labaratuvar-test-rehberi/index.vue'),
      //     },
      //     {
      //       path: 'tahlil-sonucumu-nasil-ogrenebilirim',
      //       component: () => import('pages/tahlil-sonucumu-nasil-ogrenebilirim/index.vue'),
      //     },
      //   ],
      // },
      // // { path: 'YalınSağlık', component: () => import('pages/YalınSağlık/index.vue') },
      // { path: 'Dergi', component: () => import('pages/Dergi/index.vue') },
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
