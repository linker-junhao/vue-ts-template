import { createApp } from "vue";
import router from "./router";
import App from "./views/app";

createApp(App).use(router).mount('#app')