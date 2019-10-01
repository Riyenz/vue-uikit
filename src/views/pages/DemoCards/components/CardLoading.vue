<template>
  <div>
    <h3 class="eduk-h3 eduk-u-mb-3">Loading</h3>
    <Preview>
      <template slot="example">
        <Card bordered loading>
          <template slot="content">
            <div>
              <h4 class="eduk-h4">
                Header Title
              </h4>
              <p class="eduk-text">
                Description Body Content Bonbon cake cotton candy marshmallow. Apple
                pie topping ice cream chocolate. Cake gummies lemon drops.
              </p>
              <p class="eduk-text eduk-u-m-0 disabled">
                Additional Information
              </p>
            </div>
          </template>
        </Card>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &#x3C;Card bordered&#x3E;
            &#x3C;template slot=&#x22;content&#x22;&#x3E;
              &#x3C;div&#x3E;
                &#x3C;h4 class=&#x22;eduk-h4&#x22;&#x3E;
                  Header Title
                &#x3C;/h4&#x3E;
                &#x3C;p class=&#x22;eduk-text&#x22;&#x3E;
                  Description Body Content Bonbon cake cotton candy marshmallow. Apple
                  pie topping ice cream chocolate. Cake gummies lemon drops.
                &#x3C;/p&#x3E;
                &#x3C;p class=&#x22;eduk-text eduk-u-m-0 disabled&#x22;&#x3E;
                  Additional Information
                &#x3C;/p&#x3E;
              &#x3C;/div&#x3E;
            &#x3C;/template&#x3E;
          &#x3C;/Card&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &#x3C;div class=&#x22;eduk-card eduk-card--bordered&#x22;&#x3E;
            &#x3C;div class=&#x22;eduk-card__content eduk-card__content--padded&#x22;&#x3E;
              &#x3C;div&#x3E;
                &#x3C;h4 class=&#x22;eduk-h4&#x22;&#x3E;
                  Header Title
                &#x3C;/h4&#x3E;
                &#x3C;p class=&#x22;eduk-text&#x22;&#x3E;
                  Description Body Content Bonbon cake cotton candy marshmallow. Apple
                  pie topping ice cream chocolate. Cake gummies lemon drops.
                &#x3C;/p&#x3E;
                &#x3C;p class=&#x22;eduk-text eduk-u-m-0 disabled&#x22;&#x3E;
                  Additional Information
                &#x3C;/p&#x3E;
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
import Preview from '@/views/components/Preview/index.vue';

export default {
  name: 'CardLoading',
  components: {
    Card,
    Preview,
  },
};
</script>
