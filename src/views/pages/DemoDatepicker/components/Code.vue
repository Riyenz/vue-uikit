<template>
  <div>
    <h2 class="eduk-h2 eduk-u-mb-3">Date Picker</h2>
    <p class="eduk-text eduk-u-mb-4">
      Use to select a single date from the calendar dialog or by typing in
      the date as indicated by the placeholder text.
    </p>
    <Single />
    <Range />
  </div>
</template>

<script>
import Single from './Single.vue';
import Range from './Range.vue';

export default {
  name: 'Code',
  components: {
    Single,
    Range,
  },
};
</script>
