<template>
  <section-title color="#b56100" title="Les horaires du club" />
  <table class="table table-striped text-center">
    <thead>
      <tr>
        <th>Mercredi</th>
        <th>Vendredi</th>
        <th>Samedi</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="fw-bold">14:00 - 15:00</td>
        <td class="fw-bold">18:30 - 19:30</td>
        <td class="fw-bold">14:00 - 15:00</td>
      </tr>
      <tr>
        <td>
          Baby Judo <br />
          <i>Né(e)s en 2016 et 2017</i>
        </td>
        <td>PPG Adultes</td>
        <td>Judo 1er Groupe <br /><i>Né(e)s en 2014 et 2015</i></td>
      </tr>
      <tr>
        <td class="fw-bold">15:00 - 16:00</td>
        <td class="fw-bold">19:30 - 20:30</td>
        <td class="fw-bold">15:00 - 16:00</td>
      </tr>
      <tr>
        <td>
          Judo 1er Groupe <br />
          <i>Né(e)s en 2014 et 2015</i>
        </td>
        <td>Judo / Ju-Jitsu 3ème Groupe</td>
        <td>
          Ju-Jitsu enfants <br />
          <i>Né(e)s en 2010 et 2013</i>
        </td>
      </tr>
      <tr>
        <td class="fw-bold">16:00 - 17:15</td>
        <td class="fw-bold">20:30 - 21:30</td>
        <td class="fw-bold">16:00 - 17:00</td>
      </tr>
      <tr>
        <td>
          Judo 2ème Groupe <br />
          <i>Né(e)s de 2010 à 2013</i>
        </td>
        <td>PPG Compétiteurs 3ème Groupe</td>
        <td>
          Judo 2ème Groupe <br />
          <i>Né(e)s de 2010 à 2013</i>
        </td>
      </tr>
      <tr>
        <td class="fw-bold">17:15 - 18:30</td>
        <td class="fw-bold"></td>
        <td class="fw-bold">17:00 - 18:30</td>
      </tr>
      <tr>
        <td>Judo -18 ans <br /><i>Né(e)s en 2004 et après</i></td>
        <td></td>
        <td>
          Judo 3ème Groupe <br />
          <i>Né(e)s en 2009 et avant</i>
        </td>
      </tr>
      <tr>
        <td class="fw-bold">18:30 - 20:00</td>
        <td class="fw-bold"></td>
        <td class="fw-bold"></td>
      </tr>
      <tr>
        <td>
          Judo 3ème Groupe <br />
          <i>Né(e)s en 2009 et avant</i>
        </td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td class="fw-bold">20:00 - 21:30</td>
        <td class="fw-bold"></td>
        <td class="fw-bold"></td>
      </tr>
      <tr>
        <td>
          Ju-Jitsu / Self défense <br />
          <i>Tous niveaux dès 12 ans</i>
        </td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <p class="text-muted fst-italic">
    Pour toutes informations complémentaires, n'hésitez pas à nous contacter.
  </p>
</template>

<script>
import SectionTitle from "../components/SectionTitle.vue";

export default {
  name: "ScheduleView",
  components: { SectionTitle },
};
</script>

<style scoped>
table {
  --bs-table-striped-bg: rgba(181, 97, 0, 0.44);
}
</style>
