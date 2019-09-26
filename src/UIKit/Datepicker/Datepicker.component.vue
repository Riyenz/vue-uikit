<template>
  <div
    :class="datepickerClass"
  >
    <RangeInput
      v-if="rangepicker"
      :toggleCalendar="toggleCalendar"
      :from="selectedDayFromValue"
      :to="selectedDayToValue"
    />
    <div class="eduk-input" v-else>
      <div class="eduk-input__flex">
        <div class="eduk-input__icon">
          <input
            type="text"
            class="eduk-input__field eduk-input__field--pl"
            readonly="readonly"
            autocomplete="off"
            :placeholder="singleRangepicker ? 'mm/dd/yyyy - mm/dd/yyyy' : 'mm/dd/yyyy'"
            :value="selectedDayValue"
            @click="toggleCalendar"
          >
          <span class="fa-icon">
            <font-awesome-icon icon="calendar-alt" />
          </span>
        </div>
      </div>
    </div>
    <div
      :class="datepickerCalendarWrapperClass"
      @click="stopPropagation"
    >
      <Calendar
        :rangepicker="rangepicker || singleRangepicker"
        :open="open"
        :value="value"
        @change="datesChange"
      />
    </div>
  </div>
</template>

<script>
import Calendar from './Calendar.component.vue';
import RangeInput from './RangeInput.component.vue';
import {
  DATEPICKER_CLASS_NAME,
  DATEPICKER_BLOCK_CLASS_NAME,
  DATEPICKER_CALENDAR_WRAPPER_CLASS_NAME,
  DATEPICKER_CALENDAR_WRAPPER_VISIBLE_CLASS_NAME,
} from './Datepicker.config';

export default {
  name: 'Datepicker',
  props: {
    rangepicker: {
      type: Boolean,
      default: false,
    },
    singleRangepicker: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [Object, Date],
    },
  },
  data() {
    return {
      open: false,
      targeted: false,
      selectedDay: this.value || '',
      selectedDayRange: (
        this.rangepicker
        || this.singleRangepicker
      )
      && this.validateRangeValue()
        ? this.value : { from: '', to: '' },
    };
  },
  watch: {
    value(newValue) {
      if (this.rangepicker || this.singleRangepicker) {
        this.selectedDayRange = newValue;
      } else {
        this.selectedDay = newValue;
      }
    },
  },
  components: {
    Calendar,
    RangeInput,
  },
  created() {
    document.body.addEventListener('click', this.onClickBody);
  },
  beforeDestroy() {
    document.body.removeEventListener('click', this.onClickBody);
  },
  computed: {
    datepickerClass() {
      return {
        [DATEPICKER_CLASS_NAME]: true,
        [DATEPICKER_BLOCK_CLASS_NAME]: this.rangepicker || this.block,
      };
    },
    datepickerCalendarWrapperClass() {
      return {
        [DATEPICKER_CALENDAR_WRAPPER_CLASS_NAME]: true,
        [DATEPICKER_CALENDAR_WRAPPER_VISIBLE_CLASS_NAME]: this.open,
      };
    },
    selectedDayValue() {
      if (this.singleRangepicker) {
        const { from, to } = this.selectedDayRange;

        if (from && to) {
          return `${this.formatDisplayDate(from)} - ${this.formatDisplayDate(to)}`;
        }
      }

      if (this.selectedDay) {
        return this.formatDisplayDate(this.selectedDay);
      }

      return '';
    },
    selectedDayFromValue() {
      const { from } = this.selectedDayRange;

      if (from) {
        return this.formatDisplayDate(from);
      }

      return '';
    },
    selectedDayToValue() {
      const { to } = this.selectedDayRange;

      if (to) {
        return this.formatDisplayDate(to);
      }

      return '';
    },
  },
  methods: {
    toggleCalendar() {
      this.targeted = true;
      this.open = !this.open;
    },
    datesChange(value) {
      if (!this.value) {
        if (this.rangepicker || this.singleRangepicker) {
          this.selectedDayRange = value;
        } else {
          this.selectedDay = value;
        }
      }

      this.$emit('input', value);
    },
    onClickBody() {
      if (this.targeted) this.targeted = false;
      else this.open = false;
    },
    stopPropagation(ev) {
      ev.stopImmediatePropagation();
    },
    formatDisplayDate(date) {
      const month = date.getMonth();
      const day = date.getDate();
      const year = date.getFullYear();

      return `${(`0${(month + 1)}`).slice(-2)}/${(`0${day}`).slice(-2)}/${year}`;
    },
    validateRangeValue() {
      if (this.value) {
        if (this.value.from && this.value.to) return true;
      }
      return false;
    },
  },
};
</script>
