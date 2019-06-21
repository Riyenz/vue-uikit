<template>
  <button :class="btnClass">{{ text }}</button>
</template>

<script>
import {
  AVAILABLE_VARIANTS,
  VARIANT_DOESNT_EXISTS,
  TEXT_IS_REQUIRED,
  SIZE_DOESNT_EXISTS,
  AVAILABLE_SIZES,
  BTN_CLASS_NAME,
  BTN_CLASS_DISABLED,
} from './Btn.config';

export default {
  name: 'Btn',
  props: {
    text: {
      type: String,
      required: true,
      validator(value) {
        if (!value) {
          throw new Error(TEXT_IS_REQUIRED);
        }
        return true;
      },
    },
    variant: {
      type: String,
      default: AVAILABLE_VARIANTS[0],
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
      const variant = `eduk-btn-${this.variant}`;
      const outline = this.outline ? `eduk-btn-${this.variant}-outline` : '';
      const size = this.size ? `eduk-btn--${this.size}` : '';

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
