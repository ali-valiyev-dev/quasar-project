<template>
  <q-page>
    <PageHeader
      img="~assets/bg_breadcrumbs.jpg"
      :breadcrumbs="[{ label: 'Kurumsal' }, { label: 'Değerlerimiz' }]"
    />
    <PageContentWrapper>
      <p>
        Bursa Özel Medicabil Hastanesi'nin en önemli varlığı çalışanlarıdır. “Değerlerimiz”
        çalışanlarımızın davranış biçimini belirleyen temel prensiplerdir ve Medicabil kurum
        kültürünün temelini oluşturur. Hizmet sunumumuzda rehberlik eden, “Değerlerimiz”:
      </p>

      <h4>İnsan Odaklıyız</h4>
      <p>
        Medicabil, güler yüzlü hizmet anlayışı ile hastalarını önemser ve hastalarına bağlıdır.
        Hastalarımızın bugünkü ihtiyaçları ve beklentilerini karşılarken gelecekteki ihtiyaçlarını
        da anlamaya çalışır.
      </p>

      <h4>Farklıyız</h4>
      <p>
        Medicabil, bilimden yararlanarak, sunduğu hizmetlerde fark yaratmanın heyecanını her zaman
        duyar ve farklılaşmayı amaçlar.
      </p>

      <h4>Katılımcıyız</h4>
      <p>
        İnsan kaynağımız, kuruluşumuzun en önemli değeridir. Medicabil, vizyonumuza ulaşma sürecinde
        çalışanlarının bilgi, beceri ve tecrübelerinden faydalanır.
      </p>

      <h4>Bilgi Gizliliğine Özen Gösteririz</h4>
      <p>
        Medicabil, hastalarına ve kuruma ait her türlü bilginin korunması ve gizli tutulması için
        gereken özeni gösterir.
      </p>

      <h4>Hasta ve Yakınlarının Haklarına Saygılıyız</h4>
      <p>Medicabil, tüm faaliyetlerini hasta ve yakınlarının haklarına saygılı olarak yürütür.</p>

      <h4>Ahlaki Değerlere Duyarlıyız</h4>
      <p>Medicabil, tüm faaliyetlerini ahlâki değerlere uygun olarak yürütür.</p>

      <h4>Yasalara Uyarız</h4>
      <p>Medicabil, tüm faaliyetlerinde yasalara saygılıdır.</p>

      <h4>İş Güvenliğini Önde Tutarız</h4>
      <p>
        Medicabil, çalışanlarının, hastalarının, hasta yakınlarının ve faaliyetleri ile etkileşen
        diğer insanların güvenliğinin kendi sorumluluğunda olduğunun bilincindedir. Bu nedenle
        faaliyetlerinden kaynaklanan riskleri en aza indirmeyi kendi görevi addeder.
      </p>

      <h4>Çevreyi Koruruz</h4>
      <p>
        Medicabil, yaşanabilir bir dünyanın oluşumuna katkı sağlamak için çalışanlarını
        bilinçlendirmeyi ve faaliyetlerimizden kaynaklanan olumsuz çevresel etkileri azaltmayı bir
        görev olarak görür.
      </p>

      <h4>Kalite Yönetim Sistemlerine İnanırız</h4>
      <p>
        Medicabil, kalite politikası gereği kalite yönetim sistemlerini uygulamanın, değişen şartlar
        ve ihtiyaçları doğrultusunda sürekli iyileştirmenin önemine inanır.
      </p>
    </PageContentWrapper>
  </q-page>
</template>

<script setup>
import { PageHeader, PageContentWrapper } from 'src/components/index'
</script>
