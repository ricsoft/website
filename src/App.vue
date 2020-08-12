<template>
  <div class="app">
    <Background />
    <Modal />
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Background from "@/components/Background.vue";
import Modal from "@/components/Modal.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Background,
    Modal,
    Navbar
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>
<style scoped lang="scss">
@import "@/scss/base.scss";
.app {
  height: 100.1vh;
  position: relative;

  @media only screen and (min-width: $desktop) {
    display: flex;
    justify-content: center;
  }
}
</style>
