<template>
  <div class="demo-itemlists">
    <h1 class="eduk-head">Item List</h1>
    <div class="demo-itemlists__container">
      <BasicItemlist/>
      <HintItemlist/>
      <BadgeItemlist/>
    </div>
  </div>
</template>

<script>
import { BasicItemlist, HintItemlist, BadgeItemlist } from './components';

export default {
  name: 'DemoItemlists',
  components: {
    BasicItemlist,
    HintItemlist,
    BadgeItemlist,
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
