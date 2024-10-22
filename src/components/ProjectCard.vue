<template>
    <div class="bg-white shadow-md rounded-lg p-4 m-4 hover:shadow-lg transition-shadow duration-300">
      <h3 class="text-xl font-bold text-blue-600">{{ project.name }}</h3>
      <p class="text-gray-700">{{ project.description }}</p>
      <div class="flex justify-between mt-4">
        <button @click="editProject" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Editar
        </button>
        <button @click="deleteProject" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Eliminar
        </button>
      </div>
    </div>
  </template>
  
  
  