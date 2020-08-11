<template>
  <div class="container navbar">
    <div :class="navbarSection('home')">
      <router-link to="/">
        <font-awesome-icon
          class="navbar__section__icon"
          :icon="['fas', 'user']"
        />
      </router-link>
    </div>
    <div :class="navbarSection('projects')">
      <router-link to="/projects">
        <font-awesome-icon
          class="navbar__section__icon"
          :icon="['fas', 'code']"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapState(["activePage"]),

    navbarSection: state => {
      return page => {
        return ["navbar__section", { active: page === state.activePage }];
      };
    }
  }
};
</script>

<style scoped lang="scss">
.navbar {
  padding-top: 5rem;
  display: flex;

  @media only screen and (min-width: $desktop) {
    height: 100%;
    position: fixed;
    left: calc(50% + -28rem);
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }

  &__section {
    width: 2.5rem;
    margin-right: 2rem;
    padding-bottom: 0.65rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: $desktop) {
      margin-right: 0;
      margin-bottom: 2rem;
      padding-left: 0.65;
      padding-bottom: 0;
    }

    &__icon {
      font-size: 1.8rem;
      color: $theme-white;

      @media only screen and (min-width: $desktop) {
        transition: color 0.2s;

        &:hover {
          color: $theme-blue;
        }
      }
    }
  }
}

.active {
  padding-bottom: 0.5rem;
  border-bottom: 0.15rem solid $theme-blue;

  @media only screen and (min-width: $desktop) {
    padding-bottom: 0;
    padding-left: 0.5rem;
    border-bottom: none;
    border-left: 0.15rem solid $theme-blue;
  }
}
</style>
