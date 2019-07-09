<template>
  <div class="grid-columns">
    <h3 class="eduk-h3 eduk-u-mb-3">Columns</h3>
    <Preview wide>
      <template slot="example">
        <Container fluid>
          <Row>
            <Column class="grid-columns__sample">
              default
            </Column>
          </Row>
          <Row>
            <Column class="grid-columns__sample" :cols="6">
              cols 6
            </Column>
            <Column class="grid-columns__sample" :cols="6">
              cols 6
            </Column>
          </Row>
          <Row>
            <Column class="grid-columns__sample" :cols="3">
              cols 3
            </Column>
            <Column class="grid-columns__sample" :cols="4" :offset="1">
              cols 4, offset 1
            </Column>
            <Column class="grid-columns__sample" :cols="3" :offset="1">
              cols 3, offset 1
            </Column>
          </Row>
        </Container>
      </template>
      <template slot="vue-code">
        <code class="language-html">
&#x3C;Container fluid&#x3E;
  &#x3C;Row&#x3E;
    &#x3C;Column&#x3E;
      default
    &#x3C;/Column&#x3E;
  &#x3C;/Row&#x3E;
  &#x3C;Row&#x3E;
    &#x3C;Column :cols=&#x22;6&#x22;&#x3E;
      cols 6
    &#x3C;/Column&#x3E;
    &#x3C;Column :cols=&#x22;6&#x22;&#x3E;
      cols 6
    &#x3C;/Column&#x3E;
  &#x3C;/Row&#x3E;
  &#x3C;Row&#x3E;
    &#x3C;Column :cols=&#x22;3&#x22;&#x3E;
      cols 3
    &#x3C;/Column&#x3E;
    &#x3C;Column :cols=&#x22;4&#x22; :offset=&#x22;1&#x22;&#x3E;
      cols 4, offset 1
    &#x3C;/Column&#x3E;
    &#x3C;Column :cols=&#x22;3&#x22; :offset=&#x22;1&#x22;&#x3E;
      cols 3, offset 1
    &#x3C;/Column&#x3E;
  &#x3C;/Row&#x3E;
&#x3C;/Container&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
&#x3C;div class=&#x22;eduk-container-fluid&#x22;&#x3E;
  &#x3C;div class=&#x22;eduk-row&#x22;&#x3E;
    &#x3C;div class=&#x22;eduk-col&#x22;&#x3E;
      default
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;eduk-row&#x22;&#x3E;
    &#x3C;div class=&#x22;eduk-col-6&#x22;&#x3E;
      cols 6
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;eduk-col-6&#x22;&#x3E;
      cols 6
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;eduk-row&#x22;&#x3E;
    &#x3C;div class=&#x22;eduk-col-3&#x22;&#x3E;
      cols 3
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;eduk-col-4 eduk-offset-1&#x22;&#x3E;
      cols 4, offset 1
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;eduk-col-3 eduk-offset-1&#x22;&#x3E;
      cols 3, offset 1
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
        </code>
      </template>
    </Preview>
  </div>
</template>

<script>
import Preview from '@/views/components/Preview/index.vue';
import Container from '@/UIKit/Grid/Container.component.vue';
import Row from '@/UIKit/Grid/Row.component.vue';
import Column from '@/UIKit/Grid/Column.component.vue';

export default {
  name: 'GridContainer',
  components: {
    Preview,
    Container,
    Row,
    Column,
  },
};
</script>

<style lang="scss" scoped>
.grid-columns {
  &__sample {
    border: 1px dotted black;
    height: 50px;
    margin-top: 10px;
  }
}
</style>
