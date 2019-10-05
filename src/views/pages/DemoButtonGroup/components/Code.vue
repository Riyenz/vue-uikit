<template>
  <div>
    <h2 class="eduk-h2 eduk-u-mb-3">Button Group</h2>
    <h3 class="eduk-h3 eduk-u-mb-3">Basic</h3>
    <Basic />
    <h3 class="eduk-h3 eduk-u-mb-3">Button Group Toolbar</h3>
    <Toolbar />
    <h3 class="eduk-h3 eduk-u-mb-3">Vertical</h3>
    <Vertical />
  </div>
</template>

<script>
import Basic from './Basic.vue';
import Toolbar from './Toolbar.vue';
import Vertical from './Vertical.vue';

export default {
  name: 'Code',
  components: {
    Basic,
    Toolbar,
    Vertical,
  },
};
</script>
