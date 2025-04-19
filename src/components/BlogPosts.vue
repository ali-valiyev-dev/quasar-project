<template>
  <div>
    <div>
      <h2 class="title text-h4 q-mt-none q-mb-xl text-center q-mx-auto q-ml-md-none q-mr-md-auto">
        Blog
      </h2>
    </div>

    <div class="cards row justify-center">
      <div class="col-md" v-for="(blog, index) in blogs" :key="index">
        <BlogPost :title="blog.title" :body="blog.body" :image="blog.image" :link="blog.link" />
      </div>
    </div>
  </div>
</template>

<script setup>
import BlogPost from './BlogPost.vue'

const blogs = [
  {
    title: 'Mukus (Balgam) Nedir? Balgam Rengi Ne Anlama Gelir ve Sağlığımızı Nasıl Etkiler?',
    body: `Mukus ya da balgam, bağışıklık sisteminin bir parçası olan berrak, kaygan, jel benzeri bir
    maddedir. Mukoza zarlarını kaplar ve mikropları, zararlı parçacıkları yakalayıp yok etmeye veya
    temizlemeye yardımcı olur. Ayrıca, mukus vücudun nem dengesini korur ve solunum yollarını
    koruyarak enfeksiyon riskini azaltır.`,
    image: '',
    link: '/',
  },
  {
    title: 'Sağlıklı Beslenme: Günlük İpuçları ile Daha İyi Bir Yaşam Tarzı Nasıl Benimsenir?',
    body: `Sağlıklı beslenme, vücudunuzun ihtiyaç duyduğu tüm besinleri almanızı sağlar. Dengeli bir
    diyet, enerji seviyenizi artırır ve genel sağlığınızı iyileştirir. Günlük beslenme alışkanlıklarınıza
    taze sebze ve meyveler eklemek, işlenmiş gıdalardan uzak durmak ve yeterli su tüketmek,
    sağlıklı bir yaşam tarzı için önemlidir.`,
    image: '',
    link: '/',
  },
  {
    title: 'Egzersizin Faydaları ve Motivasyon İpuçları ile Aktif Bir Yaşam Sürdürmenin Önemi',
    body: `Egzersiz yapmak, fiziksel ve zihinsel sağlığınızı iyileştirmenin harika bir yoludur. Düzenli
    egzersiz, stres seviyelerini azaltır ve enerji seviyenizi artırır. Ayrıca, egzersiz kalp sağlığını
    destekler, kas gücünü artırır ve kilo kontrolüne yardımcı olur. Motivasyonunuzu korumak için
    hedefler belirleyin ve bir egzersiz rutini oluşturun.`,
    image: '',
    link: '/',
  },
]
</script>

<style scoped>
.title {
  width: max-content;
  border-bottom: 2px solid #000;
  border-color: #009aa2;
}

.cards {
  gap: 16px;
}
</style>
