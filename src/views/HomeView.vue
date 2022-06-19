<template>
  <section class="mb-5">
    <SectionTitle color="#ff0000" title="Articles les plus vus" />
    <MainCard :post="{ type: 'Feature', title: 'Lorem ipsum.' }"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
      vero.
    </MainCard>
    <PostSlider color="#ff0000" />
  </section>
  <section class="mb-5">
    <SectionTitle color="#ff0000" title="Articles populaires" />
    <PostSlider color="#ff0000" />
  </section>
  <section class="mb-5">
    <SectionTitle color="#ff0000" title="Articles à découvrir" />
    <PostSlider color="#ff0000" />
  </section>
</template>

<script>
import SectionTitle from "../components/SectionTitle.vue";
import MainCard from "../components/MainCard.vue";
import PostSlider from "../components/PostSlider.vue";

export default {
  name: "HomeView",
  components: {
    MainCard,
    SectionTitle,
    PostSlider,
  },
};
</script>

<style scoped></style>
