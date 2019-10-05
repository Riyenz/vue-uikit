<template>
  <div
    :class="dropdownClass"
  >
    <a
      v-if="!!icon && !iconTrigger && !title"
      @click="toggle"
      :class="dropdownIconClass"
      class="eduk-dropdown__trigger"
    >
      <font-awesome-icon :icon="icon" class="eduk-dropdown__icon" />
    </a>
    <Btn
      v-else-if="!!icon && !iconTrigger"
      @click="toggle"
      :variant="variant"
      :outline="outline"
      :size="size"
      :class="dropdownWithIconClass"
      class="eduk-dropdown__trigger"
    >
      <span v-if="!!title" class="eduk-dropdown__title">{{title}}</span>
      <span><font-awesome-icon :icon="icon" class="eduk-dropdown__icon" /></span>
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
      >
        <span class="eduk-dropdown__title">{{title}}</span>
      </Btn>
      <Btn
        @click="toggle"
        :variant="variant"
        :outline="outline"
        :size="size"
        class="eduk-dropdown__trigger"
      >
        <font-awesome-icon :icon="icon" class="eduk-dropdown__icon" />
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
          <font-awesome-icon icon="search" />
        </span>
      </li>
      <li
        v-for="option in dropdownOptions"
        :key="option.id"
        class="eduk-dropdown__option"
      >
        <a v-if="!!option.icon" @click="(ev) => onSelectOption(ev, option)">
          <font-awesome-icon :icon="option.icon" />
          <span>{{option.name}}</span>
        </a>
        <a v-else @click="(ev) => onSelectOption(ev, option)">{{option.name}}</a>
      </li>
      <li :class="emptyOptions">
        No results found.
      </li>
    </ul>
  </div>
</template>

<script>
import { DEFAULT_VARIANT } from '@/UIKit/config';
import Btn from '@/UIKit/Btn/Btn.component.vue';
import {
  COMPONENT_NAME,
  DROPDOWN_CLASS_NAME,
  DROPDOWN_OPEN_CLASS_NAME,
  DROPDOWN_ALIGN_LEFT_CLASS_NAME,
  DROPDOWN_ALIGN_CENTER_CLASS_NAME,
  DROPDOWN_ALIGN_RIGHT_CLASS_NAME,
  DROPDOWN_GROUP_CLASS_NAME,
  DROPDOWN_ICON_CLASS_NAME,
  DROPDOWN_ICON_ONLY_CLASS_NAME,
  DROPDOWN_EMPTY_CLASS_NAME,
  DROPDOWN_EMPTY_ACTIVE_CLASS_NAME,
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
      targeted: false,
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
  },
  computed: {
    dropdownClass() {
      return {
        [DROPDOWN_CLASS_NAME]: true,
        [DROPDOWN_ALIGN_LEFT_CLASS_NAME]: this.placement === DROPDOWN_PLACEMENT.LEFT,
        [DROPDOWN_ALIGN_CENTER_CLASS_NAME]: this.placement === DROPDOWN_PLACEMENT.CENTER,
        [DROPDOWN_ALIGN_RIGHT_CLASS_NAME]: this.placement === DROPDOWN_PLACEMENT.RIGHT,
        [DROPDOWN_OPEN_CLASS_NAME]: this.open,
      };
    },
    dropdownGroupClass() {
      return {
        [DROPDOWN_GROUP_CLASS_NAME]: true,
        [`${DROPDOWN_GROUP_CLASS_NAME}--${this.iconPlacement}`]: true,
      };
    },
    dropdownIconClass() {
      return {
        [DROPDOWN_ICON_ONLY_CLASS_NAME]: true,
      };
    },
    dropdownWithIconClass() {
      return {
        [DROPDOWN_ICON_CLASS_NAME]: true,
        [`${DROPDOWN_ICON_CLASS_NAME}--${this.iconPlacement}`]: true,
      };
    },
    emptyOptions() {
      return {
        [DROPDOWN_EMPTY_CLASS_NAME]: true,
        [DROPDOWN_EMPTY_ACTIVE_CLASS_NAME]: this.dropdownOptions.length === 0,
      };
    },
  },
  methods: {
    onInputChange() {
      this.searchKey = this.$refs.search.value;
      this.filterOptions();
    },
    toggle() {
      this.targeted = true;

      if (!this.open) {
        this.searchKey = '';
        this.$refs.dropdownOptions.scrollTop = 0;
      }

      this.filterOptions();
      this.open = !this.open;
    },
    onSelectOption(ev, option) {
      ev.preventDefault();
      this.$emit('select', option);
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
      this.$emit('action', ev);
    },
    onClickBody() {
      if (this.targeted) this.targeted = false;
      else this.open = false;
    },
  },
};
</script>
