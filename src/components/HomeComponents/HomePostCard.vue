<template>
  <div v-if="post" class="card">
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ post.subtitle }}</h6>
      <p class="card-text">
        <slot />
      </p>
      <a class="card-link" href="#">En savoir plus</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePostCard",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 0.2rem;
  min-width: 15rem;
  min-height: 15rem;
  max-width: 15rem;
  max-height: 15rem;
  overflow: hidden;
}

.card-title,
.card-subtitle {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.card-text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}
</style>
