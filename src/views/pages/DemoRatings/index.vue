<template>
  <TabContent :selected="selectedTab" @change="onTabChange" padded>
    <template slot="design">
      <div></div>
    </template>
    <template slot="develop">
      <div>
        <Code />
        <RatingApi />
      </div>
    </template>
  </TabContent>
</template>

<script>
import TabContent from '@/views/components/TabContent/index.vue';

import Code from './components/Code.vue';
import RatingApi from './components/RatingApi.vue';

export default {
  name: 'DemoRatings',
  props: {
    selectedTab: {
      type: String,
    },
  },
  components: {
    TabContent,
    Code,
    RatingApi,
  },
  methods: {
    onTabChange(tabIndex) {
      this.$emit('tabChange', tabIndex);
    },
  },
};
</script>
