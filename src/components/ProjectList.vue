<template>
  <div>
    <h2 class="text-xl mb-4"></h2>
    <ul>
      <li v-for="project in projects" :key="project.id">
        <router-link :to="{ name: 'project-details', params: { id: project.id } }">
          {{ project.name }}
        </router-link>
        <button @click="deleteProject(project.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.getters.getProjects;
    },
  },
  methods: {
    deleteProject(id) {
      this.$store.dispatch('removeProject', id);
    },
  },
};
</script>
