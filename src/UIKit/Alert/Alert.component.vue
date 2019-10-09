<template>
  <div :class="alertClass" @click="hide">
    <div class="eduk-alert__container" @click.stop>
      <div class="eduk-alert__content">
        <section class="eduk-alert__body">
          <slot></slot>
        </section>
        <section class="eduk-alert__actions" v-if="!noActions">
          <Btn
            variant="tertiary"
            size="lg"
            outline
            @click.native="hide">OK</Btn>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import {
  SHOW_CLASS,
} from '../config';
import { ALERT_CLASS_NAME } from './Alert.config';
import Btn from '@/UIKit/Btn/Btn.component.vue';

export default {
  name: 'Alert',
  components: {
    Btn,
  },
  props: {
    noActions: {
      type: Boolean,
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
        [ALERT_CLASS_NAME]: true,
        [SHOW_CLASS]: this.isShown,
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
