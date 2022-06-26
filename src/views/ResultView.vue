<template>
  <section class="mb-3">
    <SectionTitle color="#0000ff" title="Les derniers résultats" />
    <MainCard :post="latestResult[0]" class="mb-3"
      >{{ latestResult[0].content }}
    </MainCard>
    <div class="row mb-3">
      <div class="col-6">
        <PostCard :post="latestResult[1]"
          >{{ latestResult[1].content }}
        </PostCard>
      </div>
      <div class="col-6">
        <PostCard :post="latestResult[2]"
          >{{ latestResult[2].content }}
        </PostCard>
      </div>
    </div>
    <LargePostCard
      v-for="post in latestResult.slice(3, latestResult.length)"
      :key="post.id"
      :post="post"
      >{{ post.content }}
    </LargePostCard>
  </section>
</template>

<script>
import SectionTitle from "../components/SectionTitle.vue";
import MainCard from "../components/MainCard.vue";
import PostCard from "../components/PostCard.vue";
import LargePostCard from "../components/LargePostCard.vue";
import axios from "axios";
import { server } from "../helper";

export default {
  name: "ResultView",
  data() {
    return {
      latestResult: [],
    };
  },
  components: { PostCard, MainCard, SectionTitle, LargePostCard },
  methods: {
    getLatestResult() {
      axios
        .get(`${server.baseUrl}/api/posts?type=results`)
        .then((response) => {
          this.latestResult = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getLatestResult();
  },
};
</script>

<style scoped></style>
