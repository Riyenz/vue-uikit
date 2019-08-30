<template>
  <ul :class="tabClasses">
    <li
      v-for="(value, name) in slots"
      :key="name"
      class="tabs__item"
      :class="{'tabs__item--active': selectedTab === name}"
    >
      <a @click="() => selectTab(name)">{{name}}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    selectedTab: String,
    hasMobile: Boolean,
    slots: {
      type: Object,
    },
    padded: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    tabClasses() {
      return {
        tabs: true,
        'tabs--padded': this.padded,
      };
    },
  },
  methods: {
    selectTab(index) {
      this.$emit('selectTab', index);
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  list-style-type: none;
  margin: 0;
  display: flex;
  padding: 0;
  border-bottom: solid 1px #e8ebef;

  &__item {
    padding: 0;
    color: #939393;
    transition: color 0.15s;
  }

  &__item > a {
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    padding: 15px 15px 11px;
    display: block;
    border-bottom: 4px solid transparent;
    transition: border-color 0.15s;
    text-transform: capitalize;
  }

  &__item--active {
    color: #0e9be4;
  }

  &__item--active > a {
    border-color: #0e9be4;
  }

  &--padded {
    padding: 0 10px;
  }

  &--padded &__item {
    padding: 0 20px;
  }

  &--padded &__item > a {
    padding: 15px 1px 11px;
  }
}
</style>
