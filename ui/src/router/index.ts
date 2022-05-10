import { RouteRecordRaw } from 'vue-router'
import { createWebHistory, createRouter } from 'vue-router'
import { store } from '@/store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/templates/Home.vue'),
  },
  {
    path: '/activities',
    name: 'Activities',
    component: () => import('@/components/templates/Activities.vue'),
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
