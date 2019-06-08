<template>
  <div class="demo-grids">
    <h1>Grids</h1>
    <div class="demo-grids__container">
      <GridContainer/>
      <GridContainerFluid/>
      <GridColumns/>
      <ResponsiveColumns/>
    </div>
  </div>
</template>

<script>
import GridContainer from '@/views/pages/DemoGrids/components/GridContainer.vue';
import GridContainerFluid from '@/views/pages/DemoGrids/components/GridContainerFluid.vue';
import GridColumns from '@/views/pages/DemoGrids/components/GridColumns.vue';
import ResponsiveColumns from '@/views/pages/DemoGrids/components/ResponsiveColumns.vue';

export default {
  name: 'DemoGrids',
  components: {
    GridContainer,
    GridContainerFluid,
    GridColumns,
    ResponsiveColumns,
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
