<template>
  <div class="primary-buttons">
    <h3 class="eduk-text-muted">Sizes</h3>
    <div class="demo-buttons__container">
      <Btn text="Small" size="sm"/>
      <Btn text="Default"/>
      <Btn text="Large" size="lg"/>
      <pre class="code">
        <label>Vue</label>
        <code class="language-html">
          &lt;Btn text=&quot;Small&quot; size=&quot;sm&quot;/&gt;
          &lt;Btn text=&quot;Default&quot;/&gt;
          &lt;Btn text=&quot;Large&quot; size=&quot;lg&quot;/&gt;
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
import Btn from '@/UIKit/Btn/Btn.vue';

export default {
  name: 'SizeButtons',
  components: {
    Btn,
  },
};
</script>
