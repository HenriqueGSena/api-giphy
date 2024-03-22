import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import page from '../views/page.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: page
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
