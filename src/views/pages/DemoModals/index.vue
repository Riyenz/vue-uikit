<template>
  <TabContent :selected="selectedTab" @change="onTabChange" padded>
    <template slot="design">
      <div></div>
    </template>
    <template slot="develop">
      <div class="demo-modals">
        <h2 class="eduk-h2 eduk-u-mb-3">Modals</h2>
        <div class="demo-modals__container">
          <BasicModal/>
          <ModalWithActions/>
          <LongModal/>
          <ModalWithSub/>
        </div>
        <ModalApi />
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
import ModalApi from './components/ModalApi.vue';

export default {
  name: 'DemoModals',
  props: {
    selectedTab: {
      type: String,
    },
  },
  components: {
    TabContent,
    BasicModal,
    ModalWithActions,
    LongModal,
    ModalWithSub,
    ModalApi,
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
