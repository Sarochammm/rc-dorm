import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Status from '../views/Status.vue'
import Repairform from '../views/Repairform.vue'
import ChoosePage from '../views/ChoosePage.vue'
import Selectitem from '../views/Selectitem.vue'

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
    path: '/status',
    name: 'Status',
    component: Status
  },
  {
    path: '/repairform',
    name: 'Repairform',
    component: Repairform
  },
  {
    path: '/choosepage',
    name: 'ChoosePage',
    component: ChoosePage
  },
  {
    path: '/selectitem',
    name: 'Selectitem',
    component: Selectitem
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
