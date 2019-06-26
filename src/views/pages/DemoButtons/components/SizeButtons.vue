<template>
  <div class="primary-buttons">
    <h3 class="eduk-u-text-muted">Sizes</h3>
    <div class="demo-buttons__container">
      <Btn size="sm">Small</Btn>
      <Btn>Default</Btn>
      <Btn size="lg">Large</Btn>
      <pre class="code">
        <label>Vue</label>
        <code class="language-html">
          &#x3C;Btn size=&#x22;sm&#x22;&#x3E;Small&#x3C;/Btn&#x3E;
          &#x3C;Btn&#x3E;Default&#x3C;/Btn&#x3E;
          &#x3C;Btn size=&#x22;lg&#x22;&#x3E;Large&#x3C;/Btn&#x3E;
        </code>
      </pre>
      <pre class="code">
        <label>Vanilla</label>
        <code class="language-html">
          &lt;button class=&quot;eduk-btn eduk-btn-primary eduk-btn--sm&quot;&gt;Small&lt;/button&gt;
          &lt;button class=&quot;eduk-btn eduk-btn-primary&quot;&gt;Default&lt;/button&gt;
          &lt;button class=&quot;eduk-btn eduk-btn-primary eduk-btn--lg&quot;&gt;Large&lt;/button&gt;
        </code>
      </pre>
    </div>
  </div>
</template>

<script>
import Btn from '@/UIKit/Btn/Btn.component.vue';

export default {
  name: 'SizeButtons',
  components: {
    Btn,
  },
};
</script>
