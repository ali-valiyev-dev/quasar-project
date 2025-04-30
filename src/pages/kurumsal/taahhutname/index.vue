<template>
  <q-page>
    <PageHeader
      img="~assets/bg_breadcrumbs.jpg"
      :breadcrumbs="[{ label: 'Kurumsal' }, { label: 'Taahütname' }]"
    />
    <PageContentWrapper>
      <p>Sayın Hastamız ve /veya Yakını,</p>

      <p>
        Bu belge hak ve sorumluluklarınız konusunda bilgilendirilmenizi ve tanı- tedavi işlemleriniz
        için onayınızı almak amacıyla hazırlanmıştır.
      </p>
      <a
        href="/taahutname/FR-HYH-06-taahhutname-ucretli-hasta.pdf"
        target="_blank"
        class="text-primary"
      >
        Taahhütname
      </a>
    </PageContentWrapper>
  </q-page>
</template>

<script setup>
import { PageHeader, PageContentWrapper } from 'src/components/index'
</script>
