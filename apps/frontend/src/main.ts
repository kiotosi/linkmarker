import { createApp } from 'vue';
import 'linkmarker-style-reset';
import 'normalize.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');
