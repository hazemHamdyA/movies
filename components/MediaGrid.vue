<template>
  <section class="continer">
    <div v-for="media in medias" :key="media.id">
      <NuxtImg
        v-if="media.poster_path"
        :src="customizePics(media.poster_path)"
        :alt="media.title"
        mb-2
      />
      <div
        v-else
        class="flex items-center justify-center w-[20rem] h-[30rem]"
        bg-base
      >
        <Icon name="mdi:magnify-close" class="text-4xl" font-base />
      </div>
      <h3 class="font-medium text-lg">{{ media.title ?? media.name }}</h3>
      <div class="flex items-center gap-2">
        <StarRate :value="media.vote_average" class="w25" />
        <p font-base class="font-semibold">
          {{ media.vote_average?.toFixed(1) }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps(["medias"]);
</script>

<style scoped>
.continer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
img {
  border: 5px solid rgb(37, 37, 37);
  transition: all 0.3s ease-in;
  width: 20rem;
  height: 30rem;

  &:hover {
    transform: scale(1.04);
  }
}
</style>
