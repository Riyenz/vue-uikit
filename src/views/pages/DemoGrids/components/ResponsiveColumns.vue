<template>
  <div class="responsive-columns">
    <h3 class="eduk-h3 eduk-u-mb-3">Responsive Columns</h3>
    <Preview wide>
      <template slot="example">
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
      </template>
      <template slot="vue-code">
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
      </template>
      <template slot="vanilla-code">
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
  name: 'ResponsiveColumns',
  components: {
    Preview,
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
