<template>
  <div :class="sidebarMenuClass">
    <div v-for="(item, index) in menus" :key="index">
      <router-link
        v-if="item.type === 'link'"
        :to="item.href"
        :class="{
          'eduk-sidebar-menu__item': true,
          'eduk-sidebar-menu__item--active': $route.path === item.href,
        }"
      >
        <font-awesome-icon :icon="item.icon" />
        <span class="eduk-sidebar-menu__item-text">{{item.name}}</span>
      </router-link>
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
  components: {
    List,
  },
};
</script>
