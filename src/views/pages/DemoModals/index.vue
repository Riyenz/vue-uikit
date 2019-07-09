<template>
  <TabContent :selected="selectedTab" @change="onTabChange">
    <template slot="design">
      <div></div>
    </template>
    <template slot="code">
      <div class="demo-modals">
        <h2 class="eduk-h2 eduk-u-mb-3">Modals</h2>
        <div class="demo-modals__container">
          <BasicModal/>
          <ModalWithActions/>
          <LongModal/>
          <ModalWithSub/>
        </div>
      </div>
    </template>
    <template slot="quicklinks">
    </template>
  </TabContent>
</template>

<script>
import TabContent from '@/views/components/TabContent/index.vue';
import BasicModal from './components/BasicModal.vue';
import ModalWithActions from './components/ModalWithActions.vue';
import LongModal from './components/LongModal.vue';
import ModalWithSub from './components/ModalWithSub.vue';

export default {
  name: 'DemoModals',
  props: {
    selectedTab: {
      type: Number,
      default: 0,
    },
  },
  components: {
    TabContent,
    BasicModal,
    ModalWithActions,
    LongModal,
    ModalWithSub,
  },
  methods: {
    onTabChange(tabIndex) {
      this.$emit('tabChange', tabIndex);
    },
  },
};
</script>

<style lang="scss" scoped>
.demo-modals {
  &__container * {
    margin-top: 50px;
  }
}
</style>
