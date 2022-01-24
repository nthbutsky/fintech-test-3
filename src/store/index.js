import { createStore } from "vuex";
import users from "./modules/users";
import sidebar from "./modules/sidebar";

export default createStore({
  modules: {
    users,
    sidebar,
  },
});
