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
      <MediaGrid :medias="medias" />
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 *
 * @TODO: implement fuctnality when we type new letter clear the old array and replase it with the new one
 */
const searchInput = ref("");
let searchedMedia = reactive([]);
const medias = computed(() => searchedMedia);

const debouncedFn = useDebounceFn(() => console.log("clicked"), 1000);
const search = async () => {
  const data = await getSearchMedia(searchInput.value);
  // @ts-ignore
  searchedMedia.push(...data.results);
  console.log("sent");
};
// @ts-ignore
watch(
  () => searchInput.value,
  () => {
    search();
  }
);
</script>

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
