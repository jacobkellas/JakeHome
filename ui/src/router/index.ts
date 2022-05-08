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
    path: '/planner',
    name: 'Planner',
    component: () => import('@/components/templates/Planner.vue'),
    beforeEnter: async (_to, _from, next) => {
      if (store.getters.getIsAdmin) {
        next()
      } else {
        next('/')
      }
    },
    children: [
      {
        path: 'addactivity',
        name: 'AddActivity',
        component: () => import('@/components/templates/AddActivity.vue'),
        props: true,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
