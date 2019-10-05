<template>
  <div :class="buttontoolbarClass">
    <slot />
  </div>
</template>

<script>
import { BUTTONTOOLBAR_CLASS_NAME } from './ButtonGroup.config';

export default {
  name: 'ButtonToolbar',
  props: {},
  computed: {
    buttontoolbarClass() {
      return {
        [BUTTONTOOLBAR_CLASS_NAME]: true,
      };
    },
  },
};
</script>
