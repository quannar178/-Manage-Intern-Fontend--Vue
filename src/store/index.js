import Vue from "vue";
import Vuex from "vuex";
import user from "./module/user";
import setting from "./module/setting";
import getters from "./getters";

Vue.use(Vuex);

const router = new Vuex.Store({
  modules: {
    user,
    setting,
  },
  getters,
});

export default router;
