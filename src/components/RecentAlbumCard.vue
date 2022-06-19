<template>
  <div v-if="album" class="card mb-3">
    <div class="row g-0">
      <div class="col-lg-4 img-box">
        <a href="#"
          ><img
            :src="album.image_preview"
            alt="..."
            class="img-fluid rounded-start img-card"
        /></a>
      </div>
      <div class="col-lg-8">
        <div class="card-body">
          <h5 class="card-title">{{ album.title }}</h5>
          <p class="card-text">
            <small class="text-muted">{{ album.date_posted }}</small>
          </p>
          <a v-if="buttonType === 'icon'" href="#"
            ><i class="fa-solid fa-arrow-up-right-from-square"></i
          ></a>
          <button v-else class="btn btn-primary">En savoir plus</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecentAlbumCard",
  props: {
    album: {
      type: Object,
      required: true,
    },
    buttonType: {
      type: String,
    },
  },
};
</script>

<style scoped>
.img-card {
  height: 100%;
  object-fit: cover;
  transition: all 0.3s;
}

.img-box {
  overflow: hidden;
}

.img-box:hover .img-card {
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

.card-text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

i {
  position: absolute;
  right: 10px;
  bottom: 10px;
}
</style>
