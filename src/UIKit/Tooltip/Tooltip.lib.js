import {
  TOOLTIP_CLASS_NAME,
  placements,
  behaviours,
} from './Tooltip.config';

const defaultOptions = {
  placement: placements.TOP,
  behaviour: behaviours.HOVER,
};

function Tooltip(el, options) {
  this.$el = el;
  this.options = options;
  this.build();
}

Tooltip.prototype = {
  build() {
    this.$el.tooltip = this;
    this.$body = document.body;
    this.bindEvents();
  },
  bindEvents() {
    if (this.options.behaviour === behaviours.CLICK) {
      this.$el.addEventListener('click', this.click.bind(this), false);
      this.$body.addEventListener('click', this.destroyTooltip.bind(this), false);
    } else if (this.options.behaviour === behaviours.HOVER) {
      this.$el.addEventListener('mouseover', this.createTooltip.bind(this), false);
      this.$el.addEventListener('mouseleave', this.destroyTooltip.bind(this), false);
    } else {
      setTimeout(() => {
        this.createTooltip();
      }, 500);
    }

    window.addEventListener('scroll', this.computePosition.bind(this), false);
  },
  destroy() {
    if (this.options.behaviour === behaviours.CLICK) {
      this.$el.removeEventListener('click', this.click.bind(this), false);
      this.$body.removeEventListener('click', this.destroyTooltip.bind(this), false);
    } else if (this.options.behaviour === behaviours.HOVER) {
      this.$el.removeEventListener('mouseover', this.createTooltip);
      this.$el.removeEventListener('mouseleave', this.destroyTooltip);
    }

    window.removeEventListener('scroll', this.computePosition.bind(this), false);
  },
  click(ev) {
    ev.stopImmediatePropagation();
    this.createTooltip();
  },
  createTooltip() {
    this.$tooltip = document.createElement('div');
    this.$tooltip.classList.add(TOOLTIP_CLASS_NAME);
    this.$tooltip.classList.add(`${TOOLTIP_CLASS_NAME}--${this.options.placement}`);
    this.$tooltip.innerHTML = this.options.content || '';

    this.$body.appendChild(this.$tooltip);

    this.computePosition();
  },
  computePosition() {
    if (this.$tooltip) {
      const {
        top,
        left,
        height,
        width,
      } = this.$el.getBoundingClientRect();

      const spacer = 10;

      if (this.options.placement === placements.LEFT) {
        this.$tooltip.style.top = `${top + (height / 2)}px`;
        this.$tooltip.style.left = `${left - spacer}px`;
        this.$tooltip.style.transform = 'translate3d(-100%, -50%, 0)';
      } else if (this.options.placement === placements.RIGHT) {
        this.$tooltip.style.top = `${top + (height / 2)}px`;
        this.$tooltip.style.left = `${left + width + spacer}px`;
        this.$tooltip.style.transform = 'translate3d(0, -50%, 0)';
      } else if (this.options.placement === placements.BOTTOM) {
        this.$tooltip.style.top = `${top + height + spacer}px`;
        this.$tooltip.style.left = `${left + (width / 2)}px`;
        this.$tooltip.style.transform = 'translate3d(-50%, 0, 0)';
      } else {
        this.$tooltip.style.top = `${top - spacer}px`;
        this.$tooltip.style.left = `${left + (width / 2)}px`;
        this.$tooltip.style.transform = 'translate3d(-50%, -100%, 0)';
      }
    }
  },
  destroyTooltip() {
    if (this.$tooltip) {
      this.$body.removeChild(this.$tooltip);
      this.$tooltip = null;
    }
  },
};

export default {
  install(Vue) {
    Vue.directive('tooltip', {
      bind(el, binding) {
        return new Tooltip(el, { ...defaultOptions, ...binding.value });
      },
      unbind(el) {
        if (el.tooltip) el.tooltip.destroy();
      },
    });
  },
};
