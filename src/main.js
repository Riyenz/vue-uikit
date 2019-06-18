import './settings';

import Vue from 'vue';
import VuePrism from 'vue-prism';

import 'prismjs/themes/prism.css';

import router from './router';
import App from './App.vue';

import ModalService from '@/UIKit/Modal/ModalService';

ModalService.setDefaultLogo('/assets/img/eduk-navbar-logo.png');

Vue.config.productionTip = false;

Vue.use(VuePrism);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
