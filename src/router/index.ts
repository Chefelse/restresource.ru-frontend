import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('./home/views/homeView.vue'),
      meta: {
        name: 'Главная'
      }
    }
  ]
})

export default router
