<template>
  <q-page>
    <PageHeader
      img="src/assets/bg_breadcrumbs.jpg"
      :breadcrumbs="[{ label: 'Kurumsal' }, { label: 'Ziyaret Saatleri ve Kuralları' }]"
    />
    <PageContentWrapper>
      <ul>
        <li>Hasta odalarımıza enfeksiyon kontrolü amacıyla canlı çiçek kabul edilmemektedir.</li>
        <li>
          Genel sağlık ilkeleri gereği hasta odalarına çocuk ziyaretçi alınması uygun değildir.
        </li>
        <li>
          Hastaların diyetleri özeldir; hekimin izni olmadan hastaneye dışarıdan yiyecek ve içecek
          getirilmemelidir.
        </li>
        <li>
          Ziyaret esnasında gürültü yapmak, asayiş ve huzuru bozacak davranışlarda bulunulmamalıdır.
          Hastane dahilinde tütün ve alkollü içecek kullanılması kesinlikle yasaktır.
        </li>
        <li>
          Hasta, hasta yakını ve tüm ziyaretçi girişleri; 08.00-18.00 saatleri arasında A Blok ve C
          Blok ana giriş kapısından, diğer saatlerde acil servis kapısından yapılır. Gece 23:00 ’den
          sonraki klinik hastalarına yapılan ziyaret talebi İdari Müdür onayı ile sağlanır.
        </li>
      </ul>

      <h4>Yoğun Bakımda Yatan Hastalar</h4>

      <ul>
        <li>
          Pazartesi-Cumartesi günleri 10:00-12:00 saatleri arası yoğun bakım girişinde yoğun bakımda
          yatan hastaların yakınlarına yoğun bakım doktoru tarafından bilgilendirme yapılacaktır.
        </li>
        <li>
          Yüz yüze bilgilendirmeye gelemeyenler için; 13:00-15:00 saatleri arası telefonla arayıp
          bilgilendirme yapılacaktır. Pazar günleri bilgilendirme yapılmayacaktır.
        </li>
        <li>
          Hasta ile ilgili gerekli durumlarda yoğun bakımdan arayıp hasta yakını ile iletişime
          geçilecektir.
        </li>
        <li>
          Yenidoğan Yoğun Bakım Ünitesinde günde en az 2 kere ve hekimin uygun gördüğü zamanlarda
          ziyaret yapılabilir. Hekim sakıncalı olduğunu düşündüğü hastaların (yoğun bakım, bulaşıcı
          hastalık gibi) ziyaretine izin vermeyebilir.
        </li>
        <li>
          Tıbben sakınca olmadığı durumlarda hastaların yanında refakatçi olarak 1 kişi
          kalabilmektedir. Refakatçi değişiminde hemşirenin bilgilendirilmesi gerekmektedir.
        </li>
        <li>
          Özellikli hasta gruplarının bulunduğu bölümlerde, refakatçi uygulamaları bulunmamaktadır.
        </li>
      </ul>
    </PageContentWrapper>
  </q-page>
</template>

<script setup>
import { PageHeader, PageContentWrapper } from 'src/components/index'
</script>
