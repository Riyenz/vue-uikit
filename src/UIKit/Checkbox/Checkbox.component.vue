<template>
  <span>
    <template v-if="variant === 'indeterminate' || list">
      <div :class="[`${baseClass}--group ${positionClass}`]">
        <div :class="`${baseClass}--head`">
          <input type="checkbox" :class="[checkboxClass]" :id="id" :checked="isToggled"
            @change="toggleAllIndeterminate">
          <label :for="id">
            <slot /></label>
        </div>
        <div :class="`${baseClass}--items`">
          <span v-for="(item,index) in indeterminateList" :key="index">
            <input @change="toggleIndeterminate(index)" type="checkbox" :disabled="item.disabled"
              :checked="item.checked" :class="[baseClass, themeColor]" :id="item.id">
            <label :for="item.id">{{ item.value }}</label>
          </span>
        </div>
      </div>
    </template>
    <template v-else>
      <input type="checkbox" :id="id" :class="checkboxClass" :checked="checked"
        :disabled="disabled">
      <label :for="id">
        <slot /></label>
    </template>
  </span>
</template>

<script>
import {
  CHECKBOX_CLASS_NAME,
} from './Checkbox.config';

export default {
  name: 'Checkbox',
  props: {
    variant: {
      type: String,
    },
    size: {
      type: String,
    },
    list: {
      type: Array,
    },
    id: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      default: 'block', // inline or block
    },
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
    },
  },
  created() {
    if (this.list) {
      this.indeterminateList = this.list.map((item, index) => ({
        id: `${this.id}-${index}`,
        value: typeof item === 'object' ? item.value : item,
        checked: item.checked,
        disabled: item.disabled,
      }));
      this.checkIfAllActive();
    }
  },
  data() {
    return {
      isToggled: false,
      indeterminateList: [],
      isAllActive: false,
    };
  },
  computed: {
    checkboxClass() {
      const variant = this.variant ? `${CHECKBOX_CLASS_NAME}--${this.variant}` : '';
      const size = this.size ? `${CHECKBOX_CLASS_NAME}--${this.size}` : '';
      const theme = this.theme ? `${CHECKBOX_CLASS_NAME}--${this.theme}` : '';
      return {
        [CHECKBOX_CLASS_NAME]: true,
        [size]: true,
        [variant]: !this.isAllActive,
        [theme]: true,
      };
    },
    baseClass() {
      return CHECKBOX_CLASS_NAME;
    },
    positionClass() {
      return this.position ? `${CHECKBOX_CLASS_NAME}--${this.position}` : '';
    },
    themeColor() {
      return this.theme ? `${CHECKBOX_CLASS_NAME}--${this.theme}` : '';
    },
  },
  methods: {
    checkIfAllActive() {
      let isOneActive = false;
      let isAllActive = true;

      this.indeterminateList.forEach((item) => {
        if (item.checked) {
          isOneActive = true;
        } else {
          isAllActive = false;
        }
      });

      this.isToggled = isOneActive;
      this.isAllActive = isAllActive;
    },
    emit() {
      this.$emit('toggleChanges', this.indeterminateList);
    },
    toggleIndeterminate(index) {
      this.indeterminateList[index].checked = !this.indeterminateList[index].checked;
      this.checkIfAllActive();
      this.emit();
    },
    toggleAllIndeterminate() {
      this.indeterminateList.forEach((item) => {
        item.checked = !this.isToggled;
      });

      this.isToggled = !this.isToggled;
      this.isAllActive = this.isToggled;
      this.emit();
    },
  },
};

</script>
