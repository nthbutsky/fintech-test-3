<template>
  <div class="sidebar">
    <p>Sidebar</p>
    <button class="sidebar__all-users-btn">All users</button>
    <button class="sidebar__selected-users-btn">Selected users</button>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.sidebar {
  width: 50%;
  max-width: 200px;
  height: 100vh;
  background: gray;
  position: absolute;
  top: 0;
  right: 0;
}
</style>
