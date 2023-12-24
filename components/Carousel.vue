<script setup lang="ts">
// defineProps(["media", "head", "type"]);
defineProps({
  media: {
    type: Object,
  },
  head: {},
  type: {
    required: false,
    default: "movie",
  },
});
</script>

<template>
  <section class="pl-18 bg-gray:5">
    <div class="flex justify-between p-8 items-center">
      <h2 class="text-2xl">{{ head }}</h2>
      <nuxt-link class="n-link text-lg" to="/">Explore more</nuxt-link>
    </div>
    <ScrollArea class="border rounded-md p-4">
      <div class="flex p-4 space-x-4">
        <NuxtLink
          class="space-y-2 w-64"
          v-for="movie in media"
          :key="movie.id"
          :to="{ path: `/${type}/${movie.id}` }"
        >
          <figure class="shrink-0">
            <div class="overflow-hidden">
              <NuxtImg
                :src="
                  type === 'person'
                    ? customizePics(movie.profile_path)
                    : customizePics(movie.poster_path)
                "
                :alt="`Photo by ${movie.title}`"
                class="aspect-[3/4] object-cover"
              />
            </div>
          </figure>
          <div>
            <h3 class="font-semibold">
              {{ movie.title ?? movie.name }}
            </h3>
          </div>
          <div class="flex items-center gap-4">
            <StarRate
              class="w-25"
              :value="movie.vote_average"
              v-if="type === 'movie' || type === 'tv'"
            />
            <p font-base>
              {{ movie?.vote_average?.toFixed(1) ?? movie.character }}
            </p>
          </div>
        </NuxtLink>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  </section>
</template>
<style scoped lang="scss">
figure {
  border: 4px solid rgb(46, 46, 46);
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.07);
  }
}

img {
  width: 23rem;
}
</style>
