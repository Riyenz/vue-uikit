<template>
  <div class="demo-buttons">
    <h1 class="eduk-head">Buttons</h1>
    <div class="demo-buttons__container">
      <ActionButtons/>
      <OutlineButtons/>
      <SizeButtons/>
      <DisabledButtons/>
    </div>
  </div>
</template>

<script>
import {
  ActionButtons, OutlineButtons, SizeButtons, DisabledButtons,
} from './components';

export default {
  name: 'DemoButtons',
  components: {
    ActionButtons,
    OutlineButtons,
    SizeButtons,
    DisabledButtons,
  },
};
</script>

<style lang="scss" scoped>
.demo-buttons {
  &__container * {
    margin-top: 50px;
  }
}
</style>
