<template>
  <TabContent :selected="selectedTab" @change="onTabChange" padded>
    <template slot="design">
      <div></div>
    </template>
    <template slot="develop">
      <div class="demo-grids">
        <h2 class="eduk-h2 eduk-u-mb-3">Grids</h2>
        <div class="demo-grids__container">
          <GridContainer/>
          <GridContainerFluid/>
          <GridColumns/>
          <ResponsiveColumns/>
        </div>
        <ContainerApi />
        <RowApi />
        <ColumnApi />
      </div>
    </template>
    <template slot="quicklinks">
    </template>
  </TabContent>
</template>

<script>
import TabContent from '@/views/components/TabContent/index.vue';
import GridContainer from '@/views/pages/DemoGrids/components/GridContainer.vue';
import GridContainerFluid from '@/views/pages/DemoGrids/components/GridContainerFluid.vue';
import GridColumns from '@/views/pages/DemoGrids/components/GridColumns.vue';
import ResponsiveColumns from '@/views/pages/DemoGrids/components/ResponsiveColumns.vue';

import ContainerApi from './components/ContainerApi.vue';
import RowApi from './components/RowApi.vue';
import ColumnApi from './components/ColumnApi.vue';

export default {
  name: 'DemoGrids',
  props: {
    selectedTab: {
      type: String,
    },
  },
  components: {
    TabContent,
    GridContainer,
    GridContainerFluid,
    GridColumns,
    ResponsiveColumns,
    ContainerApi,
    RowApi,
    ColumnApi,
  },
  methods: {
    onTabChange(tabIndex) {
      this.$emit('tabChange', tabIndex);
    },
  },
};
</script>

<style lang="scss" scoped>
.demo-grids {
  &__container * {
    margin-top: 50px;
  }
}
</style>
