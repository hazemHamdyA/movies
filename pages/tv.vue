<template>
  <div>
    <MediaHero :details="firstTVDetails" />
  </div>
  <div>
    <Carousel :media="allPopularTVs.results" head="Popular TV Shows" />

    <asyncWrapper v-slot="{ topRatedTVShows, airingToday }">
      <Carousel :media="topRatedTVShows.results" head="Top Rated TV Shows" />
      <Carousel :media="airingToday.results" head="TV Shows Airing Today" />
    </asyncWrapper>
  </div>
</template>

<script setup lang="ts">
import { getAiringToday } from "~/composables/tmdb";

const asyncWrapper = defineComponent({
  async setup(_, ctx) {
    const topRatedTVShows = await getTopRated("tv");
    const airingToday = await getAiringToday("tv");
    return () => ctx.slots?.default?.({ topRatedTVShows, airingToday });
  },
});
const allPopularTVs: any = await getPopular("tv");
const firstTVID: string = allPopularTVs.results[0].id;
const firstTVDetails = await getMediaById("tv", firstTVID);
</script>

<style scoped></style>
