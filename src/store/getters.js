const getters = {
  role: (state) => state.user.role,
  token: (state) => state.user.token,
  id: (state) => state.user.id,
  showSidebar: (state) => state.setting.showSidebar,
};

export default getters;
