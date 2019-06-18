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
} from './config';

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
      const outline = this.outline ? '--outline' : '';
      const disabled = this.disabled ? 'disabled' : '';
      const size = this.size ? `eduk-btn--${this.size}` : '';
      const margin = this.noMargin ? '' : 'eduk-m-1';

      return `eduk-btn ${variant}${outline} ${size} ${margin} ${disabled}`;
    },
  },
};
</script>
