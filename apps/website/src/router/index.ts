import { createRouter, createWebHistory } from 'vue-router';
import Preview from '@/views/directus-preview/index.vue';

const routes = [
  {
    path: '/',
    redirect: '/directus-preview'
  },
  {
    path: '/directus-preview',
    name: 'DirectusPreview',
    component: Preview
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;