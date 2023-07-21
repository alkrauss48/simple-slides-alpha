import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import SlidesPage from '../components/SlidesPage.vue'
import SettingsPage from '../components/SettingsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: SlidesPage,
  }, {
    path: '/settings',
    name: 'settings',
    component: SettingsPage,
  }, {
    path: '/:slides',
    name: 'slides',
    component: SlidesPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
