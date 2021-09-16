import { createApp } from "vue";
import router from "./router";
import App from "./views/app";
import './index.css'

createApp(App).use(router).mount('#app')