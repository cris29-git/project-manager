<template>
  <div class="projects-view">
    <h1>Lista de Proyectos</h1>
    <project-form @addProject="addProject" />
    <project-list :projects="projects" @removeProject="removeProject" @editProject="editProject" />
  </div>
</template>

<script>
import ProjectForm from '@/components/ProjectForm.vue';
import ProjectList from '@/components/ProjectList.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    ProjectForm,
    ProjectList,
  },
  computed: {
    ...mapGetters(['getProjects']),
  },
  methods: {
    addProject(project) {
      this.$store.dispatch('addProject', project);
    },
    removeProject(projectId) {
      this.$store.dispatch('removeProject', projectId);
    },
    editProject(updatedProject) {
      this.$store.dispatch('editProject', updatedProject);
    },
  },
  mounted() {
    // Aquí podrías cargar los proyectos desde una API si es necesario
  },
};
</script>

<style scoped>
.projects-view {
  padding: 20px;
}
</style>
