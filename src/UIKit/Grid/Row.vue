<template>
  <div :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'Row',
  props: {
    noGutters: {
      type: Boolean,
    },
  },
  computed: {
    rowClass() {
      return {
        'eduk-row': true,
        'eduk-no-gutters': this.noGutters,
      };
    },
  },
};
</script>
