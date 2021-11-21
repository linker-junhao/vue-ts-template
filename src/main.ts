import { createApp } from 'vue';
import router from './router';
import App from './views/app';
import './index.css';
import 'virtual:windi.css';
import 'virtual:pwa-register/vue';

createApp(App).use(router).mount('#app');
