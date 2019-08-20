<template>
  <TabContent :selected="selectedTab" @change="onTabChange">
    <template slot="design">
      <Design />
    </template>
    <template slot="code">
      <Code />
    </template>
  </TabContent>
</template>

<script>
import TabContent from '@/views/components/TabContent/index.vue';
import Code from './components/Code.vue';
import Design from './components/Design.vue';

export default {
  name: 'DemoButtons',
  props: {
    selectedTab: {
      type: Number,
      default: 0,
    },
  },
  components: {
    TabContent,
    Code,
    Design,
  },
  methods: {
    onTabChange(tabIndex) {
      this.$emit('tabChange', tabIndex);
    },
  },
};
</script>
