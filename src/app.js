import Vue from 'vue';

/** Font Awesome Start */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
/** Font Awesome End */

/** UIKit Start */
import '../scss/uikit.scss';

import {
  Btn,
  Modal,
  Container,
  Row,
  Column,
} from './UIKit';

library.add(faTimes);
Vue.component('font-awesome-icon', FontAwesomeIcon);

export {
  Btn,
  Modal,
  Container,
  Row,
  Column,
};
/** UIKit End */
