<script setup lang="ts">
defineProps(["videos"]);
</script>

<template>
  <div grid="~ cols-3" gap4 mt-8>
    <div
      v-for="vidoe in videos"
      :key="vidoe.id"
      cursor-pointer
      relative
      class="item"
    >
      <Dialog>
        <div>
          <DialogTrigger>
            <NuxtImg
              class="w-90 h-50"
              :src="`https://img.youtube.com/vi/${vidoe.key}/maxresdefault.jpg`"
              :alt="`${vidoe.name} picture`"
            />
          </DialogTrigger>
        </div>
        <h4>{{ vidoe.name }}</h4>
        <p>{{ vidoe.type }}</p>
        <Icon name="i-ph-play" class="icon" />
        <DialogContent class="w-fit">
          <iframe
            class="w-150 h-90"
            :src="`https://www.youtube.com/embed/${vidoe.key}`"
            title="Aquaman and the Lost Kingdom | Now Playing"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            name="hi"
          ></iframe>
        </DialogContent>
      </Dialog>
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
    top: 40%;
    right: 50%;
    font-size: xx-large;
    color: gray;
  }

  [data-state="open"] {
    background-color: black;
  }
}
</style>
