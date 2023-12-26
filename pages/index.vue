<template>
  <div>
    <MediaHero :details="firstMovieDetails" />
    <!-- prettier-ignore-->
    <div>
      <Carousel head="Popular Movies" :media="allPopularMovies.results" type="movie" query="popular" />
      <Carousel head="Popular TV Shows" :media="allPopularTVs.results" type="tv" query="popular" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { getPopular, getMediaById } from "~/composables/tmdb";

const allPopularMovies: any = await getPopular("movie"); // get all popular movie
const firstMovieID = allPopularMovies.results[0].id; // get id of the first movie
const firstMovieDetails = await getMediaById("movie", firstMovieID); // get details of that movie
const allPopularTVs: any = await getPopular("tv"); // get all popular TVs
</script>

<style scoped></style>
