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
  faChevronRight,
  faWindowMinimize,
  faHeart,
  faBars,
  faCode,
  faSearch,
  faTrash,
  faEdit,
  faEllipsisV,
  faCaretRight,
  faCaretDown,
  faCaretUp,
  faMusic,
  faBook,
  faShare,
  faStar,
  faStarHalf,
} from '@fortawesome/free-solid-svg-icons';
import {
  faHeart as farHeart,
} from '@fortawesome/free-regular-svg-icons';
/** Font Awesome End */

/** UIKit Start */
import '../scss/uikit.scss';

library.add(
  faTimes,
  faChevronLeft,
  faChevronRight,
  faWindowMinimize,
  faHeart,
  farHeart,
  faBars,
  faCode,
  faSearch,
  faTrash,
  faEdit,
  faEllipsisV,
  faCaretRight,
  faCaretDown,
  faCaretUp,
  faMusic,
  faBook,
  faShare,
  faStar,
  faStarHalf,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
/** UIKit End */

/** Vue Filters */
Vue.filter('truncate', (text = '', stop = 75, clamp) => text.slice(0, stop) + (stop < text.length ? clamp || '...' : ''));
