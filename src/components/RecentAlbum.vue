<template>
  <div class="album-container">
    <div class="album-header text-center">
      <h4 class="text-muted">
        <i class="fa-solid fa-image me-1"></i>Albums récents
      </h4>
    </div>
    <hr />
    <div class="album-body">
      <RecentAlbumCard
        v-for="index in 3"
        :key="index"
        :album="{
          title: 'Album test',
          image_preview: 'https://picsum.photos/1920/1080?random=1',
          date_posted: '19/06/2022',
        }"
        :buttonType="'icon'"
      />
    </div>
  </div>
</template>

<script>
import RecentAlbumCard from "./RecentAlbumCard.vue";

export default {
  name: "RecentAlbum",
  components: {
    RecentAlbumCard,
  },
};
</script>

<style scoped>
.album-container {
  border: 1px solid #ccc;
  margin-top: 1rem;
  padding: 1rem;
}
</style>
