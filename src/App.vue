<template>
  <HomeView />
</template>

<script>
import HomeView from "./views/HomeView.vue";

export default {
  name: "App",
  components: { HomeView },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");

/*noinspection CssUnusedSymbol*/
#app {
  font-family: "Ubuntu", serif;
}
</style>
