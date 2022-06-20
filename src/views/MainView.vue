<template>
  <header>
    <NavbarComponent />
    <CarouselComponent />
  </header>
  <main class="container">
    <div class="row mt-3">
      <div class="col-lg-3">
        <SidebarComponent class="position-sticky" style="top: 1rem" />
      </div>
      <div class="col-lg-6">
        <RouterView />
      </div>
      <div class="col-lg-3 d-none d-lg-block">
        <div class="position-sticky" style="top: 1rem; bottom: 1rem">
          <div id="fb-root"></div>
          <div
            class="fb-page"
            data-adapt-container-width="true"
            data-height=""
            data-hide-cover="false"
            data-href="https://www.facebook.com/lempereurRita"
            data-show-facepile="true"
            data-small-header="false"
            data-tabs="timeline"
            data-width=""
          >
            <blockquote
              cite="https://www.facebook.com/lempereurRita"
              class="fb-xfbml-parse-ignore"
            >
              <a
                class="text-decoration-none"
                href="https://www.facebook.com/lempereurRita"
                ><i class="fa-brands fa-facebook me-1"></i>Judo,Ju-Jitsu,PPG
                Wallers</a
              >
            </blockquote>
          </div>
          <RecentAlbum />
        </div>
      </div>
    </div>
  </main>
  <FooterComponent />
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import SidebarComponent from "../components/SidebarComponent.vue";
import RecentAlbum from "../components/RecentAlbum.vue";
import CarouselComponent from "../components/CarouselComponent.vue";

export default {
  name: "App",
  components: {
    RecentAlbum,
    SidebarComponent,
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
  },
  mounted() {
    console.log("App mounted");
    let facebook = document.createElement("script");
    facebook.setAttribute(
      "src",
      "https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v14.0"
    );
    facebook.setAttribute("async", "");
    facebook.setAttribute("defer", "");
    facebook.setAttribute("crossorigin", "anonymous");
    facebook.setAttribute("nonce", "v3ju0WZG");
    document.getElementById("fb-root").appendChild(facebook);
  },
};
</script>

<style scoped></style>
