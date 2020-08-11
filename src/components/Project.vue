<template>
  <div class="container project">
    <div class="project__description">{{ this.project.description }}</div>
    <div class="project__icons">
      <a
        v-for="(icon, index) in this.project.icons"
        :key="index"
        :href="icon.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon :icon="[icon.prefix, icon.icon]" />
      </a>
    </div>
    <Carousel :pictures="this.project.pictures" />
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";

export default {
  name: "Project",
  components: {
    Carousel
  },
  props: ["project"]
};
</script>

<style scoped lang="scss">
.project {
  padding-top: 1.5rem;

  @media only screen and (min-width: $tablet) {
    padding-top: 2rem;
  }

  &__description {
    font-size: 1.15rem;
  }

  &__icons {
    margin-top: 1.5rem;
    font-size: 1.8rem;

    @media only screen and (min-width: $tablet) {
      margin-top: 2rem;
    }

    a {
      margin-right: 1.5rem;
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
