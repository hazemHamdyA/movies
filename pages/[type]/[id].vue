<template>
  <div
    class="max-[900px]:space-y-32 max-[650px]:space-y-48 max-[530px]:space-y-64"
  >
    <section>
      <MediaHero :details="firstMediaDetails" />
    </section>
    <section>
      <MediaDetails bg-base :movie="firstMediaDetails" />
    </section>
  </div>
</template>

<script setup lang="ts">
import type { MediaType } from "~/types";

const route = useRoute();
const firstMediaDetails = await getMediaById(
  route.params.type as MediaType,
  route.params.id as string
);
</script>

<style scoped></style>
