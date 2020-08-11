<template>
  <div class="container home">
    <div>
      <p class="home__text">hi im</p>
      <p class="home__text__name">Richard</p>
      <p class="home__text">
        software developer with a background in systems and network
        administration
      </p>
      <p class="home__text">
        <font-awesome-icon :icon="['fas', 'heart']" />
        tech
      </p>
    </div>
    <div class="home__icons">
      <a
        href="https://www.linkedin.com/in/ricsoft/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>
      <a
        href="https://github.com/ricsoft"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
      <a
        href="https://www.instagram.com/ricsoft/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Home",
  methods: {
    ...mapActions(["setActivePage"])
  },
  mounted() {
    this.setActivePage(this.$route.name.toLowerCase());
  }
};
</script>

<style scoped lang="scss">
.home {
  padding-top: 1.5rem;
  padding-right: 5rem;

  @media only screen and (min-width: $desktop) {
    width: 45rem;
    margin-left: auto;
    margin-right: auto;
    padding-top: 0;
    padding-right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__text {
    font-size: 1.15rem;

    &__name {
      margin: 0;
      font-size: 2rem;
      font-weight: 700;
      color: $theme-blue;
    }
  }

  &__icons {
    margin-top: 3rem;
    font-size: 2rem;

    a {
      margin-right: 2rem;
      color: $theme-white;
      text-decoration: none;

      @media only screen and (min-width: $desktop) {
        transition: color 0.2s;

        &:hover {
          color: $theme-blue;
        }
      }
    }
  }
}
</style>
