<template>
    <div>
      <h2>{{ project ? 'Edit' : 'Create' }} Project</h2>
      <form @submit.prevent="submitForm">
        <input v-model="name" placeholder="Project Name" required />
        <textarea v-model="description" placeholder="Project Description" required></textarea>
        <button type="submit">{{ project ? 'Save' : 'Create' }}</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: ['project'],
    data() {
      return {
        name: this.project ? this.project.name : '',
        description: this.project ? this.project.description : '',
      };
    },
    methods: {
      submitForm() {
        if (this.project) {
          this.$store.dispatch('editProject', {
            ...this.project,
            name: this.name,
            description: this.description,
          });
        } else {
          this.$store.dispatch('addProject', {
            id: Date.now(),
            name: this.name,
            description: this.description,
            status: 'active',
            tasks: [],
          });
        }
      },
    },
  };
  </script>
  