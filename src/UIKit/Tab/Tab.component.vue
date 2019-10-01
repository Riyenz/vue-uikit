<template>
  <div :class="tabClass">
    <nav :class="tabNavClass">
      <div
        v-for="(item, index) in items"
        :class="navItemClass(item)"
        :key="index"
      >
        <a
          class="eduk-tab-nav__link"
          @click="(e) => selectTab(e, item)"
        >{{typeof item === 'string' ? item : item.name}}</a>
      </div>
    </nav>
    <div
      v-for="(value, name) in $slots"
      :key="name"
      :class="paneClass(name)"
      :data-slot="name"
    >
      <div
        v-if="paneLoading(name)"
        class="eduk-tab__loading"
      >
        <font-awesome-icon
          icon="spinner"
          spin
          class="eduk-tab__loading-icon"
        />
        <p class="eduk-u-m-0 eduk-u-mt-2 eduk-tab__loading-text">Loading</p>
      </div>
      <slot
        :name="name"
        v-else
      ></slot>
    </div>
  </div>
</template>

<script>
import {
  TAB_CLASS_NAME,
  TAB_NAV_CLASS_NAME,
  TAB_NAV_ITEM_CLASS_NAME,
  TAB_NAV_ITEM_ACTIVE_CLASS_NAME,
  TAB_PANE_CLASS_NAME,
  TAB_PANE_ACTIVE_CLASS_NAME,
} from './Tab.config';

export default {
  name: 'Tab',
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
    defaultSelected: {
      type: String,
    },
  },
  data() {
    return {
      selected: this.defaultSelected || ((this.items[0].name || this.items[0]) || ''),
    };
  },
  computed: {
    tabClass() {
      return {
        [TAB_CLASS_NAME]: true,
      };
    },
    tabNavClass() {
      return {
        [TAB_NAV_CLASS_NAME]: true,
      };
    },
  },
  methods: {
    navItemClass(item) {
      return {
        [TAB_NAV_ITEM_CLASS_NAME]: true,
        [TAB_NAV_ITEM_ACTIVE_CLASS_NAME]: (item.name || item) === this.selected,
      };
    },
    paneClass(item) {
      return {
        [TAB_PANE_CLASS_NAME]: true,
        [TAB_PANE_ACTIVE_CLASS_NAME]: (item.name || item) === this.selected,
      };
    },
    selectTab(event, item) {
      event.preventDefault();

      this.selected = (item.name || item);
      this.$emit('change', this.selected);
    },
    paneLoading(name) {
      return !!this.items.find((item) => {
        if (typeof item === 'object') {
          return item.name === name && item.loading;
        }
        return false;
      });
    },
  },
};
</script>
