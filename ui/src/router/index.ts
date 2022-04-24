import { RouteRecordRaw } from 'vue-router'
import { createWebHistory, createRouter } from 'vue-router'
import { store } from '@/store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/vmodel',
    name: 'VModel',
    component: () => import('@/views/VModel.vue'),
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/Admin.vue'),
    beforeEnter: async (_to, _from, next) => {
      if (store.getters.getIsAdmin) {
        next()
      } else {
        next('/')
      }
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
