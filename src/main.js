import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuescroll from 'vue-scroll'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(vuescroll, {throttle: 600})
Vue.use(vuescroll)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
