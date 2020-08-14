<template>
  <div class="dropdown">
    <div class="dropdown__selected" @click="toggleDropdown">
      <div class="dropdown__selected__title">{{ this.project.name }}</div>
      <font-awesome-icon
        class="dropdown__selected__icon"
        :class="{ rotate: showMenu }"
        :icon="['fas', this.icon]"
      />
    </div>
    <transition name="menu-transition">
      <div v-if="showMenu" class="dropdown__menu">
        <div
          v-for="(project, index) in otherProjects"
          :key="index"
          class="dropdown__menu__options"
          @click="projectClicked(project.index)"
        >
          {{ project.name }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Dropdown",
  props: ["project", "otherProjects"],
  data: () => {
    return {
      icon: "caret-up",
      showMenu: false
    };
  },
  computed: {
    ...mapState(["modalActive"])
  },
  watch: {
    modalActive: function() {
      if (!this.modalActive) this.disableAll();
    }
  },
  methods: {
    ...mapActions(["setModalActive"]),
    toggleDropdown: function() {
      if (!this.showMenu) {
        this.enableAll();
      } else {
        this.disableAll();
      }
    },
    projectClicked: function(projectIndex) {
      this.$emit("updateActiveProject", projectIndex);
      this.disableAll();
    },
    enableAll: function() {
      this.showMenu = true;
      this.setModalActive(true);
    },
    disableAll: function() {
      this.showMenu = false;
      this.setModalActive(false);
    }
  }
};
</script>

<style scoped lang="scss">
.dropdown {
  padding-top: 0.5rem;
  position: relative;
  z-index: 1;

  @media only screen and (min-width: $desktop) {
    padding-top: 0;
  }

  &__selected {
    width: 12rem;
    padding: 1rem;
    border: 1px solid $theme-white;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (min-width: $desktop) {
      transition: border 0.2s;

      &:hover {
        border: 1px solid $theme-blue;
        cursor: pointer;
      }
    }

    &__title {
      display: inline;
      font-size: 1.1rem;
    }

    &__icon {
      right: 0;
      display: inline;
      transition: transform 0.2s;
    }

    .rotate {
      transform: rotate(-180deg);
    }
  }

  &__menu {
    width: 13.1rem;
    padding-left: 1rem;
    top: 4rem;
    position: absolute;
    font-size: 1.1rem;
    color: $theme-black;
    background-color: $theme-white;

    @media only screen and (min-width: $desktop) {
      top: 3.5rem;
    }

    &__options {
      margin-right: 1.5rem;
      padding-top: 1.2rem;
      padding-bottom: 1.2rem;
      border-bottom: 0.01rem solid $theme-black;

      @media only screen and (min-width: $desktop) {
        &:hover {
          cursor: pointer;
        }
      }

      &:last-child {
        border-bottom: none;
      }
    }
  }
}

.text-transition-enter-active,
.icon-transition-enter-active {
  transition: all 0.2s;
}

.menu-transition-enter {
  top: 2rem;
  opacity: 0;
}

.menu-transition-enter-to,
.menu-transition-leave {
  top: 4rem;
  opacity: 1;
}

.menu-transition-leave-to {
  opacity: 0;
}

.menu-transition-enter-active,
.menu-transition-leave-active {
  transition: all 0.2s;
}
</style>
