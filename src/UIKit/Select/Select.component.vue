<template>
  <div :class="selectClass">
    <span class="eduk-select__indicator"></span>
    <div
      class="eduk-select__input-wrapper eduk-select__input-wrapper--wrap"
      v-if="multiselect"
      @mousedown="preFocusInput"
      @mouseup="focusInput"
    >
      <a
        v-for="option in selected"
        :key="option.id"
        class="eduk-select__pill"
        @click="(ev) => removeItem(ev, option.id)"
      >{{option.name}}&nbsp;&nbsp;&times;</a>
      <input
        :class="inputClass"
        :placeholder="inputPlaceholder"
        :value="searchKey"
        :disabled="disabled"
        @input="onInputChange"
        @focus="onFocus"
        @blur="onFocusOut"
        @mouseup="onInputMouseup"
        ref="search"
      />
    </div>
    <div
      v-else
      class="eduk-select__input-wrapper"
      @mousedown="preFocusInput"
      @mouseup="focusInput"
    >
      <img
        v-if="hasImage && !!inputImage"
        :src="inputImage"
        class="eduk-select__img"
      />
      <input
        :class="inputClass"
        :placeholder="inputPlaceholder"
        :value="searchKey"
        :disabled="disabled"
        @input="onInputChange"
        @focus="onFocus"
        @blur="onFocusOut"
        @mouseup="onInputMouseup"
        ref="search"
      />
    </div>
    <ul class="eduk-select__options">
      <li
        v-for="option in selectOptions"
        :key="option.id"
        class="eduk-select__option"
        :class="{ 'eduk-select__option--dense': hasImage }"
      >
        <a
          v-if="hasImage"
          :data-id="option.id"
          @mousedown="onSelectOption"
        >
          <img :src="option.img" :alt="option.name" />
          <span>{{option.name}}</span>
        </a>
        <a
          v-else
          :data-id="option.id"
          @mousedown="onSelectOption"
        >
          {{option.name}}
        </a>
      </li>
      <li class="eduk-select__empty" :class="emptyOptions">
        No results found.
      </li>
    </ul>
  </div>
</template>

<script>
import {
  COMPONENT_NAME,
  SELECT_CLASS_NAME,
  SELECT_OPEN_CLASS_NAME,
  SELECT_DISABLED_CLASS_NAME,
  SELECT_INPUT_CLASS_NAME,
  SELECT_INPUT_EMPTY_CLASS_NAME,
  SELECT_INPUT_ACTIVE_CLASS_NAME,
} from './Select.config';

export default {
  name: COMPONENT_NAME,
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    placeholder: {
      type: String,
      default: '',
    },
    multiselect: {
      type: Boolean,
      default: false,
    },
    hasImage: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Object,
    },
  },
  data() {
    return {
      open: false,
      isOpenOnMouseDown: false,
      selected: this.value || null,
      searchKey: '',
      selectOptions: [],
    };
  },
  computed: {
    selectClass() {
      return {
        [SELECT_CLASS_NAME]: true,
        [SELECT_OPEN_CLASS_NAME]: this.open,
        [SELECT_DISABLED_CLASS_NAME]: this.disabled,
      };
    },
    inputPlaceholder() {
      if (this.multiselect) {
        return (this.selected || []).length > 0 ? '' : this.placeholder;
      }

      return this.selected ? this.selected.name : this.placeholder;
    },
    inputImage() {
      return this.selected ? this.selected.img : '';
    },
    inputClass() {
      return {
        [SELECT_INPUT_CLASS_NAME]: true,
        [SELECT_INPUT_EMPTY_CLASS_NAME]: this.selected === null,
        [SELECT_INPUT_ACTIVE_CLASS_NAME]: this.hasImage && this.selected !== null,
      };
    },
    emptyOptions() {
      return {
        [`${SELECT_CLASS_NAME}__empty--active`]: this.selectOptions.length === 0,
      };
    },
  },
  methods: {
    onInputChange() {
      this.searchKey = this.$refs.search.value;
      this.filterOptions();
    },
    focusInput() {
      if (this.isOpenOnMouseDown) this.isOpenOnMouseDown = false;
      else this.$refs.search.focus();
    },
    preFocusInput() {
      if (this.open) this.isOpenOnMouseDown = true;
    },
    onInputMouseup() {
      this.$refs.search.blur();
    },
    onFocus() {
      if (this.multiselect) {
        this.filterMultiselectOptions();
      } else {
        this.searchKey = this.selected ? this.selected.name : '';
        this.selectOptions = this.options;
      }

      this.setSelectState(true);
    },
    onFocusOut() {
      this.setSelectState(false);
      this.resetSearch();
    },
    onSelectOption(ev) {
      const { id } = ev.target.dataset;

      this.resetSearch();

      if (this.multiselect) {
        ev.preventDefault();
        const selectedOptions = this.selected ? [...this.selected] : [];
        const isSelected = !!selectedOptions.find(option => option.id === id);

        if (isSelected) {
          this.selected = selectedOptions.filter(option => String(option.id) !== id);
        } else {
          selectedOptions.push(this.options.find(option => String(option.id) === id));
          this.selected = selectedOptions;
        }

        this.filterMultiselectOptions();
        this.$emit('change', [...this.selected]);
        this.$emit('input', [...this.selected]);
      } else {
        this.selected = this.options.find(option => String(option.id) === id);

        this.$emit('change', { ...this.selected });
        this.$emit('input', { ...this.selected });
      }
    },
    setSelectState(isOpen) {
      this.open = isOpen;
    },
    resetSearch() {
      this.searchKey = '';
    },
    filterOptions() {
      if (this.searchKey) {
        this.selectOptions = this.options.filter(option => option.name
          .toLowerCase()
          .includes(this.searchKey.toLowerCase()));
      } else {
        this.selectOptions = this.options;
      }
    },
    filterMultiselectOptions() {
      this.selectOptions = this.options.filter((o) => {
        const selectedValues = (this.selected || []);

        if (selectedValues.length > 0) {
          return !selectedValues.find(s => s.id === o.id);
        }

        return true;
      });
    },
    removeItem(ev, id) {
      ev.stopImmediatePropagation();
      this.selected = this.selected.filter(option => option.id !== id);

      if (this.multiselect) {
        this.$emit('change', [...this.selected]);
        this.$emit('input', [...this.selected]);
      } else {
        this.$emit('change', { ...this.selected });
        this.$emit('input', { ...this.selected });
      }
    },
  },
};
</script>
