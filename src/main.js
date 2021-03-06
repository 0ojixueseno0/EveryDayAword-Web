import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import locale from "element-ui/lib/locale/lang/zh-CN";
import "./styles.scss";
import ElementUI from "element-ui";
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
