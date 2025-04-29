<template>
  <q-page>
    <PageHeader
      img="src/assets/bg_breadcrumbs.jpg"
      :breadcrumbs="[{ label: 'Medicabil Hastanesi Labaratuvar Test Rehberi' }]"
    />

    <PageContentWrapper>
      <q-img
        v-for="index in 24"
        :key="index"
        :src="`src/assets/labaratuvar-test-rehberi/klk_had_01_laboratuvar_test_rehberi_images_${index}.jpg`"
      />
    </PageContentWrapper>
  </q-page>
</template>

<script setup>
import { PageContentWrapper, PageHeader } from 'src/components/index'
</script>
