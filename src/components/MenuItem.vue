<template>
  <q-item
    @click="handleClick"
    :to="to"
    :href="href"
    class="full-width"
    :class="{ 'bg-secondary': isActive, 'hover-effect': true }"
    active-class="q-item-no-link-highlighting"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :color="isActive ? 'white' : 'grey-8'" :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label
        :class="{
          'text-white': isActive,
          'text-grey-8': !isActive,
          'q-pl-lg': !icon,
        }"
      >
        {{ label }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    to: String,
    href: String,
    icon: String,
    label: String,
    action: Function,
    isActive: Boolean,
  },

  name: 'MenuItem',
  methods: {
    handleClick(event) {
      this.$emit('item-clicked')
      if (this.action) {
        event.preventDefault()
        this.action()
      } else {
        this.$router.push(this.to)
      }
    },
  },
})
</script>
