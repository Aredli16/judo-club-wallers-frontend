<template>
  <div class="sidebar">
    <div class="d-lg-flex flex-lg-column d-flex flex-row">
      <SidebarTile
        color="#ff0000"
        icon="fa-solid fa-house"
        link="/"
        title="Accueil"
      />
      <SidebarTile
        color="#009ab5"
        icon="fa-solid fa-newspaper"
        link="/posts"
        title="Actualités"
      />
      <SidebarTile
        color="#00b545"
        icon="fa-solid fa-calendar-days"
        link="/events"
        title="Événement"
      />
      <SidebarTile
        color="blue"
        icon="fa-solid fa-trophy"
        link="/results"
        title="Résultats"
      />
      <SidebarTile
        color="#ffc000"
        icon="fa-solid fa-image"
        link="/albums"
        title="Photos"
      />
    </div>
    <div class="d-lg-flex flex-lg-column d-flex flex-row mt-4">
      <SidebarTile
        color="#b56100"
        icon="fa-solid fa-clock"
        link="/schedule"
        title="Horaires"
      />
      <SidebarTile
        color="#7000b5"
        icon="fa-solid fa-earth-europe"
        link="/location"
        title="Localisation"
      />
      <SidebarTile
        color="#91b500"
        icon="fa-solid fa-circle-question"
        link="/faq"
        title="F.A.Q"
      />
      <SidebarTile
        color="#4654eb"
        icon="fa-solid fa-circle-info"
        link="/about"
        title="A propos"
      />
    </div>
  </div>
</template>

<script>
import SidebarTile from "./SidebarTile.vue";

export default {
  name: "HomeSidebar",
  components: { SidebarTile },
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
