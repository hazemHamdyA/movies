<script setup lang="ts">
import { useRoute } from "vue-router";
import { getMediaByGenre } from "~/composables/tmdb";

const route = useRoute();
const el = ref<HTMLElement | null>(null);
let page = 1;
const newMedia: any = reactive([]);

const asyncWrapper = defineComponent({
  async setup(_, ctx) {
    const media = await getMediaByGenre({ ...route.params, page });

    useInfiniteScroll(el, async () => {
      const data = await getMediaByGenre({ ...route.params, page });
      const totalPages = data.total_pages;
      if (page <= totalPages) {
        page++;
      }
      newMedia.push(...data.results);
    });

    return () => ctx?.slots?.default?.({ media });
  },
});
</script>

<template>
  <section>
    <asyncWrapper v-slot="{ media }">
      <div>
        <div v-if="!media.results">
          <h1>ops something happen....</h1>
        </div>
        <AutoGrid>
          <MediaGrid :medias="newMedia" :type="route.params.type" />
        </AutoGrid>
        <div v-if="media.length !== 0" ref="el" class="py-10" />
      </div>
    </asyncWrapper>
  </section>
</template>

<style scoped></style>
