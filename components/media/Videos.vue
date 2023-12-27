<script setup lang="ts">
defineProps(["videos"]);

const modalOpen = ref(false);
</script>

<template>
  <div
    grid="~ cols-3"
    gap4
    mt-8
    class="max-[650px]:grid-cols-2 max-[450px]:grid-cols-1"
  >
    <div
      v-for="vidoe in videos"
      :key="vidoe.id"
      relative
      class="item"
      @click="modalOpen = true"
    >
      <AppModal>
        <template v-slot:trigger>
          <NuxtImg
            class="w-90 h-50"
            :src="`https://img.youtube.com/vi/${vidoe.key}/maxresdefault.jpg`"
            :alt="`${vidoe.name} picture`"
          />
          <Icon name="i-ph-play" class="icon" />
        </template>
        <template #default>
          <iframe
            class="w-[900px] h-[480px]"
            :src="'https://www.youtube.com/embed/' + vidoe.key"
            :title="vidoe.name + '|' + vidoe.type"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </template>
      </AppModal>

      <h4>{{ vidoe.name }}</h4>
      <p>{{ vidoe.type }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  transition: all 0.2s ease-in;

  &:hover {
    transform: scale(1.05);

    & .icon {
      color: white;
      font-weight: 900;
    }
  }
  .icon {
    position: absolute;
    top: 30%;
    right: 50%;
    font-size: xx-large;
    color: gray;

    cursor: pointer;
  }

  [data-state="open"] {
    background-color: black;
  }
}
</style>
