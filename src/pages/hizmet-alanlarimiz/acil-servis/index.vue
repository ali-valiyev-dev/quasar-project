<template>
  <q-page padding>
    <PageHeader
      img="src/assets/services.jpg"
      :breadcrumbs="[
        { label: 'Hizmet Alanları', to: '/hizmet-alanlarimiz/tum-hizmet-alanlari' },
        { label: 'Acil Servis' },
      ]"
    />
    <PageContentWrapper>
      <p>
        Acil servis, hastanelerin ve diğer sağlık kuruluşlarının acil tıbbi yardım gerektiren
        hastalara hizmet vermek amacıyla kurulan bir sağlık birimidir. Acil servisler, hastanın
        şikayetine ve sağlık durumunun aciliyetine göre kendi içinde çeşitli birimlere ayrılarak
        faaliyet göstermektedir. 1960’lı yıllardan itibaren acil servislerdeki yoğunluğun artmasının
        ardından bu birim, 3 gruba ayrılarak hizmet vermeye başlamıştır. Bu gruplar hastanın
        taşıdığı belirtilere göre sınıflandırılmakta olup şu şekilde sınıflandırılmaktadır: Kırmızı
        alan: Bu grup, öncelikli acil hastaları ilgilendirmektedir. Kırmızı alan birimi, hayati
        tehlike taşıyan ağır yaralanma ya da ağır hastalık geçirme durumları ile ilgilenmektedir.
      </p>

      <p>
        Kırmızı alana dahil edilen hastalar en acil durumu gerektiren sınıfta yer almaktadır. Kalp
        krizi belirtileri, ciddi solunum sorunu, kesici-delici alet yaralanmaları ve çoklu travma
        gibi sorunları olan kişilere yapılacak olan tıbbi müdahaleler, kırmızı alan biriminde
        gerçekleştirilmektedir. Ayrıca ambulansla acil servise getirilen hastalar da bu gruba dahil
        edilmektedir.Sarı alan: Kişinin geçirdiği bir kaza, travma vb. sonucunda vücudunda kalıcı
        hasar oluşma riski olan hastalıklara sahip olması durumunda yapılacak tıbbi müdahale için
        sarı alan birimi hizmet vermektedir.
      </p>

      <p>
        Sarı alana yönlendirilen hastalar, müdahaleden önce bir süre bekleyebilmektedir.Yeşil alan:
        Hafif yaralanma ve hastalık durumlarında yeşil alan birimi hizmet vermektedir. Yeşil
        alandaki hastaların sağlık durumu, sarı ve kırmızı alandaki hastalara göre daha az aciliyet
        barındırmaktadır. Bu sebeple, bu gruptaki hastalar özellikle kalabalık hastanelerde uzun
        süre bekleyebilmektedir. Hastaların triyaj (acil servislerde tıbbi müdahale önceliklerini
        belirleme sistemi) işlemi gerçekleştirildikten sonra yukarıda açıklaması yapılan ilgili
        birimde müdahalesinin yapılması gerekmektedir.
      </p>

      <h4>Acil Servis Hangi Hastalıklara Bakar?</h4>

      <p>
        Acil servis, yukarıda belirtildiği üzere hafif hastalıklardan ağır hastalık ve yaralanmalara
        kadar geniş bir yelpazede hizmet vermektedir. Solunum sıkıntısından kulak ağrısına,
        kanamadan boğaz ağrısına kadar pek çok sağlık sorunu ile acil servis ilgilenmektedir. Acil
        servis kapsamında müdahale edilen hastalıklar, triyaj kategorilerinin tanımı çerçevesinde şu
        şekildedir:Kırmızı alan biriminin kapsamında yer alan hastalıklar şu şekilde
        sıralanmaktadır:
      </p>
      <ul>
        <li>Şok</li>
        <li>Kalp durması (Kardiyopulmoner arrest)</li>
        <li>Koma</li>
        <li>Havayolu tıkanması</li>
        <li>Solunum sıkıntısı</li>
        <li>Çoklu travma</li>
        <li>Anafilaksi (Sonu ölüme kadar varabilen alerjik şok)</li>
        <li>Febril konvulsiyon (Özellikle 3-5 yaş arası çocuklarda sık görülmektedir)</li>
        <li>Ciddi ağrılı durumlar</li>
        <li>Zehirlenme</li>
        <li>Vücudun çeşitli yerlerinde kontrol edilemeyen kanamalar</li>
        <li>Doğum</li>
      </ul>

      <p>Sarı alan biriminin kapsamında yer alan hastalıklar şu şekilde sıralanmaktadır:</p>

      <ul>
        <li>Karın ağrısı</li>
        <li>Yutma zorluğu ile boğaz ağrısı</li>
        <li>Orta derece yanıklar</li>
        <li>Renal taşlar (böbrek taşları)</li>
        <li>Uzun kemik ya da kalça kırıkları</li>
        <li>Vücutta ampütasyon ile olmayan kesikler</li>
        <li>Çoklu ya da açık kırıklar</li>
        <li>Ateşsiz ciddi baş ağrısı</li>
      </ul>

      <p>Yeşil alan biriminin kapsamında yer alan hastalıklar şu şekilde sıralanmaktadır:</p>
      <ul>
        <li>Burkulmalar</li>
        <li>Kronik eklem ağrıları</li>
        <li>Kronik baş ağrısı</li>
        <li>Döküntü</li>
        <li>Yara bakımı</li>
        <li>Vajinal akıntı</li>
        <li>Soğuk algınlığı şikayetleri</li>
        <li>Minör kulak ağrısı</li>
        <li>Minör izole ekstremite (uzuv) yaralanması</li>
        <li>Anafilaksi oluşturmayan (alerjik şok etkisi yaratmayan) böcek ısırıkları</li>
        <li>Sütür alımı (dikişlerin alınması)</li>
      </ul>

      <p>
        Uluslararası parametreye göre acil servisin ilgilendiği hastalıkların listesi ise aşağıda
        sunulmuştur:
      </p>

      <ul>
        <li>Terör, sabotaj, kurşunlanma, bıçaklanma, kavga, vb</li>
        <li>Tecavüz</li>
        <li>İntihar girişimi</li>
        <li>Trafik kazası</li>
        <li>Ciddi yanıklar</li>
        <li>Bilinç kaybına neden olan her türlü durum</li>
        <li>
          Üremik ve diyabetik koma [Böbrek yetersizliğinin ve diyabet (şeker hastalığı)nın yol
          açtığı bilinç bulanıklığından başlayıp tam bilinç kaybına (koma) kadar yaşanabilecek
          durumlar]
        </li>
        <li>Menenjit, ensefalit, beyin absesi</li>
        <li>Ani felçler (inme)</li>
        <li>
          Ciddi alerjiye bağlı vakalar (Bu durumlarda kalp ritminde bozulma, solunum yollarında
          tıkanmaya yol açabilecek ciddiyette alerji ya da tansiyon düşmesi gibi belirtiler
          gözlenebilmektedir)
        </li>
        <li>Migren ve/veya kusma, bilinç kaybıyla birlikte görülen baş ağrıları</li>
        <li>Donma, soğuk çarpması</li>
        <li>Dalgıç (dekompresyon) hastalığı (Halk arasında “vurgun yemek” adıyla bilinir)</li>
        <li>Yüksekten düşme</li>
        <li>Ciddi göz yaralanmaları</li>
        <li>Aşırı saldırganlığa yol açan akut psikotik vakalar</li>
        <li>Ciddi iş kazaları, uzuv kopması</li>
        <li>
          Alt ekstremite ve omurga kırıkları: büyük dış veya iç kanamaya yol açan bacak kırıkları ve
          her türlü omurga kırıkları.
        </li>
        <li>Renal kolik</li>
        <li>
          Travmaya bağlı ortaya çıkan hayati tehlike taşıyan iç ya da dış kanamalar (akut masif
          kanamalar)
        </li>
        <li>
          İçi boş organların (mide, barsak vb) tıkanması, delinmesi, iltihaplanması ya da
          düğümlenmesi (akut batın)
        </li>
        <li>Elektrik çarpması</li>
        <li>
          Kalp krizi, aritmi (kalp ritminin düzensizleşmesi), hipertansif (yüksek tansiyonla ilgili)
          krizler (Bu gibi durumlar beyin kanamasına sebebiyet verebilmektedir)
        </li>
        <li>Astım krizi, akut solunum problemleri</li>
        <li>Suda boğulma</li>
        <li>Sıcak çarpması</li>
        <li>Zehirlenmeler</li>
        <li>Genel durum bozukluğun ile birlikte seyreden diyaliz hastalığı</li>
        <li>Yenidoğanda bilinç kaybı</li>
        <li>
          Enfeksiyon hastalıkları, sıcak çarpması, zehirlenme gibi çeşitli sebeplerle ortaya
          çıkabilen yüksek ateş sorunu (Kalp ritim bozukluğu, havale gibi sorunlara yol
          açabilmektedir. Ateş, ortalama 39,5 ve üzerindedir)
        </li>
        <li>Su kesesinin boşaldığı, başlamış doğum faaliyetleri</li>
        <li>
          Yetersiz bakım, ağır hastalık, yeterli beslenmeme, yaşlılık gibi nedenlerden kaynaklı
          genel sağlık durumunun tehlikeli boyutlara varan derecede bozulması
        </li>
      </ul>

      <SectionTitle title="Ekibimiz" class="q-mt-lg" />
      <DoctorsList :doctors="doctors" />
    </PageContentWrapper>
  </q-page>
</template>

<script setup>
import { PageContentWrapper, PageHeader, DoctorsList, SectionTitle } from 'src/components/index'
import { doctors } from '../data'
</script>

<style scoped>
.title {
  width: max-content;
  border-bottom: 2px solid #009aa2;
}
</style>
