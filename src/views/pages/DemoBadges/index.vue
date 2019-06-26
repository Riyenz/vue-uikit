<template>
  <div class="demo-badges">
    <h1 class="eduk-head">Badges</h1>
    <div class="demo-badges__container">
      <BasicBadges></BasicBadges>
      <DotBadges></DotBadges>
    </div>
  </div>
</template>

<script>
import { BasicBadges, DotBadges } from './components';

export default {
  name: 'DemoBadges',
  components: {
    BasicBadges,
    DotBadges,
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
