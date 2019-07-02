<template>
  <div :class="itemlistClass">
    <div :class="imageClass" :style="{ 'background-image': `url(${image})` }"></div>
    <div :class="headerClass" v-if="hasHeader">
      <slot name="header"></slot>
    </div>
    <div :class="descriptionClass" v-if="hasDescription">
      <slot name="description"></slot>
    </div>
    <div :class="actionsClass" v-if="hasActions">
      <slot name="actions"></slot>
    </div>
    <div :class="statusClass" v-if="hasStatus">
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
} from './Itemlist.config';
import logoPlaceholder from '@/assets/img/logo-placeholder.png';

export default {
  name: 'Itemlist',
  props: {
    image: {
      type: String,
      default: logoPlaceholder,
    },
  },
  data() {
    return {
      itemlistClass: ITEMLIST_CLASS_NAME,
      imageClass: IMAGE_CLASS_NAME,
      headerClass: HEADER_CLASS_NAME,
      descriptionClass: DESCRIPTION_CLASS_NAME,
      statusClass: STATUS_CLASS_NAME,
    };
  },
  computed: {
    actionsClass() {
      return {
        [ACTIONS_CLASS_NAME]: true,
        [ACTIONS_FULL_ROW_CLASS_NAME]: !this.hasStatus,
      };
    },
    hasHeader() {
      return this.$slots.header;
    },
    hasDescription() {
      return this.$slots.description;
    },
    hasActions() {
      return this.$slots.actions;
    },
    hasStatus() {
      return this.$slots.status;
    },
  },
};
</script>
