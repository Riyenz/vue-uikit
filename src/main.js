import Vue from 'vue';
import VuePrism from 'vue-prism';
import App from './App.vue';
import router from './router';

import 'prismjs/themes/prism.css';
import '../scss/uikit.scss';

Vue.config.productionTip = false;

Vue.use(VuePrism);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
