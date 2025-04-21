<template>
  <div class="text-center">
    <h1>
      {{ $route.path.split('/').pop() }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'MedicabilHakkinda',
}
</script>
