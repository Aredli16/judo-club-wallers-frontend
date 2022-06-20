<template>
  <SectionTitle color="#00b545" title="Événements et Compétitions à venir" />
  <iframe
    height="75%"
    src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FParis&showTitle=0&showDate=1&showNav=1&showPrint=1&showTabs=0&showCalendars=0&src=MjZqZ25mbGJ0aWV1NTB2M3F1NjhqZ2kwbThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23F09300"
    style="border-width: 0"
    width="100%"
  ></iframe>
</template>

<script>
import SectionTitle from "../components/SectionTitle.vue";

export default {
  name: "EventView",
  components: { SectionTitle },
};
</script>

<style scoped></style>
