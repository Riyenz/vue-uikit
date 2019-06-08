<template>
  <div class="grid-container-fluid">
    <h3 class="eduk-text-muted eduk-mt-5">Container Fluid</h3>
    <Container fluid class="grid-container__sample"></Container>
    <pre class="code">
      <label>Vue</label>
      <code class="language-html">
        &#x3C;Container fluid&#x3E;
          //do something
        &#x3C;/Container&#x3E;
      </code>
    </pre>
    <pre class="code">
      <label>Vanilla</label>
      <code class="language-html">
        &#x3C;div class=&#x22;eduk-container-fluid&#x22;&#x3E;
          //do something
        &#x3C;/div&#x3E;
      </code>
    </pre>
  </div>
</template>

<script>
import Container from '@/UIKit/Grid/Container.vue';

export default {
  name: 'GridContainerFluid',
  components: {
    Container,
  },
};
</script>

<style lang="scss" scoped>
.grid-container {
  &__sample {
    border: 1px dotted black;
    height: 50px;
  }
}
</style>
