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
    component: Status,
    meta: {
      isSecured: true,
    },
  },
  {
    path: '/repairform',
    name: 'Repairform',
    component: Repairform,
    meta: {
      isSecured: true,
    },
  },
  {
    path: '/choosepage',
    name: 'ChoosePage',
    component: ChoosePage,
    meta: {
      isSecured: true,
    },
  },
  {
    path: '/selectitem',
    name: 'Selectitem',
    component: Selectitem,
    meta: {
      isSecured: true,
    },
  },
  {
    path: "*",
    redirect: "/" // page not found
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.isSecured)) {
    var userid = localStorage.getItem("userid")
    if (userid !== null) {
      next() 
    } else {
      next("/");
    }
  } else {
    next();
  }
});

export default router
