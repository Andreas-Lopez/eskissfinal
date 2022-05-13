import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GuideStyleView from '../views/GuideStyleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',        name: 'HomeView',      component: HomeView },
    { path: '/GuideStyle',    name: 'GuideStyleView',      component: GuideStyleView },
  ]
})

export default router
