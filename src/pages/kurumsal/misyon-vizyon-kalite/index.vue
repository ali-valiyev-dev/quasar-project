<template>
  <q-page>
    <PageHeader
      img="src/assets/bg_breadcrumbs.jpg"
      :breadcrumbs="[{ label: 'Kurumsal' }, { label: 'Misyon & Vizyon & Kalite Politikamız' }]"
    />
    <PageContentWrapper>
      <p>
        Bursa Özel Medicabil Hastanesinin vizyon, misyon, kurumsal amaç, kurumsal hedef ve kalite
        politikalarıyla alakalı prensip ve ilkeleri aşağıda maddelenmiştir.
      </p>

      <h4>Vizyonumuz</h4>
      <p>
        Yalın Yönetim yaklaşımı ile geliştirdiğimiz ve iyileştirdiğimiz hizmet alanlarımızı
        israfardan arındırarak;
      </p>
      <ul>
        <li>Hastalarımız ve çalışanlarımızın memnuniyetinin üst düzeyde olduğu,</li>
        <li>
          Bilimsel ve akademik çalışmalarımızla sağlık hizmetinin yükseltilmesine katkı sağlayarak
          hastalarımız ve toplum için ulusal ve uluslararası düzeyde vazgeçilmez ve izlenen bir
          referans merkezi olmaktır.
        </li>
      </ul>

      <h4>Misyonumuz</h4>
      <p>Üst düzey teknoloji alt yapısı ile konularında uzman insan gücünü bir araya getirerek;</p>
      <ul>
        <li>Hastaya ve haklarına saygılı,</li>
        <li>Etik kurallara bağlı,</li>
        <li>Güvenilir,</li>
        <li>Sağlık hizmeti sunumunda hakkaniyetli,</li>
        <li>
          Ulusal ve uluslararası düzeyde ihtiyaç duyanların kolaylıkla ulaşabildiği nitelikli sağlık
          hizmeti sunmaktır.
        </li>
      </ul>

      <h4>Kurumsal Amaçlarımız</h4>
      <p>Tüm bireylerin sağlık gereksinimlerini üst düzey nitelikte ve güvenlikte karşılamaktır.</p>

      <h4>Kurumsal Hedeflerimiz</h4>
      <ul>
        <li>Sıfır enfeksiyon oranı</li>
        <li>Hızlı iyileşme-Erken taburculuk</li>
        <li>Aynı şikayetle geri dönüşün azaltılması</li>
        <li>Dijital Dönüşüm</li>
        <li>Yenilikçilik</li>
      </ul>

      <h4>Kalite Politikamız</h4>
      <p>
        Bursa Özel Medicabil Hastanesi olarak, kurumsal kimliğimizi geliştirmek ve vizyonumuza
        ulaşmak için:
      </p>
      <ul>
        <li>Hasta ve yakınlarının haklarına saygı göstermeyi,</li>
        <li>Değerlerimize uygun davranmayı,</li>
        <li>Etik kurallara uymayı,</li>
        <li>Ulusal ve uluslararası standartlarda sağlık hizmeti sunmayı,</li>
        <li>
          Yönetim Sistemlerimizi etkinleştirip Yalın Yönetim yaklaşımı ile israfardan arındırarak
          sürekli iyileştirmeyi taahhüt ediyoruz.
        </li>
      </ul>
    </PageContentWrapper>
  </q-page>
</template>

<script setup>
import { PageHeader, PageContentWrapper } from 'src/components/index'
</script>
