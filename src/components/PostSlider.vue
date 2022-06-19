<template>
  <div :style="cssObject" class="mt-3 d-flex flex-row slider">
    <PostCard
      v-for="index in 4"
      v-bind:key="index"
      :post="{
        title: 'Lorem ipsum dolor.',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      }"
      class="me-2"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
      dignissimos ducimus harum inventore ipsa nihil officiis placeat qui,
      reiciendis velit?
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
