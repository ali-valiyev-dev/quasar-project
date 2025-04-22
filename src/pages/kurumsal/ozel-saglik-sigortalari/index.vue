<template>
  <q-page>
    <PageHeader
      img="src/assets/bg_breadcrumbs.jpg"
      :breadcrumbs="[{ label: 'Kurumsal' }, { label: 'Özel Sağlık Sigortaları' }]"
    />
    <PageContentWrapper>
      <h4>ÖZEL SAĞLIK SİGORTALARI VE TSS</h4>

      <ul>
        <li>ALLİANZ SİGORTA A.Ş.</li>
        <li>ANADOLU ANONİM TÜRK SİGORTA ŞİRKETİ</li>
        <li>ACIBADEM SİGORTA A.Ş.</li>
        <li>AXA SİGORTA A.Ş.</li>
        <li>MAPFRE SİGORTA A.Ş.</li>
        <li>TÜRKİYE SİGORTA A.Ş.</li>
        <li>DEMİRHAYAT SİGORTA A.Ş.</li>
        <li>DEMİRHAYAT SİGORTA (2 CAN)</li>
        <li>TÜRKİYE HAYAT ve EMEKLİLİK</li>
      </ul>

      <h4>CGM</h4>

      <ul>
        <li>ANKARA SİGORTA</li>
        <li>FORTİS BANK SANDIK (ÇALIŞAN VE BAĞIMLILARI)</li>
        <li>RAY SİGORTA A.Ş.</li>
        <li>SOMPO JAPON SİGORTA</li>
        <li>ZİRAAT SİGORTA A.Ş.</li>
        <li>ZURİCH SİGORTA</li>
        <li>ACNTURK SİGORTA ŞİRKETİ</li>
        <li>QNB SAĞLIK HAYAT SİGORTA ve EMEKLİLİK A.Ş</li>
        <li>GULF SİGORTA</li>
        <li>HEPİYİ SİGORTA</li>
        <li>KATILIM SAĞLIK</li>
        <li>AVEON GLOBAL SİGORTA</li>
        <li>RAY SİGORTA</li>
      </ul>

      <h4>İMECE</h4>

      <ul>
        <li>ANA SİGORTA</li>
        <li>ANKARA SİGORTA</li>
        <li>AREX SİGORTA</li>
        <li>DOĞA SİGORTA</li>
        <li>ETHİCA SİGORTA</li>
        <li>GENERALİ SİGORTA</li>
        <li>MAGDEBURGER SİGORTA</li>
        <li>NN HAYAT ve EMEKLİLİK SİGORTA</li>
        <li>QUİCK SİGORTA</li>
        <li>TÜRK NİPPON SİGORTA</li>
        <li>UNİCO SİGORTA</li>
        <li>PRIVE SİGORTA</li>
      </ul>
    </PageContentWrapper>
  </q-page>
</template>

<script setup>
import { PageHeader, PageContentWrapper } from 'src/components/index'
</script>
