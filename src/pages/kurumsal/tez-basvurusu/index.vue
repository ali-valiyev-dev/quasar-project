<template>
  <q-page>
    <PageHeader
      img="~assets/bg_breadcrumbs.jpg"
      :breadcrumbs="[{ label: 'Kurumsal' }, { label: 'Tez Başvurusu' }]"
    />
    <PageContentWrapper>
      <h4>Tez Başvurusu</h4>
      <p>
        Özel Medicabil Hastanesi' nde araştırma yapmak üzere Tez Başvuru Formu' nu
        doldurabilirsiniz. Başvurunuz her ayın 3. Çarşamba günü gerçekleştirilen Kalite Kurulu'nda
        değerlendirilerek Tez Başvuru Formu'nda belirttiğiniz iletişim bilgilerinden geri dönüş
        yapılacaktır.
      </p>

      <q-btn
        to="/tez-basvurusu"
        unelevated
        no-caps
        padding="md xl"
        label="Tez Başvurusu Yap"
        color="secondary"
        class="text-body1 rounded-borders q-mt-xl"
      />
    </PageContentWrapper>
  </q-page>
</template>

<script setup>
import { PageHeader, PageContentWrapper } from 'src/components/index'
</script>
