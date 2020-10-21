import Vue from 'vue';
import Vuex from 'vuex'
import App from '@/views/app.vue';
import router from '@/router';

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/util/string'
import urls from '@/util/urls'
import  * as filters from '@/scripts/field'
Object.keys(filters).forEach(item => Vue.filter(item,filters[item]))

Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.prototype.urls = urls;
Vue.config.productionTip = false;

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