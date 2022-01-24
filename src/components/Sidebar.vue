<template>
  <div class="sidebar" v-if="isSidebar">
    <p>Sidebar</p>
    <button class="sidebar__all-users-btn">All users</button>
    <button class="sidebar__selected-users-btn">Selected users</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Sidebar",
  data() {
    return {};
  },

  computed: {
    ...mapGetters(["isSidebar"]),
  },
};
</script>

<style lang="scss">
.sidebar {
  width: 50%;
  max-width: 12.5rem;
  height: 100vh;
  background: gray;
  position: absolute;
  top: 44px;
  right: 0;
}
</style>
