import { createStore } from 'vuex';

export default createStore({
  state: {
    projects: [],
  },
  mutations: {
    ADD_PROJECT(state, project) {
      state.projects.push(project);
    },
    REMOVE_PROJECT(state, projectId) {
      state.projects = state.projects.filter(p => p.id !== projectId);
    },
    EDIT_PROJECT(state, updatedProject) {
      const index = state.projects.findIndex(p => p.id === updatedProject.id);
      if (index !== -1) {
        Object.assign(state.projects[index], updatedProject);
      }
    },
  },
  actions: {
    addProject({ commit }, project) {
      commit('ADD_PROJECT', project);
    },
    removeProject({ commit }, projectId) {
      commit('REMOVE_PROJECT', projectId);
    },
    editProject({ commit }, updatedProject) {
      commit('EDIT_PROJECT', updatedProject);
    },
  },
  getters: {
    getProjects: (state) => state.projects,
  },
});
