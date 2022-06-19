import HomeView from "../views/HomeView.vue";
import PostView from "../views/PostView.vue";
import { createRouter, createWebHistory } from "vue-router";
import AlbumView from "../views/AlbumView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/posts",
    name: "posts",
    component: PostView,
  },
  {
    path: "/albums",
    name: "albums",
    component: AlbumView,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
