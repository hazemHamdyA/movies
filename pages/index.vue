<template>
  <div
    class="max-[900px]:space-y-32 max-[650px]:space-y-48 max-[530px]:space-y-64"
  >
    <MediaHero :details="firstMovieDetails" />
    <!-- prettier-ignore-->
    <div>
      <Carousel head="Popular Movies" :media="allPopularMovies.results" type="movie" query="popular" />
      <Carousel head="Popular TV Shows" :media="allPopularTVs.results" type="tv" query="popular" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Media, PageResult, Movie } from "~/types";

const allPopularMovies: PageResult<Media> = await getPopular("movie"); // get all popular movie
const firstMovieID: string = allPopularMovies.results[0].id; // get id of the first movie
const firstMovieDetails: Movie = await getMediaById("movie", firstMovieID); // get details of that movie
const allPopularTVs: PageResult<Media> = await getPopular("tv"); // get all popular TVs
</script>

<style scoped></style>
