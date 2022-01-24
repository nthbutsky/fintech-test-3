<template>
  <div class="sidebar" v-if="isSidebar">
    <button
      class="sidebar__all-users-btn"
      :class="{ 'sidebar__all-users-btn_clicked': isAllUsers }"
      @click="initAllUsers"
    >
      All users
    </button>
    <button
      class="sidebar__selected-users-btn"
      :class="{ 'sidebar__all-users-btn_clicked': isSelectedUsers }"
      @click="initSelectedUsers"
    >
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
    ...mapGetters(["isSidebar", "isSelectedUsers", "isAllUsers"]),
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;

  &__all-users-btn,
  &__selected-users-btn {
    text-transform: uppercase;
    cursor: pointer;
    padding: 5%;
    margin: 3%;
    margin-bottom: 0;
    width: 100%;
    border-radius: 30px;
    border: none;
    background: hsl(0, 0%, 100%);
    transition: all 0.3s ease-in-out;

    &_clicked {
      background: hsl(178, 63%, 39%);
    }

    &:hover {
      background: hsl(178, 63%, 39%);
      color: hsl(0, 0%, 100%);
    }
  }
}
</style>
