<template>
  <div
    font-base
    px-30
    pt-10
    space-y-32
    class="max-[900px]:pl-4 max-[900px]:px-0"
  >
    <PersonOverview :details="person" />
    <PersonInfo :details="person" />
    <!-- </asyncWrapper> -->
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const person = await getPerson(route.params.id);
const $img = useImage();
useHead({
  title: person.name,
  meta: [
    { name: "description", content: person.biography || person.name },
    {
      property: "og:image",
      content: $img(`/tmdb${person.profile_path}`, {
        width: 1200,
        height: 630,
      }),
    },
  ],
});
</script>

<style scoped></style>
