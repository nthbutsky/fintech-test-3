export default {
  state: {
    allUsers: null,
    selectedUsers: null,
    isAllUsers: true,
    isSelectedUsers: false,
    apiUrl: "https://api.github.com/users",
  },

  getters: {
    allUsers(state) {
      return state.allUsers;
    },

    selectedUsers(state) {
      return state.selectedUsers;
    },

    isAllUsers(state) {
      return state.isAllUsers;
    },

    isSelectedUsers(state) {
      return state.isSelectedUsers;
    },

    apiUrl(state) {
      return state.apiUrl;
    },
  },

  mutations: {
    SET_ALL_USERS(state, payload) {
      state.allUsers = payload;
    },

    SET_SELECTED_USERS(state, payload) {
      state.selectedUsers = payload;
    },

    SHOW_ALL_USERS(state) {
      state.isAllUsers = true;
      state.isSelectedUsers = false;
    },

    SHOW_SELECTED_USERS(state) {
      state.isAllUsers = false;
      state.isSelectedUsers = true;
    },

    ADD_SELECTED_USER(state, payload) {
      state.selectedUsers.push(payload);
    },

    DELETE_SELECTED_USER(state, payload) {
      state.selectedUsers = state.selectedUsers.filter(
        (el) => el.id !== payload
      );
    },
  },

  actions: {
    async getUsers({ commit, getters }) {
      try {
        const response = await fetch(getters.apiUrl);
        const data = await response.json();
        console.log("ALL USERS:", data);
        commit("SET_ALL_USERS", data);
      } catch (error) {
        console.log(error);
      }
    },

    selectUser({ commit, getters }, payload) {
      const selectedUser = getters.allUsers.filter(
        (el) => el.id === payload
      )[0];
      if (getters.selectedUsers === null) {
        commit("SET_SELECTED_USERS", []);
      }
      if (getters.selectedUsers.find((el) => el.id === selectedUser.id)) {
        commit("DELETE_SELECTED_USER", payload);
      } else {
        commit("ADD_SELECTED_USER", selectedUser);
      }
      console.log(selectedUser);
      console.log(getters.selectedUsers);
    },

    initAllUsers({ commit }) {
      commit("SHOW_ALL_USERS");
    },

    initSelectedUsers({ commit }) {
      commit("SHOW_SELECTED_USERS");
    },
  },
};
