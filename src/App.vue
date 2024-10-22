<template>
  <div class="app">
    <h1 class="text-3xl font-bold text-center text-green-600 mb-4">Gestión de Proyectos</h1>
    <AddProject />
    <router-view />
  </div>
</template>

<script>
import AddProject from './components/AddProject.vue';

export default {
  components: {
    AddProject,
  },
};
</script>

<style>
/* Otros estilos globales aquí */
</style>
