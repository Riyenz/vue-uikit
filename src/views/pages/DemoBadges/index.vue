<template>
  <TabContent :selected="selectedTab" @change="onTabChange">
    <template slot="design">
      <div></div>
    </template>
    <template slot="code">
      <div class="demo-badges">
        <h2 class="eduk-h2 eduk-u-mb-3">Badges</h2>
        <div class="demo-badges__container">
          <BasicBadges></BasicBadges>
          <DotBadges></DotBadges>
        </div>
      </div>
    </template>
    <template slot="quicklinks">
    </template>
  </TabContent>
</template>

<script>
import TabContent from '@/views/components/TabContent/index.vue';
import { BasicBadges, DotBadges } from './components';

export default {
  name: 'DemoBadges',
  props: {
    selectedTab: {
      type: Number,
      default: 0,
    },
  },
  components: {
    TabContent,
    BasicBadges,
    DotBadges,
  },
  methods: {
    onTabChange(tabIndex) {
      this.$emit('tabChange', tabIndex);
    },
  },
};
</script>

<style lang="scss" scoped>
.demo-badges {
  &__container * {
    margin-top: 50px;
  }
}
</style>
