<template>
  <div class="basic-statistics">
    <h3 class="eduk-h3 eduk-u-mb-3">Group Colored Statistics</h3>
    <div class="demo-statistics__container">
      <Preview>
        <template slot="example">
          <div>
            <Row>
              <Column>
                <Statistics :value="6790" description="Active Users" variant="primary"/>
              </Column>
              <Column>
                <Statistics :value="557" description="Visitors Today" variant="secondary"/>
              </Column>
              <Column>
                <Statistics :value="81643" description="Total Users" variant="tertiary"/>
              </Column>
            </Row>
          </div>
        </template>
        <template slot="vue-code">
          <code class="language-html">
            &lt;Row&gt;
              &lt;Column&gt;
                &lt;Statistics :value=&quot;6790&quot; description=&quot;Active Users&quot; variant=&quot;primary&quot;/&gt;
              &lt;/Column&gt;
              &lt;Column&gt;
                &lt;Statistics :value=&quot;557&quot; description=&quot;Visitors Today&quot; variant=&quot;secondary&quot;/&gt;
              &lt;/Column&gt;
              &lt;Column&gt;
                &lt;Statistics :value=&quot;81643&quot; description=&quot;Total Users&quot; variant=&quot;tertiary&quot;/&gt;
              &lt;/Column&gt;
            &lt;/Row&gt;
          </code>
        </template>
        <template slot="vanilla-code">
          <code class="language-html">
            &lt;div class=&quot;eduk-row&quot;&gt;
              &lt;div class=&quot;eduk-col&quot;&gt;
                &lt;div class=&quot;eduk-statistics&quot;&gt;
                  &lt;div class=&quot;eduk-u-d-flex eduk-u-align-items-center&quot;&gt;
                    &lt;h1 class=&quot;eduk-head eduk-u-mb-0 eduk-u-text--primary&quot;&gt;6,790&lt;/h1&gt;
                  &lt;/div&gt;
                  &lt;h6 class=&quot;eduk-head eduk-u-mb-0&quot;&gt;Active Users&lt;/h6&gt;
                &lt;/div&gt;
              &lt;/div&gt;
              &lt;div class=&quot;eduk-col&quot;&gt;
                &lt;div class=&quot;eduk-statistics&quot;&gt;
                  &lt;div class=&quot;eduk-u-d-flex eduk-u-align-items-center&quot;&gt;
                    &lt;h1 class=&quot;eduk-head eduk-u-mb-0 eduk-u-text--secondary&quot;&gt;557&lt;/h1&gt;
                  &lt;/div&gt;
                  &lt;h6 class=&quot;eduk-head eduk-u-mb-0&quot;&gt;Visitors Today&lt;/h6&gt;
                &lt;/div&gt;
              &lt;/div&gt;
              &lt;div class=&quot;eduk-col&quot;&gt;
                &lt;div class=&quot;eduk-statistics&quot;&gt;
                  &lt;div class=&quot;eduk-u-d-flex eduk-u-align-items-center&quot;&gt;
                    &lt;h1 class=&quot;eduk-head eduk-u-mb-0 eduk-u-text--tertiary&quot;&gt;81,643&lt;/h1&gt;
                  &lt;/div&gt;
                  &lt;h6 class=&quot;eduk-head eduk-u-mb-0&quot;&gt;Total Users&lt;/h6&gt;
                &lt;/div&gt;
              &lt;/div&gt;
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
import { Row, Column } from '@/app';

export default {
  components: {
    Preview,
    Statistics,
    Row,
    Column,
  },
};
</script>
