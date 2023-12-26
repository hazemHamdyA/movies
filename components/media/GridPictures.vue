<script setup lang="ts">
defineProps({
  head: {
    required: true,
  },
  pictures: {
    required: true,
    type: Object,
  },
  girdNumber: {
    default: "3",
  },
  width: {
    type: String,
    defalut: "55rem",
  },
});
</script>

<template>
  <div>
    <div class="flex items-end gap-4">
      <h3 capitalize text-4xl>{{ head }}</h3>
      <p text-lg font-base>{{ pictures.length }} Images</p>
    </div>
    <div gap4 mt-8 class="grids">
      <AppModal v-for="(picture, i) in pictures" :key="picture.width">
        <template v-slot:trigger>
          <NuxtImg
            :src="customizePics(`${picture.file_path}`)"
            :alt="'pictures' + head"
          />
        </template>
        <template #default>
          <div>
            <SlidesShow
              :images="pictures"
              :selected-image="i"
              :width="width"
              :alt="'pictures' + head"
            />
          </div>
        </template>
      </AppModal>
    </div>
  </div>
</template>

<style scoped>
.grids {
  display: grid;
  grid-template-columns: repeat(v-bind(girdNumber), auto);
}

.img {
  height: 42rem;
}
</style>
