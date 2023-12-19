<template>
  <div class="relative w-full h-full" v-for="movie in [details]" :key="movie">
    <NuxtImg
      :src="customizePics(movie.backdrop_path)"
      :alt="movie.title + ' cover'"
      class="img -z-1 object-cover"
    />
    <div class="continer">
      <h1 class="font-semibold text-5xl">
        {{ movie.title }}
      </h1>
      <ul class="flex items-center gap-8">
        <div>
          <StarRate class="w-28" :value="movie.vote_average" />
        </div>
        <li>{{ movie.vote_average.toFixed(1) }}</li>
        <li>{{ formatNumber(movie.vote_count) }}K Reviews</li>
        <li>{{ movie.release_date.slice(0, 4) }}</li>
        <li>{{ formatTime(movie.runtime) }}</li>
      </ul>
      <p class="text-gray-300 text-lg">
        {{ movie.overview }}
      </p>
      <div>
        <!-- implement vidoe model -->
        <Button variant="ghost" class="font-medium">
          <Icon name="lucide:play" mr-2 />
          Watch Trailer
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatTime } from "~/composables/tmdb";
defineProps(["details"]);
</script>

<style scoped lang="scss">
.img {
  width: 64%;
  margin-left: auto;
  filter: contrast(110%);
  height: 34rem;
}

.continer {
  position: absolute;
  left: 0;
  top: 0;

  padding-left: 10rem;
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 60%;
  height: 100%;
  background: transparent
    linear-gradient(
      to left,
      #0000001c,
      #000000be,
      #00000085,
      #05050500,
      #00000075
    );

  & li {
    color: gray;
    font-size: large;
    list-style: disc;
  }
}
</style>
