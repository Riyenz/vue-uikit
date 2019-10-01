<template>
  <span>
    <h3 class="eduk-h3 eduk-u-mb-3">Loading</h3>
    <Preview>
      <template slot="example">
        <div>
          <Accordion class="eduk-u-mb-3" loading>
          </Accordion>
        </div>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &lt;Accordion loading&gt;&lt;/Accordion&gt;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &lt;div class=&quot;eduk-accordion&quot;&gt;
            &lt;div class=&quot;eduk-accordion-item eduk-accordion-item--loading&quot;&gt;
              &lt;div class=&quot;eduk-accordion-item__header&quot;&gt;
                &lt;i class=&quot;fa fa-caret-right eduk-accordion-item__arrow&quot;&gt;&lt;/i&gt;
                &lt;i class=&quot;fa fa-caret-down eduk-accordion-item__arrow eduk-u-d-none&quot;&gt;&lt;/i&gt;
                &lt;h6 class=&quot;eduk-accordion-item__header-title eduk-u-m-0&quot;&gt;&lt;/h6&gt;
              &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class=&quot;eduk-accordion-item eduk-accordion-item--loading&quot;&gt;
              &lt;div class=&quot;eduk-accordion-item__header&quot;&gt;
                &lt;i class=&quot;fa fa-caret-right eduk-accordion-item__arrow eduk-u-d-none&quot;&gt;&lt;/i&gt;
                &lt;i class=&quot;fa fa-caret-down eduk-accordion-item__arrow&quot;&gt;&lt;/i&gt;
                &lt;h6 class=&quot;eduk-accordion-item__header-title eduk-u-m-0&quot;&gt;&lt;/h6&gt;
              &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class=&quot;eduk-accordion-item eduk-accordion-item--loading&quot;&gt;
              &lt;div class=&quot;eduk-accordion-item__header&quot;&gt;
                &lt;i class=&quot;fa fa-caret-right eduk-accordion-item__arrow eduk-u-d-none&quot;&gt;&lt;/i&gt;
                &lt;i class=&quot;fa fa-caret-down eduk-accordion-item__arrow&quot;&gt;&lt;/i&gt;
                &lt;h6 class=&quot;eduk-accordion-item__header-title eduk-u-m-0&quot;&gt;&lt;/h6&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        </code>
      </template>
    </Preview>
  </span>
</template>

<script>
import Accordion from '@/UIKit/Accordion/Accordion.component.vue';
import Preview from '@/views/components/Preview/index.vue';

export default {
  name: 'AccordionLoading',
  components: {
    Accordion,
    Preview,
  },
};
</script>
