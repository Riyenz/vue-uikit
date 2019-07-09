<template>
  <div>
    <pre class="code">
      <label>Vue</label>
      <code class="language-html">
        &#x3C;Accordion :content="list4" :variant="variants.themed" theme="primary"&#x3E;&#x3C;/Accordion&#x3E;
      </code>
    </pre>
    <pre class="code">
        <label>Vanilla</label>
        <code class="language-html">
          &lt;div class=&quot;eduk-accordion eduk-accordion--themed eduk-accordion--primary&quot;&gt;
            &lt;div class=&quot;eduk-accordion__container&quot;&gt;
              &lt;div class=&quot;eduk-accordion__list&quot;&gt;
                &lt;div class=&quot;eduk-accordion__head&quot;&gt;
                  &lt;h3 class=&quot;eduk-accordion__title&quot;&gt;Sample Content&lt;/h3&gt;
                  &lt;div class=&quot;eduk-accordion__arrow eduk-accordion__arrow--up&quot;&gt;&lt;/div&gt;
                &lt;/div&gt;
                &lt;div class=&quot;eduk-accordion__body&quot;&gt;...&lt;/div&gt;
              &lt;/div&gt;
              &lt;div class=&quot;eduk-accordion__list active&quot;&gt;
                &lt;div class=&quot;eduk-accordion__head&quot;&gt;
                  &lt;h3 class=&quot;eduk-accordion__title&quot;&gt;Sample Content&lt;/h3&gt;
                  &lt;div class=&quot;eduk-accordion__arrow eduk-accordion__arrow--up eduk-accordion__arrow--down&quot;&gt;&lt;/div&gt;
                &lt;/div&gt;
                &lt;div class=&quot;eduk-accordion__body&quot;&gt;
                  &lt;div class=&quot;eduk-accordion__content&quot;&gt;
                    &lt;div class=&quot;eduk-accordion__sub&quot;&gt;
                      &lt;div class=&quot;eduk-accordion__list has-sub active&quot;&gt;
                        &lt;div class=&quot;eduk-accordion__head&quot;&gt;
                          &lt;div class=&quot;eduk-accordion__arrow eduk-accordion__arrow--down&quot;&gt;&lt;/div&gt;
                          &lt;h3 class=&quot;eduk-accordion__title&quot;&gt;Sample Content 2&lt;/h3&gt;
                        &lt;/div&gt;
                        &lt;div class=&quot;eduk-accordion__body&quot;&gt;&lt;span&gt;hello&lt;/span&gt;&lt;/div&gt;
                      &lt;/div&gt;
                      &lt;div class=&quot;eduk-accordion__list has-sub&quot;&gt;
                        &lt;div class=&quot;eduk-accordion__head&quot;&gt;
                          &lt;div class=&quot;eduk-accordion__arrow&quot;&gt;&lt;/div&gt;
                          &lt;h3 class=&quot;eduk-accordion__title&quot;&gt;Sample Content 2&lt;/h3&gt;
                        &lt;/div&gt;
                        &lt;div class=&quot;eduk-accordion__body&quot;&gt;...&lt;/div&gt;
                      &lt;/div&gt;
                      &lt;div class=&quot;eduk-accordion__list has-sub&quot;&gt;
                        &lt;div class=&quot;eduk-accordion__head&quot;&gt;
                          &lt;div class=&quot;eduk-accordion__arrow&quot;&gt;&lt;/div&gt;
                          &lt;h3 class=&quot;eduk-accordion__title&quot;&gt;Sample Content 2&lt;/h3&gt;
                        &lt;/div&gt;
                        &lt;div class=&quot;eduk-accordion__body&quot;&gt;...&lt;/div&gt;
                      &lt;/div&gt;
                    &lt;/div&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
              &lt;/div&gt;
              &lt;div class=&quot;eduk-accordion__list&quot;&gt;
                &lt;div class=&quot;eduk-accordion__head&quot;&gt;
                  &lt;h3 class=&quot;eduk-accordion__title&quot;&gt;Sample Content 2&lt;/h3&gt;
                  &lt;div class=&quot;eduk-accordion__arrow eduk-accordion__arrow--up&quot;&gt;&lt;/div&gt;
                &lt;/div&gt;
                &lt;div class=&quot;eduk-accordion__body&quot;&gt;...&lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        </code>
      </pre>
  </div>
</template>
<script>

export default {
  name: 'AccordionNested',
};
</script>

