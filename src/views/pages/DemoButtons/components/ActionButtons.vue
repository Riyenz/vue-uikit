<template>
  <div class="primary-buttons">
    <h3 class="eduk-text-muted">Action Buttons</h3>
    <p>
      To draw attention to an action on an application form,
      or highlight the strongest call to action on a page.
      Primary buttons should only appear once per screen.
      Not every screen requires a primary button.
    </p>
    <div class="demo-buttons__container">
      <Btn text="Primary"/>
      <Btn text="Secondary" variant="secondary"/>
      <Btn text="Tertiary" variant="tertiary"/>
      <Btn text="Success" variant="success"/>
      <Btn text="Danger" variant="danger"/>
      <Btn text="Warning" variant="warning"/>
      <Btn text="Light" variant="light"/>
      <Btn text="Dark" variant="dark"/>
      <pre class="code">
        <label>Vue</label>
        <code class="language-html">
          &lt;Btn text=&quot;Primary&quot;/&gt;
          &lt;Btn text=&quot;Secondary&quot; variant=&quot;secondary&quot;/&gt;
          &lt;Btn text=&quot;Tertiary&quot; variant=&quot;tertiary&quot;/&gt;
          &lt;Btn text=&quot;Success&quot; variant=&quot;success&quot;/&gt;
          &lt;Btn text=&quot;Danger&quot; variant=&quot;danger&quot;/&gt;
          &lt;Btn text=&quot;Warning&quot; variant=&quot;warning&quot;/&gt;
          &lt;Btn text=&quot;Light&quot; variant=&quot;light&quot;/&gt;
          &lt;Btn text=&quot;Dark&quot; variant=&quot;dark&quot;/&gt;
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
import Btn from '@/UIKit/Btn/Btn.vue';

export default {
  name: 'ActionButtons',
  components: {
    Btn,
  },
};
</script>
