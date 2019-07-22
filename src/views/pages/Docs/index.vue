<template>
  <div class="main">
    <Nav />
    <div class="content">
      <aside class="content__sidebar">
        <Sidebar :currentRoute="currentRoute" />
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
      selectedTab: +localStorage.getItem('eduk-selected-tab') || 0,
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
  },
};
</script>

<style lang="scss" scoped>
@import "scss/variables";

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
    box-shadow: 0 2px 5px 0 rgba(116, 116, 116, 0.5);
    background-color: $gray-100;
    position: relative;
    height: 100%;
  }

  &__body {
    flex: 1;
    background-color: $white;
    overflow: auto;
    height: 100%;
  }

  &__quicklinks {
    width: 310px;
    background-color: $white;
  }
}
</style>
