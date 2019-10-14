import './settings';

import Vue from 'vue';
import VuePrism from 'vue-prism';

import 'prismjs/themes/prism.css';

import router from './router';
import App from './App.vue';

import ModalService from '@/UIKit/Modal/Modal.service';
import Snackbar from '@/UIKit/Snackbar/Snackbar.lib';
import Toast from '@/UIKit/Toast/Toast.lib';
import Tooltip from '@/UIKit/Tooltip/Tooltip.lib';
import EdukNavbarLogo from '@/assets/img/eduk-navbar-logo.png';

ModalService.setDefaultLogo(EdukNavbarLogo);

Vue.config.productionTip = false;

Vue.use(VuePrism);

Vue.use(Snackbar);

Vue.use(Toast);

Vue.use(Tooltip);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
