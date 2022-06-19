<template>
  <LargeAlbumCard
    :album="{
      title: 'Album Test',
      image_preview: 'https://picsum.photos/1920/1080?random=1',
      date_posted: '19/06/2022',
    }"
  />
  <RecentAlbumCard
    v-for="index in 10"
    :key="index"
    :album="{
      title: 'Album Test',
      image_preview: 'https://picsum.photos/1920/1080?random=1',
      date_posted: '19/06/2022',
    }"
  />
</template>

<script>
import LargeAlbumCard from "../components/LargeAlbumCard.vue";
import RecentAlbumCard from "../components/RecentAlbumCard.vue";

export default {
  name: "AlbumView",
  components: { RecentAlbumCard, LargeAlbumCard },
};
</script>

<style scoped></style>
