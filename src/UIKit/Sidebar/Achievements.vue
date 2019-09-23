<template>
  <div :class="achievementsClassName">
    <div
      class="eduk-sidebar-achievements__item"
      v-for="(item, index) in achievements"
      :key="index"
      :data-tooltip="item.tooltip"
    >
      <img
        class="eduk-sidebar-achievements__img"
        :src="item.icon"
        :alt="item.tooltip"
      />
    </div>
  </div>
</template>

<script>
import { SIDEBAR_ACHIEVEMENTS_CLASS_NAME } from './Sidebar.config';

export default {
  name: 'SidebarAchievements',
  props: {
    achievements: {
      type: Array,
    },
  },
  computed: {
    achievementsClassName() {
      return { [SIDEBAR_ACHIEVEMENTS_CLASS_NAME]: true };
    },
  },
};
</script>
