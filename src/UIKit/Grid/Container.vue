<template>
  <div :class="containerClass">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'Container',
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    containerClass() {
      return this.fluid ? 'eduk-container-fluid' : 'eduk-container';
    },
  },
};
</script>
