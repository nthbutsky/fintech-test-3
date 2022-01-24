<template>
  <div class="selected-users">
    <div class="selected-users__wrapper" v-if="this.isSelectedUsers">
      <div
        class="selected-users__user"
        v-for="user in this.selectedUsers"
        :key="user.id"
      >
        <div class="selected-users__user-info-wrapper">
          <img
            class="selected-users__user-avatar"
            :src="user.avatar_url"
            alt=""
          />
          <p class="selected-users__user-login">{{ user.login }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SelectedUsers",
  data() {
    return {};
  },

  computed: {
    ...mapGetters(["selectedUsers", "isSelectedUsers"]),
  },
};
</script>

<style lang="scss"></style>
