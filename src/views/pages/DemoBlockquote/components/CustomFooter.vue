<template>
  <div>
    <Preview>
      <template slot="example">
        <div style="max-width: 340px;">
          <Blockquote
            heading="Fruitcake gingerbread pudding marzipan tootsie roll sweet roll apple pie candy canes bonbon lemon."
          >
            <template slot="footer">
              <div class="row">
                <img
                  src="https://via.placeholder.com/45"
                  class="row__picture"
                />
                <span>Lorem Ipsum Dolor<br />Edukasyon.ph</span>
              </div>
            </template>
          </Blockquote>
        </div>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &#x3C;Blockquote heading=&#x22;Fruitcake gingerbread pudding marzipan tootsie roll
            sweet roll apple pie candy canes bonbon lemon.&#x22;&#x3E;
            &#x3C;template slot=&#x22;footer&#x22;&#x3E;
              &#x3C;div class=&#x22;row&#x22;&#x3E;
                &#x3C;img
                  src=&#x22;https://via.placeholder.com/45&#x22;
                  class=&#x22;row__picture&#x22;
                /&#x3E;
                &#x3C;span&#x3E;Lorem Ipsum Dolor
                &#x3C;br /&#x3E;Edukasyon.ph&#x3C;/span&#x3E;
              &#x3C;/div&#x3E;
            &#x3C;/template&#x3E;
          &#x3C;/Blockquote&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &#x3C;div class=&#x22;eduk-blockquote eduk-blockquote--horizontal&#x22;&#x3E;
            &#x3C;blockquote class=&#x22;eduk-blockquote__content&#x22;&#x3E;
              &#x3C;div class=&#x22;eduk-blockquote__quote&#x22;&#x3E;“&#x3C;/div&#x3E;
              &#x3C;p class=&#x22;eduk-blockquote__header&#x22;&#x3E;
                Fruitcake gingerbread pudding marzipan tootsie roll sweet
                roll apple pie candy canes bonbon lemon.
              &#x3C;/p&#x3E;
              &#x3C;footer class=&#x22;eduk-blockquote__footer&#x22;&#x3E;
                &#x3C;div class=&#x22;row&#x22;&#x3E;
                  &#x3C;img src=&#x22;https://via.placeholder.com/45&#x22; class=&#x22;row__picture&#x22;&#x3E;
                  &#x3C;span&#x3E;Lorem Ipsum Dolor&#x3C;br&#x3E;Edukasyon.ph&#x3C;/span&#x3E;
                &#x3C;/div&#x3E;
              &#x3C;/footer&#x3E;
            &#x3C;/blockquote&#x3E;
          &#x3C;/div&#x3E;
        </code>
      </template>
    </Preview>
    <Preview>
      <template slot="example">
        <div style="max-width: 300px;">
          <Blockquote
            heading="Fruitcake gingerbread pudding marzipan tootsie roll sweet roll apple pie candy canes bonbon lemon."
          >
            <template slot="footer">
              <div class="row row--center">
                <img
                  src="https://via.placeholder.com/45"
                  class="row__picture"
                />
                <span>Lorem Ipsum Dolor<br />Edukasyon.ph</span>
              </div>
            </template>
          </Blockquote>
        </div>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &#x3C;Blockquote heading=&#x22;Fruitcake gingerbread pudding marzipan tootsie
            roll sweet roll apple pie candy canes bonbon lemon.&#x22;&#x3E;
            &#x3C;template slot=&#x22;footer&#x22;&#x3E;
              &#x3C;div class=&#x22;row row--center&#x22;&#x3E;
                &#x3C;img
                  src=&#x22;https://via.placeholder.com/45&#x22;
                  class=&#x22;row__picture&#x22;
                /&#x3E;
                &#x3C;span&#x3E;Lorem Ipsum Dolor
                &#x3C;br /&#x3E;Edukasyon.ph&#x3C;/span&#x3E;
              &#x3C;/div&#x3E;
            &#x3C;/template&#x3E;
          &#x3C;/Blockquote&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &#x3C;div class=&#x22;eduk-blockquote eduk-blockquote--horizontal&#x22;&#x3E;
            &#x3C;blockquote class=&#x22;eduk-blockquote__content&#x22;&#x3E;
              &#x3C;div class=&#x22;eduk-blockquote__quote&#x22;&#x3E;“&#x3C;/div&#x3E;
              &#x3C;p class=&#x22;eduk-blockquote__header&#x22;&#x3E;
                Fruitcake gingerbread pudding marzipan tootsie roll sweet
                roll apple pie candy canes bonbon lemon.
              &#x3C;/p&#x3E;
              &#x3C;footer class=&#x22;eduk-blockquote__footer&#x22;&#x3E;
                &#x3C;div class=&#x22;row row--center&#x22;&#x3E;
                  &#x3C;img src=&#x22;https://via.placeholder.com/45&#x22; class=&#x22;row__picture&#x22;&#x3E;
                  &#x3C;span&#x3E;Lorem Ipsum Dolor&#x3C;br&#x3E;Edukasyon.ph&#x3C;/span&#x3E;
                &#x3C;/div&#x3E;
              &#x3C;/footer&#x3E;
            &#x3C;/blockquote&#x3E;
          &#x3C;/div&#x3E;
        </code>
      </template>
    </Preview>
  </div>
</template>

<script>
import Preview from '@/views/components/Preview/index.vue';
import Blockquote from '@/UIKit/Blockquote/Blockquote.component.vue';

export default {
  name: 'CustomFooter',
  components: {
    Preview,
    Blockquote,
  },
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  align-items: center;

  &__picture {
    height: 45px;
    width: 45px;
    border-radius: 45px;
    margin-right: 20px;
  }

  &--center {
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }

  &--center &__picture {
    margin-right: 0;
    margin-bottom: 5px;
  }
}
</style>
