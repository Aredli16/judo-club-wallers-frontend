<template>
  <div class="container">
    <footer
      class="d-lg-flex justify-content-between align-items-center py-3 my-4 border-top"
    >
      <p class="col-lg-4 text-center text-lg-start mb-0 text-muted">
        &copy; 2022 Judo Club Wallers
      </p>

      <a
        class="col-lg-4 d-none d-lg-flex align-items-lg-center justify-content-lg-center mb-lg-3 mb-lg-0 me-lg-auto"
        href="/"
      >
        <img alt="logo" class="logo-image" src="../assets/images/logo.png" />
      </a>

      <ul
        class="nav col-lg-4 justify-content-lg-end d-flex justify-content-center ms-auto"
      >
        <li class="nav-item">
          <a class="nav-link px-2 text-muted" href="#">Conditions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-2 text-muted" href="#">Confidentialité</a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-2 text-muted" href="#">Aide</a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-2 text-muted" href="#">Contact</a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.logo-image {
  height: 40px;
}
</style>
