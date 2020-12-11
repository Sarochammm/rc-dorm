import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import HomePage from '../views/HomePage.vue'
<<<<<<< HEAD
import ChoosePage from '../views/ChoosePage.vue'
=======
import Repairform from '../views/Repairform.vue'
>>>>>>> dad9486c9816d2020954637e916a9d8de8a27ea9

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/homepage',
    name: 'HomePage',
    component: HomePage
  },
  {
<<<<<<< HEAD
    path: '/choosepage',
    name: 'ChoosePage',
    component: ChoosePage
  },
  {
=======
    path: '/repairform',
    name: 'Repairform',
    component: Repairform
>>>>>>> dad9486c9816d2020954637e916a9d8de8a27ea9
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
