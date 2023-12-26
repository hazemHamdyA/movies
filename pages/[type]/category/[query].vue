<script setup lang="ts">
import { fetchTMDB } from "~/composables/tmdb";
const route = useRoute();
const el = ref<HTMLElement | null>(null);
const newMeida = reactive([]);

const asyncWrapper = defineComponent({
  async setup(_, ctx) {
    let page = 1;
    // @ts-ignore
    const media = await fetchTMDB(route.params, page);

    useInfiniteScroll(el, async () => {
      // @ts-ignore
      const data: any = await fetchTMDB(route.params, page);
      const totalPages = data.total_pages;
      if (page <= totalPages) {
        page++;
      }
      // @ts-ignore
      newMeida.push(...data.results);
    });
    return () => ctx.slots?.default?.({ media });
  },
});
</script>
<template>
  <section>
    <h2 text-4xl px28 py10 capitalize>
      {{ route.params.query + " " + route.params.type }}s
    </h2>
    <asyncWrapper v-slot="{ media }">
      <div class="continer">
        <MediaGrid :medias="newMeida" :type="route.params.type" />
      </div>
      <div v-if="media.length !== 0" ref="el" class="py-10" />
    </asyncWrapper>
  </section>
</template>

<style scoped>
.continer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 1rem 5rem 1rem 8rem;
}
</style>
