<template>
  <div>
    <Preview>
      <template slot="example">
        <Card
          featuredImg="//via.placeholder.com/300x180"
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
              <p class="eduk-text eduk-u-mb-3 disabled">
                Additional Information
              </p>
              <Btn noMargin block>Apply now</Btn>
            </div>
          </template>
        </Card>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &#x3C;Card featuredImg=&#x22;//via.placeholder.com/300x180&#x22; bordered&#x3E;
            &#x3C;template slot=&#x22;content&#x22;&#x3E;
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
                &#x3C;Btn noMargin block&#x3E;Apply now&#x3C;/Btn&#x3E;
              &#x3C;/div&#x3E;
            &#x3C;/template&#x3E;
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
                  class=&#x22;eduk-btn eduk-btn--block eduk-btn--primary&#x22;
                  nomargin=&#x22;&#x22;&#x3E;
                  Apply now
                &#x3C;/button&#x3E;
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
          actions
          actionsBaseline
        >
          <template slot="header">
            <div class="row-header">
              <div>
                <img src="//via.placeholder.com/40" alt="Sample placeholder" />
              </div>
              <div>
                <h4 class="eduk-h5 eduk-u-m-0">
                  Header Title
                </h4>
                <p class="eduk-text eduk-u-m-0 disabled">
                  Subtitle here
                </p>
              </div>
            </div>
          </template>
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
            bordered
            actions
            actionsBaseline
          &#x3E;
            &#x3C;template slot=&#x22;header&#x22;&#x3E;
              &#x3C;div class=&#x22;row-header&#x22;&#x3E;
                &#x3C;div&#x3E;
                  &#x3C;img src=&#x22;//via.placeholder.com/40&#x22; alt=&#x22;Sample placeholder&#x22; /&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div&#x3E;
                  &#x3C;h4 class=&#x22;eduk-h5 eduk-u-m-0&#x22;&#x3E;
                    Header Title
                  &#x3C;/h4&#x3E;
                  &#x3C;p class=&#x22;eduk-text eduk-u-m-0 disabled&#x22;&#x3E;
                    Subtitle here
                  &#x3C;/p&#x3E;
                &#x3C;/div&#x3E;
              &#x3C;/div&#x3E;
            &#x3C;/template&#x3E;
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
            &#x3C;div class=&#x22;eduk-card__header eduk-card__header--padded&#x22;&#x3E;
              &#x3C;div class=&#x22;row-header&#x22;&#x3E;
                &#x3C;div&#x3E;&#x3C;img src=&#x22;//via.placeholder.com/40&#x22; alt=&#x22;Sample placeholder&#x22;&#x3E;&#x3C;/div&#x3E;
                &#x3C;div&#x3E;
                  &#x3C;h4 class=&#x22;eduk-h5 eduk-u-m-0&#x22;&#x3E;
                    Header Title
                  &#x3C;/h4&#x3E;
                  &#x3C;p class=&#x22;eduk-text eduk-u-m-0 disabled&#x22;&#x3E;
                    Subtitle here
                  &#x3C;/p&#x3E;
                &#x3C;/div&#x3E;
              &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div
              class=&#x22;eduk-card__image&#x22;
              style=&#x22;background-image: url(&quot;//via.placeholder.com/300x180&quot;);&#x22;&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;eduk-card__content eduk-card__content--padded&#x22;&#x3E;
              &#x3C;div class=&#x22;eduk-card__actions eduk-card__actions--baseline&#x22;&#x3E;
                &#x3C;a class=&#x22;eduk-card__action&#x22;&#x3E;
                  &#x3C;i class=&#x22;far fa-heart&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;/a&#x3E;
                &#x3C;a class=&#x22;eduk-card__action&#x22;&#x3E;
                  &#x3C;i class=&#x22;fas fa-share&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;/a&#x3E;
              &#x3C;/div&#x3E;
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

    <Preview>
      <template slot="example">
        <Card
          featuredImg="//via.placeholder.com/300x180"
          bordered
          actions
          noPadding
        >
          <template slot="content">
            <div>
              <div class="overflow-image">
                <img src="//via.placeholder.com/70" alt="Sample placeholder" />
              </div>
              <div class="eduk-u-p-3">
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
            </div>
          </template>
        </Card>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &#x3C;Card
            featuredImg=&#x22;//via.placeholder.com/300x180&#x22;
            bordered
            actions
            noPadding
          &#x3E;
            &#x3C;template slot=&#x22;content&#x22;&#x3E;
              &#x3C;div&#x3E;
                &#x3C;div class=&#x22;overflow-image&#x22;&#x3E;
                  &#x3C;img src=&#x22;//via.placeholder.com/70&#x22; alt=&#x22;Sample placeholder&#x22; /&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-u-p-3&#x22;&#x3E;
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
            &#x3C;/template&#x3E;
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
            &#x3C;div class=&#x22;eduk-card__content&#x22;&#x3E;
              &#x3C;div class=&#x22;eduk-card__actions&#x22;&#x3E;
                &#x3C;a class=&#x22;eduk-card__action&#x22;&#x3E;
                  &#x3C;i class=&#x22;far fa-heart&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;a class=&#x22;eduk-card__action&#x22;&#x3E;
                  &#x3C;i class=&#x22;fas fa-share&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;/a&#x3E;
              &#x3C;/div&#x3E;
              &#x3C;div&#x3E;
                &#x3C;div class=&#x22;overflow-image&#x22;&#x3E;
                  &#x3C;img src=&#x22;//via.placeholder.com/70&#x22; alt=&#x22;Sample placeholder&#x22;&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-u-p-3&#x22;&#x3E;
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
          &#x3C;/div&#x3E;
        </code>
      </template>
    </Preview>
  </div>
</template>

<script>
import Card from '@/UIKit/Card/Card.component.vue';
import Btn from '@/UIKit/Btn/Btn.component.vue';
import Preview from '@/views/components/Preview/index.vue';

export default {
  name: 'BasicWithImages',
  components: {
    Card,
    Btn,
    Preview,
  },
};
</script>

<style lang="scss" scoped>
.overflow-image {
  position: relative;
  height: 35px;

  > img {
    border-radius: 70px;
    width: 70px;
    border: 1px solid #fff;
    position: absolute;
    top: 0;
    left: 1rem;
    transform: translate(0, -50%);
  }
}

.row-header {
  display: flex;
  align-items: center;

  > div:first-child {
    width: 40px;
  }

  > div:first-child img {
    display: block;
    border-radius: 40px;
  }

  > div:last-child {
    flex: 1;
    padding-left: 10px;
  }
}
</style>

