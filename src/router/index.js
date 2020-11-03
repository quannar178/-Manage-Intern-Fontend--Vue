import Vue from "vue";
import VueRouter from "vue-router";
import DefaultLayout from "../layout/DefaultLayout";
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register"),
  },
  {
    path: "/",
    name: "Default layout",
    component: DefaultLayout,
    redirect: "/scheduledraft",
    children: [
      {
        path: "/Profile",
        name: "Profile",
        component: () => import("../views/Profile"),
      },
      {
        path: "/uploadCV",
        name: "UploadCV",
        component: () => import("../views/UploadCV"),
      },
      {
        path: "/scheduledraft",
        name: "ScheduleDraft",
        component: () => import("../views/ScheduleDraft"),
      },
    ],
  },
  {
    path: "/forgettenpassword",
    name: "ForgettenPassword",
    component: () => import("../views/ForgettenPassword"),
  },
  {
    path: "/resetPassword/:token",
    name: "ResetPassword",
    component: () => import("../views/ResetPassword"),
  },
  {
    path: "/logout",
    name: "Logout",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
