<template>
  <RouterView />
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions(["authAction"]),
  },
  mounted() {
    this.authAction();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");

/*noinspection CssUnusedSymbol*/
#app {
  font-family: "Ubuntu", serif;
}
</style>
