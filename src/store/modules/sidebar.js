export default {
  state: {
    isSidebar: false,
  },

  getters: {
    isSidebar(state) {
      return state.isSidebar;
    },
  },

  mutations: {
    SET_SIDEBAR(state) {
      state.isSidebar = !state.isSidebar;
    },
  },

  actions: {
    openCloseSidebar({ commit }) {
      commit("SET_SIDEBAR");
    },
  },
};
