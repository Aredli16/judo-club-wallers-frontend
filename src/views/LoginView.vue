<template>
  <main class="text-center">
    <div class="form-signin">
      <RouterLink to="/"
        ><img alt="" class="logo-image mb-4" src="../assets/images/logo.png"
      /></RouterLink>
      <h1 class="h3 mb-3 fw-normal">S'identifier</h1>

      <div class="form-floating mb-3">
        <input
          id="email"
          class="form-control"
          placeholder="name@example.com"
          type="email"
        />
        <label for="email">Adresse Mail</label>
      </div>
      <div class="form-floating">
        <input
          id="password"
          class="form-control"
          placeholder="Password"
          type="password"
        />
        <label for="password">Mot de passe</label>
      </div>

      <div class="checkbox mb-3">
        <label> <input class="me-1" type="checkbox" />Se souvenir de moi</label>
      </div>
      <button class="w-100 btn btn-lg btn-primary mb-2">Connexion</button>
      <a href="#">S'inscrire</a>
      <p class="mt-5 mb-3 text-muted">&copy; 2021</p>
    </div>
  </main>
</template>

<script>
export default {
  name: "LoginView",
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
