import { RouteRecordRaw } from 'vue-router'
import SlidesPage from '../components/SlidesPage.vue'
import SettingsPage from '../components/SettingsPage.vue'

export enum RouteNames {
  Home = 'home',
  Settings = 'settings',
  Slides = 'slides',
};

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RouteNames.Home,
    component: SlidesPage,
  }, {
    path: '/settings',
    name: RouteNames.Settings,
    component: SettingsPage,
  }, {
    path: '/:slides',
    name: RouteNames.Slides,
    component: SlidesPage,
  },
];

export default routes
