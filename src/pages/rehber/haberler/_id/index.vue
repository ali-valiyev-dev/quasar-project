<template>
  <q-page>
    <PageHeader
      img="src/assets/bg_breadcrumbs.jpg"
      :breadcrumbs="[
        { label: 'Haberler', to: '/rehber/haberler' },
        { label: filteredNewsItem?.title || 'Haber' },
      ]"
    />

    <PageContentWrapper>
      <div class="row">
        <div class="col-12 col-md-8 q-pr-md-lg">
          <q-img :src="filteredNewsItem.img" :ratio="16 / 9" class="rounded-borders" />
          <h1 class="text-h4">{{ filteredNewsItem.title }}</h1>
          <p>{{ filteredNewsItem.content }}</p>

          <p>
            Medicabil Nilüfer Hastanesi’nde gerçekleşen 14. Yıl kutlamasına Medicabil Sağlık Grubu
            Yönetim Kurulu Başkanı Prof. Dr. Ömer Faruk Bilgen ile doktorları ve tüm hastane
            çalışanları katıldı.
          </p>

          <p>
            Hastane sahibi olma fikrinin öğrencilik yıllarında önce kurduğu bir hayalle başladığını
            söyleyen Prof. Dr. Ömer Faruk Bilgen, Hastalara daha kaliteli ve iyi hizmet verebilmek,
            uygulanabilir tedavilerin her birisini yapabilme fırsatını bulabilmek adına çıktığımız
            bu yolda ne mutlu ki 14 yıllık süre içerisinde Bursa’da referans gösterilebilecek bir
            konuma ulaştık dedi.
          </p>

          <p>
            Öncelikli felsefenin kalite ve yalın sağlık sistemini bir araya getirmek olduğunu
            belirten Prof. Dr. Ömer Faruk Bilgen, “Kaliteli sağlık hizmetimizden bir an olsun
            vazgeçmeden başta hekimlerimiz olmak üzere tüm çalışma arkadaşlarımızın gayretleriyle bu
            günlere geldik ve 14. yaşımıza ulaştık” diye konuştu.
          </p>

          <p>
            İlk günden itibaren 150. Yıl hedefinden vazgeçmediklerini de hatırlatan Prof. Dr. Ömer
            Faruk Bilgen, Medicabil markasının kaliteyle özdeşleşerek uzun yıllar boyunca ses
            getirmeye devam edeceğine inandığını söyledi.
          </p>

          <p>
            Programda söz alan hekimler ve çalışanlar duygularını paylaştıktan sonra Medicabil
            Sağlık Grubu 14. yıl kutlama pastası hep birlikte kesildi.
          </p>
        </div>

        <div class="col-12 col-md-4">
          <h3 class="text-h5 text-primary q-mt-none">Diğer Yazılar</h3>
          <q-list class="column">
            <q-item
              v-for="related in relatedNews"
              :key="related.id"
              :to="`/haberler/${related.id}`"
              clickable
              class="q-pa-none q-pr-sm rounded-borders"
            >
              <q-item-section avatar>
                <q-img width="100px" :src="related.img" class="rounded-borders" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-body1">{{ related.title }}</q-item-label>
                <q-item-label caption class="text-grey-6"> {{ related.date }} </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </PageContentWrapper>
  </q-page>
</template>

<script setup>
import { ref, watch } from 'vue'
import { PageContentWrapper, PageHeader } from 'src/components'
import { useRoute } from 'vue-router'
import { news } from '../data'

const route = useRoute()
const id = ref(route.params.id)

const filteredNewsItem = ref(news.find((b) => b.id === id.value))
const relatedNews = ref(news.filter((b) => b.id !== id.value).slice(0, 10))

watch(
  () => route.params.id,
  (newId) => {
    id.value = newId
    filteredNewsItem.value = news.find((b) => b.id === newId)
    relatedNews.value = news.filter((b) => b.id !== newId).slice(0, 10)
  },
)
</script>

<style scoped>
.q-list {
  gap: 16px;
}
</style>
