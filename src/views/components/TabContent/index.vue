<template>
  <div>
    <Tabs
      @selectTab="selectTab"
      :selectedTab="selected || selectedTab"
      :hasMobile="!!slots.mobile"
      :slots="slots"
      :padded="padded"
    />
    <div class="content">
      <div class="content__main">
        <div :class="paneClasses">
          <div
            v-for="(value, name) in slots"
            class="panes__item"
            :key="name"
            :class="{'panes__item--active': (selected || selectedTab) === name}"
          >
            <slot :name="name"></slot>
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
      type: String,
    },
    padded: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    const newSlots = { ...this.$slots };

    delete newSlots.quicklinks;

    return {
      selectedTab: Object.keys(newSlots)[0],
      slots: newSlots,
    };
  },
  components: {
    Tabs,
  },
  computed: {
    paneClasses() {
      return {
        panes: true,
        'panes--padded': this.padded,
      };
    },
  },
  methods: {
    selectTab(tabIndex) {
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
    padding: 25px 0;
  }

  &__item--active {
    display: block;
  }

  &--padded {
    padding: 25px 35px;
  }
}

/deep/ {
  .eduk-h5 {
    letter-spacing: 1.6px;
  }

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

  code.highlighter {
    color: #e83e8c;
    background: #f1f1f1;
    padding: 4px 6px;
    border-radius: 3px;
  }
}
</style>
