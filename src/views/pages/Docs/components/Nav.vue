<template>
  <nav class="nav">
    <button class="nav__menu">
      <font-awesome-icon icon="bars" />
    </button>
    <img src="@/assets/img/eduk-navbar-logo.png" alt="EdukasyonPH" class="nav__logo" />
  </nav>
</template>

<script>
export default {
  name: 'MainNav',
};
</script>

<style lang="scss" scoped>
@import "scss/variables";

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
    outline: none;
    background: transparent;
    border: none;
    margin-right: 40px;
    font-size: 20px;
    color: #bfc5d1;
  }
}
</style>
