<template>
  <div>
    <MediaHero :details="firstMovieDetails" />
    <div>
      <asyncWrapper
        v-slot="{ topRatedMovies, upComingMovies, nowPlayingMovies }"
      >
        <Carousel :media="allPopularMovies?.results" head="Popular Movies" />
        <Carousel :media="topRatedMovies?.results" head="Top Rated Movies" />
        <Carousel :media="upComingMovies?.results" head="Upcoming Movies" />
        <Carousel
          :media="nowPlayingMovies?.results"
          head="Now Playing Movies"
        />
      </asyncWrapper>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  getPopular,
  getMediaById,
  getTopRated,
  getUpcoming,
  getNowPlaying,
} from "~/composables/tmdb";
const asyncWrapper = defineComponent({
  name: "AsyncWrapper",
  async setup(_, ctx) {
    const topRatedMovies = await getTopRated("movie");
    const upComingMovies = await getUpcoming("movie");
    const nowPlayingMovies = await getNowPlaying("movie");

    return () =>
      ctx.slots?.default?.({
        topRatedMovies,
        upComingMovies,
        nowPlayingMovies,
      });
  },
});
const allPopularMovies: any = await getPopular("movie");
const firstMovieID: string = allPopularMovies.results[0].id;
const firstMovieDetails = await getMediaById("movie", firstMovieID);
</script>

<style scoped></style>
