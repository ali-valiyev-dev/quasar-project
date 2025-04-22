<template>
  <q-page>
    <PageHeader
      img="src/assets/bg_breadcrumbs.jpg"
      :breadcrumbs="[{ label: 'Kurumsal' }, { label: 'KVKK-Kişisel Verilerin Korunması Kanunu' }]"
    />
    <PageContentWrapper>
      <p>
        Değerli Kişisel veri sahipleri; 6698 Sayılı “Kişisel Verilerin Kkorunması Kanunu" gereği
        detaylı bilgilendirmeyi sayfa içeriklerinde sunmaktayız. Bu içerikleri aşağıdaki kısayolları
        kullanarak erişebilirsiniz.
      </p>

      <h4>Çalışan Adayı</h4>
      <a href="src/assets/kvkk/calisan-kvkk.pdf" target="_blank" class="text-primary">
        Çalışan Adayı KVKK Politikası
      </a>

      <h4>Medicabil Nilüfer</h4>
      <a href="src/assets/kvkk/NILUFER-KVKK-politika.pdf" target="_blank" class="text-primary">
        KVKK Politikası
      </a>
      <a
        href="src/assets/kvkk/NILUFER-aydinlatma-metni-internet.pdf"
        target="_blank"
        class="text-primary"
      >
        Aydınlatma Metni - İnternet
      </a>
      <a
        href="src/assets/kvkk/NILUFER-KVKK-Aydinlatma-Onam-surec.pdf"
        target="_blank"
        class="text-primary"
      >
        Aydınlatma Metni Onam Süreci
      </a>

      <a
        href="src/assets/kvkk/Nilufer-VeriSahibiBasvuruFormu.pdf"
        target="_blank"
        class="text-primary"
      >
        Veri Sahibi Başvuru Formu
      </a>

      <h4>Medicabil Yıldırım</h4>
      <a href="src/assets/kvkk/YILDIRIM-KVKK-politika.pdf" target="_blank" class="text-primary">
        KVKK Politikası
      </a>
      <a
        href="src/assets/kvkk/YILDIRIM-aydinlatma-metni-internet.pdf"
        target="_blank"
        class="text-primary"
      >
        Aydınlatma Metni - İnternet
      </a>
      <a
        href="src/assets/kvkk/YILDIRIM-KVKK-Aydinlatma-Onam-surec.pdf"
        target="_blank"
        class="text-primary"
      >
        Aydınlatma Metni Onam Süreci
      </a>

      <a
        href="src/assets/kvkk/YILDIRIM-VeriSahibiBasvuruFormu.pdf"
        target="_blank"
        class="text-primary"
      >
        Veri Sahibi Başvuru Formu
      </a>

      <h4>Radsomer</h4>
      <a href="src/assets/kvkk/RADSOMER-KVKK-politika.pdf" target="_blank" class="text-primary">
        KVKK Politikası
      </a>
      <a
        href="src/assets/kvkk/RADSOMER-aydinlatma-metni-internet.pdf"
        target="_blank"
        class="text-primary"
      >
        Aydınlatma Metni - İnternet
      </a>
      <a
        href="src/assets/kvkk/RADSOMER_VeriSahibiBasvuruFormu.pdf"
        target="_blank"
        class="text-primary"
      >
        Aydınlatma Metni Onam Süreci
      </a>
    </PageContentWrapper>
  </q-page>
</template>

<script setup>
import { PageHeader, PageContentWrapper } from 'src/components/index'
</script>
