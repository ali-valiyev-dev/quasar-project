<template>
  <div class="wrapper q-mx-auto q-py-xl q-px-sm q-px-sm-lg q-px-lg-none">
    <slot />
  </div>
</template>

<style lang="scss">
.wrapper {
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  font-weight: 300;
  color: #424242;

  h4 {
    margin-top: 1rem;
    margin-bottom: 0;
    font-size: 1.5rem;
  }

  a {
    width: max-content;
  }
}
</style>
