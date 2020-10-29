const {login, getInfo } = require('../../api/user')
const { getToken, setToken } = require("../../utils/auth");

const getDefaultStore = () => {
  return {
    token: getToken(),
    role: "",
    // email: ''
  };
};

const store = getDefaultStore();

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_ROLE: (state, role) => {
    state.role = role;
  },
  // SET_EMAIL: (state, email) => {
  //     state.email = email;
  // }
};

const actions = {
  login({ commit }, userInfo) {
    const { email, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({ email: email.trim(), password: password.trim() })
        .then((res) => {
          const { data } = res;
          const token = res.headers["authorization"];
          setToken(token);
          commit("SET_TOKEN", token);
          commit("SET_ROLE", data.role);
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getInfo({ commit}) {
    return new Promise((resolve, reject) => {
      getInfo().then(response => {
        const { data } = response
        console.log("in get info ", data);
        if (!data) {
          return reject('Verification failed, please Login again.')
        }

        commit("SET_ROLE", data.role);

        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
};

export default {
  namespaced: true,
  store,
  mutations,
  actions,
};
