<template>
  <div :class="sidebarMenuClass">
    <div v-for="(item, index) in menus" :key="index">
      <a
        v-if="item.type === 'link'"
        @click="SidebarService.selectPath(item.href)"
        :class="{
          'eduk-sidebar-menu__item': true,
          'eduk-sidebar-menu__item--active': $route.path === item.href,
        }"
      >
        <font-awesome-icon :icon="item.icon" />
        <span class="eduk-sidebar-menu__item-text">{{item.name}}</span>
      </a>
      <List
        v-else
        :menu="item"
        :collapsed="collapsed"
      />
    </div>
  </div>
</template>

<script>
import List from './List.vue';
import { SIDEBAR_MENU_CLASS_NAME } from './Sidebar.config';
import SidebarService from './Sidebar.service';

export default {
  name: 'SidebarMenu',
  props: {
    menus: {
      type: Array,
      default: () => {
        return [];
      },
    },
    collapsed: Boolean,
  },
  computed: {
    sidebarMenuClass() {
      return {
        [SIDEBAR_MENU_CLASS_NAME]: true,
      };
    },
  },
  data() {
    return {
      SidebarService,
    };
  },
  components: {
    List,
  },
};
</script>
