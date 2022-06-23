import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "@fortawesome/fontawesome-free/css/all.css";
import router from "./router/router";
import store from "./store/store";

createApp(App).use(router).use(store).mount("#app");
