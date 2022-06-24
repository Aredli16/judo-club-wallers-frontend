const getters = {
  getUser(state) {
    return state.user;
  },

  isUserAuth(state) {
    return !!state.user;
  },

  getError(state) {
    if (state.error.includes("auth/user-not-found")) {
      return "Le compte n'existe pas";
    } else if (state.error.includes("auth/invalid-email")) {
      return "Veuillez entrez un email valide";
    } else if (state.error.includes("auth/too-many-requests")) {
      return "L'accès au compte a temporairement était bloqué car il y a eu trop de tentatives de connexion. Merci de réessayer plus tard ou de réinitialiser votre mot de passe pour lever cette restriction";
    } else if (state.error.includes("auth/wrong-password")) {
      return "Mot de passe incorrect";
    } else if (state.error.includes("auth/email-already-in-use")) {
      return "L'adresse email est déjà utilisée par un autre compte";
    } else {
      return state.error;
    }
  },
};
export default getters;
