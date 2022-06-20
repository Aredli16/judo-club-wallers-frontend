import HomeView from "../views/HomeView.vue";
import PostView from "../views/PostView.vue";
import { createRouter, createWebHistory } from "vue-router";
import AlbumView from "../views/AlbumView.vue";
import ScheduleView from "../views/ScheduleView.vue";
import LocationView from "../views/LocationView.vue";
import CalendarView from "../views/CalendarView.vue";

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
  {
    path: "/schedule",
    name: "schedule",
    component: ScheduleView,
  },
  {
    path: "/location",
    name: "location",
    component: LocationView,
  },
  {
    path: "/calendar",
    name: "calendar",
    component: CalendarView,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
