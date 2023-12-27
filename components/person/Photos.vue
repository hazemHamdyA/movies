<script setup lang="ts">
defineProps(["images"]);
</script>

<template>
  <div>
    <MediaGridPictures
      :pictures="images"
      head="Photos"
      gird-number="4"
      width="30rem"
    />
  </div>
</template>

<style scoped></style>
