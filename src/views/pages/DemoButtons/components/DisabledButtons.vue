<template>
  <div class="primary-buttons">
    <h3 class="eduk-text-muted">Disabled</h3>
    <div class="demo-buttons__container">
      <Btn text="Disabled" disabled/>
      <pre class="code">
        <label>Vue</label>
        <code class="language-html">
          &lt;Btn text=&quot;Disabled&quot; disabled/&gt;
        </code>
      </pre>
      <pre class="code">
        <label>Vanilla</label>
        <code class="language-html">
          &lt;button class=&quot;eduk-btn eduk-btn-primary disabled&quot;&gt;Disabled&lt;/button&gt;
        </code>
      </pre>
    </div>
  </div>
</template>

<script>
import Btn from '@/UIKit/Btn/Btn.vue';

export default {
  name: 'DisabledButtons',
  components: {
    Btn,
  },
};
</script>
