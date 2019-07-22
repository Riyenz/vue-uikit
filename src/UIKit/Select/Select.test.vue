<template>
  <div>
    <div id="normal">
      <Select
        placeholder="Select"
        :options="options"
        @change="normalSelectChange"
      />
    </div>
    <div id="multiple">
      <Select
        placeholder="Multiple"
        multiselect
        :options="options"
        @change="multipleSelectChange"
      />
    </div>
  </div>
</template>

<script>
import Select from '@/UIKit/Select/Select.component.vue';

const options = [
  { id: 1, name: 'One' },
  { id: 2, name: 'Two' },
  { id: 3, name: 'Three' },
];

export default {
  name: 'SelectTest',
  data() {
    return {
      options,
      selectValue: null,
      selectValuesLength: 0,
    };
  },
  components: {
    Select,
  },
  methods: {
    normalSelectChange(value) {
      this.selectValue = value.id;
    },
    multipleSelectChange(value) {
      this.selectValuesLength = value.length;
    },
  },
};
</script>
