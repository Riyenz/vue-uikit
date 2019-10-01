<template>
  <div :class="itemlistClass">
    <div :class="IMAGE_CLASS_NAME" :style="{ 'background-image': `url(${image})` }"></div>
    <div :class="HEADER_CLASS_NAME" v-if="hasHeader">
      <slot name="header"></slot>
    </div>
    <div :class="DESCRIPTION_CLASS_NAME" v-if="hasDescription">
      <slot name="description"></slot>
    </div>
    <div :class="actionsClass" v-if="hasActions">
      <slot name="actions"></slot>
    </div>
    <div :class="STATUS_CLASS_NAME" v-if="hasStatus">
      <slot name="status"></slot>
    </div>
  </div>
</template>

<script>
import {
  ITEMLIST_CLASS_NAME,
  IMAGE_CLASS_NAME,
  HEADER_CLASS_NAME,
  DESCRIPTION_CLASS_NAME,
  ACTIONS_CLASS_NAME,
  ACTIONS_FULL_ROW_CLASS_NAME,
  STATUS_CLASS_NAME,
  ITEMLIST_LOADING_CLASS_NAME,
} from './Itemlist.config';
import logoPlaceholder from '@/assets/img/logo-placeholder.png';

export default {
  name: 'Itemlist',
  props: {
    image: {
      type: String,
      default: logoPlaceholder,
    },
    loading: {
      type: Boolean,
    },
  },
  data() {
    return {
      ITEMLIST_CLASS_NAME,
      IMAGE_CLASS_NAME,
      HEADER_CLASS_NAME,
      DESCRIPTION_CLASS_NAME,
      STATUS_CLASS_NAME,
    };
  },
  computed: {
    actionsClass() {
      return {
        [ACTIONS_CLASS_NAME]: true,
        [ACTIONS_FULL_ROW_CLASS_NAME]: !this.hasStatus,
      };
    },
    itemlistClass() {
      return {
        [ITEMLIST_CLASS_NAME]: true,
        [ITEMLIST_LOADING_CLASS_NAME]: this.loading,
      };
    },
    hasHeader() {
      return this.$slots.header || this.loading;
    },
    hasDescription() {
      return this.$slots.description || this.loading;
    },
    hasActions() {
      return this.$slots.actions || this.loading;
    },
    hasStatus() {
      return this.$slots.status || this.loading;
    },
  },
};
</script>
