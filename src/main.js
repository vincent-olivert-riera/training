import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";
import { apolloProvider } from "./apollo";

//Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  apolloProvider,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
