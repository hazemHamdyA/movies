<script setup lang="ts">
defineProps({
  media: {
    type: Object,
  },
  head: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
    default: "movie",
  },
  query: {
    type: String,
  },
});
</script>

<template>
  <section class="pl-18 max-[900px]:pl-4" v-if="media?.length > 0">
    <div class="flex justify-between p-8 items-center">
      <h2 class="text-2xl">{{ head }}</h2>

      <nuxt-link
        v-if="query"
        class="n-link text-lg"
        :to="`/${type}/category/${query}`"
        >Explore more</nuxt-link
      >
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
            <div
              class="overflow-hidden h-[20rem] flex justify-center items-center"
            >
              <NuxtImg
                :src="
                  type === 'person'
                    ? customizePics(movie.profile_path)
                    : customizePics(movie.poster_path)
                "
                :alt="`Photo by ${movie.title}`"
                class="aspect-[3/4] object-cover"
                v-if="movie.profile_path || movie.poster_path"
              />
              <Icon v-else name="line-md:account" class="text-4xl" />
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
