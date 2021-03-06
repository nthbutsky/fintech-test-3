<template>
  <div class="header">
    <i class="header__search-icon fa fa-search" @click="showSearch()"></i>
    <button class="header__sort-icon" @click="sortAlphabetically()">
      <i class="fa fa-sort"></i>
    </button>
    <input
      class="header__search-input"
      type="text"
      placeholder="search"
      v-model="search"
    />
    <p class="header__title">{{ titlify }}</p>
    <div
      class="header__hamburger-btn"
      :class="{ 'header__hamburger-btn_clicked': isSidebar }"
      @click="showSidebar()"
    >
      <span class="header__hamburger-btn-bar"></span>
      <span class="header__hamburger-btn-bar"></span>
      <span class="header__hamburger-btn-bar"></span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Header",

  data() {
    return {};
  },

  computed: {
    ...mapGetters(["isSidebar", "isAllUsers", "userSearch", "allUsers"]),

    search: {
      get() {
        return this.userSearch;
      },
      set(value) {
        this.$store.commit("UPDATE_SEARCH", value);
        this.$store.commit("SET_FILTERED_USER_LIST", value);
      },
    },

    titlify() {
      if (this.isAllUsers) {
        return "all users";
      } else {
        return "selected users";
      }
    },
  },

  methods: {
    ...mapActions(["openCloseSidebar"]),

    showSidebar() {
      this.openCloseSidebar();
    },

    showSearch() {
      const searchInput = document.querySelector(".header__search-input");
      searchInput.classList.toggle("header__search-input_active");
    },

    sortAlphabetically() {
      const list = this.allUsers.sort((a, b) => {
        if (a.login.toUpperCase() < b.login.toUpperCase()) {
          return -1;
        }
        if (a.login.toUpperCase() > b.login.toUpperCase()) {
          return 0;
        }
        return 0;
      });
      this.$store.state.allUsers = list;
    },
  },
};
</script>

<style lang="scss">
.header {
  height: 44px;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 1;
  background: hsl(0, 0%, 4%);
  display: flex;
  justify-content: center;
  align-items: center;

  &__search-icon {
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    font-size: 1.5rem;
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: hsl(178, 63%, 39%);
    }
  }

  &__sort-icon {
    position: fixed;
    top: 8px;
    left: 40px;
    height: 30px;
    width: 30px;
    font-size: 1.6rem;
    color: white;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    i {
      cursor: pointer;
    }

    &:hover {
      color: hsl(178, 63%, 39%);
    }
  }

  &__search-input {
    position: fixed;
    top: 4px;
    left: -10px;
    height: 36px;
    width: 0;
    padding-left: 5px;
    transition: all 0.3s ease-in-out;

    &_active {
      left: 4px;
      width: 100px;
    }

    &:focus {
      outline: none;
      border-radius: 10px;
    }
  }

  &__title {
    color: hsl(0, 0%, 100%);
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.5rem;
  }

  &__hamburger-btn {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;

    &:hover .header__hamburger-btn-bar {
      background: hsl(178, 63%, 39%);
    }

    &-bar {
      display: block;
      width: 1.875rem;
      height: 0.25rem;
      margin: 8px;
      transition: all 0.3s ease-in-out;
      background: hsl(0, 0%, 100%);
      cursor: pointer;
    }

    &_clicked .header__hamburger-btn-bar:nth-child(2) {
      opacity: 0;
    }
    &_clicked .header__hamburger-btn-bar:nth-child(1) {
      transform: translateY(12px) rotate(45deg);
    }
    &_clicked .header__hamburger-btn-bar:nth-child(3) {
      transform: translateY(-12px) rotate(-45deg);
    }
  }
}
</style>
