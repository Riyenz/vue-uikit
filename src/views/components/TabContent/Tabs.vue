<template>
  <ul class="tabs">
    <li class="tabs__item" :class="{'tabs__item--active': selectedTab === 0}">
      <a @click="() => selectTab(0)">Design</a>
    </li>
    <li class="tabs__item" :class="{'tabs__item--active': selectedTab === 1}">
      <a @click="() => selectTab(1)">Develop</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    selectedTab: Number,
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
  padding: 0 10px;
  border-bottom: solid 1px #e8ebef;

  &__item {
    padding: 0 20px;
    color: #939393;
    transition: color 0.15s;
  }

  &__item > a {
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    padding: 15px 1px 11px;
    display: block;
    border-bottom: 4px solid transparent;
    transition: border-color 0.15s;
  }

  &__item--active {
    color: #0e9be4;
  }

  &__item--active > a {
    border-color: #0e9be4;
  }
}
</style>
