<template>
  <q-page>
    <PageHeader
      img="src/assets/bg_breadcrumbs.jpg"
      :breadcrumbs="[{ label: 'Tahlil Sonucumu Nasıl Öğrenebilirim?' }]"
    />

    <PageContentWrapper>
      <p>
        Bursa Özel Medicabil Hastanesi'ndeki muayeneniz esnasında doktorunuz tarafından istenen
        tahlil ve test sonuçlarını nasıl görebileceğinizi adım adım anlatmak istiyoruz.
      </p>
      <q-img
        src="~assets/tahlil-sonuclarini-nasil-gorebilirim/tahlil-sonuclarini-nasil-gorebilirim.jpg"
      />
      <ol>
        <li>
          <strong>Adım:</strong>
          Tetkik sonuç verme süresi dahilinde laboratuvar hekimi tarafından onaylanan sonuçlarınızı
          raporunuzda görebilirsiniz.
        </li>
        <li>
          <strong>Adım:</strong>
          <a href="http://www.medicabil.com">www.medicabil.com</a> adresindeki
          <strong>"Online Hizmetler"</strong>
          menüsünden <strong>"Tahlil sonuçları"</strong> ekranını açınız.
        </li>
        <li>
          <strong>Adım:</strong>
          Şifreniz ile TC Kimlik Numaranız veya hastanemizde kayıt esnasında verdiğiniz cep telefon
          numaranızı girerek sisteme giriş yapabilirsiniz.
        </li>
        <li>
          <strong>Adım:</strong>
          Eğer şifrenizi bilmiyor ya da hatırlamıyorsanız
          <strong> "Şifremi Öğrenmek İstiyorum"</strong> seçeneğine tıklayınız. Gelen
          <strong>"Şifremi unuttum"</strong> ekranında TC Kimlik Numaranızı girince, şifreniz kayıt
          esnasında verdiğiniz cep telefonu numarasına gelecektir. Gelen şifre ile 3. adımı
          uygulayınız.
        </li>
        <li>
          <strong>Adım:</strong>
          Laboratuvar veya radyoloji sonuçlarınızı görmek için
          <strong>"Tetkiklerim"</strong> seçeneğine tıklayınız. Detaylarını görmek istediğiniz
          işleminiz için, işlem satırının sonunda bulunan <strong>"Lab.Sonuç"</strong> veya
          <strong> "Rad.Sonuç"</strong> seçeneğini tıklayarak raporunuzu görüntüleyebilir ve/veya
          çıktısını alabilirsiniz.
        </li>
        <li>
          <strong>Adım:</strong>
          Dilerseniz, tetkik sonuçlarınızın rapor çıktısını mesai saatlerinde (08:30-17:30)
          hastaneye gelerek, size verilen sonuç alma barkodu ve resimli TC kimlik belgeniz ile sonuç
          alma bankosundaki (Ana Danışma) görevlimizden de alabilirsiniz.
        </li>
        <li>
          <strong>Adım:</strong>
          Bütün kayıtlarınız süresiz olarak kayıt altında tutulmaktadır, dilediğiniz her zaman
          sonuçlarınıza ulaşabilirsiniz.
        </li>
      </ol>

      <p>Bilgi güvenliğiniz için şifrenizi kimseyle paylaşmayınız.</p>
    </PageContentWrapper>
  </q-page>
</template>

<script setup>
import { PageContentWrapper, PageHeader } from 'src/components/index'
</script>
