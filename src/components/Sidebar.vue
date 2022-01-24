<template>
  <div class="sidebar" v-if="isSidebar">
    <p>Sidebar</p>
    <button class="sidebar__all-users-btn" @click="initAllUsers">
      All users
    </button>
    <button class="sidebar__selected-users-btn" @click="initSelectedUsers">
      Selected users
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Sidebar",
  data() {
    return {};
  },

  computed: {
    ...mapGetters(["isSidebar"]),
  },

  methods: {
    ...mapActions(["initAllUsers", "initSelectedUsers"]),
  },
};
</script>

<style lang="scss">
.sidebar {
  width: 50%;
  max-width: 12.5rem;
  height: 100vh;
  background: hsla(0, 0%, 0%, 0.5);
  position: fixed;
  top: 44px;
  right: 0;

  &__all-users-btn {
    width: 100px;
    height: 100px;
    padding: 20px;
    text-transform: uppercase;
    border-radius: 50%;
    border: none;
  }
}
</style>
