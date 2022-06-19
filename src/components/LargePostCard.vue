<template>
  <div v-if="post" class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <div class="d-flex justify-content-between mb-3">
        <a class="card-link text-decoration-none fst-italic" href="#"
          ><i class="fa-solid fa-circle-user me-1"></i>{{ post.author }}</a
        >
        <p class="card-text card-date text-muted fst-italic">
          <i class="fa-solid fa-calendar-days me-1"></i>{{ post.date_posted }}
        </p>
      </div>
      <p class="card-text card-content">
        <slot />
      </p>
      <a class="btn btn-primary" href="#">En savoir plus</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "LargePostCard",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card-title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

.card-content {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  line-clamp: 5;
  -webkit-box-orient: vertical;
}
</style>
