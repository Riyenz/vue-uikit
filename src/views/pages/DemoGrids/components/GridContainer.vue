<template>
  <div class="grid-container">
    <h3 class="eduk-h3 eduk-u-mb-3">Container</h3>
    <Preview wide>
      <template slot="example">
        <Container class="grid-container__sample"></Container>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &#x3C;Container&#x3E;
            //do something
          &#x3C;/Container&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &#x3C;div class=&#x22;eduk-container&#x22;&#x3E;
            //do something
          &#x3C;/div&#x3E;
        </code>
      </template>
    </Preview>
  </div>
</template>

<script>
import Preview from '@/views/components/Preview/index.vue';
import Container from '@/UIKit/Grid/Container.component.vue';

export default {
  name: 'GridContainer',
  components: {
    Preview,
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
