import { createApp } from 'vue';
import 'linkmarker-style-reset';
import 'normalize.css';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
