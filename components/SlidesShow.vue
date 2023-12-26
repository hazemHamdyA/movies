<script setup lang="ts">
const props = defineProps(["images", "width", "selectedImage"]);
const inx = ref(props.selectedImage + 1);
const currentSlide = computed(() => inx.value);
const length = props.images.length;

const next = () => {
  if (inx.value < length) {
    inx.value++;
  } else if (inx.value === length) {
    inx.value = 1;
  }
};
const prev = () => {
  if (inx.value === 1) {
    inx.value = length;
  } else if (inx.value < length) {
    inx.value--;
  } else inx.value--;
};

useEventListener("keydown", (e) => {
  if (!props.images) return;
  else if (e.key === "ArrowRight") next();
  else if (e.key === "ArrowLeft") prev();
});
</script>

<template>
  <section>
    <div class="slideshow-container">
      <div v-for="(image, i) in images" :key="i" class="fade">
        <div v-if="currentSlide === i + 1" flex="~ col items-center">
          <div class="numbertext">{{ i + 1 }} / {{ images.length }}</div>
          <NuxtImg :src="customizePics(image.file_path)" class="img" />
        </div>
      </div>

      <button class="prev" @click="prev">
        <Icon name="ic:sharp-chevron-left" />
      </button>
      <button class="next" @click="next">
        <Icon name="ic:sharp-chevron-right" />
      </button>
    </div>
    <br />
  </section>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.img {
  width: v-bind(width);
}

.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 1.7rem;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

.active:hover {
  background-color: #717171;
}

.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
</style>
