<template>
  <q-page>
    <PageHeader
      img="src/assets/bg_breadcrumbs.jpg"
      :breadcrumbs="[{ label: 'Kurumsal' }, { label: 'Yönetim Kadromuz' }]"
    />
    <PageContentWrapper>
      <h2 class="text-h5 text-weight-bold text-grey-9">Yönetim Kadromuz</h2>
      <ul class="text-h6 text-weight-light text-grey-9 q-mt-md">
        <li>
          <strong>Medicabil Sağlık Grubu Yönetim Kurulu Başkanı:</strong> Prof. Dr. Ömer Faruk
          BİLGEN
        </li>
        <li>
          <strong>Özel Medicabil Nilüfer Hastanesi Başhekimi:</strong> Prof. Dr. Aysun YILMAZLAR
        </li>
        <li>
          <strong>Özel Medicabil Nilüfer Hastanesi Mesul Müdürü:</strong> Dr. Coşkun HAYIRLIOĞLU
        </li>
        <li>
          <strong>Özel Medicabil Yıldırım Hastanesi Başhekimi / Mesul Müdürü:</strong> Dr. Feza ŞEN
        </li>
        <li><strong>Medicabil Evde Sağlık Merkezi Mesul Müdürü:</strong> Dr. Mustafa GÜNEŞ</li>
      </ul>
      <p class="text-h6 text-weight-light text-grey- q-mt-lg">
        Organizasyon Şemasını indirmek için
        <a
          href="src/assets/org-semasi-2024-kek-2-rev-12-yoneticiler.pdf"
          target="_blank"
          class="text-primary"
          >buraya</a
        >
        tıklayın.
      </p>
      <p class="text-h6 text-weight-light text-grey-9">
        Yıldırım Hastanemizin organizasyon şemasını indirmek için
        <a
          href="src/assets/yh-org-semasi-2024-kek-4-yoneticiler-web-dosyasinin-kopyasi.pdf"
          target="_blank"
          class="text-primary"
          >buraya</a
        >
        tıklayın.
      </p>
    </PageContentWrapper>
  </q-page>
</template>

<script setup>
import { PageHeader, PageContentWrapper } from 'src/components/index'
</script>
