import Vue from 'vue';
import Vuex from 'vuex'
import App from './views/app.vue';
import store from './store'
import router from './router';

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './utils/string';
import urls from './conf/urls';

import * as filters from './filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});

Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.prototype.urls = urls;
Vue.config.productionTip = false;

Vue.prototype.bus = new Vue();

import CKEditor from '@ckeditor/ckeditor5-vue2';
Vue.use( CKEditor );

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.path) {
    if (window._hmt) {
      window._hmt.push(['_trackPageview', to.fullPath])
    }
  }
  next(true);
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');