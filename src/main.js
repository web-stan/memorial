import Vue from 'vue'
import App from './App.vue'

let siteUrl = window.location.origin;
// let siteUrl = 'http://master.eternity-frontend.stag.stfalcon.com';
Vue.prototype.$siteUrl = siteUrl;

import vClickOutside from 'v-click-outside'
import VueSmoothScroll from 'vue2-smooth-scroll'

import router from './router'
import store from './store'
import './ml'
import * as dateUtils from './utils/DateUtils';

Vue.use(vClickOutside);
Vue.use(VueSmoothScroll)

Vue.config.productionTip = false
Vue.prototype.$dateUtils = dateUtils;

require('./bootstrap');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
