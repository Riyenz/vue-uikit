<template>
  <div class="grid-container">
    <h3 class="eduk-text-muted">Container</h3>
    <Container class="grid-container__sample"></Container>
    <pre class="code">
      <label>Vue</label>
      <code class="language-html">
        &#x3C;Container&#x3E;
          //do something
        &#x3C;/Container&#x3E;
      </code>
    </pre>
    <pre class="code">
      <label>Vanilla</label>
      <code class="language-html">
        &#x3C;div class=&#x22;eduk-container&#x22;&#x3E;
          //do something
        &#x3C;/div&#x3E;
      </code>
    </pre>
  </div>
</template>

<script>
import Container from '@/UIKit/Grid/Container.vue';

export default {
  name: 'GridContainer',
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
