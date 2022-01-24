<template>
  <div class="header">
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
    ...mapGetters(["isSidebar", "isAllUsers"]),

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
