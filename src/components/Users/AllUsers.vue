<template>
  <div class="all-users" v-if="this.isAllUsers">
    <div class="all-users__wrapper">
      <div
        class="all-users__user"
        v-for="user in this.filteredUsers"
        :key="user.id"
      >
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
        <img
          class="all-users__user-details-img"
          :src="userDetails.avatar_url"
          alt=""
        />
        <div class="all-users__user-details-text">
          <p>Login: {{ userDetails.login }}</p>
          <p>Name: {{ userDetails.name ? userDetails.name : "Unknown" }}</p>
          <p>Company: {{ userDetails.name ? userDetails.name : "Unknown" }}</p>
          <p>Location: {{ userDetails.name ? userDetails.name : "Unknown" }}</p>
          <p>
            Blog:
            <a :href="userDetails.blog" target="black">
              {{ userDetails.blog ? userDetails.blog : "Unknown" }}</a
            >
          </p>
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
    ...mapGetters([
      "allUsers",
      "selectedUsers",
      "apiUrl",
      "isAllUsers",
      "filteredUsers",
    ]),
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
      border-radius: 30px;
      background: hsla(0, 0%, 0%, 0.5);
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: hsl(178, 63%, 39%);
        color: black;
      }

      &:hover .all-users__user-avatar {
        border: 2px solid hsl(0, 0%, 0%);
      }

      &:hover .all-users__user-login {
        color: hsl(0, 0%, 0%);
      }

      &_selected {
        background: hsl(332, 61%, 61%);
      }
    }

    &-avatar {
      max-width: 50px;
      border-radius: 50%;
      padding: 1%;
      border: 2px solid hsl(0, 0%, 100%);
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }

    &-login {
      padding: 5%;
      overflow: hidden;
      text-overflow: ellipsis;
      color: hsl(0, 0%, 100%);
      font-size: 1.5rem;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }

    &-details-btn {
      background: transparent;
      border: none;
      border-radius: 50%;
      color: hsl(0, 0%, 100%);
      width: 100px;
      height: 20px;
      border-bottom-left-radius: 150px;
      border-bottom-right-radius: 150px;
      position: absolute;
      top: 68px;
      left: 50%;
      padding-top: 3px;
      transform: translate(-50%);
      background: hsla(0, 0%, 0%, 0.502);
      cursor: pointer;
      font-weight: bold;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: hsl(178, 63%, 39%);
        color: black;
      }
    }

    &-details-wrapper {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 2;
      width: 100%;
      height: 100%;
      background: hsla(0, 0%, 100%, 0.5);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &-details-img {
      width: 300px;
      border-radius: 25%;
      border: 5px solid hsla(0, 0%, 0%, 0.75);
    }

    &-details-text {
      padding: 10px;
      margin: 10px;
      background: hsla(0, 0%, 0%, 0.75);
      color: hsl(0, 0%, 100%);
      border-radius: 20px;
      font-size: 1.5rem;

      a {
        text-decoration: none;
        color: hsl(0, 0%, 100%);
        cursor: pointer;

        &:hover {
          text-decoration: underline;
          color: hsl(178, 63%, 39%);
        }
      }
    }
  }
}
</style>
