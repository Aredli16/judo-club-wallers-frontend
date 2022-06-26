<template>
  <div v-if="post" class="card text-center">
    <div class="card-header">{{ post.type }}</div>
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">
        <slot />
      </p>
      <a class="btn btn-primary" href="#">En savoir plus</a>
    </div>
    <div class="card-footer card-date text-muted">
      {{ new Date(post.date_posted).toLocaleString() }}
    </div>
  </div>
</template>

<script>
export default {
  name: "MainCard",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
