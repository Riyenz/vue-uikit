<template>
  <div :class="modalClass">
    <div class="eduk-modal__container">
      <div class="eduk-modal__main">
        <section class="eduk-modal__navbar">
          <font-awesome-icon
            class="eduk-modal__navbar-back"
            icon="chevron-left"
            size="lg"
            @click="hide"
          />
          <span class="eduk-modal__navbar-logo">
            <img :src="navLogo || defaultLogo">
          </span>
        </section>
        <section class="eduk-modal__header">
          <h2 class="eduk-head eduk-modal__header-title eduk-u-mb-0">{{ title }}</h2>
          <font-awesome-icon class="eduk-modal__header-close" icon="times" size="lg" @click="hide"/>
        </section>
        <section class="eduk-modal__content">
          <section class="eduk-modal__body" v-if="$slots.content">
            <h2 class="eduk-modal__title eduk-modal__title--mobile">{{ title }}</h2>
            <slot name="content"></slot>
          </section>
          <section class="eduk-modal__footer" v-if="$slots.footer">
            <slot name="footer"></slot>
          </section>
        </section>
      </div>
      <div :class="subClass" v-if="hasSub">
        <div :class="subMaskClass"></div>
        <div class="eduk-modal__sub-content">
          <div class="eduk-modal__sub-top">
            <img
              :class="expandIconClass"
              :src="horizontalLineIcon"
              @click="expandSubActions">
            <img
              :class="shrinkIconClass"
              :src="chevronDownIcon"
              @click="shrinkSubActions">
          </div>
          <slot name="subContent"></slot>
          <div :class="subActionsClass" v-if="hasSubActions">
            <slot name="subActions"></slot>
          </div>
        </div>
        <div class="eduk-modal__sub-close" v-on:click="hideSub">
          {{ closeSubText }}
          <font-awesome-icon icon="times"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  MODAL_CLASS_NAME,
  DEFAULT_SUB_CLOSE_TEXT,
  FREEZE_BODY_CLASS,
} from './Modal.config';

import {
  SHOW_CLASS,
} from '../config';

import CHEVRON_DOWN_ICON from '@/assets/icons/chevron-down.png';
import HORIZONTAL_LINE_ICON from '@/assets/icons/horizontal-line.png';

import ModalService from './Modal.service';

export default {
  name: 'Modal',
  props: {
    title: {
      type: String,
    },
    navLogo: {
      type: String,
    },
    closeSubText: {
      type: String,
      default: DEFAULT_SUB_CLOSE_TEXT,
    },
    chevronDownIcon: {
      type: String,
      default: CHEVRON_DOWN_ICON,
    },
    horizontalLineIcon: {
      type: String,
      default: HORIZONTAL_LINE_ICON,
    },
  },
  data() {
    return {
      defaultLogo: ModalService.getDefaultLogo(),
      isShown: false,
      isSubShown: true,
      body: document.getElementsByTagName('body')[0],
      isSubActionsExpand: false,
    };
  },
  computed: {
    hasNoTitle() {
      return !this.title;
    },
    hasSub() {
      return this.$slots.subContent || this.hasSubActions;
    },
    hasSubActions() {
      return this.$slots.subActions;
    },
    modalClass() {
      return {
        [MODAL_CLASS_NAME]: true,
        [SHOW_CLASS]: this.isShown,
      };
    },
    subClass() {
      return {
        'eduk-modal__sub': true,
        [SHOW_CLASS]: this.isSubShown,
      };
    },
    subActionsClass() {
      return {
        'eduk-modal__sub-actions': true,
        [SHOW_CLASS]: this.isSubActionsExpand,
      };
    },
    shrinkIconClass() {
      return {
        'eduk-modal__sub-top-down': true,
        [SHOW_CLASS]: this.isSubActionsExpand,
      };
    },
    expandIconClass() {
      return {
        'eduk-modal__sub-top-line': true,
        [SHOW_CLASS]: !this.isSubActionsExpand,
      };
    },
    subMaskClass() {
      return {
        'eduk-modal__sub-mask': true,
        [SHOW_CLASS]: this.isSubActionsExpand,
      };
    },
  },
  methods: {
    show() {
      this.isShown = true;
      this.isSubShown = true;
      this.addFreezeClass();
    },
    hide() {
      this.isShown = false;
      this.removeFreezeClass();
    },
    hideSub() {
      this.isSubShown = false;
    },
    addFreezeClass() {
      this.body.classList.add(FREEZE_BODY_CLASS);
    },
    removeFreezeClass() {
      this.body.classList.remove(FREEZE_BODY_CLASS);
    },
    expandSubActions() {
      this.isSubActionsExpand = true;
    },
    shrinkSubActions() {
      this.isSubActionsExpand = false;
    },
  },
};
</script>
