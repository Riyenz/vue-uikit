<template>
  <div>
    <h1 class="eduk-h1 eduk-u-mb-3">Tab</h1>
    <p>A tab is a hidden section of content activated by a menu</p>
    <BasicTab />
    <ActiveTab />
    <LoadingTab />
  </div>
</template>

<script>
import BasicTab from './BasicTab.vue';
import ActiveTab from './ActiveTab.vue';
import LoadingTab from './LoadingTab.vue';

export default {
  name: 'Code',
  components: {
    BasicTab,
    ActiveTab,
    LoadingTab,
  },
};
</script>
