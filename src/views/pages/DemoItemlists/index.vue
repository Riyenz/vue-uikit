<template>
  <TabContent :selected="selectedTab" @change="onTabChange">
    <template slot="design">
      <div></div>
    </template>
    <template slot="code">
      <div class="demo-itemlists">
        <h2 class="eduk-h2 eduk-u-mb-3">Item List</h2>
        <div class="demo-itemlists__container">
          <BasicItemlist/>
          <HintItemlist/>
          <BadgeItemlist/>
        </div>
      </div>
    </template>
    <template slot="quicklinks">
    </template>
  </TabContent>
</template>

<script>
import TabContent from '@/views/components/TabContent/index.vue';
import { BasicItemlist, HintItemlist, BadgeItemlist } from './components';

export default {
  name: 'DemoItemlists',
  props: {
    selectedTab: {
      type: Number,
      default: 0,
    },
  },
  components: {
    TabContent,
    BasicItemlist,
    HintItemlist,
    BadgeItemlist,
  },
  methods: {
    onTabChange(tabIndex) {
      this.$emit('tabChange', tabIndex);
    },
  },
};
</script>

<style lang="scss" scoped>
.demo-itemlists {
  &__container * {
    margin-top: 50px;
  }
}
</style>
