<template>
  <TabContent :selected="selectedTab" @change="onTabChange" padded>
    <template slot="design">
      <div></div>
    </template>
    <template slot="develop">
      <div class="demo-itemlists">
        <h2 class="eduk-h2 eduk-u-mb-3">Item List</h2>
        <div class="demo-itemlists__container">
          <BasicItemlist/>
          <HintItemlist/>
          <BadgeItemlist/>
          <ItemlistLoading/>
        </div>
        <ItemListApi />
      </div>
    </template>
    <template slot="quicklinks">
    </template>
  </TabContent>
</template>

<script>
import TabContent from '@/views/components/TabContent/index.vue';
import {
  BasicItemlist, HintItemlist, BadgeItemlist, ItemlistLoading,
} from './components';
import ItemListApi from './components/ItemListApi.vue';

export default {
  name: 'DemoItemlists',
  props: {
    selectedTab: {
      type: String,
    },
  },
  components: {
    TabContent,
    BasicItemlist,
    HintItemlist,
    BadgeItemlist,
    ItemlistLoading,
    ItemListApi,
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
