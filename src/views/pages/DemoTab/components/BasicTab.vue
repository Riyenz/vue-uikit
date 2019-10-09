<template>
  <div>
    <h3 class="eduk-h3 eduk-u-mb-3">Basic Tab</h3>
    <Preview>
      <template slot="example">
        <Tab :items="[{ name: 'in-progress', display: 'In Progress(6)' }, { name: 'completed', display: 'Completed(3)' }]" />
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &#x3C;Tab :items=&#x22;['first', 'second', 'third']" /&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &#x3C;div class=&#x22;eduk-tab&#x22;&#x3E;
            &#x3C;nav class=&#x22;eduk-tab-nav&#x22;&#x3E;
              &#x3C;div class=&#x22;eduk-tab-nav__item eduk-tab-nav__item--active&#x22;&#x3E;
                &#x3C;a class=&#x22;eduk-tab-nav__link&#x22;&#x3E;first&#x3C;/a&#x3E;
              &#x3C;/div&#x3E;
              &#x3C;div class=&#x22;eduk-tab-nav__item&#x22;&#x3E;
                &#x3C;a class=&#x22;eduk-tab-nav__link&#x22;&#x3E;second&#x3C;/a&#x3E;
              &#x3C;/div&#x3E;
              &#x3C;div class=&#x22;eduk-tab-nav__item&#x22;&#x3E;
                &#x3C;a class=&#x22;eduk-tab-nav__link&#x22;&#x3E;third&#x3C;/a&#x3E;
              &#x3C;/div&#x3E;
            &#x3C;/nav&#x3E;
          &#x3C;/div&#x3E;
        </code>
      </template>
    </Preview>
  </div>
</template>

<script>
import Tab from '@/UIKit/Tab/Tab.component.vue';
import Preview from '@/views/components/Preview/index.vue';

export default {
  name: 'BasicTab',
  components: {
    Tab,
    Preview,
  },
};
</script>
