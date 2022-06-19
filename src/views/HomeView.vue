<template>
  <header>
    <NavbarComponent />
    <HomeCarousel />
  </header>
  <main class="container">
    <div class="row mt-3">
      <div class="col-lg-3">
        <HomeSidebar class="position-sticky" style="top: 1rem" />
      </div>
      <div class="col-lg-6">
        <section class="mb-5">
          <HomeSectionTitle color="red" title="Articles les plus vus" />
          <HomeMainCard :post="{ type: 'Feature', title: 'Lorem ipsum.' }"
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Assumenda, vero.
          </HomeMainCard>
          <HomePostSlider />
        </section>
        <section class="mb-5">
          <HomeSectionTitle color="red" title="Articles populaires" />
          <HomePostSlider />
        </section>
        <section class="mb-5">
          <HomeSectionTitle color="red" title="Articles à découvrir" />
          <HomePostSlider />
        </section>
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
              <a href="https://www.facebook.com/lempereurRita"
                >Judo,Ju-Jitsu,PPG Wallers</a
              >
            </blockquote>
          </div>
          <HomeAlbum />
        </div>
      </div>
    </div>
  </main>
  <FooterComponent />
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import HomeCarousel from "../components/HomeComponents/HomeCarousel.vue";
import HomeSidebar from "../components/HomeComponents/HomeSidebar.vue";
import HomeSectionTitle from "../components/HomeComponents/HomeSectionTitle.vue";
import HomeMainCard from "../components/HomeComponents/HomeMainCard.vue";
import HomePostSlider from "../components/HomeComponents/HomePostSlider.vue";
import HomeAlbum from "../components/HomeComponents/HomeAlbum.vue";

export default {
  name: "HomeView",
  components: {
    HomeAlbum,
    HomeMainCard,
    HomeSectionTitle,
    HomeSidebar,
    HomeCarousel,
    FooterComponent,
    NavbarComponent,
    HomePostSlider,
  },
  mounted() {
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
