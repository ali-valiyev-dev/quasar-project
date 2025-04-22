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
          // {
          //   path: 'anlasmali-kurumlarimiz',
          //   component: () => import('pages/kurumsal/anlasmali-kurumlarimiz/index.vue'),
          // },
          // {
          //   path: 'ozel-saglik-sigortalari',
          //   component: () => import('pages/kurumsal/ozel-saglik-sigortalari/index.vue'),
          // },
          // {
          //   path: 'insan-kaynaklari',
          //   component: () => import('pages/kurumsal/insan-kaynaklari/index.vue'),
          // },
          // {
          //   path: 'tez-basvurusu',
          //   component: () => import('pages/kurumsal/tez-basvurusu/index.vue'),
          // },
          // {
          //   path: 'hasta-haklari',
          //   component: () => import('pages/kurumsal/hasta-haklari/index.vue'),
          // },
          // {
          //   path: 'ziyaret-saatleri',
          //   component: () => import('pages/kurumsal/ziyaret-saatleri/index.vue'),
          // },
        ],
      },
      // {
      //   path: 'hizmet-alanlarimiz',
      //   children: [
      //     {
      //       path: 'tum-hizmet-alanlari',
      //       component: () => import('pages/tum-hizmet-alanlari/index.vue'),
      //     },
      //     {
      //       path: 'acil-servis',
      //       component: () => import('pages/acil-servis/index.vue'),
      //     },
      //     {
      //       path: 'agiz-ve-dis-sagligi',
      //       component: () => import('pages/agiz-ve-dis-sagligi/index.vue'),
      //     },
      //     {
      //       path: 'anesteziyoloji-ve-reanimasyon',
      //       component: () => import('pages/anesteziyoloji-ve-reanimasyon/index.vue'),
      //     },
      //     {
      //       path: 'beslenme-ve-diyetetik',
      //       component: () => import('pages/beslenme-ve-diyetetik/index.vue'),
      //     },
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
      //   ],
      // },
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
      // { path: 'Ünitelerimiz', component: () => import('pages/Ünitelerimiz/index.vue') },
      // { path: 'Hekimler', component: () => import('pages/Hekimler/index.vue') },
      // { path: 'BlogYazıları', component: () => import('pages/BlogYazıları/index.vue') },
      // { path: 'YalınSağlık', component: () => import('pages/YalınSağlık/index.vue') },
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
