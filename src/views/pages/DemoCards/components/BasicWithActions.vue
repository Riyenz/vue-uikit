<template>
  <div>
    <h3 class="eduk-h3 eduk-u-mb-3">Group of cards can contain CTA buttons</h3>
    <Preview>
      <template slot="example">
        <Card
          featuredImg="//via.placeholder.com/300x180"
          bordered
        >
          <div>
            <h4 class="eduk-h4">
              Header Title
            </h4>
            <p class="eduk-text">
              Description Body Content Bonbon cake cotton candy marshmallow. Apple
              pie topping ice cream chocolate. Cake gummies lemon drops.
            </p>
            <p class="eduk-text eduk-u-mb-3 disabled">
              Additional Information
            </p>
            <div class="row-reset">
              <Container fluid>
                <Row>
                  <Column :cols="6">
                    <Btn noMargin outline block>View details</Btn>
                  </Column>
                  <Column :cols="6">
                    <Btn noMargin block>Apply now</Btn>
                  </Column>
                </Row>
              </Container>
            </div>
          </div>
        </Card>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &#x3C;Card featuredImg=&#x22;//via.placeholder.com/300x180&#x22; bordered&#x3E;
            &#x3C;div&#x3E;
              &#x3C;h4 class=&#x22;eduk-h4&#x22;&#x3E;
                Header Title
              &#x3C;/h4&#x3E;
              &#x3C;p class=&#x22;eduk-text&#x22;&#x3E;
                Description Body Content Bonbon cake cotton candy marshmallow. Apple
                pie topping ice cream chocolate. Cake gummies lemon drops.
              &#x3C;/p&#x3E;
              &#x3C;p class=&#x22;eduk-text eduk-u-mb-3 disabled&#x22;&#x3E;
                Additional Information
              &#x3C;/p&#x3E;
              &#x3C;div class=&#x22;row-reset&#x22;&#x3E;
                &#x3C;Container fluid&#x3E;
                  &#x3C;Row&#x3E;
                    &#x3C;Column :cols=&#x22;6&#x22;&#x3E;
                      &#x3C;Btn noMargin outline block&#x3E;View details&#x3C;/Btn&#x3E;
                    &#x3C;/Column&#x3E;
                    &#x3C;Column :cols=&#x22;6&#x22;&#x3E;
                      &#x3C;Btn noMargin block&#x3E;Apply now&#x3C;/Btn&#x3E;
                    &#x3C;/Column&#x3E;
                  &#x3C;/Row&#x3E;
                &#x3C;/Container&#x3E;
              &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
          &#x3C;/Card&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &#x3C;div class=&#x22;eduk-card eduk-card--bordered&#x22;&#x3E;
            &#x3C;div
              class=&#x22;eduk-card__image&#x22;
              style=&#x22;background-image: url(&quot;//via.placeholder.com/300x180&quot;);&#x22;&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;eduk-card__content eduk-card__content--padded&#x22;&#x3E;
              &#x3C;div&#x3E;
                &#x3C;h4 class=&#x22;eduk-h4&#x22;&#x3E;
                  Header Title
                &#x3C;/h4&#x3E;
                &#x3C;p class=&#x22;eduk-text&#x22;&#x3E;
                  Description Body Content Bonbon cake cotton candy marshmallow. Apple
                  pie topping ice cream chocolate. Cake gummies lemon drops.
                &#x3C;/p&#x3E;
                &#x3C;p class=&#x22;eduk-text eduk-u-mb-3 disabled&#x22;&#x3E;
                  Additional Information
                &#x3C;/p&#x3E;
                &#x3C;div class=&#x22;row-reset&#x22;&#x3E;
                  &#x3C;div class=&#x22;eduk-container-fluid&#x22;&#x3E;
                    &#x3C;div class=&#x22;eduk-row&#x22;&#x3E;
                      &#x3C;div class=&#x22;eduk-col-6&#x22;&#x3E;
                        &#x3C;button
                          class=&#x22;eduk-btn eduk-btn--block eduk-btn--primary eduk-btn---outlined&#x22;
                          nomargin=&#x22;&#x22;&#x3E;
                          View details
                        &#x3C;/button&#x3E;
                      &#x3C;/div&#x3E;
                      &#x3C;div class=&#x22;eduk-col-6&#x22;&#x3E;
                        &#x3C;button
                          class=&#x22;eduk-btn eduk-btn--block eduk-btn--primary&#x22;
                          nomargin=&#x22;&#x22;&#x3E;
                          Apply now
                        &#x3C;/button&#x3E;
                      &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                  &#x3C;/div&#x3E;
                &#x3C;/div&#x3E;
              &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
          &#x3C;/div&#x3E;
        </code>
      </template>
    </Preview>

    <Preview>
      <template slot="example">
        <Card
          featuredImg="//via.placeholder.com/300x180"
          bordered
        >
          <div>
            <h4 class="eduk-h4">
              Header Title
            </h4>
            <p class="eduk-text">
              Description Body Content Bonbon cake cotton candy marshmallow. Apple
              pie topping ice cream chocolate. Cake gummies lemon drops.
            </p>
            <p class="eduk-text eduk-u-mb-3 disabled">
              Additional Information
            </p>
            <Btn noMargin outline block>View details</Btn>
          </div>
        </Card>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &#x3C;Card featuredImg=&#x22;'//via.placeholder.com/300x180'&#x22; bordered&#x3E;
            &#x3C;div&#x3E;
              &#x3C;h4 class=&#x22;eduk-h4&#x22;&#x3E;
                Header Title
              &#x3C;/h4&#x3E;
              &#x3C;p class=&#x22;eduk-text&#x22;&#x3E;
                Description Body Content Bonbon cake cotton candy marshmallow. Apple
                pie topping ice cream chocolate. Cake gummies lemon drops.
              &#x3C;/p&#x3E;
              &#x3C;p class=&#x22;eduk-text eduk-u-mb-3 disabled&#x22;&#x3E;
                Additional Information
              &#x3C;/p&#x3E;
              &#x3C;Btn noMargin outline block&#x3E;View details&#x3C;/Btn&#x3E;
            &#x3C;/div&#x3E;
          &#x3C;/Card&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &#x3C;div class=&#x22;eduk-card eduk-card--bordered&#x22;&#x3E;
            &#x3C;div
              class=&#x22;eduk-card__image&#x22;
              style=&#x22;background-image: url(&quot;//via.placeholder.com/300x180&quot;);&#x22;&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;eduk-card__content eduk-card__content--padded&#x22;&#x3E;
              &#x3C;div&#x3E;
                &#x3C;h4 class=&#x22;eduk-h4&#x22;&#x3E;
                  Header Title
                &#x3C;/h4&#x3E;
                &#x3C;p class=&#x22;eduk-text&#x22;&#x3E;
                  Description Body Content Bonbon cake cotton candy marshmallow. Apple
                  pie topping ice cream chocolate. Cake gummies lemon drops.
                &#x3C;/p&#x3E;
                &#x3C;p class=&#x22;eduk-text eduk-u-mb-3 disabled&#x22;&#x3E;
                  Additional Information
                &#x3C;/p&#x3E;
                &#x3C;button
                  class=&#x22;eduk-btn eduk-btn--block eduk-btn--primary eduk-btn--outlined&#x22;
                  nomargin=&#x22;&#x22;&#x3E;
                  View details
                &#x3C;/button&#x3E;
              &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
          &#x3C;/div&#x3E;
        </code>
      </template>
    </Preview>
  </div>
</template>

<script>
import Card from '@/UIKit/Card/Card.component.vue';
import Btn from '@/UIKit/Btn/Btn.component.vue';
import Container from '@/UIKit/Grid/Container.component.vue';
import Row from '@/UIKit/Grid/Row.component.vue';
import Column from '@/UIKit/Grid/Column.component.vue';
import Preview from '@/views/components/Preview/index.vue';

export default {
  name: 'BasicWithActions',
  components: {
    Card,
    Btn,
    Container,
    Row,
    Column,
    Preview,
  },
};
</script>
