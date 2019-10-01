<template>
  <div :class="statisticsClass">
    <div class="eduk-u-d-flex eduk-u-align-items-center">
      <font-awesome-icon
        v-if="icon"
        :icon="icon"
        :class="iconClass"
      />
      <h1 :class="statsClass">{{ statsValue }}</h1>
    </div>
    <h6 class="eduk-head eduk-u-mb-0" v-if="description">{{ description }}</h6>
  </div>
</template>

<script>
import { isNumber } from 'util';
import {
  STATISTICS_CLASS_NAME,
  STATISTICS_INVERTED_CLASS_NAME,
} from './Statistics.config';
import { TEXT_UTILITY_CLASS } from '../config';

export default {
  name: 'Statistics',
  props: {
    value: {
      type: [Number, String],
      default: 0,
    },
    description: {
      type: String,
    },
    inverted: {
      type: Boolean,
    },
    variant: {
      type: String,
    },
    icon: {
      type: String,
    },
  },
  computed: {
    statisticsClass() {
      return {
        [STATISTICS_CLASS_NAME]: true,
        [STATISTICS_INVERTED_CLASS_NAME]: this.inverted,
      };
    },
    iconClass() {
      return {
        'eduk-h1': true,
        'eduk-u-mb-0': true,
        'eduk-u-mr-1': true,
        [`${TEXT_UTILITY_CLASS}--${this.variant}`]: this.variant,
      };
    },
    statsClass() {
      return {
        'eduk-head': true,
        'eduk-u-mb-0': true,
        [`${TEXT_UTILITY_CLASS}--${this.variant}`]: this.variant,
      };
    },
    statsValue() {
      if (isNumber(this.value)) {
        return this.value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
      }

      return this.value;
    },
  },
};
</script>
