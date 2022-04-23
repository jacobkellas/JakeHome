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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
