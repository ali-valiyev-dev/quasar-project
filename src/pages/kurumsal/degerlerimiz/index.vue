<template>
  <q-page>
    <PageHeader
      img="~assets/custom-image.jpg"
      :breadcrumbs="[{ label: 'Kurumsal' }, { label: 'Değerlerimiz' }]"
    />
    <div class="container q-mx-auto q-my-xl">
      <p class="text-h6 text-weight-light text-grey-9">
        Bursa Özel Medicabil Hastanesi'nin en önemli varlığı çalışanlarıdır. “Değerlerimiz”
        çalışanlarımızın davranış biçimini belirleyen temel prensiplerdir ve Medicabil kurum
        kültürünün temelini oluşturur. Hizmet sunumumuzda rehberlik eden, “Değerlerimiz”:
      </p>

      <h4 class="text-h6 text-grey-9 q-my-none">İnsan Odaklıyız</h4>
      <p class="text-h6 text-weight-light text-grey-9 q-mb-lg">
        Medicabil, güler yüzlü hizmet anlayışı ile hastalarını önemser ve hastalarına bağlıdır.
        Hastalarımızın bugünkü ihtiyaçları ve beklentilerini karşılarken gelecekteki ihtiyaçlarını
        da anlamaya çalışır.
      </p>

      <h4 class="text-h6 text-grey-9 q-my-none">Farklıyız</h4>
      <p class="text-h6 text-weight-light text-grey-9 q-mb-lg">
        Medicabil, bilimden yararlanarak, sunduğu hizmetlerde fark yaratmanın heyecanını her zaman
        duyar ve farklılaşmayı amaçlar.
      </p>

      <h4 class="text-h6 text-grey-9 q-my-none">Katılımcıyız</h4>
      <p class="text-h6 text-weight-light text-grey-9 q-mb-lg">
        İnsan kaynağımız, kuruluşumuzun en önemli değeridir. Medicabil, vizyonumuza ulaşma sürecinde
        çalışanlarının bilgi, beceri ve tecrübelerinden faydalanır.
      </p>

      <h4 class="text-h6 text-grey-9 q-my-none">Bilgi Gizliliğine Özen Gösteririz</h4>
      <p class="text-h6 text-weight-light text-grey-9 q-mb-lg">
        Medicabil, hastalarına ve kuruma ait her türlü bilginin korunması ve gizli tutulması için
        gereken özeni gösterir.
      </p>

      <h4 class="text-h6 text-grey-9 q-my-none">Hasta ve Yakınlarının Haklarına Saygılıyız</h4>
      <p class="text-h6 text-weight-light text-grey-9 q-mb-lg">
        Medicabil, tüm faaliyetlerini hasta ve yakınlarının haklarına saygılı olarak yürütür.
      </p>

      <h4 class="text-h6 text-grey-9 q-my-none">Ahlaki Değerlere Duyarlıyız</h4>
      <p class="text-h6 text-weight-light text-grey-9 q-mb-lg">
        Medicabil, tüm faaliyetlerini ahlâki değerlere uygun olarak yürütür.
      </p>

      <h4 class="text-h6 text-grey-9 q-my-none">Yasalara Uyarız</h4>
      <p class="text-h6 text-weight-light text-grey-9 q-mb-lg">
        Medicabil, tüm faaliyetlerinde yasalara saygılıdır.
      </p>

      <h4 class="text-h6 text-grey-9 q-my-none">İş Güvenliğini Önde Tutarız</h4>
      <p class="text-h6 text-weight-light text-grey-9 q-mb-lg">
        Medicabil, çalışanlarının, hastalarının, hasta yakınlarının ve faaliyetleri ile etkileşen
        diğer insanların güvenliğinin kendi sorumluluğunda olduğunun bilincindedir. Bu nedenle
        faaliyetlerinden kaynaklanan riskleri en aza indirmeyi kendi görevi addeder.
      </p>

      <h4 class="text-h6 text-grey-9 q-my-none">Çevreyi Koruruz</h4>
      <p class="text-h6 text-weight-light text-grey-9 q-mb-lg">
        Medicabil, yaşanabilir bir dünyanın oluşumuna katkı sağlamak için çalışanlarını
        bilinçlendirmeyi ve faaliyetlerimizden kaynaklanan olumsuz çevresel etkileri azaltmayı bir
        görev olarak görür.
      </p>

      <h4 class="text-h6 text-grey-9 q-my-none">Kalite Yönetim Sistemlerine İnanırız</h4>
      <p class="text-h6 text-weight-light text-grey-9 q-mb-lg">
        Medicabil, kalite politikası gereği kalite yönetim sistemlerini uygulamanın, değişen şartlar
        ve ihtiyaçları doğrultusunda sürekli iyileştirmenin önemine inanır.
      </p>
    </div>
  </q-page>
</template>

<script setup>
import PageHeader from 'src/components/PageHeader.vue'
</script>

<style scoped>
.container {
  max-width: 1200px;
  display: flex;
  flex-direction: column;
}
</style>
