import {
  SNACKBAR_LIST_CLASS_NAME,
  SNACKBAR_CLASS_NAME,
} from './Snackbar.config';

function Snackbar(options, parent) {
  this.$parent = parent;
  this.options = options;
  this.build(options, parent);
}

Snackbar.prototype.options = {};

Snackbar.prototype.build = function build() {
  const variant = this.options.variant || 'success';

  this.$wrapper = document.createElement('div');
  this.$wrapper.classList.add(SNACKBAR_CLASS_NAME);

  if (this.options.id) {
    this.$wrapper.setAttribute('id', this.options.id);
  }

  const $content = document.createElement('div');
  $content.innerHTML = this.options.text;
  $content.classList.add(`${SNACKBAR_CLASS_NAME}__content`);

  this.$action = document.createElement('a');
  this.$action.innerText = this.options.actionText || 'ok';
  this.$action.classList.add(`${SNACKBAR_CLASS_NAME}__action`);
  this.$action.classList.add(`${SNACKBAR_CLASS_NAME}__action--${variant}`);
  this.$action.classList.add('eduk-u-ml-3');
  this.$action.addEventListener('click', this.hide.bind(this), false);

  this.$wrapper.appendChild($content);
  this.$wrapper.appendChild(this.$action);

  this.$parent.appendChild(this.$wrapper);
};

Snackbar.prototype.hide = function hide(ev) {
  if (this.$wrapper.parentNode) {
    if (ev) ev.preventDefault();

    if (typeof this.options.onAction === 'function') {
      this.options.onAction();
    }

    this.$wrapper.classList.add('hide');

    this.$action.removeEventListener('click', this.hide);

    setTimeout(() => {
      this.$parent.removeChild(this.$wrapper);
    }, 400);
  }
};

export default {
  install(Vue) {
    Vue.prototype.$snackbar = (options) => {
      const placement = options.placement || 'top';
      const { duration } = options;
      let $list = document.querySelector(`.${SNACKBAR_LIST_CLASS_NAME}.${SNACKBAR_LIST_CLASS_NAME}--${placement}`);

      if (!$list) {
        $list = document.createElement('div');
        $list.classList.add(SNACKBAR_LIST_CLASS_NAME);
        $list.classList.add(`${SNACKBAR_LIST_CLASS_NAME}--${placement}`);
        document.body.appendChild($list);
      }

      const $snackbar = new Snackbar({ ...options, placement }, $list);

      if (duration) {
        setTimeout(() => {
          $snackbar.hide();
        }, duration);
      }

      return $snackbar;
    };
  },
};
