import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import ListTiket from '../views/ListTiket.vue'
import AddTiket from '../views/AddTiket.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'listTiket',
        name: 'List Tiket',
        component: ListTiket
      },
      {
        path: 'addTiket',
        name: 'Add Tiket',
        component: AddTiket
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  // {
  //   path: '/listTiket',
  //   name: 'List Tiket',
  //   component: ListTiket
  // },
  // {
  //   path: '/addTiket',
  //   name: 'Add Tiket',
  //   component: AddTiket
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
