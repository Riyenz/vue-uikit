<template>
  <TabContent :selected="selectedTab" @change="onTabChange" padded>
    <template slot="design">
      <Design />
    </template>
    <template slot="develop">
      <div>
        <Code />
        <PaginationApi />
      </div>
    </template>
  </TabContent>
</template>

<script>
import TabContent from '@/views/components/TabContent/index.vue';
import Code from './components/Code.vue';
import Design from './components/Design.vue';
import PaginationApi from './components/PaginationApi.vue';

export default {
  name: 'DemoButtons',
  props: {
    selectedTab: {
      type: String,
    },
  },
  components: {
    TabContent,
    Code,
    Design,
    PaginationApi,
  },
  methods: {
    onTabChange(tabIndex) {
      this.$emit('tabChange', tabIndex);
    },
  },
};
</script>
