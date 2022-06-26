<template>
  <section class="mb-3">
    <SectionTitle color="#009ab5" title="Les actus importantes" />
    <MainCard :post="importantNews[0]" class="mb-3"
      >{{ importantNews[0].content }}
    </MainCard>
    <div class="row">
      <div class="col-6">
        <PostCard :post="importantNews[1]"
          >{{ importantNews[1].content }}
        </PostCard>
      </div>
      <div class="col-6">
        <PostCard :post="importantNews[2]"
          >{{ importantNews[2].content }}
        </PostCard>
      </div>
    </div>
  </section>
  <section class="mb-5">
    <SectionTitle color="#009ab5" title="Les dernières actus" />
    <MainCard :post="latestNews[0]" class="mb-3"
      >{{ latestNews[0].content }}
    </MainCard>
    <LargePostCard
      v-for="post in latestNews.slice(1, latestNews.length)"
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
  name: "PostView",
  components: { LargePostCard, PostCard, MainCard, SectionTitle },
  data() {
    return {
      importantNews: [],
      latestNews: [],
    };
  },
  methods: {
    getImportantNews() {
      axios
        .get(`${server.baseUrl}/api/posts?type=news&important=true&count=3`)
        .then((response) => {
          this.importantNews = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getLatestNews() {
      axios
        .get(`${server.baseUrl}/api/posts?type=news`)
        .then((response) => {
          this.latestNews = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getImportantNews();
    this.getLatestNews();
  },
};
</script>

<style scoped></style>
