<template>
  <div>
    <div>
      <h2 class="title text-h4 q-mt-none q-mb-xl text-center q-mx-auto q-ml-md-none q-mr-md-auto">
        Hizmetlerimiz
      </h2>
    </div>

    <q-card flat class="row items-center">
      <q-card-section
        class="column row-sm justify-center col-12 col-md-7 q-pa-none q-py-md"
        style="gap: 16px"
      >
        <q-item
          v-for="(service, index) in services"
          :key="index"
          clickable
          to="/"
          class="service-card column text-primary col col-sm-5 rounded-borders q-pa-md q-pa-sm-xl text-center"
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
import { ref } from 'vue'

const services = ref([
  { icon: 'language', title: 'Online İşlemler' },
  { icon: 'medical_services', title: 'Acil Servis' },
  { icon: 'vaccines', title: 'Evde Bakım Hizmeti' },
  { icon: 'health_and_safety', title: 'Özel Sağlık Sigortaları' },
])
</script>

<style scoped>
.title {
  width: max-content;
  border-bottom: 2px solid #000;
  border-color: #009aa2;
}

.service-card {
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
