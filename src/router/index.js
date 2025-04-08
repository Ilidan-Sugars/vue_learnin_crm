import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('~/views/HomeView.vue'),
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      component: () => import('~/views/SignInView.vue'),
    },
  ],
})

export default router
