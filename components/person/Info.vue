<script setup lang="ts">
defineProps(["details"]);
</script>

<template>
  <div>
    <Tabs default-value="known_for" class="w-full">
      <div flex="~ justify-center" mb10>
        <TabsList class="grid w-[400px] grid-cols-2 btns bg-base">
          <TabsTrigger value="known_for" uppercase> known for </TabsTrigger>
          <TabsTrigger value="photos" uppercase> photos </TabsTrigger>
        </TabsList>
      </div>
      <div>
        <TabsContent value="known_for">
          <AutoGrid>
            <MediaGrid :medias="details.combined_credits.cast" />
          </AutoGrid>
        </TabsContent>
        <TabsContent value="photos"
          ><PersonPhotos :images="details.images.profiles"
        /></TabsContent>
      </div>
    </Tabs>
  </div>
</template>

<style scoped>
.btns [data-state="active"] {
  padding-bottom: 0.3rem;
  border-bottom: 1px solid white;
  border-radius: 5px;
  color: white;
}
</style>
