import { createRouter, createWebHistory } from 'vue-router';

import Details from '../views/Details.vue';
import Home from '../views/Home.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/details/', component: Details }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;