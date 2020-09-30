import Vue from 'vue';
import App from '@/views/app.vue';
import router from '@/router';

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/util/string'
import urls from '@/util/urls'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.prototype.urls = urls
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next(true);
});

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app');