<template>
  <div>
    <pre>
  {{ data }}
  </pre
    >
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/movies/popular");
</script>

<style scoped lang="scss">
h1 {
  color: blue;
}
</style>
