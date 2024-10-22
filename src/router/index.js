import { createRouter, createWebHistory } from 'vue-router';
import ProjectsView from '@/views/ProjectsView.vue'; // Asegúrate de que la ruta sea correcta
import ProjectDetailsView from '@/views/ProjectDetailsView.vue'; // Asegúrate de que la ruta sea correcta

const routes = [
  {
    path: '/',
    name: 'projects',
    component: ProjectsView,
  },
  {
    path: '/project/:id',
    name: 'project-details',
    component: ProjectDetailsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
