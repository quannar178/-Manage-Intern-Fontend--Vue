const state = {
  showSidebar: true,
};

const mutations = {
  TOGGLE_SIDEBAR: (state) => {
    state.showSidebar = !state.showSidebar;
  },
};

const actions = {
  toggleSidebar({ commit }) {
    commit("TOGGLE_SIDEBAR");
  },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
  };