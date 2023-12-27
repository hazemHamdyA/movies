<script setup lang="ts">
import type { MediaType } from "~/types";
const route = useRoute();
const el = ref<HTMLElement | null>(null);
const newMeida: any = reactive([]);

const asyncWrapper = defineComponent({
  async setup(_, ctx) {
    let page = 1;

    const media = await fetchTMDB(
      route.params as { type: MediaType; query: string | string[] },
      page
    );

    useInfiniteScroll(el, async () => {
      const data = await fetchTMDB(
        route.params as { type: MediaType; query: string | string[] },
        page
      );
      const totalPages = data.total_pages;
      if (page <= totalPages) {
        page++;
      }
      newMeida.push(...data.results);
    });
    return () => ctx.slots?.default?.({ media });
  },
});
</script>
<template>
  <section>
    <h2
      text-4xl
      px28
      py10
      capitalize
      class="max-[650px]:p-4 max-[650px]:text-center"
    >
      {{ route.params.query + " " + route.params.type }}s
    </h2>
    <asyncWrapper v-slot="{ media }">
      <AutoGrid>
        <MediaGrid :medias="newMeida" :type="route.params.type" />
      </AutoGrid>
      <div v-if="media.length !== 0" ref="el" class="py-10" />
    </asyncWrapper>
  </section>
</template>

<style scoped></style>
