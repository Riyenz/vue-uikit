<template>
  <TabContent :selected="selectedTab" @change="onTabChange" padded>
    <template slot="design">
      <!-- add something -->
    </template>
    <template slot="develop">
      <div>
        <Code />
        <BlockquoteApi />
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
import BlockquoteApi from './components/BlockquoteApi.vue';

export default {
  name: 'DemoBlockquote',
  props: {
    selectedTab: {
      type: String,
    },
  },
  components: {
    TabContent,
    Code,
    BlockquoteApi,
  },
  methods: {
    onTabChange(tabIndex) {
      this.$emit('tabChange', tabIndex);
    },
  },
};
</script>
