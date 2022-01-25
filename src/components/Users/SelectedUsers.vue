<template>
  <div class="selected-users" v-if="this.isSelectedUsers">
    <div class="selected-users__wrapper">
      <div
        class="selected-users__user"
        v-for="user in this.selectedUsers"
        :key="user.id"
      >
        <div
          class="selected-users__user-info-wrapper"
          @click="selectUser(user.id)"
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
    <p class="selected-users__no-user-text" v-if="this.selectedUsers === null">
      no selected users
    </p>
    <button
      class="selected-users__delete-all-btn"
      v-if="this.selectedUsers"
      @click="clearUsersList()"
    >
      X
    </button>
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
    ...mapGetters(["selectedUsers", "isSelectedUsers"]),
  },

  methods: {
    ...mapActions(["selectUser", "clearUsersList", "getSelectedUsers"]),
  },

  mounted() {
    const savedUsers = JSON.parse(localStorage.getItem("selectedUsers"));
    this.getSelectedUsers(savedUsers);
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
  }

  &__no-user-text {
    color: white;
    text-transform: uppercase;
    margin: 50px auto;
  }

  &__delete-all-btn {
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: hsl(0, 0%, 100%);
    transition: all 0.3s ease-in-out;
    margin: 20px;

    &:hover {
      background: hsl(178, 63%, 39%);
    }
  }
}
</style>
