<template>
  <TabContent :selected="selectedTab" @change="onTabChange" padded>
    <template slot="design">
      <!-- add something -->
    </template>
    <template slot="develop">
      <div class="demo-statistics">
        <h2 class="eduk-h2 eduk-u-mb-3">Statistics</h2>
        <div class="demo-statistics__container">
          <BasicStatistics/>
          <InvertedStatistics/>
          <GroupColoredStatistics/>
          <IconStatistics/>
        </div>
          <StatisticsApi/>
      </div>
    </template>
    <template slot="quicklinks">
      <!-- add something -->
    </template>
  </TabContent>
</template>

<script>
import TabContent from '@/views/components/TabContent/index.vue';
import {
  BasicStatistics,
  InvertedStatistics,
  GroupColoredStatistics,
  IconStatistics,
  StatisticsApi,
} from './components';

export default {
  name: 'DemoStatistics',
  components: {
    TabContent,
    BasicStatistics,
    InvertedStatistics,
    GroupColoredStatistics,
    IconStatistics,
    StatisticsApi,
  },
  props: {
    selectedTab: {
      type: String,
    },
  },
  methods: {
    onTabChange(tabIndex) {
      this.$emit('tabChange', tabIndex);
    },
  },
};
</script>
