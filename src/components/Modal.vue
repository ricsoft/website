<template>
  <transition name="modal-transition">
    <div class="modal" v-if="this.modalActive" @click="toggleModal" />
  </transition>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Modal",
  computed: {
    ...mapState(["modalActive"])
  },
  methods: {
    ...mapActions(["setModalActive"]),
    toggleModal: function() {
      this.setModalActive(false);
    }
  }
};
</script>

<style scoped lang="scss">
.modal {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: $theme-black;
  opacity: 0.75;
}

.modal-transition-enter,
.modal-transition-leave-to {
  opacity: 0;
}

.modal-transition-enter-active,
.modal-transition-leave-active {
  transition: opacity 0.2s;
}
</style>
