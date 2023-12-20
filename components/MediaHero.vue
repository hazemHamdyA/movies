<template>
  <div class="relative w-full h-full" v-for="media in [details]" :key="media">
    <NuxtImg
      :src="customizePics(media.backdrop_path)"
      :alt="media.title + ' cover'"
      class="img -z-1 object-cover"
    />
    <div class="continer">
      <h1 class="font-semibold text-5xl">
        {{ media.title ?? media.name }}
      </h1>
      <ul class="flex items-center gap-8">
        <div>
          <StarRate class="w-28" :value="media.vote_average" />
        </div>
        <li>{{ media.vote_average.toFixed(1) }}</li>
        <li>{{ formatNumber(media.vote_count) }}K Reviews</li>
        <li v-if="media.release_date">{{ media.release_date?.slice(0, 4) }}</li>
        <li v-if="media.runtime">{{ formatTime(media.runtime) }}</li>
      </ul>
      <p class="text-gray-300 text-lg">
        {{ media.overview }}
      </p>
      <div>
        <!-- implement vidoe model -->
        <Button variant="ghost" class="font-medium">
          <Icon name="lucide:play" mr-2 />
          Watch Trailer
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(["details"]);
</script>

<style scoped lang="scss">
.img {
  width: 64%;
  margin-left: auto;
  filter: contrast(110%);
  height: 34rem;
}

.continer {
  position: absolute;
  left: 0;
  top: 0;

  padding-left: 10rem;
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  border: transparent;
  gap: 1rem;
  width: 60%;
  height: 100%;
  background: transparent
    linear-gradient(to left, #ffffff00, #000000c7, #000000, #000000, #080808);

  & li {
    color: gray;
    font-size: large;
    list-style: disc;
  }
}
</style>
