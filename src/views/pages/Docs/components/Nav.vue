<template>
  <nav class="nav">
    <button class="nav__menu" @click="toggleSidebar">
      <font-awesome-icon icon="bars" />
    </button>
    <img src="@/assets/img/eduk-navbar-logo.png" alt="EdukasyonPH" class="nav__logo" />
  </nav>
</template>

<script>
export default {
  name: 'MainNav',
  methods: {
    toggleSidebar() {
      this.$emit('toggle');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "scss/variables";
@import "scss/mixins/_breakpoints";

.nav {
  padding: 16px 30px;
  box-shadow: 0 3px 5px 0 #dfe3e9;
  background: $white;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;

  &__logo {
    display: block;
  }

  &__menu {
    cursor: pointer;
    outline: none;
    background: transparent;
    border: none;
    font-size: 18px;
    display: none;
    position: absolute;
    top: 50%;
    left: 25px;
    transform: translate3d(0, -50%, 0);
  }
}

@include media-breakpoint-down(lg) {
  .nav {
    padding: 16px 20px;
    justify-content: center;

    &__menu {
      display: block;
    }
  }
}
</style>
