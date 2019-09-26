<template>
  <div class="eduk-datepicker__range">
    <div class="eduk-input eduk-input--from">
      <div class="eduk-input__flex">
        <div class="eduk-input__icon">
          <input
            type="text"
            placeholder="mm/dd/yyyy"
            class="eduk-input__field eduk-input__field--pl"
            readonly="readonly"
            autocomplete="off"
            :value="from"
            @click="toggleCalendar"
          >
          <span class="fa-icon">
            <font-awesome-icon icon="calendar-alt" />
          </span>
        </div>
      </div>
    </div>
    <div class="eduk-datepicker__separator">&mdash;</div>
    <div class="eduk-input eduk-input--to">
      <div class="eduk-input__flex">
        <div class="eduk-input__icon">
          <input
            type="text"
            placeholder="mm/dd/yyyy"
            class="eduk-input__field eduk-input__field--pl"
            readonly="readonly"
            autocomplete="off"
            :value="to"
            @click="toggleCalendar"
          >
          <span class="fa-icon">
            <font-awesome-icon icon="calendar-alt" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RangeInput',
  props: {
    from: String,
    to: String,
    toggleCalendar: Function,
  },
};
</script>
