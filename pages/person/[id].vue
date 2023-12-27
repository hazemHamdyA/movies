<template>
  <div
    font-base
    px-30
    pt-10
    space-y-32
    class="max-[900px]:pl-4 max-[900px]:px-0"
  >
    <asyncWrapper v-slot="{ personDetails }">
      <PersonOverview :details="personDetails" />
      <PersonInfo :details="personDetails" />
    </asyncWrapper>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const asyncWrapper = defineComponent({
  name: "AsyncWrapper",
  async setup(_, ctx) {
    const personDetails = await getPerson(route.params.id);
    return () => ctx?.slots.default?.({ personDetails });
  },
});
</script>

<style scoped></style>
