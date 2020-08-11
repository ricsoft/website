<template>
  <div class="background" />
</template>

<script>
export default {
  name: "Background"
};
</script>

<style scoped lang="scss">
.background {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: $theme-background;
  overflow: hidden;
  z-index: -1;
}
</style>
