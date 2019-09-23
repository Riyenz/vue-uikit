<template>
  <div>
    <h2 class="eduk-h2 eduk-u-mb-3">Sidebar</h2>
    <p class="eduk-text eduk-u-mb-4">Expanded sidebar (Default)</p>
    <Expanded />
    <p class="eduk-text eduk-u-mb-4">Collapsed sidebar (Default)</p>
    <Collapsed />
  </div>
</template>

<script>
import Expanded from './Expanded.vue';
import Collapsed from './Collapsed.vue';

export default {
  name: 'Code',
  components: {
    Expanded,
    Collapsed,
  },
};
</script>
