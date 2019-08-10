<template>
  <div>
    <Tabs
      @selectTab="selectTab"
      :selectedTab="selected || selectedTab"
      :hasMobile="!!$slots.mobile"
    />
    <div class="content">
      <div class="content__main">
        <div class="panes">
          <div class="panes__item" :class="{'panes__item--active': (selected || selectedTab) === 0}">
            <slot name="design"></slot>
          </div>
          <div class="panes__item" :class="{'panes__item--active': (selected || selectedTab) === 1}">
            <slot name="code"></slot>
          </div>
          <div class="panes__item" :class="{'panes__item--active': (selected || selectedTab) === 2}">
            <slot name="mobile"></slot>
          </div>
        </div>
      </div>
      <div class="content__quicklinks" v-if="$slots.quicklinks">
        <slot name="quicklinks"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from './Tabs.vue';

export default {
  name: 'TabContent',
  props: {
    selected: {
      type: Number,
    },
  },
  data() {
    return { selectedTab: 0 };
  },
  components: {
    Tabs,
  },
  methods: {
    selectTab(tabIndex = 0) {
      this.selectedTab = tabIndex;
      this.$emit('change', tabIndex);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "scss/variables";

.content {
  display: flex;

  &__main {
    flex: 1;
  }

  &__quicklinks {
    width: 325px;
  }
}

.panes {
  display: block;
  color: $tertiary;

  &__item {
    display: none;
    padding: 25px 35px;
  }

  &__item--active {
    display: block;
  }

  /deep/ {
    .eduk-text {
      letter-spacing: 0;
    }

    .eduk-text a {
      color: $primary;
    }

    .well {
      background: $gray-100;
      padding: 30px;
      border-radius: 5px;
      max-width: 60vw;
      min-width: 400px;
      margin: 0 auto 25px;
    }
  }
}
</style>
