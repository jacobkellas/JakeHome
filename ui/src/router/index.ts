import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import VModel from '../views/VModel.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/vmodel',
    name: 'VModel',
    component: VModel,
  },
  {
    path: '/authenticate',
    name: 'Authenticate',
    beforeEnter(): void {
      location.href = '/.auth/login/aad'
    },
    component: Home,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
