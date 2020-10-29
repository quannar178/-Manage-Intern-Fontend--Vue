import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultLayout from '../layout/DefaultLayout'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login'),
  },
  {
    path: '/',
    name: 'Defaultlayout',
    component: DefaultLayout
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
