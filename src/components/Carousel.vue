<template>
  <div class="carousel">
    <img class="carousel__img" :src="currentImg" alt="Project Screenshot" />
    <div v-if="this.pictures.length > 1" class="carousel__controls">
      <div @click="prev">
        <font-awesome-icon icon="arrow-left" />
      </div>
      <div @click="next">
        <font-awesome-icon icon="arrow-right" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: ["pictures"],
  data() {
    return {
      timer: null,
      currentIndex: 0
    };
  },
  mounted: function() {
    if (this.pictures.length > 1) this.startSlide();
  },
  computed: {
    currentImg: function() {
      return this.pictures[Math.abs(this.currentIndex) % this.pictures.length];
    }
  },
  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 5000);
    },
    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  }
};
</script>

<style scoped lang="scss">
.carousel {
  max-width: 12rem;
  margin-top: 2rem;
  margin-bottom: 2.5rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (min-width: $tablet) {
    max-width: 15rem;
    margin-top: 3rem;
  }

  &__img {
    width: 100%;
    height: auto;
  }

  &__controls {
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-around;
    font-size: 1.25rem;

    > div {
      width: 3.5rem;
      padding-top: 0.2rem;
      padding-bottom: 0.2rem;
      border-radius: 0.25rem;
      display: flex;
      justify-content: center;

      @media only screen and (min-width: $desktop) {
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
