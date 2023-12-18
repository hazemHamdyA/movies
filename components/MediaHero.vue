<template>
  <div
    class="relative w-full h-full aspect-ratio-3/2"
    v-for="movie in [movies.results[0]]"
    :key="movie"
  >
    <NuxtImg
      :src="customizePics(movie.backdrop_path)"
      :alt="movie.title + ' cover'"
      format="webp"
      class="img -z-1 object-cover"
    />
    <div class="continer">
      <h1 class="font-semibold text-5xl">
        {{ movie.title }}
      </h1>
      <ul class="flex items-center gap-8">
        <div>
          <StarRate class="w-28" :value="movie.vote_average" />
        </div>
        <li>{{ movie.vote_average.toFixed(1) }}</li>
        <li>{{ formatNumber(movie.vote_count) }}K Reviews</li>
        <li>{{ movie.release_date.slice(0, 4) }}</li>
        <li>3h 26min {{ movie.runtime }}</li>
      </ul>
      <p class="text-gray-300 text-lg">
        {{ movie.overview }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: movies }: any = await useFetch("/api/movies/popular");
const customizePics = (
  src: string
): string => `https://image.tmdb.org/t/p/original/${src}
`;

const formatNumber = (number: number) => {
  return new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 2 })
    .format(number)
    .slice(0, 3);
};
</script>

<style scoped lang="scss">
.img {
  position: absolute;
  width: 64%;
  right: 0;
  top: 0;
  filter: contrast(110%);
}

.continer {
  padding-left: 10rem;
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 60%;
  height: 100%;
  background: transparent
    linear-gradient(
      to left,
      #0000001c,
      #000000be,
      #00000085,
      #05050500,
      #00000075
    );

  & li {
    color: gray;
    font-size: large;
    list-style: disc;
  }
}
</style>
