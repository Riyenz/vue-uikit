import { faInfoCircle, faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import {
  TOAST_CLASS_NAME,
  TOAST_LIST_CLASS_NAME,
  TOAST_PRIMARY,
  TOAST_SECONDARY,
  TOAST_SUCCESS,
  TOAST_WARNING,
  TOAST_DANGER,
} from './Toast.config';

function Toast(options, parent) {
  this.$parent = parent;
  this.options = options;
  this.build(options);
}

Toast.prototype.build = function build() {
  const variant = this.options.variant || TOAST_PRIMARY;
  const dismissable = typeof this.options.dismissable === 'undefined' ? true : this.options.dismissable;
  const icon = this.getIconType(variant);
  const $svg = this.generateSvg(icon);

  this.$wrapper = document.createElement('div');
  this.$wrapper.classList.add(TOAST_CLASS_NAME);
  this.$wrapper.classList.add(`${TOAST_CLASS_NAME}--${variant}`);

  if (this.options.id) {
    this.$wrapper.setAttribute('id', this.options.id);
  }

  const $content = document.createElement('div');
  $content.innerHTML = this.options.text;
  $content.classList.add(`${TOAST_CLASS_NAME}__content`);

  this.$wrapper.appendChild($svg);
  this.$wrapper.appendChild($content);

  if (dismissable) {
    this.$action = document.createElement('a');
    this.$action.innerHTML = '&times;';
    this.$action.classList.add(`${TOAST_CLASS_NAME}__action`);
    this.$action.classList.add('eduk-u-ml-3');
    this.$action.addEventListener('click', this.hide.bind(this), false);
    this.$wrapper.appendChild(this.$action);
  }

  this.$parent.appendChild(this.$wrapper);
};

Toast.prototype.getIconType = function getIconType(variant) {
  switch (variant) {
  case TOAST_SUCCESS:
    return faCheckCircle;
  case TOAST_DANGER:
    return faTimesCircle;
  case TOAST_PRIMARY:
  case TOAST_SECONDARY:
  case TOAST_WARNING:
  default:
    return faInfoCircle;
  }
};

Toast.prototype.generateSvg = function generateSvg({ prefix, iconName, icon }) {
  const $svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  $svg.setAttribute('data-prefix', prefix);
  $svg.setAttribute('data-icon', iconName);
  $svg.setAttribute('role', 'img');
  $svg.setAttribute('focusable', 'false');
  $svg.setAttribute('aria-hidden', 'true');
  $svg.setAttribute('class', `svg-inline--fa fa-${iconName} fa-icon eduk-u-mr-2`);
  $svg.setAttribute('viewBox', `0 0 ${icon[0]} ${icon[1]}`);

  const $path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  $path.setAttribute('fill', 'currentColor');
  $path.setAttribute('d', icon[4]);

  $svg.appendChild($path);

  return $svg;
};

Toast.prototype.hide = function hide(ev) {
  if (this.$wrapper.parentNode) {
    if (ev) ev.preventDefault();

    this.$wrapper.classList.add('hide');

    if (this.$action) {
      this.$action.removeEventListener('click', this.hide);
    }

    setTimeout(() => {
      this.$parent.removeChild(this.$wrapper);
    }, 400);
  }
};

export default {
  install(Vue) {
    Vue.prototype.$toast = (options) => {
      const placement = options.placement || 'top';
      const duration = options.duration || 3000;
      let $list = document.querySelector(`.${TOAST_LIST_CLASS_NAME}.${TOAST_LIST_CLASS_NAME}--${placement}`);

      if (!$list) {
        $list = document.createElement('div');
        $list.classList.add(TOAST_LIST_CLASS_NAME);
        $list.classList.add(`${TOAST_LIST_CLASS_NAME}--${placement}`);
        document.body.appendChild($list);
      }

      const $toast = new Toast({ ...options, placement, duration }, $list);

      setTimeout(() => {
        $toast.hide();
      }, duration);

      return $toast;
    };
  },
};
