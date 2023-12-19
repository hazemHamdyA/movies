async function getPopular() {
  return await $fetch(`/api/movie/popular`);
}
async function getModvieById(id: string) {
  return await $fetch(`/api/movie/${id}`);
}
export { getPopular, getModvieById };
