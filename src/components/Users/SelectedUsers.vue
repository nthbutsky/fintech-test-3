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

<style lang="scss">
.selected-users {
  width: 100vw;
  height: auto;
  padding: 10%;

  &__wrapper {
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  &__user {
    width: 200px;
    height: 100px;
    margin: 0 auto;
    position: relative;

    &-info-wrapper {
      padding: 3%;
      margin: 3%;
      margin-bottom: 0;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border: 2px solid hsl(0, 0%, 4%);
      border-radius: 30px;
      background: hsla(0, 0%, 0%, 0.5);
    }

    &-avatar {
      max-width: 50px;
      border-radius: 50%;
      padding: 1%;
      border: 2px solid hsl(0, 0%, 100%);
    }

    &-login {
      padding: 5%;
      overflow: hidden;
      text-overflow: ellipsis;
      color: hsl(0, 0%, 100%);
      font-size: 1.5rem;
    }

    &-details-btn {
      background: transparent;
      border: 2px solid hsla(0, 0%, 0%, 0.502);
      border-radius: 50%;
      color: hsl(0, 0%, 100%);
      width: 100px;
      height: 20px;
      border-bottom-left-radius: 150px;
      border-bottom-right-radius: 150px;
      position: absolute;
      top: 70px;
      left: 50%;
      transform: translate(-50%);
      background: hsla(0, 0%, 0%, 0.502);
    }

    &-details-wrapper {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: hsl(0, 0%, 100%);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &-details-text {
    }
  }
}
</style>
