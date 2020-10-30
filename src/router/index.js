import Vue from "vue";
import VueRouter from "vue-router";
import DefaultLayout from "../layout/DefaultLayout";
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: 'Login',
    component: () => import("../views/Login"),
  },
  {

    path: "/",
    name: "Default layout",
    component: DefaultLayout,
    redirect: "/Profile",
    children: [
      {
        path: "/Profile",
        name: "Profile",
        component: () => import("../views/Profile"),
      },
    ],
  },
  {
    path: "/forgettenpassword",
    name: 'ForgettenPassword',
    component: () => import("../views/ForgettenPassword"),
  },
  {
    path: '/resetPassword',
    name: 'ResetPassword',
    component: () => import('../views/ResetPassword')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
