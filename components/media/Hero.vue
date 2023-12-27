<template>
  <section
    class="relative w-full h-full"
    v-for="media in [details]"
    :key="media"
  >
    <NuxtImg
      :src="customizePics(media.backdrop_path)"
      :alt="media.title + ' cover'"
      class="img -z-1 object-cover"
    />
    <div class="continer">
      <h1 class="font-semibold text-5xl">
        {{ media.title ?? media.name }}
      </h1>
      <ul class="flex items-center gap-8">
        <div>
          <StarRate class="w-28" :value="media.vote_average" />
        </div>
        <li>{{ media.vote_average.toFixed(1) }}</li>
        <li>{{ formatNumber(media.vote_count) }}K Reviews</li>
        <li v-if="media.release_date">{{ media.release_date?.slice(0, 4) }}</li>
        <li v-if="media.runtime">{{ formatTime(media.runtime) }}</li>
      </ul>
      <p class="text-gray-300 text-lg" line-clamp-3 md:line-clamp-5>
        {{ media.overview }}
      </p>
      <div>
        <AppModal>
          <template v-slot:trigger>
            <Button variant="ghost" class="font-medium">
              <Icon name="lucide:play" mr-2 />
              Watch Trailer
            </Button>
          </template>
          <template #default>
            <iframe
              width="900"
              height="480"
              :src="'https://www.youtube.com/embed/' + gettrailer.key"
              :title="gettrailer.name + '|' + gettrailer.type"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </template>
        </AppModal>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps(["details"]);

const gettrailer = computed(() => {
  const { results } = props.details.videos;
  return results.find((e: any) => e.type === "Trailer");
});
</script>

<style scoped lang="scss">
.img {
  width: 64%;
  margin-left: auto;
  filter: contrast(110%);
  height: 20%;
}

.continer {
  position: absolute;
  left: 0;
  top: -2rem;

  padding-left: 10rem;
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  border: transparent;
  gap: 1rem;
  width: 60%;
  height: 106%;
  background: transparent
    linear-gradient(
      to left,
      #ffffff00,
      #00000000,
      #000000,
      #000000,
      #00000000,
      #00000000,
      #08080800
    );

  & li {
    color: gray;
    font-size: large;
    list-style: disc;
  }
}

@media only screen and (max-width: 1300px) {
  .continer {
    top: -5rem;
    height: 130%;
    left: -1rem;
  }
}

@media only screen and (max-width: 1030px) {
  .continer {
    top: -8rem;
    left: -2rem;
    height: 140%;

    & h1 {
      font-size: xx-large;
    }
    & p {
      font-size: 1rem;
      color: #666666;
    }

    & li {
      font-size: small;
    }
  }
}

@media only screen and (max-width: 900px) {
  .img {
    width: 100%;
  }
  .continer {
    padding: 0 4rem;
    background: transparent;
    bottom: auto;
    top: 15rem;
    width: 104.8%;
    height: 17rem;
    background: linear-gradient(
      to bottom,
      #ffffff00,
      #000000,
      #000000,
      #000000
    );
  }
}

@media only screen and (max-width: 650px) {
  .img {
    height: 100%;
  }

  .continer {
    & h1 {
      font-size: 1.5rem;
    }
    & p {
      font-size: 0.8rem;
    }
  }
}

@media only screen and (max-width: 450px) {
  .continer {
    align-items: center;

    & h1 {
      font-size: 1rem;
      text-align: center;
    }

    & p {
      font-size: 0.9rem;
      text-align: center;
    }
    & li {
      font-size: 0.6rem;
    }
  }
}
</style>
