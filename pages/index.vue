<template>
  <div>
    <MediaHero :details="firstMovieDetails" />
    <div>
      <Carousel head="Popular Movies" :movies="allPopularMovies.results" />
      <Carousel head="Popular TV Shows" :movies="allPopularTVs.results" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { getPopular, getMediaById } from "~/composables/tmdb";
// get all popular movie
const allPopularMovies: any = await getPopular("movie");
// get id of the first movie
const firstMovieID = allPopularMovies.results[0].id;
// get details of that movie
const firstMovieDetails = await getMediaById("movie", firstMovieID);
// get all popular TVs
const allPopularTVs: any = await getPopular("tv");
</script>

<style scoped></style>
