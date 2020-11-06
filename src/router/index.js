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
    redirect: "/Profile",
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
    ],
  },
  {
    path: "/project",
    component: DefaultLayout,
    redirect: "/project/detail",
    children: [
      {
        path: "add",
        name: "CreateProject",
        component: () => import("../views/project/Create"),
      },
      {
        path: "summary",
        name: "Summary",
        component: () => import("../views/project/Summary"),
      },
      {
        path: "update/:id",
        name: "update",
        component: () => import("../views/project/Update"),
      },
      {
        path: "detail",
        name: "Detail",
        component: () => import("../views/project/Detail"),
      },
    ],
  },
  {
    path: "/schedule",
    name: "Schedule",
    component: DefaultLayout,
    redirect: "/schedule/draft",
    children: [
      {
        path: "draft",
        name: "Draft Schedule",
        component: () => import("../views/Schedule/ScheduleDraft"),
      },
      {
        path: "public",
        name: "Public Schedule",
        component: () => import("../views/Schedule/SchedulePublic"),
      },
    ],
  },
  {
    path: "/employee",
    name: "Employee",
    component: DefaultLayout,
    redirect: "/employee/salary",
    children: [
      {
        path: "crud",
        component: () => import("../views/Employee/CRUD"),
      },
      {
        path: "salary",
        component: () => import("../views/Employee/Salary"),
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
