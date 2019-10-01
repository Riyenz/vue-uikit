<template>
  <div class="bottom-nav">
    <nav class="bottom-nav__container">
      <router-link
        v-if="!!prev.name"
        class="bottom-nav__link bottom-nav__link--prev"
        :to="`/${prev.path}`"
      >
        <small>previous</small>
        <span>{{prev.displayName}}</span>
      </router-link>
      <router-link
        v-if="!!next.name"
        class="bottom-nav__link bottom-nav__link--next"
        :to="`/${next.path}`"
      >
        <small>Next</small>
        <span>{{next.displayName}}</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'BottomNav',
  props: {
    next: Object,
    prev: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "scss/variables";
@import "scss/mixins/_breakpoints";

.bottom-nav {
  padding: 25px 35px;

  &__container {
    padding: 30px;
    background-color: $gray-100;
    display: flex;
  }

  &__link {
    cursor: pointer;
    outline: none;
    text-decoration: none;
    color: inherit;
  }

  &__link--prev {
    text-align: left;
    justify-self: flex-start;
  }

  &__link--next {
    justify-self: flex-end;
    text-align: right;
    margin-left: auto;
  }

  &__link > * {
    font-size: 16px;
    display: block;
    font-weight: 600;
  }

  &__link > small {
    text-transform: uppercase;
    letter-spacing: 1.6px;
    color: $gray-500;
  }
}

@include media-breakpoint-down(sm) {
  .bottom-nav__container {
    padding: 20px;
  }
}
</style>
