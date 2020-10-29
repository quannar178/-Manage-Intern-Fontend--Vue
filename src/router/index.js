import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultLayout from '../layout/DefaultLayout'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Defaultlayout',
    component: DefaultLayout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('../views/UploadCV'),
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
