<template>
  <button :class="btnClass">
    <slot></slot>
  </button>
</template>

<script>
import {
  VARIANT_DOESNT_EXISTS,
  SIZE_DOESNT_EXISTS,
  AVAILABLE_SIZES,
  BTN_CLASS_NAME,
  BTN_CLASS_DISABLED,
} from './Btn.config';

import {
  DEFAULT_VARIANT,
  AVAILABLE_VARIANTS,
} from '@/UIKit/config';

export default {
  name: 'Btn',
  props: {
    variant: {
      type: String,
      default: DEFAULT_VARIANT,
      validator(value) {
        if (!AVAILABLE_VARIANTS.includes(value)) {
          throw new Error(VARIANT_DOESNT_EXISTS);
        }
        return true;
      },
    },
    disabled: {
      type: Boolean,
    },
    outline: {
      type: Boolean,
    },
    size: {
      type: String,
      validator(value) {
        if (!AVAILABLE_SIZES.includes(value)) {
          throw new Error(SIZE_DOESNT_EXISTS);
        }
        return true;
      },
    },
    noMargin: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    btnClass() {
      const variant = `${BTN_CLASS_NAME}-${this.variant}`;
      const outline = this.outline ? `${BTN_CLASS_NAME}-${this.variant}-outline` : '';
      const size = this.size ? `${BTN_CLASS_NAME}--${this.size}` : '';

      return {
        [BTN_CLASS_NAME]: true,
        [BTN_CLASS_DISABLED]: this.disabled,
        [variant]: !this.outline,
        [outline]: this.outline,
        [size]: this.size,
        'eduk-u-m-1': !this.noMargin,
      };
    },
  },
};
</script>
