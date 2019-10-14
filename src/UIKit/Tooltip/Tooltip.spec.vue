<template>
  <div>
    <button
      v-tooltip="{ placement: 'top' }"
      id="hover"
    >
      hover
    </button>
    <button
      v-tooltip="{ placement: 'top', behaviour: 'click' }"
      id="click"
    >
      click
    </button>
    <button
      v-tooltip="{ placement: 'top', behaviour: 'fixed' }"
      id="fixed"
    >
      hover
    </button>
    <button
      v-tooltip="{ placement: 'top', behaviour: 'click' }"
      id="top"
    >
      hover
    </button>
    <button
      v-tooltip="{ placement: 'right', behaviour: 'click' }"
      id="right"
    >
      hover
    </button>
    <button
      v-tooltip="{ placement: 'bottom', behaviour: 'click' }"
      id="bottom"
    >
      hover
    </button>
    <button
      v-tooltip="{ placement: 'left', behaviour: 'click' }"
      id="left"
    >
      hover
    </button>
  </div>
</template>

<script>
import { TOOLTIP_CLASS_NAME } from './Tooltip.config';

export default {
  name: 'TooltipSpec',
  data() {
    return {
      hasTooltip: false,
      hasTooltipTop: false,
      hasTooltipRight: false,
      hasTooltipBottom: false,
      hasTooltipLeft: false,
    };
  },
  methods: {
    hover() {
      const event = new MouseEvent('mouseover', {
        view: window,
        bubbles: true,
        cancelable: false,
      });
      const myTarget = document.getElementById('hover');
      myTarget.dispatchEvent(event);

      if (document.querySelector(`.${TOOLTIP_CLASS_NAME}`)) {
        this.hasTooltip = true;
      }
    },
    click() {
      document.getElementById('click').click();

      if (document.querySelector(`.${TOOLTIP_CLASS_NAME}`)) {
        this.hasTooltip = true;
      }
    },
    fixed() {
      if (document.querySelector(`.${TOOLTIP_CLASS_NAME}`)) {
        this.hasTooltip = true;
      }
    },
    top() {
      document.getElementById('top').click();

      if (document.querySelector(`.${TOOLTIP_CLASS_NAME}--top`)) {
        this.hasTooltipTop = true;
      }
    },
    right() {
      document.getElementById('right').click();

      if (document.querySelector(`.${TOOLTIP_CLASS_NAME}--right`)) {
        this.hasTooltipRight = true;
      }
    },
    bottom() {
      document.getElementById('bottom').click();

      if (document.querySelector(`.${TOOLTIP_CLASS_NAME}--bottom`)) {
        this.hasTooltipBottom = true;
      }
    },
    left() {
      document.getElementById('left').click();

      if (document.querySelector(`.${TOOLTIP_CLASS_NAME}--left`)) {
        this.hasTooltipLeft = true;
      }
    },
  },
};
</script>
