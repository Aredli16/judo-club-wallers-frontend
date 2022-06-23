<template>
  <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
    <div class="container-fluid">
      <button
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        class="navbar-toggler"
        data-bs-target="#navbarSupportedContent"
        data-bs-toggle="collapse"
        type="button"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <a
          class="navbar-brand d-lg-flex d-none align-items-center logo-title"
          href="#"
        >
          <img alt="logo" class="logo-image" src="../assets/images/logo.png" />
          <span>Judo Club Wallers</span>
        </a>
        <form class="d-flex my-2 mx-auto" role="search">
          <input
            aria-label="Search"
            class="form-control me-2"
            placeholder="Rechercher"
            type="search"
          />
          <button class="btn btn-outline-danger" type="submit">
            Rechercher
          </button>
        </form>
        <RouterLink
          v-if="!isUserAuth"
          class="btn btn-danger login-button"
          to="/login"
          >S'identifier
        </RouterLink>
        <div v-else class="dropdown">
          <button
            aria-expanded="false"
            class="btn btn-danger dropdown-toggle"
            data-bs-toggle="dropdown"
            type="button"
          >
            {{ getUser.displayName }}
          </button>
          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-dark">
            <li>
              <button class="dropdown-item" @click="signOut">
                Déconnexion
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "NavbarComponent",
  computed: {
    ...mapGetters(["isUserAuth", "getUser"]),
  },
  methods: {
    ...mapActions(["signOutAction"]),
    signOut() {
      this.signOutAction();
    },
  },
};
</script>

<style scoped>
.logo-title {
  font-size: 2rem;
  text-transform: uppercase;
}

.logo-image {
  height: 60px;
  margin-right: 10px;
  background-color: #ffffff;
  border-radius: 10%;
  padding: 5px;
}
</style>
