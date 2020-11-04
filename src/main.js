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