<template>
  <div :class="sidebarListClass">
    <a class="eduk-sidebar-list__item" @click="toggle">
      <font-awesome-icon :icon="menu.icon" />
      <span class="eduk-sidebar-list__item-text">{{menu.name}}</span>
      <font-awesome-icon icon="caret-down" />
    </a>
    <div
      class="eduk-sidebar-list__options"
      :style="optionsHeight"
    >
      <div ref="optionsWrapper">
        <a
          v-for="(item, index) in menu.items"
          :class="{
            'eduk-sidebar-list__sub-item': true,
            'eduk-sidebar-list__sub-item--active': $route.path === item.href,
          }"
          :key="index"
          @click="SidebarService.selectPath(item.href)"
        >
          {{item.name}}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { SIDEBAR_LIST_CLASS_NAME } from './Sidebar.config';
import SidebarService from './Sidebar.service';

export default {
  name: 'SidebarList',
  props: {
    menu: {
      type: Object,
    },
    collapsed: Boolean,
  },
  data() {
    return {
      open: false,
      SidebarService,
    };
  },
  computed: {
    sidebarListClass() {
      return {
        [SIDEBAR_LIST_CLASS_NAME]: true,
        [`${SIDEBAR_LIST_CLASS_NAME}--active`]: this.open,
      };
    },
    optionsHeight() {
      if (this.collapsed) {
        return {};
      }

      return {
        height: this.open ? `${this.$refs.optionsWrapper.offsetHeight}px` : 0,
      };
    },
  },
  methods: {
    toggle(ev) {
      ev.preventDefault();
      this.open = !this.open;
    },
  },
};
</script>
