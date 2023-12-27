<script setup lang="ts">
import { useInfiniteScroll } from "@vueuse/core";
const searchInput = ref("");
const isEnd = ref(false);
let page = 1;
/**
 * @NOTE: here we have to create array 'object' with ref instead of reactive to can reset it
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

useInfiniteScroll(el, async () => {
  const data: any = await getSearchMedia(searchInput.value, page);
  const totalPages = data.total_pages;
  if (page <= totalPages) {
    page++;
  }
  searchedMedia.value.push(...data.results);
});

watch(
  () => searchInput.value,
  () => {
    debouncedFn();
  }
);
</script>

<template>
  <div of-hidden class="ml-14 max-[900px]:ml-0">
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
      <h2
        v-if="searchedMedia.length === 0"
        class="text-3xl text-center pt-10"
        font-base
      >
        Type something to search...
      </h2>
      <AutoGrid>
        <MediaGrid :medias="searchedMedia" />
      </AutoGrid>
      <div v-if="searchedMedia.length !== 0" ref="el" class="py-10" />
    </div>
  </div>
</template>

<style scoped lang="scss">
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
