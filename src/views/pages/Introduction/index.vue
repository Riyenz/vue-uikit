<template>
  <div class="wrapper">
    <h1 class="eduk-h1 eduk-u-mb-3">Edukasyon UIKit Components Design System </h1>
    <h2 class="eduk-h2 eduk-u-mb-3">Objective</h2>
    <p class="eduk-text eduk-u-text-semi-bold eduk-u-mb-3">
      At Edukasyon, we want to create a seamless experience for our users.
      We solve challenging interactions and then apply the solution
      consistently across our platform — making sure people only have
      to learn them once.
    </p>
    <p class="eduk-text eduk-u-text-semi-bold eduk-u-mb-3">
      Our guidelines have space for flexibility, and are continuously
      revised and expanded to suit changing platform needs.
    </p>
    <p class="eduk-text eduk-u-text-semi-bold eduk-u-mb-3">Our libraries contain the latest foundations, components, and
      patterns for designing and building Edukasyon products and app
      for the web.
    </p>
    <h2 class="eduk-h2 eduk-u-mb-3">UIKit</h2>
    <p class="eduk-text eduk-u-text-semi-bold eduk-u-mb-3">
      The UIKit framework houses the reusable components that are used
      within the whole platform. This allows us to seamlessly create
      pages using “lego blocks” instead of rewriting elements from scratch.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Introduction',
};
</script>

<style lang="scss" scoped>
@import "scss/variables";
@import "scss/mixins/_breakpoints";

.wrapper {
  padding: 25px 35px;
  width: calc(100% - 325px);

  [class^="eduk-"] {
    margin-top: 0;
  }

  .eduk-text {
    letter-spacing: 0;
  }
}

@include media-breakpoint-down(lg) {
  .wrapper {
    width: auto;
  }
}
</style>
