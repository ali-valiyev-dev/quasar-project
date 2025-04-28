<template>
  <q-form ref="formRef" @submit="onSubmit" class="column form-container">
    <div class="row form-row">
      <q-input
        filled
        v-model="firstName"
        placeholder="Ad *"
        lazy-rules
        :rules="[requiredRule]"
        class="col-12 col-md-6 q-pr-md-md"
        aria-label="Ad"
      />
      <q-input
        filled
        v-model="lastName"
        placeholder="Soyadınız *"
        lazy-rules
        :rules="[requiredRule]"
        class="col-12 col-md-6"
        aria-label="Soyadınız"
      />
    </div>

    <div class="row form-row">
      <q-input
        filled
        v-model="email"
        placeholder="E-Posta *"
        type="email"
        lazy-rules
        :rules="[emailRule]"
        class="col-12 col-md-6 q-pr-md-md"
        aria-label="E-Posta"
      />

      <div class="row no-wrap items-start col-12 col-md-6 rounded-borders overflow-hidden">
        <q-select
          filled
          square
          v-model="countryCode"
          :display-value="countryCode"
          :options="countryCodes"
          option-label="name"
          option-value="code"
          class="col-auto"
          aria-label="Ülke Kodu"
        />

        <q-input
          filled
          square
          v-model="phone"
          placeholder="Telefon *"
          type="tel"
          lazy-rules
          :rules="[requiredRule]"
          class="col"
          aria-label="Telefon"
        />
      </div>
    </div>

    <q-input
      filled
      v-model="subject"
      placeholder="Konu *"
      lazy-rules
      :rules="[requiredRule]"
      aria-label="Konu"
    />

    <q-input
      filled
      v-model="message"
      placeholder="Mesajınız *"
      type="textarea"
      lazy-rules
      :rules="[requiredRule]"
      autogrow
      aria-label="Mesajınız"
    />

    <div class="row no-wrap items-start">
      <q-checkbox v-model="accept" color="secondary" aria-label="Onay Kutusu" />
      <div class="text-body1">
        Kayıt işlemleri sırasında verdiğim kişisel veri ve iletişim bilgilerimin, Özel Medicabil
        Hastanesi tarafından 6698 sayılı
        <a href="#" target="_blank" class="text-secondary link">
          Kişisel Verilerin Korunma Kanunu
        </a>
        kapsamında kayıt edilmesine onay veriyorum.
      </div>
    </div>

    <div>
      <q-btn
        unelevated
        no-caps
        no-wrap
        type="submit"
        padding="md xl"
        label="Gönder"
        color="secondary"
        class="text-body1 q-mt-md rounded-borders"
      />
    </div>
  </q-form>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { countryCodes } from 'src/pages/blog-yazilari/codes'

const $q = useQuasar()

const formRef = ref(null)
const firstName = ref(null)
const lastName = ref(null)
const email = ref(null)
const phone = ref(null)
const subject = ref(null)
const message = ref(null)
const accept = ref(false)
const countryCode = ref('+90')

const requiredRule = (val) => (val && val.length > 0) || 'Bu alan zorunludur'
const emailRule = (val) => /.+@.+\..+/.test(val) || 'Geçerli bir e-posta adresi girin'

const onSubmit = () => {
  const fullPhone = `${countryCode.value} ${phone.value}`
  const formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phone: fullPhone,
    subject: subject.value,
    message: message.value,
    accept: accept.value,
  }

  console.log('Form Data:', formData)

  $q.notify({
    color: 'green-5',
    textColor: 'white',
    icon: 'done',
    message: `Form başarıyla gönderildi`,
  })
}
</script>

<style scoped>
.form-container {
  row-gap: 16px;
}

.form-row {
  row-gap: 16px;
}

.link {
  text-decoration: none;
}
</style>
