<template>
  <div
    :class="dropdownClass"
  >
    <Btn
      v-if="!!icon && !iconTrigger"
      @click="toggle"
      :variant="variant"
      :outline="outline"
      :size="size"
      :class="dropdownWithIconClass"
      class="eduk-dropdown__trigger"
      noMargin
    >
      <span class="eduk-dropdown__title">{{title}}</span>
      <span><FontAwesomeIcon :icon="icon" class="eduk-dropdown__icon" /></span>
    </Btn>
    <div
      :class="dropdownGroupClass"
      v-else-if="!!icon && iconTrigger"
    >
      <Btn
        @click="onAction"
        :variant="variant"
        :outline="outline"
        :size="size"
        class="eduk-dropdown__cta"
        noMargin
      >
        <span class="eduk-dropdown__title">{{title}}</span>
      </Btn>
      <Btn
        @click="toggle"
        :variant="variant"
        :outline="outline"
        :size="size"
        class="eduk-dropdown__trigger"
        noMargin
      >
        <FontAwesomeIcon :icon="icon" class="eduk-dropdown__icon" />
      </Btn>
    </div>
    <Btn
      v-else
      @click="toggle"
      :variant="variant"
      :outline="outline"
      :size="size"
      class="eduk-dropdown__trigger"
    >
      <span class="eduk-dropdown__title">{{title}}</span>
    </Btn>
    <ul
      class="eduk-dropdown__options"
      @click="stopOptionsPropagation"
      ref="dropdownOptions"
    >
      <li v-if="searchable" class="eduk-dropdown__search">
        <input
          type="text"
          placeholder="Search items..."
          ref="search"
          :value="searchKey"
          @input="onInputChange"
        />
        <span class="eduk-dropdown__search-icon">
          <FontAwesomeIcon icon="search" />
        </span>
      </li>
      <li
        v-for="option in dropdownOptions"
        :key="option.id"
        class="eduk-dropdown__option"
      >
        <a v-if="!!option.icon" @click="(ev) => onSelectOption(ev, option)">
          <FontAwesomeIcon :icon="option.icon" />
          <span>{{option.name}}</span>
        </a>
        <a v-else @click="(ev) => onSelectOption(ev, option)">{{option.name}}</a>
      </li>
      <li class="eduk-dropdown__empty" :class="emptyOptions">
        No results found.
      </li>
    </ul>
  </div>
</template>

<script>
import {
  FontAwesomeIcon,
} from '@fortawesome/vue-fontawesome';

import { DEFAULT_VARIANT } from '@/UIKit/config';
import Btn from '@/UIKit/Btn/Btn.component.vue';
import {
  COMPONENT_NAME,
  DROPDOWN_CLASS_NAME,
  DROPDOWN_PLACEMENT,
} from './Dropdown.config';

export default {
  name: COMPONENT_NAME,
  props: {
    options: {
      type: Array,
    },
    searchable: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
    },
    placement: {
      type: String,
      default: 'left',
    },
    variant: {
      type: String,
      default: DEFAULT_VARIANT,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
    },
    icon: {
      type: String,
      default: '',
    },
    iconTrigger: {
      type: Boolean,
      default: false,
    },
    iconPlacement: {
      type: String,
      default: 'left',
    },
  },
  data() {
    return {
      open: false,
      searchKey: '',
      dropdownOptions: [],
    };
  },
  created() {
    document.body.addEventListener('click', this.onClickBody);
  },
  beforeDestroy() {
    document.body.removeEventListener('click', this.onClickBody);
  },
  components: {
    Btn,
    FontAwesomeIcon,
  },
  computed: {
    dropdownClass() {
      return {
        [DROPDOWN_CLASS_NAME]: true,
        [`${DROPDOWN_CLASS_NAME}--left`]: this.placement === DROPDOWN_PLACEMENT.LEFT,
        [`${DROPDOWN_CLASS_NAME}--center`]: this.placement === DROPDOWN_PLACEMENT.CENTER,
        [`${DROPDOWN_CLASS_NAME}--right`]: this.placement === DROPDOWN_PLACEMENT.RIGHT,
        [`${DROPDOWN_CLASS_NAME}--open`]: this.open,
      };
    },
    dropdownGroupClass() {
      return {
        [`${DROPDOWN_CLASS_NAME}__group`]: true,
        [`${DROPDOWN_CLASS_NAME}__group--${this.iconPlacement}`]: true,
        'eduk-u-m-1': true,
      };
    },
    dropdownWithIconClass() {
      return {
        [`${DROPDOWN_CLASS_NAME}__icon`]: true,
        [`${DROPDOWN_CLASS_NAME}__icon--${this.iconPlacement}`]: true,
        'eduk-u-m-1': true,
      };
    },
    emptyOptions() {
      return {
        [`${DROPDOWN_CLASS_NAME}__empty--active`]: this.dropdownOptions.length === 0,
      };
    },
  },
  methods: {
    onInputChange() {
      this.searchKey = this.$refs.search.value;
      this.filterOptions();
    },
    toggle(ev) {
      ev.stopImmediatePropagation();
      if (!this.open) {
        this.searchKey = '';
        this.$refs.dropdownOptions.scrollTop = 0;
      }

      this.filterOptions();
      this.open = !this.open;
    },
    onSelectOption(ev, option) {
      ev.preventDefault();
      this.$emit('optionClicked', option);
      this.open = false;
    },
    filterOptions() {
      if (this.searchKey) {
        this.dropdownOptions = this.options.filter(option => option.name
          .toLowerCase()
          .includes(this.searchKey.toLowerCase()));
      } else {
        this.dropdownOptions = this.options;
      }
    },
    stopOptionsPropagation(ev) {
      ev.stopImmediatePropagation();
    },
    onAction(ev) {
      this.$emit('click', ev);
    },
    onClickBody() {
      this.open = false;
    },
  },
};
</script>
