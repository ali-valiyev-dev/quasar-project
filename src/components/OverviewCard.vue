<template>
  <q-card flat class="row">
    <q-card-section class="cover-image col-12 col-md-6 column items-center justify-center no-wrap">
      <q-btn
        href="https://www.youtube.com/embed/NkdD23jg7kE"
        target="_blank"
        flat
        round
        size="xl"
        class="bg-secondary q-mx-auto"
      >
        <q-icon name="play_arrow" color="white" />
      </q-btn>
    </q-card-section>

    <q-card-section class="col-12 col-md-6 text-left q-pa-none q-pl-md-xl">
      <h2 class="text-h4 text-primary">Özel Medicabil Hastanesi</h2>
      <p class="text-h6 text-weight-light text-grey-10">
        154 yataklı, 27 bin 500 metrekarelik alana sahip, gelişmiş teknolojileri ve ameliyathaneleri
        ile modern hastanelerimizde, 24 uzmanlık alanı, 6 profesör, 2 doçent, 2 yardımcı doçent, 60
        uzman, 10 pratisyen hekimimiz ve 70 hemşiremiz ile sizlere hizmet etmekten mutluluk
        duyuyoruz.
      </p>
    </q-card-section>
  </q-card>
</template>

<script setup>
// logic goes here
</script>

<style scoped>
.cover-image {
  background-image: url('../assets/medicabil_hospital.webp');
  background-size: cover;
  background-position: center;
  aspect-ratio: 1.5 / 1;
  border-radius: 4px !important;
  opacity: 0.8;
}
</style>
