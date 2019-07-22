<template>
  <div>
    <div id="normal">
      <Dropdown
        title="Dropdown"
        :options="options"
        @optionClicked="selectOption"
      />
    </div>
    <div id="cta">
      <Dropdown
        title="Dropdown"
        icon='times'
        :iconTrigger="true"
        :options="options"
        @click="onClickCta"
      />
    </div>
  </div>
</template>

<script>
import Dropdown from '@/UIKit/Dropdown/Dropdown.component.vue';

const options = [
  { id: 1, name: 'One' },
  { id: 2, name: 'Two' },
  { id: 3, name: 'Three' },
];

export default {
  name: 'DropdownTest',
  data() {
    return {
      options,
      selectValue: null,
      ctaClicked: false,
    };
  },
  components: {
    Dropdown,
  },
  methods: {
    selectOption(value) {
      this.selectValue = value.id;
    },
    onClickCta() {
      this.ctaClicked = true;
    },
  },
};
</script>
