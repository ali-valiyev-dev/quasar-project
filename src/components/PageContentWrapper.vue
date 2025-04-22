<template>
  <div class="wrapper q-mx-auto q-py-xl q-px-sm q-px-sm-lg q-px-md-xl">
    <slot />
  </div>
</template>

<style scoped>
.wrapper {
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  font-weight: 300;
  color: #424242;
}
</style>
