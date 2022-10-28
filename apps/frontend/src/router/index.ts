// Router utils
import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import HomeScreen from '../screens/HomeScreen.vue';
import AuthScreen from '../screens/AuthScreen.vue';
import AboutScreen from '../screens/AboutScreen.vue';

const pathList: readonly RouteRecordRaw[] = [
  {
    name: 'Home',
    component: HomeScreen,
    path: '/',
  },
  {
    name: 'Auth',
    component: AuthScreen,
    path: '/auth',
  },
  {
    name: 'About',
    component: AboutScreen,
    path: '/about',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: pathList,
});

export default router;
