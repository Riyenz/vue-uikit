<template>
  <div :class="buttongroupClass">
    <slot />
  </div>
</template>

<script>
import {
  BUTTONGROUP_CLASS_NAME,
  BUTTONGROUP_VERTICAL_CLASS_NAME,
} from './ButtonGroup.config';

export default {
  name: 'ButtonGroup',
  props: {
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttongroupClass() {
      return {
        [BUTTONGROUP_CLASS_NAME]: true,
        [BUTTONGROUP_VERTICAL_CLASS_NAME]: this.vertical,
      };
    },
  },
};
</script>
