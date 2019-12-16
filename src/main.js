import Vue from "vue";
import Antd from "ant-design-vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import { PrivateLayout, PublicLayout } from "./layouts";

import "ant-design-vue/dist/antd.less";

Vue.config.productionTip = false;

Vue.use(Antd);

Vue.component("private", PrivateLayout);
Vue.component("public", PublicLayout);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
