<template>
  <q-page>
    <PageHeader
      img="src/assets/bg_breadcrumbs.jpg"
      :breadcrumbs="[
        { label: 'Vlogs', to: '/rehber/vloglar' },
        { label: filteredVlogsItem?.title || 'Vlog' },
      ]"
    />

    <PageContentWrapper>
      <div class="row">
        <div class="col-12 col-md-8 q-pr-md-lg">
          <q-video :ratio="16 / 9" :src="filteredVlogsItem.videoUrl" class="rounded-borders" />

          <h1 class="text-h4">{{ filteredVlogsItem.title }}</h1>
          <p>{{ filteredVlogsItem.content }}</p>

          <h4>Oyun Bağımlılığı Nedir?</h4>
          <p>
            Bağımlılık kelimesini açıklamak gerekirse; olumsuz sonuçlarına rağmen yapılmaktan alı
            konulamayan her türlü zevk veren eylem ve davranışlar diyebiliriz. Oyun bağımlılığı,
            internet bağımlılığının alt çeşididir. Yani internetin oyun amacıyla sürekli ve
            tekrarlayıcı bir biçimde kullanımı oyun bağımlılığıdır. Bireyin akademik ve iş
            başarısının düşmesi, arkadaşlık ilişkilerinin bozulması, aile ile çatışmaların ortaya
            çıkması durumu artık bir bağımlılık işaretidir.
          </p>

          <h4>Oyunlar Neden Bağımlılık Yapar?</h4>

          <ul>
            <li>Algıda problem. (Seslenildiğinde cevap vermemesi gibi.)</li>
            <li>Akademik başarıda düşüş. (Ödev yapmak istememe.)</li>
            <li>Aile ve arkadaşlık ilişkilerinin bozulması.</li>
            <li>Dikkat eksikliği ve konuşma becerilerinde gerileme.</li>
            <li>Sadece internet ile ilgilenmek istenmesi, günlük işlerini bile yapmama.</li>
            <li>Oyun için uykusuz kalmayı dahi göze alma.</li>
            <li>Oyunun hayattaki zorluklarına ve engellerine dahi halen oyun oynamayı sürdürme.</li>
          </ul>

          <h4>Oyun Bağımlılığı Nasıl Bırakılır?</h4>

          <p>
            Oyun bağımlılığının tedavisi mümkündür fakat çokta kolay değildir. Bağımlılık oluştuktan
            sonra tedavi uzun sürebilmekte ve bazen de birtakım ilaçlara başvurmak
            gerekebilmektedir. Öncelikle bağımlılığın tedavisi bireyseldir ve altında yatan
            psikolojik sorunlara ulaşmak gerekir. Oyun bağımlılığını tedavi etmede öncelikle altta
            yatan asıl sebep tedavi edilmelidir. Tedavi sadece ilaç ile değildir. Anne ve baba ile
            birtakım oluşturarak bundan kurtulmakta mümkündür. Aileye bu konuda eğitim vermek
            oldukça yerinde olacaktır. Çocuğu anlamak, kabullenmek onu bu bağımlılıktan kurtarmak
            için beraber zaman geçirmek, etkinlikler yapmak ve çocuğun istediği bir spor
            aktivitesine yazdırmak olası çözümler arasındadır.
          </p>

          <DoctorsList :doctors="filteredVlogsItem.doctors" class="q-mt-xl" />
        </div>

        <div class="col-12 col-md-4">
          <h3 class="text-h5 text-primary q-mt-none">Diğer Yazılar</h3>
          <q-list class="column">
            <q-item
              v-for="related in relatedVlogs"
              :key="related.id"
              :to="`/vloglar/${related.id}`"
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
import { DoctorsList, PageContentWrapper, PageHeader } from 'src/components'
import { useRoute } from 'vue-router'
import { vlogs } from '../data'

const route = useRoute()
const id = ref(route.params.id)

const filteredVlogsItem = ref(vlogs.find((b) => b.id === id.value))
const relatedVlogs = ref(vlogs.filter((b) => b.id !== id.value).slice(0, 10))

watch(
  () => route.params.id,
  (newId) => {
    id.value = newId
    filteredVlogsItem.value = vlogs.find((b) => b.id === newId)
    relatedVlogs.value = vlogs.filter((b) => b.id !== newId).slice(0, 10)
  },
)
</script>

<style scoped>
.q-list {
  gap: 16px;
}
</style>
