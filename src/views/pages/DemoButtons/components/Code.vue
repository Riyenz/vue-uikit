<template>
  <div>
    <h2 class="eduk-h2 eduk-u-mb-3">Button</h2>
    <p class="eduk-text eduk-u-text-semi-bold eduk-u-mb-4">
      Allow users to take actions, and make choices, with a single click or
      tap.<br />Buttons can contain a combination of a clear label and an icon
      while links are usually text.
    </p>
    <section class="well">
      <Btn class="eduk-u-mr-1">Primary</Btn>
      <Btn outline>Outlined</Btn>
    </section>
    <h3 class="eduk-h3 eduk-u-mb-3">HTML Structure</h3>
    <section class="well">
      <code class="language-html">
        &#x3C;Btn&#x3E;Primary&#x3C;/Btn&#x3E;
      </code>
      <br />
      <code class="language-html">
        &#x3C;Btn outline&#x3E;Outlined&#x3C;/Btn&#x3E;
      </code>
    </section>
    <h3 class="eduk-h3 eduk-u-mb-3">Types</h3>
    <h5 class="eduk-h5 eduk-u-text-uppercase eduk-u-text-muted eduk-u-mb-2 eduk-u-text-semi-bold">contained (highest emphasis)</h5>
    <p class="eduk-text eduk-u-text-semi-bold eduk-u-mb-4">
      Contained buttons have more emphasis, as they use a color fill and
      sometimes shadow (depends on the use case). Usually used for <a>primary
      buttons</a>.
    </p>
    <Preview>
      <template slot="example">
        <div>
          <Btn class="eduk-u-mr-1">Primary</Btn>
          <Btn class="eduk-u-mr-1" variant="secondary">Secondary</Btn>
          <Btn class="eduk-u-mr-1" variant="tertiary">Tertiary</Btn>
          <Btn class="eduk-u-mr-1" variant="success">Success</Btn>
          <Btn class="eduk-u-mr-1" variant="danger">Danger</Btn>
          <Btn class="eduk-u-mr-1" variant="warning">Warning</Btn>
          <Btn class="eduk-u-mr-1" variant="light">Light</Btn>
          <Btn variant="dark">Dark</Btn>
        </div>
      </template>
      <template slot="vue-code">
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
      </template>
      <template slot="vanilla-code">
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
      </template>
    </Preview>
    <h5 class="eduk-h5 eduk-u-text-uppercase eduk-u-text-muted eduk-u-mb-2 eduk-u-text-semi-bold">Outlined (Medium Emphasis)</h5>
    <p class="eduk-text eduk-u-text-semi-bold eduk-u-mb-4">
      Outlined buttons are used for more emphasis than text buttons due
      to the stroke or ghost outline used. Typically indicate actions that
      are important but not the primary action on a page. Usually used for
      normal state of <a>secondary buttons</a>.
    </p>
    <Preview>
      <template slot="example">
        <div>
          <Btn class="eduk-u-mr-1" outline>Primary</Btn>
          <Btn class="eduk-u-mr-1" variant="secondary" outline>Secondary</Btn>
          <Btn class="eduk-u-mr-1" variant="tertiary" outline>Tertiary</Btn>
          <Btn class="eduk-u-mr-1" variant="success" outline>Success</Btn>
          <Btn class="eduk-u-mr-1" variant="danger" outline>Danger</Btn>
          <Btn class="eduk-u-mr-1" variant="warning" outline>Warning</Btn>
          <Btn class="eduk-u-mr-1" variant="light" outline>Light</Btn>
          <Btn variant="dark" outline>Dark</Btn>
        </div>
      </template>
      <template slot="vue-code">
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
      </template>
      <template slot="vanilla-code">
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
      </template>
    </Preview>
    <h3 class="eduk-h3 eduk-u-mb-3">Variations</h3>
    <h5 class="eduk-h5 eduk-u-text-uppercase eduk-u-text-muted eduk-u-mb-2 eduk-u-text-semi-bold">Primary Buttons (Eduk-PrimaryBtn)</h5>
    <p class="eduk-text eduk-u-text-semi-bold eduk-u-mb-4">
      To draw attention to an action on an application form, or highlight the
      strongest call to action on a page. Primary buttons should only appear
      once per screen. Not every screen requires a primary button.
    </p>
    <Preview>
      <template slot="example">
        <div>
          <Btn>Normal</Btn>
        </div>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &#x3C;Btn&#x3E;Primary&#x3C;/Btn&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &lt;button class=&quot;eduk-btn eduk-btn-primary&quot;&gt;Primary&lt;/button&gt;
        </code>
      </template>
    </Preview>
    <h3 class="eduk-h3 eduk-u-mb-3">Sizes</h3>
    <Preview>
      <template slot="example">
        <div>
          <Btn class="eduk-u-mr-1" size="sm">Small</Btn>
          <Btn class="eduk-u-mr-1">Default</Btn>
          <Btn size="lg">Large</Btn>
        </div>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &#x3C;Btn size=&#x22;sm&#x22;&#x3E;Small&#x3C;/Btn&#x3E;
          &#x3C;Btn&#x3E;Default&#x3C;/Btn&#x3E;
          &#x3C;Btn size=&#x22;lg&#x22;&#x3E;Large&#x3C;/Btn&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &lt;button class=&quot;eduk-btn eduk-btn-primary eduk-btn--sm&quot;&gt;Small&lt;/button&gt;
          &lt;button class=&quot;eduk-btn eduk-btn-primary&quot;&gt;Default&lt;/button&gt;
          &lt;button class=&quot;eduk-btn eduk-btn-primary eduk-btn--lg&quot;&gt;Large&lt;/button&gt;
        </code>
      </template>
    </Preview>
    <h3 class="eduk-h3 eduk-u-mb-3">Disabled</h3>
    <Preview>
      <template slot="example">
        <div>
          <Btn disabled>Disabled</Btn>
        </div>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &#x3C;Btn disabled&#x3E;Disabled&#x3C;/Btn&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &lt;button class=&quot;eduk-btn eduk-btn-primary disabled&quot;&gt;Disabled&lt;/button&gt;
        </code>
      </template>
    </Preview>
    <h3 class="eduk-h3 eduk-u-mb-3">Block</h3>
    <Preview>
      <template slot="example">
        <div>
          <Btn block>Block</Btn>
        </div>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &#x3C;Btn block&#x3E;Block&#x3C;/Btn&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &lt;button class=&quot;eduk-btn eduk-btn-primary eduk-btn--block&quot;&gt;Block&lt;/button&gt;
        </code>
      </template>
    </Preview>
    <h3 class="eduk-h3 eduk-u-mb-3">Link</h3>
    <Preview>
      <template slot="example">
        <div>
          <Btn link="#">Link</Btn>
        </div>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &#x3C;Btn link=&quot;#&quot;&#x3E;Link&#x3C;/Btn&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &lt;a href=&quot;#&quot; class=&quot;eduk-btn eduk-btn-primary&quot;&gt;Link&lt;/a&gt;
        </code>
      </template>
    </Preview>
  </div>
</template>

<script>
import Btn from '@/UIKit/Btn/Btn.component.vue';
import Preview from '@/views/components/Preview/index.vue';

export default {
  name: 'Code',
  components: {
    Btn,
    Preview,
  },
};
</script>
