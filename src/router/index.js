import HomeView from '@/components/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/components/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/Login.vue')
    },
    {
      path: '/pokemon',
      name: 'pokemon',
      component: () => import('@/views/PokeView.vue')
    },
    {
      path: '/pokemon/:name',
      name: 'pokemonDetail',
      component: () => import('@/components/Pokemon.vue')
    }
  ],
})

export default router