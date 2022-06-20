<template>
  <section class="mb-3">
    <SectionTitle color="#0000ff" title="Les derniers résultats" />
    <MainCard :post="{ type: 'Feature', title: 'Lorem ipsum.' }" class="mb-3"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
      vero.
    </MainCard>
    <div class="row mb-3">
      <div class="col-6">
        <PostCard :post="{ type: 'Feature', title: 'Lorem ipsum.' }"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
          vero.
        </PostCard>
      </div>
      <div class="col-6">
        <PostCard :post="{ type: 'Feature', title: 'Lorem ipsum.' }"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
          vero.
        </PostCard>
      </div>
    </div>
    <LargePostCard
      v-for="index in 10"
      :key="index"
      :post="{
        type: 'Feature',
        title: 'Lorem ipsum.',
        author: 'Lorem ipsum.',
        date_posted: '01/01/01',
      }"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
      vero.
    </LargePostCard>
  </section>
</template>

<script>
import SectionTitle from "../components/SectionTitle.vue";
import MainCard from "../components/MainCard.vue";
import PostCard from "../components/PostCard.vue";
import LargePostCard from "../components/LargePostCard.vue";

export default {
  name: "ResultView",
  components: { PostCard, MainCard, SectionTitle, LargePostCard },
};
</script>

<style scoped></style>
