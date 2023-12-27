<script setup lang="ts"></script>

<template>
  <Dialog>
    <DialogTrigger>
      <div>
        <slot name="trigger" />
      </div>
    </DialogTrigger>

    <DialogContent>
      <DialogTitle>images</DialogTitle>
      <DialogHeader>
        <DialogDescription relative>
          <div class="media">
            <slot name="default" />
          </div>
          <DialogClose>
            <Icon name="i-carbon-close" class="icon" n-link />
          </DialogClose>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
</template>

<style scoped>
.icon {
  position: absolute;
  top: 0;
  right: -8rem;
  font-size: xx-large;
  background-color: rgba(0, 0, 0, 0.24);
  border-radius: 50%;
  cursor: pointer;
}

@media only screen and (max-width: 1024px) {
  .media {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
  }
}
</style>
