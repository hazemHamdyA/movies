<script>
/**
 * @TODO: adding transitions & loading spinners
 */
useHead({
  htmlAttrs: {
    lang: "en",
  },
  charset: "utf-8",
  title: "Movies Database",
  titleTemplate: (titleChunk) => (titleChunk ? `${titleChunk}` : "Movies"),
  meta: [
    {
      name: "description",
      content: "A TMDB client built with Image to show the potential of it ✨",
    },
  ],
});
</script>
<template>
  <NuxtLoadingIndicator />
  <div>
    <TheSideBar />
    <NuxtPage />
  </div>
</template>
<style lang="scss">
@use "~/assets/css/tailwind.css";
body {
  background: black;
  color: white;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
