import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase.config";
import router from "../router/router";

const actions = {
  signInAction({ commit }, payload) {
    signInWithEmailAndPassword(auth, payload.email, payload.password)
      .then((response) => {
        commit("setUser", response.user);
        router.push("/").then(() => console.log("Logged"));
      })
      .catch((error) => {
        commit("setError", error.message);
      });
  },

  signUpAction({ commit }, payload) {
    createUserWithEmailAndPassword(auth, payload.email, payload.password)
      .then((response) => {
        updateProfile(response.user, { displayName: payload.displayName }).then(
          () => {
            response.user.displayName = payload.displayName;
            commit("setUser", response.user);
            router.push("/").then(() => console.log("Signed"));
          }
        );
      })
      .catch((error) => {
        commit("setError", error.message);
      });
  },

  signOutAction({ commit }) {
    signOut(auth)
      .then(() => {
        commit("setUser", null);
      })
      .catch((error) => {
        commit("setError", error.message);
      });
  },

  authAction({ commit }) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        commit("setUser", user);
      } else {
        commit("setUser", null);
      }
    });
  },
};

export default actions;
