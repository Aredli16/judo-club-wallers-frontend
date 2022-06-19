<template>
  <div
    id="homeCarousel"
    class="carousel slide carousel-fade"
    data-bs-ride="true"
  >
    <div class="carousel-indicators">
      <button
        aria-current="true"
        aria-label="Slide 1"
        class="active"
        data-bs-slide-to="0"
        data-bs-target="#homeCarousel"
        type="button"
      ></button>
      <button
        aria-label="Slide 2"
        data-bs-slide-to="1"
        data-bs-target="#homeCarousel"
        type="button"
      ></button>
      <button
        aria-label="Slide 3"
        data-bs-slide-to="2"
        data-bs-target="#homeCarousel"
        type="button"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          alt="..."
          class="img-carousel"
          src="https://picsum.photos/1920/1080?random=1"
        />
      </div>
      <div class="carousel-item">
        <img
          alt="..."
          class="img-carousel"
          src="https://picsum.photos/1920/1080?random=2"
        />
      </div>
      <div class="carousel-item">
        <img
          alt="..."
          class="img-carousel"
          src="https://picsum.photos/1920/1080?random=3"
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      data-bs-slide="prev"
      data-bs-target="#homeCarousel"
      type="button"
    >
      <span aria-hidden="true" class="carousel-control-prev-icon"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      data-bs-slide="next"
      data-bs-target="#homeCarousel"
      type="button"
    >
      <span aria-hidden="true" class="carousel-control-next-icon"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "HomeCarousel",
};
</script>

<style scoped>
.carousel-item {
  height: 40vh;
}

.img-carousel {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
