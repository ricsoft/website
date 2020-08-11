import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activePage: "",
    modalActive: false,
    activeProject: 0
  },
  mutations: {
    setActivePage(state, activePage) {
      state.activePage = activePage;
    },
    setModalActive(state, modalActive) {
      state.modalActive = modalActive;
    },
    setActiveProject(state, activeProject) {
      state.activeProject = activeProject;
    }
  },
  actions: {
    setActivePage({ commit }, activePage) {
      commit("setActivePage", activePage);
    },
    setModalActive({ commit }, modalActive) {
      commit("setModalActive", modalActive);
    },
    setActiveProject({ commit }, activeProject) {
      commit("setActiveProject", activeProject);
    }
  },
  modules: {}
});
