<template>
  <div>
    <MediaHero :details="firstMovieDetails" />
  </div>
</template>

<script setup lang="ts">
import { getModvieById, getPopular } from "~/composables/tmdb";
// get all popular movie
const allPopularMovies: any = await getPopular();
// get id of the first movie
const firstMovieID = allPopularMovies.results[0].id;
// get details of that movie
const firstMovieDetails = await getModvieById(firstMovieID);
console.log(firstMovieDetails);
</script>

<style scoped></style>
