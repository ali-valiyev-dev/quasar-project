<template>
  <q-page>
    <PageHeader
      img="src/assets/services.jpg"
      :breadcrumbs="[
        { label: 'Hizmet Alanları', to: '/hizmet-alanlari/tum-hizmet-alanlari' },
        { label: 'Anesteziyoloji ve Reanimasyon' },
      ]"
    />
    <PageContentWrapper>
      <p>
        Anesteziyoloji ve Reanimasyon, tüm cerrahi operasyonların ilk adımını yöneten ve cerrahi
        operasyonu başlatmaya yetkili bölümdür. Hastanın ağrısını önlemek ve refleksleri azaltmak
        için verilen tüm ilaçlar anestezi ve reanimasyon uzmanının sorumluluğundadır. Ameliyatın
        başlangıcında anesteziyoloji, hastanın kontrollü bir bilinç kaybı yaşamasını sağlar. Bu
        sayede hasta ağrı hissetmez ve psikolojik olarak olumsuz etkilenmesi engellenir.
      </p>

      <p>
        Anestezi uygulamaları ilaçlarla sağlanırken, canlandırma yöntemlerine kalp masajı ve suni
        solunum gibi uygulamalar uygulanmaktadır. Anestezi, hastanın bulguları sağlıklı
        sınırlardayken yapılır, reanimasyon uygulamaları için bulgularının durması veya gerilemesi
        gerekmektedir. Anestezi süreci sadece Anesteziyoloji ve Reanimasyon eğitimlerini tamamlama
        konusunda uzmanlaşmış kişiler tarafından yönetilebilir. Ancak operasyonlar sırasında
        anestezi teknisyenleri, cerrahlar, anestezistler ve hemşirelerin işbirliği gerekmektedir.
      </p>

      <SectionTitle title="İlgili Bloglar" class="q-mt-xl" />
      <BlogPosts :blogs="blogs" />

      <SectionTitle title="Ekibimiz" class="q-mt-xl" />
      <DoctorsList :doctors="doctors" />
    </PageContentWrapper>
  </q-page>
</template>

<script setup>
import { doctors, blogs } from '../data'
import {
  PageContentWrapper,
  PageHeader,
  DoctorsList,
  SectionTitle,
  BlogPosts,
} from 'src/components/index'
</script>
