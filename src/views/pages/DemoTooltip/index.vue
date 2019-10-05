<template>
  <TabContent :selected="selectedTab" @change="onTabChange" padded>
    <template slot="design">
      <!-- add something -->
    </template>
    <template slot="develop">
      <div>
        <Code />
        <TooltipApi />
      </div>
    </template>
    <template slot="quicklinks">
      <!-- add something -->
    </template>
  </TabContent>
</template>

<script>
import TabContent from '@/views/components/TabContent/index.vue';
import Code from './components/Code.vue';
import TooltipApi from './components/TooltipApi.vue';

export default {
  name: 'DemoTooltip',
  props: {
    selectedTab: {
      type: String,
    },
  },
  components: {
    TabContent,
    Code,
    TooltipApi,
  },
  methods: {
    onTabChange(tabIndex) {
      this.$emit('tabChange', tabIndex);
    },
  },
};
</script>
