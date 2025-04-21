import { createRouter, createWebHistory } from 'vue-router';
import DirectusPreview from '@/views/directus-preview/index.vue';
import Home from '@/views/home/index.vue';
import JsonPreviewForm from '@/views/json-preview/json-preview-form.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/directus-preview',
    name: 'DirectusPreview',
    component: DirectusPreview
  },
  {
    path: '/preview',
    name: 'Preview',
    component: () => import('@/views/json-preview/index.vue'),
    children: [
      {
        path: 'form',
        name: 'JsonPreviewForm',
        component: JsonPreviewForm
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;