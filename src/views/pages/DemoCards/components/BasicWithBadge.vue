<template>
  <div>
    <h3 class="eduk-h3 eduk-u-mb-3">Card with Badge Element</h3>
    <Preview>
      <template slot="example">
        <Card
          featuredImg="//via.placeholder.com/300x180"
          badge="Sponsored content"
          bordered
        >
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
          &#x3C;Card
            featuredImg=&#x22;//via.placeholder.com/300x180&#x22;
            badge=&#x22;Sponsored content&#x22;
            bordered
          &#x3E;
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
            &#x3C;div
              class=&#x22;eduk-card__image&#x22; style=&#x22;background-image:
              url(&quot;//via.placeholder.com/300x180&quot;);&#x22;&#x3E;
              &#x3C;div class=&#x22;eduk-u-mx-1 eduk-badge eduk-badge-secondary&#x22;&#x3E;
                Sponsored content
              &#x3C;/div&#x3E;
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
  name: 'BasicWithBadge',
  components: {
    Card,
    Preview,
  },
};
</script>
