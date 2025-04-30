<template>
  <PageContentWrapper>
    <div class="text-center">
      <div style="font-size: 18vh">404!</div>
      <div class="text-h4 text-bold q-mb-md">Bulunamadı.</div>
      <div class="text-h6 text-weight-light">
        Aradığınız sayfa Bulunamadı. taşınmış veya silinmiş olabilir.
      </div>

      <q-btn
        to="/"
        unelevated
        no-caps
        no-wrap
        padding="md xl"
        label="Anasayfaya Git"
        color="secondary"
        class="text-body1 rounded-borders q-mt-xl"
      />
    </div>
  </PageContentWrapper>
</template>

<script setup>
import { PageContentWrapper } from 'src/components/index'
</script>
