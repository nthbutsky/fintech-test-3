<template>
  <div class="main">
    <div class="main__selected-users-wrapper" v-if="this.selectedUsers">
      <div class="main__user" v-for="user in this.selectedUsers" :key="user.id">
        <div
          class="main__user-info-wrapper"
          @click="selectUser(user.id), toggleClass($event)"
        >
          <img class="main__user-avatar" :src="user.avatar_url" alt="" />
          <p class="main__user-login">{{ user.login }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Main",
  data() {
    return {};
  },

  computed: {
    ...mapGetters(["selectedUsers"]),
  },
};
</script>

<style lang="scss"></style>
