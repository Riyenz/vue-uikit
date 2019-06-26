<template>
  <div class="wrapper">
    <h3>Button</h3>
    <div class="group group--active">
      <a class="group__name">Types</a>
      <ul class="group-list">
        <li class="group-list__item">
          <a>Contained (Highest Emphasis)</a>
        </li>
        <li class="group-list__item">
          <a>Outlined (Medium Emphasis)</a>
        </li>
        <li class="group-list__item">
          <a>Text link (Lowest Emphasis)</a>
        </li>
        <li class="group-list__item">
          <a>Icon</a>
        </li>
      </ul>
    </div>
    <div class="group">
      <a class="group__name">Variations</a>
      <ul class="group-list">
        <li class="group-list__item">
          <a>test</a>
        </li>
      </ul>
    </div>
    <div class="group">
      <a class="group__name">Styles</a>
      <ul class="group-list">
        <li class="group-list__item">
          <a>test</a>
        </li>
      </ul>
    </div>
    <div class="group">
      <a class="group__name">Sizes</a>
      <ul class="group-list">
        <li class="group-list__item">
          <a>test</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Quicklinks',
};
</script>

<style lang="scss" scoped>
@import "scss/variables";

.wrapper {
  padding: 70px 25px;

  > h3 {
    font-size: 20px;
    margin: 0 0 15px;
  }
}

.group-list {
  list-style-type: none;
  margin: 0;
  padding-left: 20px;
  display: none;

  &__item {
    margin-bottom: 5px;
    font-size: 16px;
  }
}

.group {
  color: $gray-500;
  margin-bottom: 15px;

  &__name {
    font-size: 18px;
    font-weight: bold;
    display: inline-block;
    margin-bottom: 10px;
    cursor: pointer;
  }

  &--active > &__name {
    color: $secondary;
  }

  &--active > .group-list {
    display: block;
  }
}
</style>
