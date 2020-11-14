import Vue from 'vue';
import Vuex from 'vuex'
import App from '@/views/app.vue';
import router from '@/router';

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/scripts/string'
import urls from '@/conf/urls'
import  * as fields from '@/scripts/field'
Object.keys(fields).forEach(item => Vue.filter(item,fields[item]))
import  * as date from '@/scripts/date'
Object.keys(date).forEach(item => Vue.filter(item,date[item]))

Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.prototype.urls = urls;
Vue.config.productionTip = false;

// Require Froala Editor js file.
import  'froala-editor/js/froala_editor.pkgd.min.js';
import  'froala-editor/js/plugins/image.min.js';
import  'froala-editor/js/plugins/align.min.js';
import  'froala-editor/js/plugins/lists.min.js';
import  'froala-editor/js/plugins/table.min.js';
import  'froala-editor/js/plugins/quote.min.js';
// import  'froala-editor/js/plugins/print.min.js';
import  'froala-editor/js/plugins/link.min.js';
import  'froala-editor/js/plugins/paragraph_format.min.js';
// import  'froala-editor/js/plugins/paragraph_style.min';
// import  'froala-editor/js/plugins/font_family.min.js';
import  'froala-editor/js/plugins/font_size.min.js';
// import  'froala-editor/js/plugins/code_beautifier.min.js';
// import  'froala-editor/js/plugins/code_view.min.js';
import  'froala-editor/js/plugins/colors.min';
// import  'froala-editor/js/plugins/emoticons.min';
import  'froala-editor/js/plugins/file.min';
// import  'froala-editor/js/plugins/fullscreen.min';
// import  'froala-editor/js/third_party/spell_checker.min';
// Require Froala Editor css files.
import  'froala-editor/css/froala_editor.pkgd.min.css';
import  'froala-editor/css/froala_style.min.css';
// Import and use Vue Froala lib.
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
  next(true);
});

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app');