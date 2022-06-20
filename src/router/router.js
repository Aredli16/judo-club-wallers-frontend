import PostView from "../views/PostView.vue";
import { createRouter, createWebHistory } from "vue-router";
import AlbumView from "../views/AlbumView.vue";
import ScheduleView from "../views/ScheduleView.vue";
import LocationView from "../views/LocationView.vue";
import CalendarView from "../views/CalendarView.vue";
import LoginView from "../views/LoginView.vue";
import MainView from "../views/MainView.vue";
import HomeView from "../views/HomeView.vue";
import RegisterView from "../views/RegisterView.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainView,
    children: [
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
    ],
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
