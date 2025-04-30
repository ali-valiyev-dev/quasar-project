<template>
  <q-page>
    <PageHeader
      img="~assets/bg_breadcrumbs.jpg"
      :breadcrumbs="[{ label: 'Blog', to: '/blog-yazilari' }, { label: blog?.title || 'Blog' }]"
    />

    <PageContentWrapper>
      <div class="row">
        <div class="col-12 col-md-8 q-pr-md-lg">
          <q-img :src="blog.img" :ratio="16 / 9" class="rounded-borders" />
          <div>
            <h1 class="text-h4">{{ blog.title }}</h1>
            <p>{{ blog.content }}</p>

            <h4>Grip Nedir?</h4>
            <p>
              Grip, influenza virüsünün neden olduğu, özellikle kış aylarında sıkça görülen bir
              solunum yolu enfeksiyonudur. Yüksek ateş, halsizlik, kas ağrıları, boğaz ağrısı ve
              öksürük gibi semptomlarla kendini gösterir. Grip, genellikle birkaç gün içinde
              kendiliğinden geçse de, bazı durumlarda ciddi komplikasyonlara yol açabilir.
            </p>

            <h4>Çocuklarda Grip (İnfluenza) Nasıl Tedavi Edilir?</h4>
            <p>
              Çocuklarda grip tedavisinde öncelikli olarak bol sıvı tüketimi ve dinlenme önerilir.
              Doktorun önerdiği ateş düşürücüler ve ağrı kesiciler kullanılabilir. Antiviral
              ilaçlar, özellikle hastalığın ilk 48 saatinde başlanırsa etkili olabilir. Çocukların
              bağışıklık sistemini desteklemek için dengeli beslenme ve yeterli uyku önemlidir.
            </p>

            <h4>İnfluenza Semptomları Nelerdir?</h4>
            <p>İnfluenza semptomları genellikle aniden başlar ve şunları içerebilir:</p>
            <ul>
              <li>Yüksek ateş</li>
              <li>Şiddetli halsizlik ve yorgunluk</li>
              <li>Kas ve eklem ağrıları</li>
              <li>Boğaz ağrısı</li>
              <li>Burun akıntısı veya tıkanıklığı</li>
              <li>Öksürük</li>
              <li>Baş ağrısı</li>
            </ul>

            <h4>Grip Aşısı Hakkında Bilinmesi Gerekenler</h4>
            <p>
              Grip aşısı, influenza virüsüne karşı koruma sağlayan en etkili yöntemlerden biridir.
              Özellikle risk grubundaki kişiler (65 yaş üstü bireyler, kronik hastalığı olanlar,
              hamileler ve çocuklar) için önerilir. Aşı, her yıl güncellenen virüs türlerine göre
              hazırlanır ve genellikle sonbahar aylarında yapılması tavsiye edilir.
            </p>
          </div>

          <h3 class="text-h5 text-primary q-mt-xl">Uzmanlarımıza Sorun</h3>
          <ContactForm class="q-mb-xl" />
        </div>

        <div class="col-12 col-md-4">
          <h3 class="text-h5 text-primary q-mt-none">Diğer Yazılar</h3>
          <q-list class="column">
            <q-item
              v-for="related in relatedBlogs"
              :key="related.id"
              :to="`/blog-yazilari/${related.id}`"
              target="_self"
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
import { ContactForm, PageContentWrapper, PageHeader } from 'src/components'
import { useRoute } from 'vue-router'
import { blogs } from '../data'

const route = useRoute()
const id = ref(route.params.id)

const blog = ref(blogs.find((b) => b.id === id.value))
const relatedBlogs = ref(blogs.filter((b) => b.id !== id.value).slice(0, 10))

watch(
  () => route.params.id,
  (newId) => {
    id.value = newId
    blog.value = blogs.find((b) => b.id === newId)
    relatedBlogs.value = blogs.filter((b) => b.id !== newId).slice(0, 10)
  },
)
</script>

<style scoped>
.q-list {
  gap: 16px;
}
</style>
