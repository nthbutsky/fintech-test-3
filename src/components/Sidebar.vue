<template>
  <div class="sidebar">
    <p>Sidebar</p>
    <button class="sidebar__all-users-btn">All users</button>
    <div class="sidebar__all-users-wrapper" v-if="this.allUsers">
      <div class="sidebar__user" v-for="user in this.allUsers" :key="user.id">
        <div
          class="sidebar__user-info-wrapper"
          @click="selectUser(user.id), toggleClass($event)"
        >
          <img class="sidebar__user-avatar" :src="user.avatar_url" alt="" />
          <p class="sidebar__user-login">{{ user.login }}</p>
        </div>
        <button
          class="sidebar__user-details-btn"
          @click="getUserDetails(user.login)"
        >
          more info
        </button>
      </div>
      <div
        class="sidebar__user-details-wrapper"
        v-if="this.userDetails"
        @click="closeInfoModal()"
      >
        <div class="sidebar__user-details-text">
          <img :src="userDetails.avatar_url" alt="" />
          <p>Login: {{ userDetails.login }}</p>
          <p>Name: {{ userDetails.name ? userDetails.name : "Unknown" }}</p>
          <p>Company: {{ userDetails.name ? userDetails.name : "Unknown" }}</p>
          <p>Location: {{ userDetails.name ? userDetails.name : "Unknown" }}</p>
        </div>
      </div>
    </div>

    <button class="sidebar__selected-users-btn">Selected users</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Sidebar",
  data() {
    return {
      userDetails: null,
      isUserSelected: false,
    };
  },

  computed: {
    ...mapGetters(["allUsers", "selectedUsers", "apiUrl"]),
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
        event.target.classList.toggle("sidebar__user-info-wrapper_selected");
      } else {
        event.target.parentElement.classList.toggle(
          "sidebar__user-info-wrapper_selected"
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
.sidebar {
  width: 100vw;
  height: auto;
  position: absolute;
  top: 0;
  right: 0;
  background: hsla(0, 0%, 0%, 0.5);

  &__all-users-wrapper {
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
