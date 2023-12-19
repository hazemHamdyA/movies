async function getPopular() {
  return await $fetch(`/api/test/movie/popular`);
}
async function name(id: string) {
  // return await
}
export { getPopular };
