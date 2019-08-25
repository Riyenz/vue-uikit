<template>
  <TabContent :selected="selectedTab" @change="onTabChange">
    <template slot="design">
      <div></div>
    </template>
    <template slot="code">
      <div>
        <Code />
      </div>
    </template>
  </TabContent>
</template>

<script>
import TabContent from '@/views/components/TabContent/index.vue';

import Code from './components/Code.vue';

export default {
  name: 'DemoRatings',
  props: {
    selectedTab: {
      type: Number,
      default: 0,
    },
  },
  components: {
    TabContent,
    Code,
  },
  methods: {
    onTabChange(tabIndex) {
      this.$emit('tabChange', tabIndex);
    },
  },
};
</script>
