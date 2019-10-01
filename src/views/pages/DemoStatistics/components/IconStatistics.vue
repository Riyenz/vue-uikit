<template>
  <div class="basic-statistics">
    <h3 class="eduk-h3 eduk-u-mb-3">Statistics with Icon</h3>
    <div class="demo-statistics__container">
      <Preview>
        <template slot="example">
          <div>
            <Statistics :value="439" description="Likes" icon="heart"/>
          </div>
        </template>
        <template slot="vue-code">
          <code class="language-html">
            &lt;Statistics :value=&quot;439&quot; description=&quot;Likes&quot; icon=&quot;heart&quot;/&gt;
          </code>
        </template>
        <template slot="vanilla-code">
          <code class="language-html">
            &lt;div class=&quot;eduk-statistics&quot;&gt;
              &lt;div class=&quot;eduk-u-d-flex eduk-u-align-items-center&quot;&gt;
                &lt;i class=&quot;fa fa-heart eduk-h1 eduk-u-mb-0 eduk-u-mr-1&quot;&gt;&lt;/i&gt;
                &lt;h1 class=&quot;eduk-head eduk-u-mb-0&quot;&gt;439&lt;/h1&gt;
              &lt;/div&gt;
              &lt;h6 class=&quot;eduk-head eduk-u-mb-0&quot;&gt;Likes&lt;/h6&gt;
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
