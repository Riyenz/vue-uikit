<template>
  <TabContent :selected="selectedTab" @change="onTabChange" padded>
    <template slot="design">
      <!-- add something -->
    </template>
    <template slot="develop">
      <div>
        <Code />
        <TabApi />
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
import TabApi from './components/TabApi.vue';

export default {
  name: 'DemoTab',
  props: {
    selectedTab: {
      type: String,
    },
  },
  components: {
    TabContent,
    Code,
    TabApi,
  },
  methods: {
    onTabChange(tabIndex) {
      this.$emit('tabChange', tabIndex);
    },
  },
};
</script>
