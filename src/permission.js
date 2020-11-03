import router from "./router";
import store from "./store";
const { getToken, removeToken } = require("./utils/auth");

const whiteList = ["/login", "/forgettenpassword", "/register"];

router.beforeEach(async (to, from, next) => {
  console.log("in guuard ");
  //   process logout
  // to and from are both route objects. must call `next`.
  const hasToken = getToken();
  if (hasToken) {
    if (to.path === "/login" || to.path === "/forgettenpassword") {
      console.log("before route", hasToken);
      next({ path: "/" });
    } else if (to.path === "/logout") {
      removeToken();
      next("/login");
    } else {
      const hasUserRole = store.getters;
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
    if (to.path.indexOf("/resetpassword") !== -1) {
      next();
    } else if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
    }
  }
});
