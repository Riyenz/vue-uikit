<template>
  <component :is="btnTag" :to="link" :class="btnClass" @click="onClick">
    <template v-if="!loading">
      <slot></slot>
    </template>
    <template v-else>
      <span></span>
    </template>
  </component>
</template>

<script>
import {
  VARIANT_DOESNT_EXISTS,
  SIZE_DOESNT_EXISTS,
  AVAILABLE_SIZES,
  BTN_CLASS_NAME,
  BTN_CLASS_DISABLED,
  BTN_BLOCK_CLASS_NAME,
  BTN_LOADING_CLASS_NAME,
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
    loading: {
      type: Boolean,
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
        [BTN_LOADING_CLASS_NAME]: this.loading,
      };
    },
    btnTag() {
      return this.link ? 'router-link' : 'button';
    },
  },
  methods: {
    onClick(ev) {
      this.$emit('click', ev);
    },
  },
};
</script>
