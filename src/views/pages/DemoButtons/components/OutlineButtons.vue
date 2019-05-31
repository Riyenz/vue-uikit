<template>
  <div class="outline-buttons">
    <h3 class="text-muted">Outline Buttons</h3>
    <p>
      The standard button for most use cases. Also used as a Secondary Button.
    </p>
    <div class="demo-buttons__container">
      <Btn text="Primary" outline/>
      <Btn text="Secondary" variant="secondary" outline/>
      <Btn text="Tertiary" variant="tertiary" outline/>
      <Btn text="Success" variant="success" outline/>
      <Btn text="Danger" variant="danger" outline/>
      <Btn text="Warning" variant="warning" outline/>
      <Btn text="Light" variant="light" outline/>
      <Btn text="Dark" variant="dark" outline/>
      <pre class="code">
        <label>Vue</label>
        <code class="language-html">
          &lt;Btn text=&quot;Primary&quot; outline/&gt;
          &lt;Btn text=&quot;Secondary&quot; variant=&quot;secondary&quot; outline/&gt;
          &lt;Btn text=&quot;Tertiary&quot; variant=&quot;tertiary&quot; outline/&gt;
          &lt;Btn text=&quot;Success&quot; variant=&quot;success&quot; outline/&gt;
          &lt;Btn text=&quot;Danger&quot; variant=&quot;danger&quot; outline/&gt;
          &lt;Btn text=&quot;Warning&quot; variant=&quot;warning&quot; outline/&gt;
          &lt;Btn text=&quot;Light&quot; variant=&quot;light&quot; outline/&gt;
          &lt;Btn text=&quot;Dark&quot; variant=&quot;dark&quot; outline/&gt;
        </code>
      </pre>
      <pre class="code">
        <label>Vanilla</label>
        <code class="language-html">
          &lt;button class=&quot;eduk-btn eduk-btn-primary--outline&quot;&gt;Primary&lt;/button&gt;
          &lt;button class=&quot;eduk-btn eduk-btn-secondary--outline&quot;&gt;Secondary&lt;/button&gt;
          &lt;button class=&quot;eduk-btn eduk-btn-tertiary--outline&quot;&gt;Tertiary&lt;/button&gt;
          &lt;button class=&quot;eduk-btn eduk-btn-success--outline&quot;&gt;Success&lt;/button&gt;
          &lt;button class=&quot;eduk-btn eduk-btn-danger--outline&quot;&gt;Danger&lt;/button&gt;
          &lt;button class=&quot;eduk-btn eduk-btn-warning--outline&quot;&gt;Warning&lt;/button&gt;
          &lt;button class=&quot;eduk-btn eduk-btn-light--outline&quot;&gt;Light&lt;/button&gt;
          &lt;button class=&quot;eduk-btn eduk-btn-dark--outline&quot;&gt;Dark&lt;/button&gt;
        </code>
      </pre>
    </div>
  </div>
</template>

<script>
import btnMixin from '@/UIKit/Btn/btnMixin';

export default {
  name: 'PrimaryButtons',
  mixins: [btnMixin],
};
</script>

<style lang="scss" scoped>
.demo-buttons {
  &__container * {
    margin-right: 3px;
    margin-bottom: 3px;
  }
}
</style>
