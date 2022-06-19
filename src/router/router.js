import HomeView from "../views/HomeView.vue";
import PostView from "../views/PostView.vue";
import { createRouter, createWebHistory } from "vue-router";

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
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
