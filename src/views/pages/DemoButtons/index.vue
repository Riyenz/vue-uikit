<template>
  <TabContent :selected="selectedTab" @change="onTabChange" padded>
    <template slot="design">
      <Design />
    </template>
    <template slot="develop">
      <div>
        <Code />
        <ButtonApi />
      </div>
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
import ButtonApi from './components/ButtonApi.vue';

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
    Quicklinks,
    ButtonApi,
  },
  methods: {
    onTabChange(tabIndex) {
      this.$emit('tabChange', tabIndex);
    },
  },
};
</script>
