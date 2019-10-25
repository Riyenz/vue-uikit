<template>
  <div :class="sidebarProfileClass">
    <div class="eduk-sidebar-profile__img-wrapper">
      <img
        class="eduk-sidebar-profile__img"
        :src="user.picture || avatarPlaceholder"
        alt="Some person"
      />
      <span
        class="eduk-sidebar-profile__level"
        v-if="!collapsed && profileProgress"
      >
        {{profileProgress.level}}
        <svg
          class="eduk-sidebar-profile__ring"
          :width="width"
          :height="width">
          <circle
            class="eduk-sidebar-profile__circle eduk-sidebar-profile__circle--clone"
            stroke="red"
            fill="transparent"
            :cx="c"
            :cy="c"
            :stroke-width="strokeWidth"
            :r="radius"
          />
          <circle
            class="eduk-sidebar-profile__circle"
            stroke="red"
            fill="transparent"
            :cx="c"
            :cy="c"
            :stroke-width="strokeWidth"
            :r="radius"
            :stroke-dasharray="dashArray"
            :stroke-dashoffset="dashOffset"
          />
        </svg>
      </span>
    </div>
    <div :class="dropdownClass" v-if="!collapsed">
      <button
        class="eduk-sidebar-dropdown__trigger"
        @click="toggleDropdown"
      >
        {{user.role || user.name}} <font-awesome-icon icon="caret-down" />
      </button>
      <div class="eduk-sidebar-dropdown__options" @click="toggleDropdown">
        <router-link :to="user.profileUrl" class="eduk-sidebar-account">
          <img v-if="!!user.picture" :src="user.picture" :alt="user.name" />
          <span class="eduk-sidebar-account__placeholder" v-else>
            {{user.initials}}
          </span>
          <span class="eduk-sidebar-account__desc">
            <h6 class="eduk-h6">{{user.name || '-'}}</h6>
            <p class="eduk-p" v-if="user.role">{{user.role}}</p>
          </span>
        </router-link>
        <div class="eduk-sidebar-dropdown__manage" v-if="!!user.settings">
          <a v-if="user.settings.type === 'anchor'" :href="user.settings.url">
            Manage Account
          </a>
          <router-link v-else-if="user.settings.type === 'router'" :to="user.settings.url">
            Manage Account
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import avatarPlaceholder from '@/assets/img/avatar-placeholder-male.svg';
import { SIDEBAR_PROFILE_CLASS_NAME } from './Sidebar.config';

export default {
  name: 'SidebarProfile',
  props: {
    user: {
      type: Object,
    },
    profileProgress: {
      type: Object,
    },
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    const width = 37;
    const strokeWidth = 3;
    const radius = (width / 2) - (strokeWidth * 2);
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (this.profileProgress ? this.profileProgress.progress : 0) / 100 * circumference;

    return {
      avatarPlaceholder,
      width,
      c: width / 2,
      strokeWidth,
      radius,
      dashArray: `${circumference} ${circumference}`,
      dashOffset: offset,
      dropdownOpen: false,
      dropdownTargeted: false,
    };
  },
  created() {
    document.body.addEventListener('click', this.onClickBody);
  },
  beforeDestroy() {
    document.body.removeEventListener('click', this.onClickBody);
  },
  computed: {
    sidebarProfileClass() {
      return { [SIDEBAR_PROFILE_CLASS_NAME]: true };
    },
    dropdownClass() {
      return {
        'eduk-sidebar-dropdown': true,
        'eduk-sidebar-dropdown--open': this.dropdownOpen,
      };
    },
  },
  methods: {
    toggleDropdown(ev) {
      ev.stopImmediatePropagation();

      if (!this.dropdownOpen) this.dropdownTargeted = true;

      this.dropdownOpen = !this.dropdownOpen;
    },
    onClickBody() {
      if (this.dropdownTargeted) {
        this.dropdownTargeted = false;
        this.dropdownOpen = false;
      }
    },
  },
};
</script>
