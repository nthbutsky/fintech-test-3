<template>
  <div class="home">
    <Header />
    <Main />
    <Sidebar />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Main from "../components/Main.vue";
import Sidebar from "../components/Sidebar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Main,
    Sidebar,
    Footer,
  },
};
</script>
