<template>
  <div :class="alertClass">
    <div class="eduk-alert__container">
      <div class="eduk-alert__content">
        <section class="eduk-alert__header">
          <h2 class="eduk-head eduk-alert__header-title eduk-mb-0">{{ title }}</h2>
          <font-awesome-icon class="eduk-alert__header-close" icon="times" size="lg" @click="hide"/>
        </section>
        <section class="eduk-alert__body">
          <slot></slot>
        </section>
        <section class="eduk-alert__actions">
          <Btn
            text="OK"
            variant="tertiary"
            size="lg"
            outline
            @click.native="hide"/>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from '@/UIKit/Btn/Btn.vue';

export default {
  name: 'Alert',
  components: {
    Btn,
  },
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      isShown: false,
    };
  },
  computed: {
    alertClass() {
      return {
        'eduk-alert': true,
        show: this.isShown,
      };
    },
  },
  methods: {
    show() {
      this.isShown = true;
    },
    hide() {
      this.isShown = false;
    },
  },
};
</script>
