<template>
  <q-toolbar
    class="full-width row items-center q-py-sm"
    style="gap: 16px; border-bottom: 1px solid #e0e0e0"
  >
    <q-btn
      to="/"
      unelevated
      no-caps
      no-wrap
      dense
      padding="sm xl"
      label="İletişim"
      color="secondary"
      class="col col-sm-auto rounded-borders"
    />
    <q-btn
      to="/"
      no-caps
      unelevated
      no-wrap
      dense
      padding="sm xl"
      label="E-Sonuç"
      color="secondary"
      class="col col-sm-auto rounded-borders"
    />
    <q-btn
      to="/"
      no-caps
      unelevated
      no-wrap
      dense
      padding="sm xl"
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

// Import necessary components
</script>
