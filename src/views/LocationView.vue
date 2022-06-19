<template>
  <SectionTitle color="#7000b5" title="Localisation du dojo" />
  <iframe
    allowfullscreen=""
    height="75%"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2544.476783911006!2d3.3913817156021913!3d50.37630997946531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2eb3c7c5b7ae9%3A0x9985ca123a9e35a!2sJudo%20Club%20Wallers!5e0!3m2!1sfr!2sfr!4v1655669850427!5m2!1sfr!2sfr"
    width="100%"
  ></iframe>
</template>

<script>
import SectionTitle from "../components/SectionTitle.vue";

export default {
  name: "LocationVue",
  components: { SectionTitle },
};
</script>

<style scoped></style>
