<script setup lang="ts">
defineProps(["details"]);
</script>

<template>
  <div flex="~  items-center" class="max-[900px]:flex-col" gap12>
    <NuxtImg
      :src="customizePics(details.profile_path)"
      :alt="details.name + 'personal picture'"
      class="img"
    />
    <ul class="space-y-6">
      <h2 text-5xl text-white font-600>{{ details.name }}</h2>
      <p text-lg>{{ details.biography }}</p>
      <li>
        <p>Known For</p>
        <p>{{ details.known_for_department }}</p>
      </li>
      <li>
        <p>Place Of Birth</p>
        <p>{{ details.place_of_birth }}</p>
      </li>
      <li>
        <p>Birthday</p>
        <p>{{ formaDate(details.birthday) }}</p>
      </li>
      <MediaExternalLinks :links="details.external_ids" />
    </ul>
  </div>
</template>

<style scoped>
li {
  display: flex;
  gap: 0.7rem;

  & p:nth-child(2) {
    color: white;
  }
}

img {
  width: 20rem;
  border: 4px solid rgb(49, 49, 49);
}
</style>
