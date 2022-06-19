<template>
  <div class="mt-3 d-flex flex-row slider">
    <HomePostCard
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
    </HomePostCard>
  </div>
</template>

<script>
import HomePostCard from "./HomePostCard.vue";

export default {
  name: "HomePostRow",
  components: { HomePostCard },
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
  background-color: #ff0000;
  border-radius: 10px;
  border: 5px solid #f8f9fa;
}
</style>
