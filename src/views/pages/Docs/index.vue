<template>
  <div class="main">
    <Nav @toggle="toggleMobileSidebar" />
    <div class="content">
      <aside :class="contentSidebarClass" @click="toggleMobileSidebar">
        <Sidebar
          :currentRoute="currentRoute"
          :open="mblSidebarOpen"
        />
      </aside>
      <div class="content__body">
        <router-view
          :selectedTab="selectedTab"
          @tabChange="tabChange"
        />
        <BottomNav
          :next="next"
          :prev="prev"
        />
      </div>
    </div>
  </div>
</template>

<script>
import demoRoutes from '@/demoRoutes';
import Nav from './components/Nav.vue';
import Sidebar from './components/Sidebar.vue';
import BottomNav from './components/BottomNav.vue';

export default {
  name: 'Docs',
  data() {
    return {
      next: {},
      prev: {},
      currentRoute: null,
      selectedTab: localStorage.getItem('eduk-selected-tab') || 'Develop',
      mblSidebarOpen: false,
    };
  },
  components: {
    Nav,
    Sidebar,
    BottomNav,
  },
  created() {
    this.applyNavigations();
  },
  updated() {
    this.applyNavigations();
  },
  computed: {
    contentSidebarClass() {
      return {
        content__sidebar: true,
        'content__sidebar--open': this.mblSidebarOpen,
      };
    },
  },
  methods: {
    applyNavigations() {
      if (this.$route.name !== this.currentRoute) {
        const index = demoRoutes.findIndex(route => route.name === this.$route.name);

        this.currentRoute = this.$route.name;
        this.next = demoRoutes[index + 1] || {};
        this.prev = demoRoutes[index - 1] || {};
      }
    },
    tabChange(tabIndex) {
      this.selectedTab = tabIndex;
      localStorage.setItem('eduk-selected-tab', tabIndex);
    },
    toggleMobileSidebar() {
      this.mblSidebarOpen = !this.mblSidebarOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "scss/variables";
@import "scss/mixins/_breakpoints";

.main {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  display: flex;
  flex: 1;
  height: calc(100% - 64px);
  overflow: hidden;

  &__sidebar {
    width: 310px;
    position: relative;
    height: 100%;
  }

  &__body {
    flex: 1;
    background-color: $white;
    overflow: auto;
    height: 100%;
  }
}

@include media-breakpoint-down(lg) {
  .content {
    &__sidebar {
      overflow: auto;
      background-color: rgba(0, 0, 0, 0.15);
      position: fixed;
      z-index: 1001;
      left: 0;
      right: 0;
      top: 0;
      width: auto;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.15s, visibility 0.15s;
      will-change: opacity, visibility;
    }

    &__sidebar--open {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
