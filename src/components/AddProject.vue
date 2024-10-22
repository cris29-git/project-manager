<template>
    <div class="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg mt-10">
      <h2 class="text-2xl font-semibold text-center text-green-600 mb-4">Agregar Proyecto</h2>
      <form @submit.prevent="addProject">
        <div class="mb-4">
          <label for="name" class="block text-gray-700">Nombre del Proyecto</label>
          <input
            type="text"
            id="name"
            v-model="project.name"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            placeholder="Ingrese el nombre del proyecto"
            required
          />
        </div>
        <div class="mb-4">
          <label for="description" class="block text-gray-700">Descripción</label>
          <textarea
            id="description"
            v-model="project.description"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            placeholder="Ingrese una descripción del proyecto"
            required
          ></textarea>
        </div>
        <div class="flex justify-center">
          <button
            type="submit"
            class="bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-500 transition duration-300"
          >
            Agregar Proyecto
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        project: {
          name: '',
          description: '',
        },
      };
    },
    methods: {
      addProject() {
        // Lógica para agregar el proyecto
        console.log("Proyecto agregado:", this.project);
        // Aquí puedes agregar la lógica para enviar el proyecto a tu API o almacenarlo en Vuex
      },
    },
  };
  </script>
  
  <style scoped>
  /* Puedes agregar más estilos específicos aquí si es necesario */
  </style>
  