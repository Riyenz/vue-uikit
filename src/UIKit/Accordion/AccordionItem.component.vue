<template>
  <div :class="itemClass">
    <div
      :class="ACCORDION_ITEM_HEAD_CLASS"
      @click="toggleShow"
    >
      <template v-if="isArrowDown">
        <font-awesome-icon
          icon="caret-down"
          :class="achClass"
        ></font-awesome-icon>
        <font-awesome-icon
          icon="caret-up"
          :class="acsClass"
        ></font-awesome-icon>
      </template>
      <template v-else>
        <font-awesome-icon
          icon="caret-right"
          :class="achClass"
        ></font-awesome-icon>
        <font-awesome-icon
          icon="caret-down"
          :class="acsClass"
        ></font-awesome-icon>
      </template>
      <h6 class="eduk-accordion-item__header-title eduk-u-m-0" v-if="!$slots.title">{{ title }}</h6>
      <h6 class="eduk-accordion-item__header-title eduk-u-m-0" v-else>
        <slot name="title"></slot>
      </h6>
    </div>
    <div :class="ACCORDION_ITEM_CONTENT_CLASS">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {
  ACCORDION_ITEM_CLASS,
  ACCORDION_ITEM_HEAD_CLASS,
  ACCORDION_ITEM_CONTENT_CLASS,
  ACCORDION_ARROW_CLASS,
  ACCORDION_ITEM_ACTIVE_CLASS,
} from './Accordion.config';

import { DISPLAY_CLASS } from '@/UIKit/config';

export default {
  name: 'Accordion',
  props: {
    title: {
      type: [String, Number],
    },
  },
  data() {
    return {
      ACCORDION_ITEM_HEAD_CLASS,
      ACCORDION_ITEM_CONTENT_CLASS,
      isActive: false,
      isArrowDown: false,
      // Assigned by Accordion Component
      itemIndex: -1,
      fnItemActive: () => {},
    };
  },
  computed: {
    itemClass() {
      return {
        [ACCORDION_ITEM_CLASS]: true,
        [ACCORDION_ITEM_ACTIVE_CLASS]: this.isActive,
      };
    },
    // Arrow for Content Hidden
    achClass() {
      return {
        [ACCORDION_ARROW_CLASS]: true,
        [DISPLAY_CLASS.NONE]: this.isActive,
      };
    },
    // Arrow for Content Shown
    acsClass() {
      return {
        [ACCORDION_ARROW_CLASS]: true,
        [DISPLAY_CLASS.NONE]: !this.isActive,
      };
    },
  },
  methods: {
    toggleShow() {
      this.isActive = !this.isActive;

      if (this.isActive) this.fnItemActive(this.itemIndex);
    },
  },
};
</script>
