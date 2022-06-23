<template>
  <main class="text-center">
    <div class="form-signin">
      <RouterLink to="/"
        ><img alt="" class="logo-image mb-4" src="../assets/images/logo.png"
      /></RouterLink>
      <h1 class="h3 mb-3 fw-normal">S'inscrire</h1>

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

      <div class="form-floating mb-3">
        <input
          id="lastname"
          v-model="lastname"
          class="form-control"
          placeholder="Lastname"
          type="text"
        />
        <label for="lastname">Nom</label>
      </div>
      <div class="form-floating mb-3">
        <input
          id="firstname"
          v-model="firstname"
          class="form-control"
          placeholder="Firstname"
          type="text"
        />
        <label for="firstname">Prénom</label>
      </div>
      <div class="form-floating mb-3">
        <input
          id="username"
          v-model="username"
          class="form-control"
          placeholder="Username"
          type="text"
        />
        <label for="username">Nom d'utilisateur</label>
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
      <div class="form-floating mb-3">
        <input
          id="password"
          v-model="password"
          class="form-control"
          placeholder="Password"
          type="password"
        />
        <label for="password">Mot de passe</label>
      </div>
      <div class="form-floating mb-3">
        <input
          id="password-confirm"
          v-model="passwordConfirm"
          class="form-control"
          placeholder="Password"
          type="password"
        />
        <label for="password-confirm">Confirmer le mot de passe</label>
      </div>

      <div class="checkbox mb-3">
        <label>
          <input class="me-1" type="checkbox" />S'inscrire à la
          newsletter</label
        >
      </div>
      <button class="w-100 btn btn-lg btn-primary mb-2" @click="validate">
        S'inscrire
      </button>
      <p class="mt-5 mb-3 text-muted">&copy; 2021</p>
    </div>
  </main>
</template>

<script>
export default {
  name: "RegisterView",
  data() {
    return {
      lastname: null,
      firstname: null,
      username: null,
      email: null,
      password: null,
      passwordConfirm: null,
      validationErrors: [],
    };
  },
  methods: {
    resetErrors() {
      this.validationErrors = [];
    },

    validate() {
      this.resetErrors(); // Reset previous errors

      if (!this.lastname) {
        this.validationErrors.push(
          "<strong>Nom:</strong> le nom ne peut pas être vide"
        );
      }
      if (!this.firstname) {
        this.validationErrors.push(
          "<strong>Prénom:</strong> le prénom ne peut pas être vide"
        );
      }
      if (!this.username) {
        this.validationErrors.push(
          "<strong>Nom d'utilisateur:</strong> le nom d'utilisateur ne peut pas être vide"
        );
      }
      if (!this.email) {
        this.validationErrors.push(
          "<strong>Email:</strong> l'adresse email ne peut pas être vide"
        );
      } else if (/.+@.+/.test(this.email) !== true) {
        this.validationErrors.push(
          "<strong>E-mail:</strong> Veuillez renseignez un email correct."
        );
      }
      if (!this.password) {
        this.validationErrors.push(
          "<strong>Mot de passe:</strong> le mot de passe ne peut pas être vide"
        );
      }
      if (/.{6,}/.test(this.password) !== true) {
        this.validationErrors.push(
          "<strong>Mot de passe:</strong> la taille du mot de passe doit être supérieur à 6 caractères"
        );
      }
      if (this.password !== this.passwordConfirm) {
        this.validationErrors.push(
          "<strong>Mot de passe:</strong> les mots de passes ne correspondent pas"
        );
      }
      if (this.validationErrors.length <= 0) {
        // TODO Register
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
