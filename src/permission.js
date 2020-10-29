import router from "./router";
import store from './store'
const { getToken } = require("./utils/auth");

const whiteList = ["/login"];

router.beforeEach(async (to, from, next) => {
  console.log("in guuard ");
  // to and from are both route objects. must call `next`.
  const hasToken = getToken();
  if (hasToken) {
    if (to.path === "/login") {
      console.log("before route", hasToken);
      next({ path: "/" });
    } else {
      const hasUserRole = store.getter;
      if (hasUserRole) {
        next();
      } else {
        try {
          await store.dispatch("user/getInfo");
          next();
        } catch (error) {
          store.dispatch("user/resetState");
          next(`/login?redirect=${to.path}`);
        }
      }
    }
  } else {
    console.log(to.path);
    console.log(whiteList.indexOf(to.path));
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
    }
  }
});
