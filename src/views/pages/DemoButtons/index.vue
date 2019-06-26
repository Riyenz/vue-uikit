<template>
  <TabContent :selected="selectedTab" @change="onTabChange">
    <template slot="design">
      <Design />
    </template>
    <template slot="code">
      <Code />
    </template>
    <template slot="quicklinks">
      <Quicklinks/>
    </template>
  </TabContent>
</template>

<script>
import TabContent from '@/views/components/TabContent/index.vue';
import Code from './components/Code.vue';
import Design from './components/Design.vue';
import Quicklinks from './components/Quicklinks.vue';

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
    Quicklinks,
  },
  methods: {
    onTabChange(tabIndex) {
      this.$emit('tabChange', tabIndex);
    },
  },
};
</script>
