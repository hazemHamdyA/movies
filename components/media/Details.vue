<script setup lang="ts">
defineProps(["movie"]);
</script>

<template>
  <Tabs default-value="overview" class="w-full">
    <div flex="~ justify-center">
      <TabsList class="grid w-[400px] grid-cols-3 btns bg-base">
        <TabsTrigger value="overview" uppercase> overview </TabsTrigger>
        <TabsTrigger value="videos" uppercase> videos </TabsTrigger>
        <TabsTrigger value="photo" uppercase> photos </TabsTrigger>
      </TabsList>
    </div>
    <div class="px-36">
      <TabsContent value="overview">
        <MediaOverview :movie="movie" />
      </TabsContent>
      <TabsContent value="videos">
        <MediaVideos :videos="movie.videos.results" />
      </TabsContent>
    </div>
  </Tabs>
  <Carousel :media="movie.credits.cast" head="Cast" type="person" />
</template>

<style scoped lang="scss">
.btns [data-state="active"] {
  padding-bottom: 0.3rem;
  border-bottom: 1px solid white;
  border-radius: 5px;
  color: white;
}
</style>
