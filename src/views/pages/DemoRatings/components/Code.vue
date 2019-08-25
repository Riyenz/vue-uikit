<template>
  <div>
    <h2 class="eduk-h2 eduk-u-mb-3">Rating</h2>
    <h3 class="eduk-h3 eduk-u-mb-3">Basic Rating</h3>
    <Preview>
      <template slot="example">
        <Ratings :defaultValue="5" />
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &#x3C;Ratings :defaultValue=&#x22;5&#x22; /&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &#x3C;div class=&#x22;eduk-ratings&#x22;&#x3E;
            &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;div class=&#x22;eduk-ratings__clone&#x22; style=&#x22;width: 100%;&#x22;&#x3E;
              &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
              &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
              &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
              &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
              &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;/div&#x3E;
          &#x3C;/div&#x3E;
        </code>
      </template>
    </Preview>
    <h3 class="eduk-h3 eduk-u-mb-3">Sizes</h3>
    <Preview>
      <template slot="example">
        <div>
          <div class="eduk-u-mb-3">
            <Ratings size="sm" :defaultValue="1.5" />
          </div>
          <div class="eduk-u-mb-3">
            <Ratings :defaultValue="3.5" />
          </div>
          <div>
            <Ratings size="lg" :defaultValue="5" />
          </div>
        </div>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &#x3C;Ratings size=&#x22;sm&#x22; :defaultValue=&#x22;1.5&#x22; /&#x3E;
          &#x3C;Ratings :defaultValue=&#x22;5&#x22; /&#x3E;
          &#x3C;Ratings size=&#x22;lg&#x22; :defaultValue=&#x22;5&#x22; /&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &#x3C;div class=&#x22;eduk-ratings eduk-ratings--sm&#x22;&#x3E;
            &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;div class=&#x22;eduk-ratings__clone&#x22; style=&#x22;width: 30%;&#x22;&#x3E;
              &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
              &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
              &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
              &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
              &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;/div&#x3E;
          &#x3C;/div&#x3E;
          &#x3C;div class=&#x22;eduk-ratings&#x22;&#x3E;
            &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;div class=&#x22;eduk-ratings__clone&#x22; style=&#x22;width: 70%;&#x22;&#x3E;
              &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
              &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
              &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
              &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
              &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;/div&#x3E;
          &#x3C;/div&#x3E;
          &#x3C;div class=&#x22;eduk-ratings eduk-ratings--lg&#x22;&#x3E;
            &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;div class=&#x22;eduk-ratings__clone&#x22; style=&#x22;width: 100%;&#x22;&#x3E;
              &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
              &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
              &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
              &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
              &#x3C;i class=&#x22;fas fa-star&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;/div&#x3E;
          &#x3C;/div&#x3E;
        </code>
      </template>
    </Preview>
  </div>
</template>

<script>
import Ratings from '@/UIKit/Ratings/Ratings.component.vue';
import Preview from '@/views/components/Preview/index.vue';

export default {
  name: 'Code',
  components: {
    Ratings,
    Preview,
  },
};
</script>
