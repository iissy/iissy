import Vue from 'vue';
import Vuex from 'vuex'
import App from './views/app.vue';
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

import  'froala-editor/js/froala_editor.pkgd.min.js';
import  'froala-editor/js/plugins/image.min.js';
import  'froala-editor/js/plugins/align.min.js';
import  'froala-editor/js/plugins/lists.min.js';
import  'froala-editor/js/plugins/table.min.js';
import  'froala-editor/js/plugins/quote.min.js';
import  'froala-editor/js/plugins/link.min.js';
import  'froala-editor/js/plugins/paragraph_format.min.js';
import  'froala-editor/js/plugins/font_size.min.js';
import  'froala-editor/js/plugins/colors.min';
import  'froala-editor/js/plugins/file.min';
import  'froala-editor/css/froala_editor.pkgd.min.css';
import  'froala-editor/css/froala_style.min.css';
import Froala from 'vue-froala-wysiwyg';
Vue.use(Froala);

const store = new Vuex.Store({
  state: {
    items: []
  }
})

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
  store,
  router,
}).$mount('#app');