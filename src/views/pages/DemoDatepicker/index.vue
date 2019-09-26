<template>
  <TabContent :selected="selectedTab" @change="onTabChange" padded>
    <template slot="design">
      <!-- add something -->
    </template>
    <template slot="develop">
      <div>
        <Code />
        <DatepickerApi />
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
import DatepickerApi from './components/DatepickerApi.vue';

export default {
  name: 'DemoDatepicker',
  props: {
    selectedTab: {
      type: String,
    },
  },
  components: {
    TabContent,
    Code,
    DatepickerApi,
  },
  methods: {
    onTabChange(tabIndex) {
      this.$emit('tabChange', tabIndex);
    },
  },
};
</script>
