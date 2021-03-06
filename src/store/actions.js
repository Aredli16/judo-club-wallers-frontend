import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import router from "../router/router";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const actions = {
  signInAction({ commit }, payload) {
    signInWithEmailAndPassword(getAuth(), payload.email, payload.password)
      .then(async (response) => {
        commit("setUser", response.user);
        await router.push("/");
      })
      .catch((error) => {
        commit("setError", error.message);
      });
  },

  signUpAction({ commit }, payload) {
    createUserWithEmailAndPassword(getAuth(), payload.email, payload.password)
      .then((response) => {
        // When user is created in Firebase Auth, it updates his displayName
        updateProfile(response.user, { displayName: payload.displayName })
          .then(() => {
            response.user.displayName = payload.displayName;

            // When user is update and created, it save into firestore with additional information
            saveUserToFirestore(response.user, false, {
              lastname: payload.lastname,
              firstname: payload.firstname,
              newsletter: payload.newsletter,
            })
              .then(async () => {
                // Well Done ! Can store user and redirect
                commit("setUser", response.user);
                await router.push("/");
              })
              .catch((error) => console.log(error));
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        commit("setError", error.message);
      });
  },

  signOutAction({ commit }) {
    signOut(getAuth())
      .then(() => {
        commit("setUser", null);
      })
      .catch((error) => {
        commit("setError", error.message);
      });
  },

  authAction({ commit }) {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        commit("setUser", user);
      } else {
        commit("setUser", null);
      }
    });
  },

  signInWithGoogleAction({ commit }) {
    signInWithPopup(getAuth(), new GoogleAuthProvider())
      .then((response) => {
        saveUserToFirestore(response.user, true, {
          lastname: response.user.displayName.split(" ")[1],
          firstname: response.user.displayName.split(" ")[0],
          newsletter: true,
        })
          .then(async () => {
            commit("setUser", response.user);
            await router.push("/");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        commit("setError", error.message);
      });
  },

  signInWithFacebookAction({ commit }) {
    signInWithPopup(getAuth(), new FacebookAuthProvider())
      .then((response) => {
        saveUserToFirestore(response.user, true, {
          lastname: response.user.displayName.split(" ")[1],
          firstname: response.user.displayName.split(" ")[0],
          newsletter: true,
        })
          .then(async () => {
            commit("setUser", response.user);
            await router.push("/");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        commit("setError", error.message);
      });
  },

  resetErrorAction({ commit }) {
    commit("setError", "");
  },
};

const saveUserToFirestore = async (user, merge, additionalInformations) => {
  await setDoc(
    doc(getFirestore(), "users", user.uid),
    {
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      phoneNumber: user.phoneNumber,
      photoUrl: user.photoURL,
      lastname: additionalInformations.lastname,
      firstname: additionalInformations.firstname,
      newsletter: additionalInformations.newsletter,
    },
    {
      merge: merge,
    }
  );
};

export default actions;
