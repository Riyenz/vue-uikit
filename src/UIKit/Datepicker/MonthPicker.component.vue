<template>
  <div class="eduk-datepicker-months">
    <div class="eduk-datepicker-months__header">
      <a class="eduk-datepicker-months__arrows" @click="prev">
        <font-awesome-icon icon="chevron-left" />
      </a>
      <h4 class="eduk-datepicker-months__year">{{year}}</h4>
      <a class="eduk-datepicker-months__arrows" @click="next">
        <font-awesome-icon icon="chevron-right" />
      </a>
    </div>
    <div class="eduk-datepicker-months__grid">
      <div
        v-for="(month, index) in months"
        :key="month"
        :class="monthClass(index)"
        @click="() => selectMonth(index)"
      >
        {{month}}
      </div>
    </div>
  </div>
</template>

<script>
import {
  DATEPICKER_MONTH_CLASS_NAME,
  DATEPICKER_MONTH_ACTIVE_CLASS_NAME,
  MONTHS_SHORT,
} from './Datepicker.config';

export default {
  name: 'MonthPicker',
  props: {
    selectedMonth: Number,
    selectedYear: Number,
  },
  data() {
    const today = new Date();

    return {
      month: this.selectedMonth || today.getMonth(),
      year: this.selectedYear || today.getFullYear(),
      months: MONTHS_SHORT,
    };
  },
  methods: {
    prev() {
      this.year -= 1;
    },
    next() {
      this.year += 1;
    },
    monthClass(month) {
      return {
        [DATEPICKER_MONTH_CLASS_NAME]: true,
        [DATEPICKER_MONTH_ACTIVE_CLASS_NAME]: (month === this.selectedMonth
          && this.year === this.selectedYear),
      };
    },
    selectMonth(month) {
      this.$emit('change', { month, year: this.year });
    },
  },
};
</script>
