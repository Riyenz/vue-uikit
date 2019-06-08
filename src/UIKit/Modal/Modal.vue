<template>
  <div :class="{ 'eduk-modal': true, 'show': isShown }">
    <div class="eduk-modal__container">
      <div class="eduk-modal__content">
        <section class="eduk-modal__header">
          <h2 class="eduk-modal__header-title">{{ title }}</h2>
          <font-awesome-icon class="eduk-modal__header-close" icon="times" size="lg" @click="hide"/>
        </section>
        <section class="eduk-modal__body" v-if="$slots.content">
          <slot name="content"></slot>
        </section>
        <section class="eduk-modal__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </section>
      </div>
      <div :class="{ 'eduk-modal__sub': true, show: isSubShown }" v-if="hasSubContent">
        <div class="eduk-modal__sub-content">
          <slot name="subContent"></slot>
        </div>
        <div class="eduk-modal__sub-close" v-on:click="hideSub">
          Close window
          <font-awesome-icon icon="times"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      isShown: false,
      isSubShown: true,
      body: document.getElementsByTagName('body')[0],
      freezeClass: 'eduk-modal-open',
    };
  },
  computed: {
    hasNoTitle() {
      return !this.title;
    },
    hasSubContent() {
      return this.$slots.subContent;
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
      this.body.classList.add(this.freezeClass);
    },
    removeFreezeClass() {
      this.body.classList.remove(this.freezeClass);
    },
  },
};
</script>
