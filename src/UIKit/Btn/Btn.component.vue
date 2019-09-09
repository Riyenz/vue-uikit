<template>
  <button :class="btnClass" @click="onClick" v-if="!link">
    <slot></slot>
  </button>
  <a :href="link" :class="btnClass" @click="onClick" v-else>
    <slot></slot>
  </a>
</template>

<script>
import {
  VARIANT_DOESNT_EXISTS,
  SIZE_DOESNT_EXISTS,
  AVAILABLE_SIZES,
  BTN_CLASS_NAME,
  BTN_CLASS_DISABLED,
  BTN_BLOCK_CLASS_NAME,
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
    block: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
    },
  },
  computed: {
    btnClass() {
      return {
        [BTN_CLASS_NAME]: true,
        [BTN_CLASS_DISABLED]: this.disabled,
        [BTN_BLOCK_CLASS_NAME]: this.block,
        [`${BTN_CLASS_NAME}--${this.variant}`]: this.variant,
        [`${BTN_CLASS_NAME}--outlined`]: this.outline,
        [`${BTN_CLASS_NAME}--${this.size}`]: this.size,
      };
    },
  },
  methods: {
    onClick(ev) {
      this.$emit('click', ev);
    },
  },
};
</script>
