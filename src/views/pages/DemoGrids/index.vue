<template>
  <TabContent :selected="selectedTab" @change="onTabChange">
    <template slot="design">
      <div></div>
    </template>
    <template slot="code">
      <div class="demo-grids">
        <h2 class="eduk-h2 eduk-u-mb-3">Grids</h2>
        <div class="demo-grids__container">
          <GridContainer/>
          <GridContainerFluid/>
          <GridColumns/>
          <ResponsiveColumns/>
        </div>
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

export default {
  name: 'DemoGrids',
  props: {
    selectedTab: {
      type: Number,
      default: 0,
    },
  },
  components: {
    TabContent,
    GridContainer,
    GridContainerFluid,
    GridColumns,
    ResponsiveColumns,
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
