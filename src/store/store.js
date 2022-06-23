import { createStore } from "vuex";
import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

export default createStore({
  state() {
    return {
      user: null,
      error: null,
    };
  },
  mutations: mutations,
  getters: getters,
  actions: actions,
});
