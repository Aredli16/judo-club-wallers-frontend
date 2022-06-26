<template>
  <div :style="cssObject" class="mt-3 d-flex flex-row slider">
    <PostCard
      v-for="post in posts"
      v-bind:key="post.id"
      :post="post"
      class="me-2"
      >{{ post.content }}
    </PostCard>
  </div>
</template>

<script>
import PostCard from "./PostCard.vue";

export default {
  name: "PostSlider",
  components: { PostCard },
  props: {
    color: {
      type: String,
      required: true,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
  computed: {
    cssObject() {
      return {
        "--color": this.color,
      };
    },
  },
};
</script>

<style scoped>
.slider {
  overflow-x: scroll;
  position: relative;
}

/* Chrome, Edge, and Safari */
.slider::-webkit-scrollbar {
  width: 16px;
}

.slider::-webkit-scrollbar-track {
  background: #f8f9fa;
}

.slider::-webkit-scrollbar-thumb {
  /*noinspection CssUnresolvedCustomProperty*/
  background-color: var(--color);
  border-radius: 10px;
  border: 5px solid #f8f9fa;
}
</style>
