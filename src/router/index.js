import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultLayout from '../layout/DefaultLayout'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: DefaultLayout,
    redirect: '/calendar',
    children: [
      {
        path: 'calendar',
        name: 'Calendar',
        component: () => import('../views/DatePicker')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
