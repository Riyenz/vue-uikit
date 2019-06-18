import Vue from 'vue';

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
  faWindowMinimize,
} from '@fortawesome/free-solid-svg-icons';
/** Font Awesome End */

/** UIKit Start */
import '../scss/uikit.scss';

library.add(faTimes, faChevronLeft, faWindowMinimize);
Vue.component('font-awesome-icon', FontAwesomeIcon);

/** UIKit End */
