const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      // {
      //   path: 'Kurumsal',
      //   children: [
      //     {
      //       path: 'MedicabilHakkında',
      //       component: () => import('pages/Kurumsal/MedicabilHakkinda.vue'),
      //     },
      //     { path: 'Değerlerimiz', component: () => import('pages/Kurumsal/Degerlerimiz.vue') },
      //     {
      //       path: 'YönetimKadromuz',
      //       component: () => import('pages/Kurumsal/YonetimKadromuz.vue'),
      //     },
      //     {
      //       path: 'MisyonVizyonKalite',
      //       component: () => import('pages/Kurumsal/MisyonVizyonKalite.vue'),
      //     },
      //     {
      //       path: 'SosyalSorumluluk',
      //       component: () => import('pages/Kurumsal/SosyalSorumluluk.vue'),
      //     },
      //     {
      //       path: 'KaliteVerilerimiz',
      //       component: () => import('pages/Kurumsal/KaliteVerilerimiz.vue'),
      //     },
      //     { path: 'KVKK', component: () => import('pages/Kurumsal/KVKK.vue') },
      //     { path: 'Taahhütname', component: () => import('pages/Kurumsal/Taahhutname.vue') },
      //     {
      //       path: 'AnlaşmalıKurumlarımız',
      //       component: () => import('pages/Kurumsal/AnlasmaliKurumlarimiz.vue'),
      //     },
      //     {
      //       path: 'ÖzelSağlıkSigortaları',
      //       component: () => import('pages/Kurumsal/OzelSaglikSigortalari.vue'),
      //     },
      //     {
      //       path: 'İnsanKaynakları',
      //       component: () => import('pages/Kurumsal/InsanKaynaklari.vue'),
      //     },
      //     { path: 'TezBaşvurusu', component: () => import('pages/Kurumsal/TezBasvurusu.vue') },
      //     { path: 'HastaHakları', component: () => import('pages/Kurumsal/HastaHaklari.vue') },
      //     {
      //       path: 'ZiyaretSaatleri',
      //       component: () => import('pages/Kurumsal/ZiyaretSaatleri.vue'),
      //     },
      //   ],
      // },
      // {
      //   path: 'HizmetAlanlarımız',
      //   children: [
      //     {
      //       path: 'TümHizmetAlanları',
      //       component: () => import('pages/Hizmetler/TumHizmetAlanlari.vue'),
      //     },
      //     { path: 'AcilServis', component: () => import('pages/Hizmetler/AcilServis.vue') },
      //     {
      //       path: 'AğızveDişSağlığı',
      //       component: () => import('pages/Hizmetler/AgizVeDisSagligi.vue'),
      //     },
      //     {
      //       path: 'AnesteziyolojiveReanimasyon',
      //       component: () => import('pages/Hizmetler/AnesteziyolojiVeReanimasyon.vue'),
      //     },
      //     {
      //       path: 'BeslenmeveDiyetetik',
      //       component: () => import('pages/Hizmetler/BeslenmeVeDiyetetik.vue'),
      //     },
      //     {
      //       path: 'BeyinveSinirCerrahisi',
      //       component: () => import('pages/Hizmetler/BeyinVeSinirCerrahisi.vue'),
      //     },
      //     { path: 'ÇocukCerrahisi', component: () => import('pages/Hizmetler/CocukCerrahisi.vue') },
      //     {
      //       path: 'ÇocukSağlığıveHastalıkları',
      //       component: () => import('pages/Hizmetler/CocukSagligiVeHastaliklari.vue'),
      //     },
      //     { path: 'Dahiliye', component: () => import('pages/Hizmetler/Dahiliye.vue') },
      //     { path: 'Dermatoloji', component: () => import('pages/Hizmetler/Dermatoloji.vue') },
      //     {
      //       path: 'EnfeksiyonHastalıkları',
      //       component: () => import('pages/Hizmetler/EnfeksiyonHastaliklari.vue'),
      //     },
      //     { path: 'FizikTedavi', component: () => import('pages/Hizmetler/FizikTedavi.vue') },
      //     { path: 'GenelCerrahi', component: () => import('pages/Hizmetler/GenelCerrahi.vue') },
      //     {
      //       path: 'GöğüsHastalıkları',
      //       component: () => import('pages/Hizmetler/GogusHastaliklari.vue'),
      //     },
      //     {
      //       path: 'GözHastalıkları',
      //       component: () => import('pages/Hizmetler/GozHastaliklari.vue'),
      //     },
      //     {
      //       path: 'KalpveDamarCerrahisi',
      //       component: () => import('pages/Hizmetler/KalpVeDamarCerrahisi.vue'),
      //     },
      //     {
      //       path: 'KadınHastalıklarıveDoğum',
      //       component: () => import('pages/Hizmetler/KadinHastaliklariVeDogum.vue'),
      //     },
      //     { path: 'Kardiyoloji', component: () => import('pages/Hizmetler/Kardiyoloji.vue') },
      //     {
      //       path: 'KlinikPsikoloji',
      //       component: () => import('pages/Hizmetler/KlinikPsikoloji.vue'),
      //     },
      //     {
      //       path: 'KulakBurunBoğaz',
      //       component: () => import('pages/Hizmetler/KulakBurunBogaz.vue'),
      //     },
      //     { path: 'Nöroloji', component: () => import('pages/Hizmetler/Noroloji.vue') },
      //     {
      //       path: 'OrtopediveTravmatoloji',
      //       component: () => import('pages/Hizmetler/OrtopediVeTravmatoloji.vue'),
      //     },
      //     { path: 'Psikiyatri', component: () => import('pages/Hizmetler/Psikiyatri.vue') },
      //     { path: 'Radyoloji', component: () => import('pages/Hizmetler/Radyoloji.vue') },
      //     {
      //       path: 'SaçEkimiMerkezi',
      //       component: () => import('pages/Hizmetler/SacEkimiMerkezi.vue'),
      //     },
      //     { path: 'Üroloji', component: () => import('pages/Hizmetler/Uroloji.vue') },
      //   ],
      // },
      // { path: 'Ünitelerimiz', component: () => import('pages/Unitelerimiz.vue') },
      // { path: 'Hekimler', component: () => import('pages/Hekimler.vue') },
      // { path: 'BlogYazıları', component: () => import('pages/BlogYazilari.vue') },
      // {
      //   path: 'Rehber',
      //   children: [
      //     { path: 'Haberler', component: () => import('pages/Rehber/Haberler.vue') },
      //     { path: 'Vlog', component: () => import('pages/Rehber/Vlog.vue') },
      //     {
      //       path: 'LabaratuvarTestRehberi',
      //       component: () => import('pages/Rehber/LabaratuvarTestRehberi.vue'),
      //     },
      //     {
      //       path: 'TahlilSonucumuNasılÖğrenebilirim',
      //       component: () => import('pages/Rehber/TahlilSonucumuNasilOgrenebilirim.vue'),
      //     },
      //   ],
      // },
      // { path: 'YalınSağlık', component: () => import('pages/YalinSaglik.vue') },
      // { path: 'Dergi', component: () => import('pages/Dergi.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
