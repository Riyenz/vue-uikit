<template>
  <div class="primary-buttons">
    <h3 class="eduk-u-text-muted">Action Buttons</h3>
    <p>
      To draw attention to an action on an application form,
      or highlight the strongest call to action on a page.
      Primary buttons should only appear once per screen.
      Not every screen requires a primary button.
    </p>
    <div class="demo-buttons__container">
      <Btn>Primary</Btn>
      <Btn variant="secondary">Secondary</Btn>
      <Btn variant="tertiary">Tertiary</Btn>
      <Btn variant="success">Success</Btn>
      <Btn variant="danger">Danger</Btn>
      <Btn variant="warning">Warning</Btn>
      <Btn variant="light">Light</Btn>
      <Btn variant="dark">Dark</Btn>
      <pre class="code">
        <label>Vue</label>
        <code class="language-html">
          &#x3C;Btn&#x3E;Primary&#x3C;/Btn&#x3E;
          &#x3C;Btn variant=&#x22;secondary&#x22;&#x3E;Secondary&#x3C;/Btn&#x3E;
          &#x3C;Btn variant=&#x22;tertiary&#x22;&#x3E;Tertiary&#x3C;/Btn&#x3E;
          &#x3C;Btn variant=&#x22;success&#x22;&#x3E;Success&#x3C;/Btn&#x3E;
          &#x3C;Btn variant=&#x22;danger&#x22;&#x3E;Danger&#x3C;/Btn&#x3E;
          &#x3C;Btn variant=&#x22;warning&#x22;&#x3E;Warning&#x3C;/Btn&#x3E;
          &#x3C;Btn variant=&#x22;light&#x22;&#x3E;Light&#x3C;/Btn&#x3E;
          &#x3C;Btn variant=&#x22;dark&#x22;&#x3E;Dark&#x3C;/Btn&#x3E;
        </code>
      </pre>
      <pre class="code">
        <label>Vanilla</label>
        <code class="language-html">
          &lt;button class=&quot;eduk-btn eduk-btn-primary&quot;&gt;Primary&lt;/button&gt;
          &lt;button class=&quot;eduk-btn eduk-btn-secondary&quot;&gt;Secondary&lt;/button&gt;
          &lt;button class=&quot;eduk-btn eduk-btn-tertiary&quot;&gt;Tertiary&lt;/button&gt;
          &lt;button class=&quot;eduk-btn eduk-btn-success&quot;&gt;Success&lt;/button&gt;
          &lt;button class=&quot;eduk-btn eduk-btn-danger&quot;&gt;Danger&lt;/button&gt;
          &lt;button class=&quot;eduk-btn eduk-btn-warning&quot;&gt;Warning&lt;/button&gt;
          &lt;button class=&quot;eduk-btn eduk-btn-light&quot;&gt;Light&lt;/button&gt;
          &lt;button class=&quot;eduk-btn eduk-btn-dark&quot;&gt;Dark&lt;/button&gt;
        </code>
      </pre>
    </div>
  </div>
</template>

<script>
import Btn from '@/UIKit/Btn/Btn.component.vue';

export default {
  name: 'ActionButtons',
  components: {
    Btn,
  },
};
</script>
