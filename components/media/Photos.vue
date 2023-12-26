<script setup lang="ts">
import GridPictures from "./GridPictures.vue";

defineProps(["collection"]);
</script>

<template>
  <div>
    <GridPictures
      head="backdrops"
      :pictures="collection.backdrops"
      width="60rem"
    />
    <GridPictures
      head="posters"
      :pictures="collection.posters"
      gird-number="4"
      width="30rem"
    />
  </div>
</template>

<style scoped></style>
