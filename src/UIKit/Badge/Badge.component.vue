<template>
  <div :class="badgeClass">
    <slot></slot>
  </div>
</template>

<script>
import { BADGE_CLASS_NAME } from './Badge.config';
import { DEFAULT_VARIANT } from '@/UIKit/config';

export default {
  name: 'Badge',
  props: {
    variant: {
      type: String,
      default: DEFAULT_VARIANT,
    },
  },
  computed: {
    badgeClass() {
      const variant = `${BADGE_CLASS_NAME}--${this.variant}`;
      return {
        [BADGE_CLASS_NAME]: true,
        [variant]: true,
      };
    },
  },
};
</script>
