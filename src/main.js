import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Asegúrate de que esta línea sea correcta
import store from './store'; // Asegúrate de que esta línea sea correcta
import './assets/tailwind.css'; // Si usas Tailwind CSS
import AddProject from './components/AddProject.vue';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(AddProject);
app.mount('#app');
