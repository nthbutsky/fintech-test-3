<template>
  <div class="selected-users">
    <div class="selected-users__wrapper" v-if="this.selectedUsers">
      <div
        class="selected-users__user"
        v-for="user in this.selectedUsers"
        :key="user.id"
      >
        <div
          class="selected-users__user-info-wrapper"
          @click="selectUser(user.id), toggleClass($event)"
        >
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
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SelectedUsers",
  data() {
    return {};
  },

  computed: {
    ...mapGetters(["selectedUsers"]),
  },

  methods: {
    ...mapActions(["selectUser", "getUsers"]),
  },
};
</script>

<style lang="scss">
.all-users {
  width: 100vw;
  height: auto;
  background: hsl(96, 39%, 64%);

  &__wrapper {
    max-width: 300px;
    margin: 0 auto;
  }

  &__user {
    max-width: 150px;
    margin: 0 auto;

    &-info-wrapper {
      padding: 3%;
      margin: 3%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border: 2px solid black;
      border-radius: 30px;

      &_selected {
        border: 2px solid red;
      }
    }

    &-avatar {
      max-width: 50px;
      border-radius: 50%;
      padding: 1%;
    }

    &-login {
      padding: 2%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &-details-btn {
    }

    &-details-wrapper {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &-details-text {
    }
  }
}
</style>
