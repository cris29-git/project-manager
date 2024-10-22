import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css'; // Asegúrate de importar aquí
import router from './router'; // Si tienes un enrutador
import store from './store'; // Si tienes Vuex


createApp(App).use(router).use(store).mount('#app');
