export default defineEventHandler(async () => {
  const respomce = await $fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=b09e98b75b2f91277b94093296b04ee5&language=en-US`
  );
  const data = await respomce;
  return data;
});
