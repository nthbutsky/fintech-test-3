<template>
  <div class="main">
    <div class="main__bg-wrapper">
      <img class="main__bg" src="../assets/bg.jpg" alt="" />
    </div>
    <AllUsers />
    <SelectedUsers />
  </div>
</template>

<script>
import AllUsers from "./Users/AllUsers.vue";
import SelectedUsers from "./Users/SelectedUsers.vue";

export default {
  name: "Main",
  components: { AllUsers, SelectedUsers },

  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
.main {
  height: 100vh;

  &__bg-wrapper {
    position: fixed;
    z-index: -1;
    height: 100vh;
    width: 100vw;
    background: hsl(1, 1%, 12%);
  }

  &__bg {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    width: fit-content;
    height: auto;
  }
}
</style>
