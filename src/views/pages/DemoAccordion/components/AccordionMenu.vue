<template>
  <div>
    <pre class="code">
      <label>Vue</label>
      <code class="language-html">
        &lt;Accordion :content=&quot;list5&quot; :variant=&quot;variants.menu&quot;&gt;
          &lt;template slot=&quot;menu-1&quot;&gt;
            &lt;h3&gt;This is a customizable accordion using slot&lt;/h3&gt;
          &lt;/template&gt;
          &lt;template slot=&quot;menu-2&quot;&gt;
            &lt;h3&gt;But to use it, you need to change type=&quot;slot&quot; to make it work&lt;/h3&gt;
            &lt;p&gt;Afte that, you can use now any elements you want inside the slot component.&lt;/p&gt;
            &lt;button class=&quot;eduk-btn eduk-btn-primary&quot;&gt;Like this button&lt;/button&gt;
          &lt;/template&gt;
          &lt;template slot=&quot;menu-3&quot;&gt;
            &lt;h3&gt;Then the name of the slot here should match the name in your list&lt;/h3&gt;
          &lt;/template&gt;
          &lt;template slot=&quot;menu-4&quot;&gt;
            &lt;h3&gt;This is a customizable content 4&lt;/h3&gt;
          &lt;/template&gt;
        &lt;/Accordion&gt;
      </code>
    </pre>
    <pre class="code">
      <label>Vanilla</label>
      <code class="language-html">
        &lt;div class=&quot;eduk-accordion eduk-accordion--menu eduk-accordion--secondary&quot;&gt;
          &lt;div class=&quot;eduk-accordion__container&quot;&gt;
            &lt;div class=&quot;eduk-accordion__list&quot;&gt;
              &lt;div class=&quot;eduk-accordion__head has-menu&quot;&gt;
                &lt;div&gt;&lt;img src=&quot;https://image.flaticon.com/icons/svg/265/265738.svg&quot;
                    class=&quot;eduk-accordion__icon eduk-accordion__icon--large&quot;&gt;
                  &lt;h3 class=&quot;eduk-accordion__title&quot;&gt;Sample Content&lt;/h3&gt;
                &lt;/div&gt;
                &lt;div&gt;
                  &lt;div class=&quot;eduk-accordion__arrow eduk-accordion__arrow--up&quot;&gt;&lt;/div&gt;
                &lt;/div&gt;
              &lt;/div&gt;
              &lt;!----&gt;
            &lt;/div&gt;
            &lt;div class=&quot;eduk-accordion__list active&quot;&gt;
              &lt;div class=&quot;eduk-accordion__head has-menu&quot;&gt;
                &lt;div&gt;&lt;img src=&quot;https://image.flaticon.com/icons/svg/265/265738.svg&quot;
                    class=&quot;eduk-accordion__icon eduk-accordion__icon--large&quot;&gt;
                  &lt;h3 class=&quot;eduk-accordion__title&quot;&gt;Sample Content 2&lt;/h3&gt;
                &lt;/div&gt;
                &lt;div&gt;
                  &lt;div class=&quot;eduk-accordion__arrow eduk-accordion__arrow--up eduk-accordion__arrow--down&quot;&gt;&lt;/div&gt;
                &lt;/div&gt;
              &lt;/div&gt;
              &lt;div class=&quot;eduk-accordion__body&quot;&gt;
                &lt;div class=&quot;eduk-accordion__content&quot;&gt;
                  &lt;h3&gt;But to use it, you need to change type=&quot;slot&quot; to make it work&lt;/h3&gt;
                  &lt;p&gt;Afte that, you can use now any elements you want inside the slot component.&lt;/p&gt;&lt;button
                    class=&quot;eduk-btn eduk-btn-primary&quot;&gt;Like this button&lt;/button&gt;
                &lt;/div&gt;
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
  name: 'AccordionMenu',
};
</script>

