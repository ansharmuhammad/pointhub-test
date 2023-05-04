import { createRouter, createWebHistory } from 'vue-router'
import UsersView from '../views/UsersView.vue'
// import UserDetail.vue from '../views/UserDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: UsersView
    },
    {
      path: '/:id',
      name: 'detail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/UserDetail.vue')
    }
  ]
})

export default router
