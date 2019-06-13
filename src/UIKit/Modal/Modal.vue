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
            <img :src="navLogo" alt>
          </span>
        </section>
        <section class="eduk-modal__header">
          <h2 class="eduk-head eduk-modal__header-title eduk-mb-0">{{ title }}</h2>
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
        <div id="subMask" :class="subMaskClass"></div>
        <div class="eduk-modal__sub-content">
          <div class="eduk-modal__sub-top">
            <img
              id="expandIcon"
              :class="expandIconClass"
              src="/assets/icons/horizontal-line.png"
              @click="expandSubActions">
            <img
              id="shrinkIcon"
              :class="shrinkIconClass"
              src="/assets/icons/chevron-down.png"
              @click="shrinkSubActions">
          </div>
          <slot name="subContent"></slot>
          <div id="subActions" :class="subActionsClass" v-if="hasSubActions">
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
  DEFAULT_SUB_CLOSE_TEXT,
  FREEZE_BODY_CLASS,
  DEFAULT_NAVBAR_LOGO,
  EXPAND_CLASS,
  SHOW_CLASS,
} from './config';

export default {
  name: 'Modal',
  props: {
    title: {
      type: String,
    },
    navLogo: {
      type: String,
      default: DEFAULT_NAVBAR_LOGO,
    },
    closeSubText: {
      type: String,
      default: DEFAULT_SUB_CLOSE_TEXT,
    },
  },
  data() {
    return {
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
        'eduk-modal': true,
        show: this.isShown,
      };
    },
    subClass() {
      return {
        'eduk-modal__sub': true,
        show: this.isSubShown,
      };
    },
    subActionsClass() {
      return {
        'eduk-modal__sub-actions': true,
        [EXPAND_CLASS]: this.isSubActionsExpand,
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
