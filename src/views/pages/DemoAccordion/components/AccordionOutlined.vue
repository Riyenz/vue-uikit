<template>
  <div>
    <pre class="code">
      <label>Vue</label>
      <code class="language-html">
        &#x3C;Accordion :content="list2" :variant="variants.outlined"&#x3E;&#x3C;/Accordion&#x3E;
      </code>
    </pre>
    <pre class="code">
      <label>Vanilla</label>
      <code class="language-html">
        &lt;div class=&quot;eduk-accordion eduk-accordion--outlined&quot;&gt;
          &lt;div class=&quot;eduk-accordion__container&quot;&gt;
            &lt;div class=&quot;eduk-accordion__list&quot;&gt;
              &lt;div class=&quot;eduk-accordion__head&quot;&gt;
                &lt;div class=&quot;eduk-accordion__arrow&quot;&gt;&lt;/div&gt;
                &lt;h3 class=&quot;eduk-accordion__title&quot;&gt;Sample Content&lt;/h3&gt;
              &lt;/div&gt;
              &lt;div class=&quot;eduk-accordion__body&quot;&gt;
              ...
              &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class=&quot;eduk-accordion__list&quot;&gt;
              &lt;div class=&quot;eduk-accordion__head&quot;&gt;
                &lt;div class=&quot;eduk-accordion__arrow&quot;&gt;&lt;/div&gt;
                &lt;h3 class=&quot;eduk-accordion__title&quot;&gt;Sample Content 2&lt;/h3&gt;
              &lt;/div&gt;
              &lt;div class=&quot;eduk-accordion__body&quot;&gt;
              ...
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'AccordionOutlined',
};
</script>
