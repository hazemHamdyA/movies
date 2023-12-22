<template>
  <div of-hidden ml-18>
    <label for="search">
      <Icon name="i-ph-magnifying-glass" class="icon" />
      <input
        id="search"
        type="search"
        v-model="searchInput"
        @keyup.enter="search"
        placeholder="Type to search..."
        bg-base
      />
    </label>
    <div pl-12 pt-4>
      <!-- <h2>Type something to search...</h2> -->
      <div class="continer">
        <MediaGrid :medias="searchedMedia" />
      </div>
      <div v-if="isEnd" ref="el"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useInfiniteScroll } from "@vueuse/core";
const searchInput = ref("");
const isEnd = ref(false);
const count = ref(2);
/**
 * @NOTE: here we have to crete array 'object' with ref instead of reactive to can reset it
 */
const el = ref<HTMLElement | null>(null);
const searchedMedia: any = ref([]);

const search = async () => {
  // reset array
  if (searchedMedia.value.length) {
    searchedMedia.value = [];
  }
  const data: any = await getSearchMedia(searchInput.value);
  searchedMedia.value.push(...data.results);
  isEnd.value = true;
};
const debouncedFn = useDebounceFn(search, 200);

useInfiniteScroll(
  el,
  async () => {
    const data: any = await getSearchMedia(searchInput.value, count.value);
    const totalPages = data.total_pages;
    if (count.value <= totalPages) {
      count.value++;
    }

    searchedMedia.value.push(...data.results);
  },
  { distance: 20 }
);

watch(
  () => searchInput.value,
  () => debouncedFn()
);
</script>

<style scoped lang="scss">
.continer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
label {
  position: relative;
  color: black;
  overflow-x: hidden;

  & input {
    width: 100dvw;
    overflow-x: hidden;
    padding: 1rem 4rem;
    font-size: x-large;
    outline: none;
    color: white;
  }

  & .icon {
    color: black;
    position: absolute;
    top: -7px;
    left: 1rem;
    color: gray;
    font-size: xx-large;
  }
}
</style>
