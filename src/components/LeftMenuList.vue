<template>
  <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
    <q-list padding>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="inbox" />
        </q-item-section>

        <q-item-section> Inbox </q-item-section>
      </q-item>

      <q-item active clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="star" />
        </q-item-section>

        <q-item-section> Star </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="send" />
        </q-item-section>

        <q-item-section> Send </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="drafts" />
        </q-item-section>

        <q-item-section> Drafts </q-item-section>
      </q-item>
    </q-list>
  </q-scroll-area>
</template>

<script setup>
//
</script>
