<template>
  <q-toolbar
    class="full-width row items-center q-py-sm"
    style="gap: 16px; border-bottom: 1px solid #e0e0e0"
  >
    <q-btn
      to="/iletisim"
      unelevated
      no-caps
      no-wrap
      padding="xs md"
      label="İletişim"
      color="secondary"
      class="col col-sm-auto rounded-borders"
    />
    <q-btn
      href="https://online.medicabil.com/tetkiklerim"
      no-caps
      unelevated
      no-wrap
      padding="xs md"
      label="E-Sonuç"
      color="secondary"
      class="col col-sm-auto rounded-borders"
    />
    <q-btn
      href="https://online.medicabil.com"
      no-caps
      unelevated
      no-wrap
      padding="xs md"
      label="E-Randevu"
      color="secondary"
      class="col col-sm-auto rounded-borders"
    />

    <q-space class="gt-xs" />

    <LangSelect class="gt-xs" />
  </q-toolbar>
</template>

<script setup>
import LangSelect from './LangSelect.vue'
</script>
