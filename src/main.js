import Vue from 'vue';
import VuePrism from 'vue-prism';

import 'prismjs/themes/prism.css';
import '../scss/uikit.scss';

/** Font Awesome Start */
import {
  library,
} from '@fortawesome/fontawesome-svg-core';
import {
  FontAwesomeIcon,
} from '@fortawesome/vue-fontawesome';
import {
  faTimes,
  faChevronLeft,
  faChevronDown,
  faWindowMinimize,
} from '@fortawesome/free-solid-svg-icons';
import router from './router';
import App from './App.vue';
/** Font Awesome End */

library.add(faTimes, faChevronLeft, faChevronDown, faWindowMinimize);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VuePrism);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
