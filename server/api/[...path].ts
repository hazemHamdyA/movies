const BASE_URL = "https://api.themoviedb.org/3/";

export default defineEventHandler(async (event) => {
  const qury = getQuery(event);
  console.log(qury);
  const responce = await $fetch(event.context.params!.path, {
    baseURL: BASE_URL,
    params: {
      api_key: "b09e98b75b2f91277b94093296b04ee5",
      language: "en-US",
      ...qury,
    },
  });
  const data = await responce;
  return data;
});
