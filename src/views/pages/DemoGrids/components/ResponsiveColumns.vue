<template>
  <div class="responsive-columns">
    <h3 class="eduk-u-text-muted">Responsive Columns</h3>
    <Container fluid>
      <Row>
        <Column class="responsive-columns__sample" :cols="12" :colsmd="6">
          cols 12, md 6
        </Column>
        <Column class="responsive-columns__sample" :cols="12" :colsmd="6">
          cols 12, md 6
        </Column>
      </Row>
      <Row>
        <Column class="responsive-columns__sample" :cols="12" :colslg="4">
          cols 12, lg 4
        </Column>
        <Column class="responsive-columns__sample" :cols="12" :colsmd="6" :colslg="4">
          cols 12, md 6, lg 4
        </Column>
        <Column class="responsive-columns__sample" :cols="12" :colsmd="6" :colslg="4">
          cols 12, md 6, lg 4
        </Column>
      </Row>
    </Container>
    <pre class="code">
      <label>Vue</label>
      <code class="language-html">
        &#x3C;Container fluid&#x3E;
          &#x3C;Row&#x3E;
            &#x3C;Column :cols=&#x22;12&#x22; :colsmd=&#x22;6&#x22;&#x3E;
              cols 12, md 6
            &#x3C;/Column&#x3E;
            &#x3C;Column :cols=&#x22;12&#x22; :colsmd=&#x22;6&#x22;&#x3E;
              cols 12, md 6
            &#x3C;/Column&#x3E;
          &#x3C;/Row&#x3E;
          &#x3C;Row&#x3E;
            &#x3C;Column :cols=&#x22;12&#x22; :colslg=&#x22;4&#x22;&#x3E;
              cols 12, lg 4
            &#x3C;/Column&#x3E;
            &#x3C;Column :cols=&#x22;12&#x22; :colsmd=&#x22;6&#x22; :colslg=&#x22;4&#x22;&#x3E;
              cols 12, md 6, lg 4
            &#x3C;/Column&#x3E;
            &#x3C;Column :cols=&#x22;12&#x22; :colsmd=&#x22;6&#x22; :colslg=&#x22;4&#x22;&#x3E;
              cols 12, md 6, lg 4
            &#x3C;/Column&#x3E;
          &#x3C;/Row&#x3E;
        &#x3C;/Container&#x3E;
      </code>
    </pre>
    <pre class="code">
      <label>Vanilla</label>
      <code class="language-html">
        &#x3C;div class=&#x22;eduk-container-fluid&#x22;&#x3E;
          &#x3C;div class=&#x22;eduk-row&#x22;&#x3E;
            &#x3C;div class=&#x22;eduk-col-12 eduk-col-md-6&#x22;&#x3E;
              cols 12, md 6
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;eduk-col-12 eduk-col-md-6&#x22;&#x3E;
              cols 12, md 6
            &#x3C;/div&#x3E;
          &#x3C;/div&#x3E;
          &#x3C;div class=&#x22;eduk-row&#x22;&#x3E;
            &#x3C;div class=&#x22;eduk-col-12 eduk-col-lg-4&#x22;&#x3E;
              cols 12, lg 4
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;eduk-col-12 eduk-col-md-6 eduk-col-lg-4&#x22;&#x3E;
              cols 12, md 6, lg 4
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;eduk-col-12 eduk-col-md-6 eduk-col-lg-4&#x22;&#x3E;
              cols 12, md 6, lg 4
            &#x3C;/div&#x3E;
          &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
      </code>
    </pre>
  </div>
</template>

<script>
import Container from '@/UIKit/Grid/Container.component.vue';
import Row from '@/UIKit/Grid/Row.component.vue';
import Column from '@/UIKit/Grid/Column.component.vue';

export default {
  name: 'ResponsiveColumns',
  components: {
    Container,
    Row,
    Column,
  },
};
</script>

<style lang="scss" scoped>
.responsive-columns {
  &__sample {
    border: 1px dotted black;
    height: 50px;
    margin-top: 10px;
  }
}
</style>
