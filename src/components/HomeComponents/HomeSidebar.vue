<template>
  <div class="sidebar">
    <div class="d-lg-flex flex-lg-column d-flex flex-row">
      <HomeSidebarTile
        :active="true"
        color="#ff0000"
        icon="fa-solid fa-house"
        link="#"
        title="Accueil"
      />
      <HomeSidebarTile
        color="#009ab5"
        icon="fa-solid fa-newspaper"
        link="#"
        title="Actualités"
      />
      <HomeSidebarTile
        color="#00b545"
        icon="fa-solid fa-calendar-days"
        link="#"
        title="Événement"
      />
      <HomeSidebarTile
        color="blue"
        icon="fa-solid fa-trophy"
        link="#b50097"
        title="Résultats"
      />
      <HomeSidebarTile
        color="#ffc000"
        icon="fa-solid fa-image"
        link="#b50097"
        title="Photos"
      />
    </div>
    <div class="d-lg-flex flex-lg-column d-flex flex-row mt-4">
      <HomeSidebarTile
        color="#b56100"
        icon="fa-solid fa-clock"
        link="#"
        title="Horaires"
      />
      <HomeSidebarTile
        color="#7000b5"
        icon="fa-solid fa-earth-europe"
        link="#"
        title="Localisation"
      />
      <HomeSidebarTile
        color="#91b500"
        icon="fa-solid fa-circle-question"
        link="#"
        title="F.A.Q"
      />
      <HomeSidebarTile
        color="#4654eb"
        icon="fa-solid fa-circle-info"
        link="#"
        title="A propos"
      />
    </div>
  </div>
</template>

<script>
import HomeSidebarTile from "./HomeSidebarTile.vue";

export default {
  name: "HomeSidebar",
  components: { HomeSidebarTile },
};
</script>

<style scoped>
.sidebar {
  overflow-x: scroll;
  -ms-overflow-style: none;
}

.sidebar::-webkit-scrollbar {
  display: none;
}
</style>
