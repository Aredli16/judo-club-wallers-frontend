<template>
  <section class="mb-5">
    <SectionTitle color="#ff0000" title="Articles les plus vus" />
    <MainCard :post="mostViewedPost[0]"
      >{{ mostViewedPost[0].content }}
    </MainCard>
    <PostSlider
      :posts="mostViewedPost.slice(1, mostViewedPost.length)"
      color="#ff0000"
    />
  </section>
  <section class="mb-5">
    <SectionTitle color="#ff0000" title="Articles populaires" />
    <PostSlider :posts="popularPost" color="#ff0000" />
  </section>
  <section class="mb-5">
    <SectionTitle color="#ff0000" title="Articles à découvrir" />
    <PostSlider :posts="[]" color="#ff0000" />
  </section>
</template>

<script>
import SectionTitle from "../components/SectionTitle.vue";
import MainCard from "../components/MainCard.vue";
import PostSlider from "../components/PostSlider.vue";
import axios from "axios";
import { server } from "../helper";

export default {
  name: "HomeView",
  data() {
    return {
      mostViewedPost: [],
      popularPost: [],
    };
  },
  components: {
    MainCard,
    SectionTitle,
    PostSlider,
  },
  methods: {
    getMostViewedPost() {
      axios
        .get(`${server.baseUrl}/api/posts/most-viewed?count=10`)
        .then((response) => {
          this.mostViewedPost = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getPopularPost() {
      axios
        .get(`${server.baseUrl}/api/posts/popular?count=10`)
        .then((response) => {
          this.popularPost = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getMostViewedPost();
    this.getPopularPost();
  },
};
</script>

<style scoped></style>
