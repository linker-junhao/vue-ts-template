import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/views/hello')
  }
];

export default createRouter({
  // 4. Provide the history implementation to use.
  // We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes // short for `routes: routes`
});
