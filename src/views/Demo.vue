<template>
  <div class="demo">
    <div class="demo__sidebar">
      <h1>Sidebar</h1>
    </div>
    <div class="demo__container">
      <DemoButtons/>
    </div>
  </div>
</template>

<script>
import DemoButtons from '@/views/pages/DemoButtons/index.vue';

export default {
  name: 'Demo',
  components: {
    DemoButtons,
  },
};
</script>

<style scoped lang="scss">
.demo {
  display: flex;
  height: 100%;
  width: 100%;

  &__sidebar {
    padding: 20px 30px;
    min-width: 300px;
    background-color: gray;
  }
  &__container {
    padding: 20px 30px;
    flex: 1;
  }
}
</style>
