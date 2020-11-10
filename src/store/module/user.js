const { login, logout, getInfo } = require("../../api/user");
const { getToken, setToken, removeToken } = require("../../utils/auth");

const getDefaultState = () => {
  return {
    token: getToken() || "",
    role: "",
    id: "",
  };
};

const state = getDefaultState();

const mutations = {
  SET_ID: (state, id) => {
    state.id = id;
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_ROLE: (state, role) => {
    state.role = role;
  },
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState());
  },
  // SET_EMAIL: (state, email) => {
  //     state.email = email;
  // }
};

const actions = {
  login({ commit }, userInfo) {
    const { email, password } = userInfo;
    console.log("in module user: login");
    return new Promise((resolve, reject) => {
      login({ email: email.trim(), password: password.trim() })
        .then((res) => {
          const { data } = res;
          const token = res.headers["authorization"];
          setToken(token);

          commit("SET_TOKEN", token);
          commit("SET_ROLE", data.role);
          commit("SET_ID", data.id);
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  logout({ commit }) {
    console.log("in module user: logout");
    return new Promise((resolve, reject) => {
      logout()
        .then(() => {
          removeToken();
          commit("RESET_TOKEN");
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  getInfo({ commit }) {
    console.log("in module user: getInfo");

    return new Promise((resolve, reject) => {
      getInfo()
        .then((response) => {
          const { data } = response;
          console.log("in get info ", data);
          if (!data) {
            this.$router.redirect("/login");
            return reject("Verification failed, please Login again.");
          }
          const role = data.role[0].toUpperCase() + data.role.slice(1);
          commit("SET_ROLE", role);
          commit("SET_ID", data.id);

          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  resetState({ commit }) {
    console.log("in module user: resetState");

    return new Promise((resolve) => {
      removeToken();
      commit("RESET_STATE");
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
