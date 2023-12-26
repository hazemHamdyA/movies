<script setup lang="ts">
import {
  formatCurrency,
  customizePics,
  formatTime,
  formaDate,
} from "~/composables/tmdb";

import { languagesShortcuts } from "~/utils/languages";

const props = defineProps(["movie"]);
const externalIds = computed(() => ({
  ...props.movie.external_ids,
  homepage: props.movie.homepage,
}));

const directorName = (arr: any) => {
  const { crew } = arr;
  const directorName = crew?.find(
    (e: { job: string }) => e.job === "Director"
  )?.name;
  return directorName;
};

const getGenres = (mediaGeners: any) => {
  return mediaGeners.map((e: any) => e.name);
};

const getCompanies = (companys: any) => {
  return companys.map((e: any) => e.name).join(", ");
};
</script>

<template>
  <div flex gap-12 font-base class="overview">
    <div flex-shrink-0>
      <NuxtImg :src="customizePics(movie.poster_path)" />
    </div>
    <div flex="~ col justify-center" gap-10>
      <h3 class="text-4xl text-white font-semibold">Storyline</h3>
      <p class="text-white text-lg">{{ movie.overview }}</p>
      <ul grid="~ cols-2" font-500>
        <li v-show="formaDate(movie.release_date)">
          <div flex items-center gap-4 mb-5>
            <p>Released</p>
            <p>{{ formaDate(movie.release_date) }}</p>
          </div>
        </li>
        <li v-show="formatTime(movie.runtime)">
          <div flex items-center gap-4 mb-5>
            <p>Runtime</p>
            <p>{{ formatTime(movie.runtime) }}</p>
          </div>
        </li>
        <li v-show="directorName(movie.credits)">
          <div flex items-center gap-4 mb-5>
            <p>Directo</p>
            <NuxtLink v-show="directorName(movie.credits)" to="/">{{
              directorName(movie.credits)
            }}</NuxtLink>
          </div>
        </li>
        <li v-show="movie.budget">
          <div flex items-center gap-4 mb-5>
            <p>Budget</p>
            <p>{{ formatCurrency(movie.budget) }}</p>
          </div>
        </li>
        <li v-show="movie.revenue">
          <div flex items-center gap-4 mb-5>
            <p>Revenue</p>
            <p>{{ formatCurrency(movie.revenue) }}</p>
          </div>
        </li>
        <li>
          <div flex items-center gap-4 mb-5>
            <p>Genre</p>
            <ul flex gap-2>
              <li v-for="gen in getGenres(movie.genres)" :key="gen.name">
                <NuxtLink to="/">{{ gen }}</NuxtLink>
              </li>
            </ul>
          </div>
        </li>
        <li v-show="movie.status">
          <div flex items-center gap-4 mb-5>
            <p>Status</p>
            <p>{{ movie.status }}</p>
          </div>
        </li>
        <li>
          <div flex="~ items-center" gap-4>
            <p>Production</p>
            <p class="w-[400px]">
              {{ getCompanies(movie.production_companies) }}
            </p>
          </div>
        </li>
        <li>
          <div flex items-center gap-4 mb-5>
            <p>Language</p>
            <p>
              {{ languagesShortcuts[movie.original_language] }}
            </p>
          </div>
        </li>
      </ul>
      <div mt--7>
        <MediaExternalLinks :links="externalIds" />
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  background-color: #272727;
  padding: 0.1rem 0.2rem;
  font-size: small;
  font-style: italic;
  border-radius: 4px;
}
img {
  width: 22rem;
  border: 6px solid rgb(53, 53, 53);
}

li p:nth-child(1) {
  color: rgb(230, 224, 224);
}
</style>
