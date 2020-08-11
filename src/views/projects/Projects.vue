<template>
  <div class="container projects">
    <Dropdown
      :project="project"
      :otherProjects="otherProjects"
      @updateActiveProject="updateActiveProject"
    />
    <Project :project="project" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Dropdown from "@/components/Dropdown.vue";
import Project from "@/components/Project.vue";
import { ProjectList } from "./ProjectList";

export default {
  name: "Projects",
  components: {
    Dropdown,
    Project
  },
  computed: {
    ...mapState(["activeProject"]),
    project: function() {
      return ProjectList[this.activeProject];
    },
    otherProjects: function() {
      let projectListCopy = [...ProjectList];

      return projectListCopy.filter(project => {
        return project.name !== ProjectList[this.activeProject].name;
      });
    }
  },
  methods: {
    ...mapActions(["setActivePage", "setActiveProject"]),
    updateActiveProject(projectIndex) {
      this.setActiveProject(projectIndex);
    }
  },
  mounted() {
    this.setActivePage(this.$route.name.toLowerCase());
  }
};
</script>

<style scoped lang="scss">
.projects {
  padding-top: 1.5rem;

  @media only screen and (min-width: $tablet) {
    padding-top: 2.5rem;
  }

  @media only screen and (min-width: $desktop) {
    width: 45rem;
    margin: auto;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
