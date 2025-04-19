<template>
  <div>
    <q-card flat class="row items-center q-mb-xl">
      <q-card-section class="col-12 col-md-5">
        <div class="relative-position">
          <div class="blue-frame bg-primary rounded-borders"></div>
          <div class="teal-frame bg-secondary rounded-borders"></div>
          <q-img src="~assets/person.jpg" class="img rounded-borders" :ratio="4 / 5" fit="cover" />
        </div>
      </q-card-section>

      <q-card-section class="col-12 col-md-7 q-pl-md-xl content-section">
        <h2 class="text-h4 text-primary">Sağlık önce insana dokunmaktır.</h2>

        <p class="text-h6 text-weight-light text-grey-10">
          Özel Medicabil Hastaneleri temel kurulma amacı sektördeki boşlukları en iyi şekilde
          doldurup, insanların hak ettiği kaliteli sağlık hizmetine çok daha rahat ulaşmalarını
          sağlamaktır. Gelişen teknolojinin tüm imkanlarını kullanan hastanemiz, son sistem
          cihazlarla tedavi sürecini kısaltıyor.'
        </p>

        <q-card-actions vertical align="left" class="q-mt-xl q-pa-none">
          <q-btn
            to="/"
            unelevated
            no-caps
            no-wrap
            padding="md xl"
            label="Bizi Daha Yakından Tanıyın"
            color="secondary"
            class="text-body1 rounded-borders"
          />
        </q-card-actions>
      </q-card-section>
    </q-card>

    <StatisticsCard />
  </div>
</template>

<script setup>
import StatisticsCard from './StatisticsCard.vue'
</script>

<style scoped>
.img {
  z-index: 3;
}

.blue-frame {
  position: absolute;
  top: -15px;
  left: -15px;
  width: 80%;
  height: 80%;
  z-index: 1;
}

.teal-frame {
  position: absolute;
  bottom: -15px;
  right: -15px;
  width: 80%;
  height: 80%;
  z-index: 2;
}

.content-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/stethoscope.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.07;
}
</style>
