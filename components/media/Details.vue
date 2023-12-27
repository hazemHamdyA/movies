<script setup lang="ts">
import { getRecommendations } from "~/composables/tmdb";

defineProps(["movie"]);
const route = useRoute();

const asyncWrapper = defineComponent({
  async setup(_, ctx) {
    // @ts-ignore
    const recommendations = await getRecommendations(route.params);
    return () => ctx?.slots.default?.({ recommendations });
  },
});
</script>

<template>
  <div>
    <Tabs default-value="overview" class="w-full">
      <div flex="~ justify-center">
        <TabsList class="grid w-[400px] grid-cols-3 btns bg-base">
          <TabsTrigger value="overview" uppercase> overview </TabsTrigger>
          <TabsTrigger value="videos" uppercase> videos </TabsTrigger>
          <TabsTrigger value="photos" uppercase> photos </TabsTrigger>
        </TabsList>
      </div>
      <div class="px-36 max-[1024px]:px-4">
        <TabsContent value="overview">
          <MediaOverview :movie="movie" />
        </TabsContent>
        <TabsContent value="videos">
          <MediaVideos :videos="movie.videos.results" />
        </TabsContent>
        <TabsContent value="photos">
          <MediaPhotos :collection="movie.images" />
        </TabsContent>
      </div>
    </Tabs>
    <Carousel :media="movie.credits.cast" head="Cast" type="person" />
    <asyncWrapper v-slot="{ recommendations }">
      <Carousel
        :media="recommendations.results"
        head="More Like That"
        :type="route.params?.type"
      />
    </asyncWrapper>
  </div>
</template>

<style scoped lang="scss">
.btns [data-state="active"] {
  padding-bottom: 0.3rem;
  border-bottom: 1px solid white;
  border-radius: 5px;
  color: white;
}
</style>
