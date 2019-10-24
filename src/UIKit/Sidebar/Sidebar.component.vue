<template>
  <div :class="sidebarClass">
    <div class="eduk-sidebar__main">
      <Profile
        v-if="user"
        :user="user"
        :profileProgress="profileProgress"
        :collapsed="collapsed"
      />
      <Achievements
        v-if="achievements.length > 0 && !collapsed"
        :achievements="achievements"
      />
      <Menu :menus="menus" :collapsed="collapsed" @change="href => $emit('change', href)"/>
    </div>
    <Footer
      :footerLinks="footerLinks"
      :footerLinksSecondary="footerLinksSecondary"
      v-if="!collapsed"
    />
  </div>
</template>

<script>
import Profile from './Profile.vue';
import Menu from './Menu.vue';
import Achievements from './Achievements.vue';
import Footer from './Footer.vue';
import {
  SIDEBAR_CLASS_NAME,
  SIDEBAR_COLLAPSED_CLASS_NAME,
} from './Sidebar.config';
import SidebarService from './Sidebar.service';

export default {
  name: 'Sidebar',
  props: {
    user: {
      type: Object,
    },
    collapsed: {
      type: Boolean,
      default: false,
    },
    profileProgress: {
      type: Object,
      validator(value) {
        if (
          Object.prototype.hasOwnProperty.call(value, 'level')
          && Object.prototype.hasOwnProperty.call(value, 'progress')
        ) {
          return true;
        }

        return new Error('Invalid profileProgress object properties');
      },
    },
    achievements: {
      type: Array,
      default() {
        return [];
      },
      validator(value) {
        const invalidItems = value.filter((obj) => {
          return !Object.prototype.hasOwnProperty.call(obj, 'icon') && !Object.prototype.hasOwnProperty.call(obj, 'tooltip');
        });

        if (invalidItems.length > 0) {
          return new Error('Invalid achivements object properties');
        }

        return true;
      },
    },
    menus: {
      type: Array,
      default: () => {
        return [];
      },
    },
    footerLinks: {
      type: Array,
      default() {
        return [];
      },
      validator(value) {
        const invalidItems = value.filter((obj) => {
          return !Object.prototype.hasOwnProperty.call(obj, 'name') && !Object.prototype.hasOwnProperty.call(obj, 'href');
        });

        if (invalidItems.length > 0) {
          return new Error('Invalid link object properties');
        }

        return true;
      },
    },
    footerLinksSecondary: {
      type: Array,
      default() {
        return [];
      },
      validator(value) {
        const invalidItems = value.filter((obj) => {
          return !Object.prototype.hasOwnProperty.call(obj, 'name') && !Object.prototype.hasOwnProperty.call(obj, 'href');
        });

        if (invalidItems.length > 0) {
          return new Error('Invalid link object properties');
        }

        return true;
      },
    },
  },
  data() {
    return {
      SidebarService,
    };
  },
  computed: {
    sidebarClass() {
      return {
        [SIDEBAR_CLASS_NAME]: true,
        [SIDEBAR_COLLAPSED_CLASS_NAME]: this.collapsed,
      };
    },
  },
  watch: {
    'SidebarService.selectedPath': {
      handler(path) {
        this.$emit('change', path);
        this.$router.push(path);
      },
    },
  },
  components: {
    Profile,
    Achievements,
    Menu,
    Footer,
  },
};
</script>
