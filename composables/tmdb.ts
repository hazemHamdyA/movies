import type { MediaType } from "~/types";
const customizePics = (
  src: string
): string => `https://image.tmdb.org/t/p/original/${src}
`;

const formatNumber = (number: number): string => {
  return new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 2 })
    .format(number)
    .slice(0, 3);
};
const formatTime = function (time: string): string {
  const hours = Math.floor(+time / 60);
  const mins = Math.floor(+time % 60);
  // 3h 26min
  return `${hours}h ${mins}min`;
};

async function getPopular(type: MediaType) {
  return await $fetch(`/api/${type}/popular`);
}
async function getTopRated(type: MediaType) {
  return await $fetch(`/api/${type}/top_rated`);
}
async function getUpcoming(type: MediaType) {
  return await $fetch(`/api/${type}/upcoming`);
}
async function getNowPlaying(type: MediaType) {
  return await $fetch(`/api/${type}/now_playing`);
}

async function getMediaById(type: MediaType, id: string) {
  return await $fetch(`/api/${type}/${id}`, {
    params: {
      // get extra data with request
      append_to_response:
        "videos,credits,images,external_ids,release_dates,combined_credits",
    },
  });
}

export {
  getPopular,
  getMediaById,
  customizePics,
  formatNumber,
  formatTime,
  getTopRated,
  getUpcoming,
  getNowPlaying,
};
