<template>
  <div class="demo-buttons">
    <h1>Buttons</h1>
    <ActionButtons/>
    <OutlineButtons/>
    <SizeButtons/>
    <DisabledButtons/>
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
    margin-right: 3px;
  }
}
</style>
