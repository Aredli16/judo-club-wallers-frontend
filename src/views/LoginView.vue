<template>
  <main class="text-center">
    <div class="form-signin">
      <RouterLink to="/"
        ><img alt="" class="logo-image mb-4" src="../assets/images/logo.png"
      /></RouterLink>
      <h1 class="h3 mb-3 fw-normal">S'identifier</h1>

      <div v-if="validationErrors.length" class="container bg-danger card mb-3">
        <ul class="list-group list-group-flush">
          <li
            v-for="(error, index) in validationErrors"
            :key="`error-${index}`"
            class="list-group-item text-white bg-danger"
            v-html="error"
          ></li>
        </ul>
      </div>

      <div v-if="firebaseError" class="container bg-danger card mb-3">
        <p class="m-0 p-3 text-white">{{ firebaseError }}</p>
      </div>

      <div class="form-floating mb-3">
        <input
          id="email"
          v-model="email"
          class="form-control"
          placeholder="name@example.com"
          type="email"
        />
        <label for="email">Adresse Mail</label>
      </div>
      <div class="form-floating">
        <input
          id="password"
          v-model="password"
          class="form-control"
          placeholder="Password"
          type="password"
        />
        <label for="password">Mot de passe</label>
      </div>

      <div class="checkbox mb-3">
        <label> <input class="me-1" type="checkbox" />Se souvenir de moi</label>
      </div>
      <button class="w-100 btn btn-lg btn-primary mb-2" @click="validate">
        Connexion
      </button>
      <RouterLink to="/register">S'inscrire</RouterLink>
      <p class="mt-5 mb-3 text-muted">&copy; 2021</p>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "LoginView",
  data() {
    return {
      email: null,
      password: null,
      validationErrors: [],
      firebaseError: null,
    };
  },
  computed: {
    ...mapGetters(["getError"]),
  },
  methods: {
    ...mapActions(["signInAction"]),
    resetErrors() {
      this.validationErrors = [];
      this.firebaseError = null;
    },

    validate() {
      this.resetErrors(); // Reset previous errors

      if (!this.email) {
        this.validationErrors.push(
          "<strong>Email:</strong> l'adresse email ne peut pas être vide"
        );
      }
      if (!this.password) {
        this.validationErrors.push(
          "<strong>Mot de passe:</strong> le mot de passe ne peut pas être vide"
        );
      }
      if (this.validationErrors.length <= 0) {
        this.signIn();
      }
    },

    signIn() {
      this.signInAction({ email: this.email, password: this.password });
      if (this.getError) {
        if (this.getError.includes("auth/user-not-found")) {
          this.firebaseError = "Le compte n'existe pas";
        }
        if (this.getError.includes("auth/wrong-password")) {
          this.firebaseError = "Mot de passe incorrect";
        }
      }
    },
  },
};
</script>

<style scoped>
main {
  height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.logo-image {
  width: 130px;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
