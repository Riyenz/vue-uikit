<template>
  <div
    :class="datepickerCalendarClass"
  >
    <div class="eduk-datepicker-calendar__header">
      <a
        class="eduk-datepicker-calendar__arrow"
        @click="previous"
      >
        <font-awesome-icon icon="chevron-left" />
      </a>
      <a
        class="eduk-datepicker-calendar__date"
        @click="toggleMonthPicker"
      >
        {{monthText}} {{year}}
        <font-awesome-icon icon="caret-down" />
      </a>
      <a
        class="eduk-datepicker-calendar__arrow"
        @click="next"
      >
        <font-awesome-icon icon="chevron-right" />
      </a>
      <MonthPicker
        v-if="monthPickerOpen"
        :selectedMonth="month"
        :selectedYear="year"
        @change="monthYearChange"
      />
    </div>
    <div class="eduk-datepicker-calendar__weeks">
      <div
        :class="dayLabelClass"
        v-for="day in daysText"
        :key="day"
      >
        {{day}}
      </div>
      <div
        class="eduk-datepicker-calendar__day--gray"
        v-for="(day, index) in prevPreview"
        :class="isDayActive(day, month - 1)"
        :key="`${index}${Date.now()}`"
        @click="() => selectDay(day, month - 1)"
      >
        <span>{{day}}</span>
      </div>
      <div
        v-for="(day, index) in daysInMonth"
        :class="isDayActive(day, month)"
        :key="index"
        @click="() => selectDay(day, month)"
      >
        <span>{{day}}</span>
      </div>
      <div
        class="eduk-datepicker-calendar__day--gray"
        v-for="(day, index) in nextPreview"
        :class="isDayActive(day, month + 1)"
        :key="`${Date.now()}${index}`"
        @click="() => selectDay(day, month + 1)"
      >
        <span>{{day}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import MonthPicker from './MonthPicker.component.vue';
import {
  DATEPICKER_CALENDAR_CLASS_NAME,
  DATEPICKER_DAY_CLASS_NAME,
  DATEPICKER_DAY_ACTIVE_CLASS_NAME,
  DATEPICKER_DAY_SCOPED_CLASS_NAME,
  DATEPICKER_DAY_START_CLASS_NAME,
  DATEPICKER_DAY_END_CLASS_NAME,
  DATEPICKER_DAY_GRAY_CLASS_NAME,
  DATEPICKER_DAY_DISABLED_CLASS_NAME,
  MONTHS,
  DAYS,
} from './Datepicker.config';

export default {
  name: 'Calendar',
  props: {
    rangepicker: {
      type: Boolean,
      default: false,
    },
    open: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [Object, Date],
    },
  },
  data() {
    let date = new Date();

    if (this.rangepicker && this.value) {
      date = this.value.from;
    } else if (this.value) {
      date = this.value;
    }

    const month = date.getMonth();
    const year = date.getFullYear();
    const calendarProps = this.buildCalendar(month, year);

    return {
      today: new Date(),
      month,
      year,
      monthText: MONTHS[month],
      daysText: DAYS,
      ...calendarProps,
      selectedDay: this.value || '',
      selectedDayRange: this.value || { from: '', to: '' },
      monthPickerOpen: false,
    };
  },
  watch: {
    open(newValue, oldValue) {
      if (!oldValue && newValue) {
        let date = this.today;

        if (this.value) {
          if (this.rangepicker) {
            date = this.value.from;
            this.selectedDayRange = this.value;
          } else {
            date = this.value;
            this.selectedDay = this.value;
          }
        } else if (this.rangepicker) {
          const { from, to } = this.selectedDayRange;

          if (from && to) {
            date = from;
          }
        } else if (this.selectedDay) {
          date = this.selectedDay;
        }

        const month = date.getMonth();
        const year = date.getFullYear();
        const calendarProps = this.buildCalendar(month, year);

        this.setProps({ month, year, ...calendarProps });
      }
    },
  },
  components: {
    MonthPicker,
  },
  computed: {
    datepickerCalendarClass() {
      return {
        [DATEPICKER_CALENDAR_CLASS_NAME]: true,
      };
    },
    dayLabelClass() {
      return {
        [DATEPICKER_DAY_CLASS_NAME]: true,
        [DATEPICKER_DAY_GRAY_CLASS_NAME]: true,
        [DATEPICKER_DAY_DISABLED_CLASS_NAME]: true,
      };
    },
  },
  methods: {
    next(ev) {
      ev.preventDefault();

      const lastMonthOfYear = this.month === 11;
      const month = lastMonthOfYear ? 0 : this.month + 1;
      const year = lastMonthOfYear ? this.year + 1 : this.year;
      const calendarProps = this.buildCalendar(month, this.year);

      this.setProps({ month, year, ...calendarProps });
    },
    previous(ev) {
      ev.preventDefault();

      const firstMonthOfYear = this.month === 0;
      const month = firstMonthOfYear ? 11 : this.month - 1;
      const year = firstMonthOfYear ? this.year - 1 : this.year;
      const calendarProps = this.buildCalendar(month, this.year);

      this.setProps({ month, year, ...calendarProps });
    },
    setProps({
      month,
      year,
      firstDay,
      daysInMonth,
      prevPreview,
      nextPreview,
    }) {
      this.month = month;
      this.year = year;
      this.firstDay = firstDay;
      this.daysInMonth = daysInMonth;
      this.prevPreview = prevPreview;
      this.nextPreview = nextPreview;
      this.monthText = MONTHS[month];
      this.monthPickerOpen = false;
    },
    buildCalendar(month, year) {
      // get start day index in current month
      const firstDay = (new Date(year, month)).getDay();

      // get days in current month
      const daysInMonth = 32 - new Date(year, month, 32).getDate();

      // prev month preview
      const daysInPrevMonth = 32 - new Date(year, month - 1, 32).getDate();
      const prevPreview = [];

      for (let i = firstDay; i > 0; i -= 1) {
        prevPreview.push(daysInPrevMonth - i + 1);
      }

      // next month preview
      const totalDays = firstDay + daysInMonth;
      const weeks = totalDays / 7;
      const trailing = totalDays - (parseInt(weeks, 10) * 7);
      const nextPreview = (trailing < 7 && trailing > 0) ? 7 - trailing : trailing;

      return {
        firstDay,
        daysInMonth,
        prevPreview,
        nextPreview,
      };
    },
    isDayActive(day, month) {
      if (this.rangepicker) {
        const { from, to } = this.selectedDayRange;
        const hasRange = !!from && !!to;
        const firstSelected = from
          ? (
            day === from.getDate()
            && month === from.getMonth()
            && this.year === from.getFullYear()
          )
          : false;
        const secondSelected = to
          ? (
            day === to.getDate()
            && month === to.getMonth()
            && this.year === to.getFullYear()
          )
          : false;

        const date = new Date(this.year, month, day).getTime();

        const disabledDate = from && date < from.getTime() && !hasRange;

        return {
          [DATEPICKER_DAY_CLASS_NAME]: true,
          [DATEPICKER_DAY_ACTIVE_CLASS_NAME]: firstSelected || secondSelected,
          [DATEPICKER_DAY_SCOPED_CLASS_NAME]: hasRange ? (date > from && date < to) : false,
          [DATEPICKER_DAY_START_CLASS_NAME]: hasRange && firstSelected,
          [DATEPICKER_DAY_END_CLASS_NAME]: hasRange && secondSelected,
          [DATEPICKER_DAY_GRAY_CLASS_NAME]: disabledDate,
          [DATEPICKER_DAY_DISABLED_CLASS_NAME]: disabledDate,
        };
      }

      const dateComparator = this.selectedDay || this.today;

      return {
        [DATEPICKER_DAY_CLASS_NAME]: true,
        [DATEPICKER_DAY_ACTIVE_CLASS_NAME]: (day === dateComparator.getDate()
          && month === dateComparator.getMonth()
          && this.year === dateComparator.getFullYear()),
      };
    },
    selectDay(day, month) {
      const date = new Date(this.year, month, day);

      if (this.rangepicker) {
        const { to, from } = this.selectedDayRange;

        if (!from || (to && from)) {
          this.selectedDayRange = {
            from: date,
            to: '',
          };
        } else {
          this.selectedDayRange = {
            ...this.selectedDayRange,
            to: date,
          };

          this.$emit('change', this.selectedDayRange);
        }
      } else {
        this.selectedDay = date;
        this.$emit('change', this.selectedDay);
      }
    },
    toggleMonthPicker() {
      this.monthPickerOpen = !this.monthPickerOpen;
    },
    monthYearChange({ month, year }) {
      const calendarProps = this.buildCalendar(month, year);

      this.setProps({ month, year, ...calendarProps });
    },
  },
};
</script>
