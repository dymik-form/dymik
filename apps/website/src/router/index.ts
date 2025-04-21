import { createRouter, createWebHistory } from 'vue-router';
import Preview from '@/views/directus-preview/index.vue';
import Home from '@/views/home/index.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/preview',
    name: 'DirectusPreview',
    component: Preview
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;