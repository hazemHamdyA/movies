<script setup lang="ts">
import { customizePics, formatNumber } from "~/composables/tmdb";
defineProps(["movies", "head"]);
</script>

<template>
  <section>
    <div class="flex justify-between p-8 items-center">
      <h2 class="text-2xl">{{ head }}</h2>
      <nuxt-link class="n-link text-lg" to="/">Explore more</nuxt-link>
    </div>
    <ScrollArea class="border rounded-md w-full p-4 whitespace-nowrap">
      <div class="flex p-4 space-x-4 w-max">
        <div class="space-y-2" v-for="movie in movies" :key="movie.id">
          <figure class="shrink-0">
            <div class="overflow-hidden">
              <NuxtImg
                :src="customizePics(movie.poster_path)"
                :alt="`Photo by ${movie.title}`"
                class="aspect-[3/4] w-60 object-cover"
              />
            </div>
          </figure>
          <div>
            <h3 class="font-semibold">
              {{ movie.title ?? movie.name }}
            </h3>
          </div>
          <div class="flex items-center gap-4">
            <StarRate class="w-25" :value="movie.vote_average" />
            <p>{{ movie.vote_average.toFixed(1) }}</p>
          </div>
        </div>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  </section>
</template>
<style scoped lang="scss">
figure {
  border: 4px solid rgb(46, 46, 46);
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.07);
  }
}
</style>
