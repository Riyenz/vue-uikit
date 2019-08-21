<template>
  <div>
    <h3 class="eduk-h3 eduk-u-mb-3">Fluid Full Image</h3>
    <Preview>
      <template slot="example">
        <div class="card-inline">
          <Card
            bordered
            block
            noPadding
            actions
            bgImage="https://loremflickr.com/cache/resized/7818_33550913958_0e15906500_320_240_nofilter.jpg"
          >
            <template slot="content">
              <div class="eduk-u-px-4 eduk-u-py-5">
                <div class="small-content">
                  <p class="eduk-text">
                    Category
                  </p>
                  <h4 class="eduk-h4">
                    Header Title Bear claw candy canes marzipan jelly beans.
                  </h4>
                  <p class="eduk-text eduk-u-m-0">
                    Description Body Content Bonbon cake cotton candy marshmallow.
                    Bear claw candy canes marzipan jelly beans.
                  </p>
                </div>
              </div>
            </template>
          </Card>
        </div>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &#x3C;Card
            bordered
            block
            noPadding
            actions
            bgImage=&#x22;https://loremflickr.com/cache/resized/7818_33550913958_0e15906500_320_240_nofilter.jpg&#x22;
          &#x3E;
            &#x3C;template slot=&#x22;content&#x22;&#x3E;
              &#x3C;div class=&#x22;eduk-u-px-4 eduk-u-py-5&#x22;&#x3E;
                &#x3C;div class=&#x22;small-content&#x22;&#x3E;
                  &#x3C;p class=&#x22;eduk-text&#x22;&#x3E;
                    Category
                  &#x3C;/p&#x3E;
                  &#x3C;h4 class=&#x22;eduk-h4&#x22;&#x3E;
                    Header Title Bear claw candy canes marzipan jelly beans.
                  &#x3C;/h4&#x3E;
                  &#x3C;p class=&#x22;eduk-text eduk-u-m-0&#x22;&#x3E;
                    Description Body Content Bonbon cake cotton candy marshmallow.
                    Bear claw candy canes marzipan jelly beans.
                  &#x3C;/p&#x3E;
                &#x3C;/div&#x3E;
              &#x3C;/div&#x3E;
            &#x3C;/template&#x3E;
          &#x3C;/Card&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &#x3C;div class=&#x22;card-inline&#x22;&#x3E;
            &#x3C;div
              class=&#x22;eduk-card eduk-card--text-invert eduk-card--block eduk-card--bordered&#x22;
              style=&#x22;background: url(&quot;https://loremflickr.com/cache/resized/7818_33550913958_0e15906500_320_240_nofilter.jpg&quot;)
              center center / cover rgb(241, 241, 241);&#x22;&#x3E;
              &#x3C;div class=&#x22;eduk-card__content&#x22;&#x3E;
                &#x3C;div class=&#x22;eduk-card__actions&#x22;&#x3E;
                  &#x3C;a class=&#x22;eduk-card__action&#x22;&#x3E;
                    &#x3C;i class=&#x22;far fa-heart&#x22;&#x3E;&#x3C;/i&#x3E;
                  &#x3C;/a&#x3E;
                  &#x3C;a class=&#x22;eduk-card__action&#x22;&#x3E;
                    &#x3C;i class=&#x22;fas fa-share&#x22;&#x3E;&#x3C;/i&#x3E;
                  &#x3C;/a&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-u-px-4 eduk-u-py-5&#x22;&#x3E;
                  &#x3C;div class=&#x22;small-content&#x22;&#x3E;
                    &#x3C;p class=&#x22;eduk-text&#x22;&#x3E;
                      Category
                    &#x3C;/p&#x3E;
                    &#x3C;h4 class=&#x22;eduk-h4&#x22;&#x3E;
                      Header Title Bear claw candy canes marzipan jelly beans.
                    &#x3C;/h4&#x3E;
                    &#x3C;p class=&#x22;eduk-text eduk-u-m-0&#x22;&#x3E;
                      Description Body Content Bonbon cake cotton candy marshmallow.
                      Bear claw candy canes marzipan jelly beans.
                    &#x3C;/p&#x3E;
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
          bordered
          actions
          bgImage="https://loremflickr.com/cache/resized/7818_33550913958_0e15906500_320_240_nofilter.jpg"
        >
          <template slot="content">
            <div>
              <div class="eduk-u-pb-5">
                <Badge variant="secondary">
                  Sponsored Content
                </Badge>
              </div>
              <div class="eduk-u-pt-5">
                <h4 class="eduk-h4">
                  Header Title
                </h4>
                <p class="eduk-text">
                  Description Body Content Bonbon cake cotton candy marshmallow.
                  Bear claw candy canes marzipan jelly beans.
                </p>
                <p class="eduk-text eduk-u-m-0">
                  Addition Information
                </p>
              </div>
            </div>
          </template>
        </Card>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &#x3C;Card
            bordered
            actions
            bgImage=&#x22;https://loremflickr.com/cache/resized/7818_33550913958_0e15906500_320_240_nofilter.jpg&#x22;
          &#x3E;
            &#x3C;template slot=&#x22;content&#x22;&#x3E;
              &#x3C;div&#x3E;
                &#x3C;div class=&#x22;eduk-u-pb-5&#x22;&#x3E;
                  &#x3C;Badge variant=&#x22;secondary&#x22;&#x3E;
                    Sponsored Content
                  &#x3C;/Badge&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-u-pt-5&#x22;&#x3E;
                  &#x3C;h4 class=&#x22;eduk-h4&#x22;&#x3E;
                    Header Title
                  &#x3C;/h4&#x3E;
                  &#x3C;p class=&#x22;eduk-text&#x22;&#x3E;
                    Description Body Content Bonbon cake cotton candy marshmallow.
                    Bear claw candy canes marzipan jelly beans.
                  &#x3C;/p&#x3E;
                  &#x3C;p class=&#x22;eduk-text eduk-u-m-0&#x22;&#x3E;
                    Addition Information
                  &#x3C;/p&#x3E;
                &#x3C;/div&#x3E;
              &#x3C;/div&#x3E;
            &#x3C;/template&#x3E;
          &#x3C;/Card&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &#x3C;div
            class=&#x22;eduk-card eduk-card--text-invert eduk-card--bordered&#x22;
            style=&#x22;background: url(&quot;https://loremflickr.com/cache/resized/7818_33550913958_0e15906500_320_240_nofilter.jpg&quot;)
            center center / cover rgb(241, 241, 241);&#x22;&#x3E;
            &#x3C;div class=&#x22;eduk-card__content eduk-card__content--padded&#x22;&#x3E;
              &#x3C;div class=&#x22;eduk-card__actions&#x22;&#x3E;
                &#x3C;a class=&#x22;eduk-card__action&#x22;&#x3E;
                  &#x3C;i class=&#x22;far fa-heart&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;/a&#x3E;
                &#x3C;a class=&#x22;eduk-card__action&#x22;&#x3E;
                  &#x3C;i class=&#x22;fas fa-share&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;/a&#x3E;
              &#x3C;/div&#x3E;
              &#x3C;div&#x3E;
                &#x3C;div class=&#x22;eduk-u-pb-5&#x22;&#x3E;
                  &#x3C;div class=&#x22;eduk-badge eduk-badge-secondary&#x22;&#x3E;
                    Sponsored Content
                  &#x3C;/div&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-u-pt-5&#x22;&#x3E;
                  &#x3C;h4 class=&#x22;eduk-h4&#x22;&#x3E;
                    Header Title
                  &#x3C;/h4&#x3E;
                  &#x3C;p class=&#x22;eduk-text&#x22;&#x3E;
                    Description Body Content Bonbon cake cotton candy marshmallow.
                    Bear claw candy canes marzipan jelly beans.
                  &#x3C;/p&#x3E;
                  &#x3C;p class=&#x22;eduk-text eduk-u-m-0&#x22;&#x3E;
                    Addition Information
                  &#x3C;/p&#x3E;
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
          bordered
          actions
          bgImage="https://loremflickr.com/cache/resized/7818_33550913958_0e15906500_320_240_nofilter.jpg"
        >
          <template slot="content">
            <div>
              <div class="eduk-u-pb-5">
                <p class="eduk-text">
                  Category
                </p>
                <h4 class="eduk-h4 eduk-u-pr-4">
                  Header Title Bear claw candy canes marzipan jelly beans.
                </h4>
              </div>
              <div class="eduk-u-pt-5">
                <p class="eduk-text">
                  Description Body Content Bonbon cake cotton candy marshmallow.
                  Bear claw candy canes marzipan jelly beans.
                </p>
                <p class="eduk-text eduk-u-m-0">
                  Addition Information
                </p>
              </div>
            </div>
          </template>
        </Card>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &#x3C;Card
            bordered
            actions
            bgImage=&#x22;https://loremflickr.com/cache/resized/7818_33550913958_0e15906500_320_240_nofilter.jpg&#x22;
          &#x3E;
            &#x3C;template slot=&#x22;content&#x22;&#x3E;
              &#x3C;div&#x3E;
                &#x3C;div class=&#x22;eduk-u-pb-5&#x22;&#x3E;
                  &#x3C;p class=&#x22;eduk-text&#x22;&#x3E;
                    Category
                  &#x3C;/p&#x3E;
                  &#x3C;h4 class=&#x22;eduk-h4 eduk-u-pr-4&#x22;&#x3E;
                    Header Title Bear claw candy canes marzipan jelly beans.
                  &#x3C;/h4&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-u-pt-5&#x22;&#x3E;
                  &#x3C;p class=&#x22;eduk-text&#x22;&#x3E;
                    Description Body Content Bonbon cake cotton candy marshmallow.
                    Bear claw candy canes marzipan jelly beans.
                  &#x3C;/p&#x3E;
                  &#x3C;p class=&#x22;eduk-text eduk-u-m-0&#x22;&#x3E;
                    Addition Information
                  &#x3C;/p&#x3E;
                &#x3C;/div&#x3E;
              &#x3C;/div&#x3E;
            &#x3C;/template&#x3E;
          &#x3C;/Card&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &#x3C;div
            class=&#x22;eduk-card eduk-card--text-invert eduk-card--bordered&#x22;
            style=&#x22;background: url(&quot;https://loremflickr.com/cache/resized/7818_33550913958_0e15906500_320_240_nofilter.jpg&quot;)
            center center / cover rgb(241, 241, 241);&#x22;&#x3E;
            &#x3C;div class=&#x22;eduk-card__content eduk-card__content--padded&#x22;&#x3E;
              &#x3C;div class=&#x22;eduk-card__actions&#x22;&#x3E;
                &#x3C;a class=&#x22;eduk-card__action&#x22;&#x3E;
                  &#x3C;i class=&#x22;far fa-heart&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;/a&#x3E;
                &#x3C;a class=&#x22;eduk-card__action&#x22;&#x3E;
                  &#x3C;i class=&#x22;fas fa-share&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;/a&#x3E;
              &#x3C;/div&#x3E;
              &#x3C;div&#x3E;
                &#x3C;div class=&#x22;eduk-u-pb-5&#x22;&#x3E;
                  &#x3C;p class=&#x22;eduk-text&#x22;&#x3E;
                    Category
                  &#x3C;/p&#x3E;
                  &#x3C;h4 class=&#x22;eduk-h4 eduk-u-pr-4&#x22;&#x3E;
                    Header Title Bear claw candy canes marzipan jelly beans.
                  &#x3C;/h4&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-u-pt-5&#x22;&#x3E;
                  &#x3C;p class=&#x22;eduk-text&#x22;&#x3E;
                    Description Body Content Bonbon cake cotton candy marshmallow.
                    Bear claw candy canes marzipan jelly beans.
                  &#x3C;/p&#x3E;
                  &#x3C;p class=&#x22;eduk-text eduk-u-m-0&#x22;&#x3E;
                    Addition Information
                  &#x3C;/p&#x3E;
                &#x3C;/div&#x3E;
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
import Badge from '@/UIKit/Badge/Badge.component.vue';
import Preview from '@/views/components/Preview/index.vue';

export default {
  name: 'FluidImage',
  components: {
    Card,
    Badge,
    Preview,
  },
};
</script>

<style lang="scss">
.card-inline {
  max-width: 500px;
}

.small-content {
  max-width: 271px;
}
</style>

