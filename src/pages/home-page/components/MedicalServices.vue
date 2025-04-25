<template>
  <div>
    <SectionTitle title="Hizmetlerimiz" />

    <q-card flat class="row items-center">
      <q-card-section class="service-cards col-12 col-md-7 q-pa-md">
        <q-item
          v-for="(service, index) in services"
          :key="index"
          clickable
          to="/"
          class="service-card column col rounded-borders q-pa-xl q-pa-md-xl text-center"
        >
          <q-icon :name="service.icon" color="secondary" size="lg" class="icon q-mx-auto q-mb-md" />
          <q-item-label class="text-h6 text-weight-light text-grey-10">
            {{ service.title }}
          </q-item-label>
        </q-item>
      </q-card-section>

      <q-card-section class="col-12 col-md-5">
        <div class="relative-position">
          <div class="blue-frame bg-secondary rounded-borders"></div>
          <div class="teal-frame bg-primary rounded-borders"></div>
          <q-img src="~assets/doctor.jpg" class="img rounded-borders" :ratio="4 / 5" fit="cover" />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import SectionTitle from 'src/components/SectionTitle.vue'
import { services } from '../data'
</script>

<style scoped>
.title {
  width: max-content;
  border-bottom: 2px solid #000;
  border-color: #009aa2;
}

.service-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
}

.service-card {
  width: 100%;
  border: 1px solid #cbcbcb;
}

.icon {
  background-color: #009aa21a;
  border-radius: 50%;
  padding: 20px;
}

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
</style>
