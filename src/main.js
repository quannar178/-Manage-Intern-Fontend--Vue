import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./permission";

Vue.config.productionTip = false;

new Vue({
  created() {
    document.title = "Manager";
  },
  router,
  store,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
