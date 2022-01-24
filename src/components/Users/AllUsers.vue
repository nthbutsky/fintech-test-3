<template>
  <div class="all-users" v-if="this.isAllUsers">
    <div class="all-users__wrapper">
      <div class="all-users__user" v-for="user in this.allUsers" :key="user.id">
        <div
          class="all-users__user-info-wrapper"
          @click="selectUser(user.id), toggleClass($event)"
        >
          <img class="all-users__user-avatar" :src="user.avatar_url" alt="" />
          <p class="all-users__user-login">{{ user.login }}</p>
        </div>
        <button
          class="all-users__user-details-btn"
          @click="getUserDetails(user.login)"
        >
          ^
        </button>
      </div>
      <div
        class="all-users__user-details-wrapper"
        v-if="this.userDetails"
        @click="closeInfoModal()"
      >
        <div class="all-users__user-details-text">
          <img :src="userDetails.avatar_url" alt="" />
          <p>Login: {{ userDetails.login }}</p>
          <p>Name: {{ userDetails.name ? userDetails.name : "Unknown" }}</p>
          <p>Company: {{ userDetails.name ? userDetails.name : "Unknown" }}</p>
          <p>Location: {{ userDetails.name ? userDetails.name : "Unknown" }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AllUsers",
  data() {
    return {
      userDetails: null,
      isUserSelected: false,
    };
  },

  computed: {
    ...mapGetters(["allUsers", "selectedUsers", "apiUrl", "isAllUsers"]),
  },

  methods: {
    ...mapActions(["selectUser", "getUsers"]),

    async getUserDetails(login) {
      try {
        const response = await fetch(this.apiUrl + "/" + login);
        const data = await response.json();
        this.userDetails = data;
        console.log("USER DETAILS", data);
      } catch (error) {
        console.log(error);
      }
    },

    closeInfoModal() {
      this.userDetails = null;
    },

    toggleClass(event) {
      const targetedElNodeName = event.target.nodeName;
      if (targetedElNodeName === "DIV") {
        event.target.classList.toggle("all-users__user-info-wrapper_selected");
      } else {
        event.target.parentElement.classList.toggle(
          "all-users__user-info-wrapper_selected"
        );
      }
    },
  },

  mounted() {
    this.getUsers();
  },
};
</script>

<style lang="scss">
.all-users {
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

      &_selected {
        border: 2px solid red;
      }
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
