import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

/*
var App = {
  template: "<div>app</div>",


new Vue({
  render: (h) => h(App),
  components: {
    app: App,
  },
});
*/

new Vue({
  render: (h) => h(App),
}).$mount("#app");

/*
  new Vue({
    el: '#app',
    components: {
      'app': App
    }
  });
*/