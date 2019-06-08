<template>
  <div class="demo-modals">
    <h1>Modals</h1>
    <div class="demo-modals__container">
      <BasicModal/>
      <ModalWithActions/>
      <LongModal/>
      <MessageOnlyModal/>
      <ModalWithSub/>
    </div>
  </div>
</template>

<script>
import BasicModal from './components/BasicModal.vue';
import ModalWithActions from './components/ModalWithActions.vue';
import LongModal from './components/LongModal.vue';
import MessageOnlyModal from './components/MessageOnlyModal.vue';
import ModalWithSub from './components/ModalWithSub.vue';

export default {
  name: 'DemoModals',
  components: {
    BasicModal,
    ModalWithActions,
    LongModal,
    MessageOnlyModal,
    ModalWithSub,
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
