<template>
  <div>
    <MediaHero :details="firstMediaDetails" />
    <div>
      <asyncWrapper
        v-slot="{
          topRatedMedia,
          upComingMovies,
          nowPlayingMovies,
          airingToday,
        }"
      >
        <Carousel
          :media="allPopularMedia?.results"
          :head="chosenMedia ? 'Popular Movies' : 'Popular TV Shows'"
          :type="chosenMedia ? 'movie' : 'tv'"
          query="popular"
        />
        <Carousel
          :media="topRatedMedia?.results"
          :head="`Top Rated ${chosenMedia ? 'Movies' : 'TV Shows'}`"
          :type="chosenMedia ? 'movie' : 'tv'"
          query="top_rated"
        />
        <div v-if="chosenMedia">
          <Carousel
            :media="upComingMovies?.results"
            head="Upcoming Movies"
            query="upcoming"
          />
          <Carousel
            :media="nowPlayingMovies?.results"
            head="Now Playing Movies"
            query="now_playing"
          />
        </div>
        <div v-else>
          <Carousel
            :media="airingToday?.results"
            head="TV Shows Airing Today"
            type="tv"
            query="airing_today"
          />
        </div>
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
  getAiringToday,
} from "~/composables/tmdb";
import type { MediaType, PageResult, Media, Movie } from "~/types";

const route = useRoute();

// for typescript as in template when try to access to promise ts wil complaine so we have to
// make these promise reolved first and then access to it
const asyncWrapper = defineComponent({
  async setup(_, ctx) {
    const topRatedMedia = await getTopRated(route.params.type as MediaType);

    let airingToday: PageResult<Media>;
    let upComingMovies: PageResult<Media>;
    let nowPlayingMovies: PageResult<Media>;

    if (route.params.type === "movie") {
      upComingMovies = await getUpcoming(route.params.type as MediaType);
      nowPlayingMovies = await getNowPlaying(route.params.type as MediaType);
    } else if (route.params.type === "tv") {
      airingToday = await getAiringToday("tv");
    }
    return () =>
      ctx.slots?.default?.({
        topRatedMedia,
        airingToday,
        upComingMovies,
        nowPlayingMovies,
      });
  },
});
const allPopularMedia: PageResult<Media> = await getPopular(
  route.params.type as MediaType
);
const firstMeidaID: string = allPopularMedia.results[0].id;
const firstMediaDetails: Movie = await getMediaById(
  route.params.type as MediaType,
  firstMeidaID
);
const chosenMedia = computed(() => route.params.type === "movie");
</script>

<style scoped></style>
