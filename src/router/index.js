import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GuideStyleView from '../views/GuideStyleView.vue'
import ContactView from '../views/ContactView.vue'
import DonView from '../views/DonView.vue'
import GalerieView from '../views/GalerieView.vue'
import ProposView from '../views/ProposView.vue'
import CGVView from '../views/CGVView.vue'
import InscriptionView from '../views/InscriptionView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',        name: 'HomeView',      component: HomeView },
    { path: '/GuideStyle',    name: 'GuideStyleView',      component: GuideStyleView },
    { path: '/Contact',    name: 'ContactView',      component: ContactView },
    { path: '/Don',    name: 'DonView',      component: DonView },
    { path: '/Galerie',    name: 'GalerieView',      component: GalerieView },
    { path: '/Propos',    name: 'ProposView',      component: ProposView },
    { path: '/CGV',    name: 'CGVView',      component: CGVView },
    { path: '/Inscription',    name: 'InscriptionView',      component: InscriptionView },
  ]
})

export default router