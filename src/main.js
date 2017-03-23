import Vue from 'vue';
import VueMaterial from 'vue-material';
import VueFire from 'vuefire';

import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueFire);
Vue.use(VueMaterial);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
