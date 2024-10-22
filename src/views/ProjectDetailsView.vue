<template>
  <div class="project-details-view">
    <h1>Detalles del Proyecto</h1>
    <div v-if="project">
      <h2>{{ project.name }}</h2>
      <p>{{ project.description }}</p>
      <h3>Tareas</h3>
      <task-list :tasks="project.tasks" />
    </div>
    <div v-else>
      <p>Proyecto no encontrado.</p>
    </div>
  </div>
</template>

<script>
import TaskList from '@/components/TaskList.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    TaskList,
  },
  computed: {
    ...mapGetters(['getProjects']),
    project() {
      const projectId = this.$route.params.id;
      return this.getProjects.find(p => p.id === projectId);
    },
  },
};
</script>

<style scoped>
.project-details-view {
  padding: 20px;
}
</style>

