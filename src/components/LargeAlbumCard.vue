<template>
  <div v-if="album" class="card mb-3">
    <div class="img-box">
      <a href="#"
        ><img :src="album.image_preview" alt="..." class="card-img-top"
      /></a>
    </div>
    <div class="card-body">
      <h2 class="card-title">{{ album.title }}</h2>
      <p class="card-text text-end text-muted fst-italic">
        <i class="fa-solid fa-calendar-days me-1"></i>{{ album.date_posted }}
      </p>
      <a class="btn btn-primary" href="#">En savoir plus</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "LargeAlbumCard",
  props: {
    album: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.img-box {
  overflow: hidden;
}

img {
  transition: all 0.3s;
}

.img-box:hover .card-img-top {
  transform: scale(1.3);
  opacity: 0.5;
}

.card-title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>
