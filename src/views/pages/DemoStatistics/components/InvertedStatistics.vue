<template>
  <div class="basic-statistics">
    <h3 class="eduk-h3 eduk-u-mb-3">Inverted Statistics</h3>
    <div class="demo-statistics__container">
      <Preview>
        <template slot="example">
          <div>
            <Statistics :value="27689728" description="Score" inverted/>
          </div>
        </template>
        <template slot="vue-code">
          <code class="language-html">
            &lt;Statistics :value=&quot;27689728&quot; description=&quot;Score&quot; inverted/&gt;
          </code>
        </template>
        <template slot="vanilla-code">
          <code class="language-html">
            &lt;div class=&quot;eduk-statistics eduk-statistics--inverted&quot;&gt;
              &lt;div class=&quot;eduk-u-d-flex eduk-u-align-items-center&quot;&gt;
                &lt;h1 class=&quot;eduk-head eduk-u-mb-0&quot;&gt;27,689,728&lt;/h1&gt;
              &lt;/div&gt;
              &lt;h6 class=&quot;eduk-head eduk-u-mb-0&quot;&gt;Score&lt;/h6&gt;
            &lt;/div&gt;
          </code>
        </template>
      </Preview>
    </div>
  </div>
</template>

<script>
import Preview from '@/views/components/Preview/index.vue';
import Statistics from '@/UIKit/Statistics/Statistics.component.vue';

export default {
  components: {
    Preview,
    Statistics,
  },
};
</script>
