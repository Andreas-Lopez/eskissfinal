import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GuideStyleView from '../views/GuideStyleView.vue'
import ContactView from '../views/ContactView.vue'
import DonView from '../views/DonView.vue'
import GalerieView from '../views/GalerieView.vue'
import ProposView from '../views/ProposView.vue'
import CGVView from '../views/CGVView.vue'
import InscriptionView from '../views/InscriptionView.vue'
import GalerieArtisteView from '../views/GalerieArtisteView.vue'
import MonCompteView from '../views/MonCompteView.vue'
import CommandesView from '../views/CommandesView.vue'
import ParametresView from '../views/ParametresView.vue'
import FavorisView from '../views/FavorisView.vue'
import MessagerieView from '../views/MessagerieView.vue'


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
    { path: '/GalerieArtiste',    name: 'GalerieArtisteView',      component: GalerieArtisteView },
    { path: '/MonCompte',    name: 'MonCompteView',      component: MonCompteView },
    { path: '/Commandes',    name: 'CommandesView',      component: CommandesView },
    { path: '/Parametres',    name: 'ParametresView',      component: ParametresView },
    { path: '/Favoris',    name: 'FavorisView',      component: FavorisView },
    { path: '/Messagerie',    name: 'MessagerieView',      component: MessagerieView },
  ]
})

export default router
