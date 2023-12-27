<script setup lang="ts"></script>

<template>
  <div class="continer">
    <slot />
  </div>
</template>

<style scoped>
.continer {
  display: grid;
  /* padding: 0 5rem 0; */
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
@media only screen and (max-width: 1024px) {
  .continer {
    /* padding: 0 4rem 0; */
    grid-template-columns: repeat(3, 1fr);
    gap: 0.7rem;
  }
}

@media only screen and (max-width: 750px) {
  .continer {
    grid-template-columns: repeat(2, 1fr);
    /* padding: 0 4rem 0; */
    gap: 0.5rem;
  }
}

@media only screen and (max-width: 580px) {
  .continer {
    grid-template-columns: repeat(1, 1fr);
    padding: auto;
    place-items: center;
    gap: 0.3rem;
  }
}
</style>
