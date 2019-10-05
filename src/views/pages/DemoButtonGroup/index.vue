<template>
  <TabContent :selected="selectedTab" @change="onTabChange" padded>
    <template slot="design">
      <!-- add something -->
    </template>
    <template slot="develop">
      <div>
        <Code />
        <ButtonGroupApi />
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
import ButtonGroupApi from './components/ButtonGroupApi.vue';

export default {
  name: 'DemoButtonGroup',
  props: {
    selectedTab: {
      type: String,
    },
  },
  components: {
    TabContent,
    Code,
    ButtonGroupApi,
  },
  methods: {
    onTabChange(tabIndex) {
      this.$emit('tabChange', tabIndex);
    },
  },
};
</script>
