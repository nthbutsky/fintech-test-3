<template>
  <div class="footer">
    <a
      class="footer__link"
      href="https://github.com/nthbutsky/fintech-test-3"
      target="blank"
      >GitHub Repo</a
    >
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
.footer {
  height: 44px;
  width: 100vw;
  position: fixed;
  bottom: 0;
  z-index: 1;
  background: hsl(0, 0%, 4%);
  display: flex;
  justify-content: center;
  align-items: center;

  &__link {
    color: hsl(0, 0%, 100%);
    font-size: 1.5rem;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      color: hsl(178, 63%, 39%);
    }
  }
}
</style>
