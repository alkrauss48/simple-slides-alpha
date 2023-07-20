import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import App from '../App.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: App
  },
  {
    path: '/:slides',
    name: 'slides',
    component: App
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
