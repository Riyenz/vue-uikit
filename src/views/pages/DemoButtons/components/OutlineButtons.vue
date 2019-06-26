<template>
  <div class="outline-buttons">
    <h3 class="eduk-u-text-muted">Outline Buttons</h3>
    <p>
      The standard button for most use cases. Also used as a Secondary Button.
    </p>
    <div class="demo-buttons__container">
      <Btn outline>Primary</Btn>
      <Btn variant="secondary" outline>Secondary</Btn>
      <Btn variant="tertiary" outline>Tertiary</Btn>
      <Btn variant="success" outline>Success</Btn>
      <Btn variant="danger" outline>Danger</Btn>
      <Btn variant="warning" outline>Warning</Btn>
      <Btn variant="light" outline>Light</Btn>
      <Btn variant="dark" outline>Dark</Btn>
      <pre class="code">
        <label>Vue</label>
        <code class="language-html">
          &#x3C;Btn outline&#x3E;Primary&#x3C;/Btn&#x3E;
          &#x3C;Btn variant=&#x22;secondary&#x22; outline&#x3E;Secondary&#x3C;/Btn&#x3E;
          &#x3C;Btn variant=&#x22;tertiary&#x22; outline&#x3E;Tertiary&#x3C;/Btn&#x3E;
          &#x3C;Btn variant=&#x22;success&#x22; outline&#x3E;Success&#x3C;/Btn&#x3E;
          &#x3C;Btn variant=&#x22;danger&#x22; outline&#x3E;Danger&#x3C;/Btn&#x3E;
          &#x3C;Btn variant=&#x22;warning&#x22; outline&#x3E;Warning&#x3C;/Btn&#x3E;
          &#x3C;Btn variant=&#x22;light&#x22; outline&#x3E;Light&#x3C;/Btn&#x3E;
          &#x3C;Btn variant=&#x22;dark&#x22; outline&#x3E;Dark&#x3C;/Btn&#x3E;
        </code>
      </pre>
      <pre class="code">
        <label>Vanilla</label>
        <code class="language-html">
          &lt;button class=&quot;eduk-btn eduk-btn-primary-outline&quot;&gt;Primary&lt;/button&gt;
          &lt;button class=&quot;eduk-btn eduk-btn-secondary-outline&quot;&gt;Secondary&lt;/button&gt;
          &lt;button class=&quot;eduk-btn eduk-btn-tertiary-outline&quot;&gt;Tertiary&lt;/button&gt;
          &lt;button class=&quot;eduk-btn eduk-btn-success-outline&quot;&gt;Success&lt;/button&gt;
          &lt;button class=&quot;eduk-btn eduk-btn-danger-outline&quot;&gt;Danger&lt;/button&gt;
          &lt;button class=&quot;eduk-btn eduk-btn-warning-outline&quot;&gt;Warning&lt;/button&gt;
          &lt;button class=&quot;eduk-btn eduk-btn-light-outline&quot;&gt;Light&lt;/button&gt;
          &lt;button class=&quot;eduk-btn eduk-btn-dark-outline&quot;&gt;Dark&lt;/button&gt;
        </code>
      </pre>
    </div>
  </div>
</template>

<script>
import Btn from '@/UIKit/Btn/Btn.component.vue';

export default {
  name: 'PrimaryButtons',
  components: {
    Btn,
  },
};
</script>
