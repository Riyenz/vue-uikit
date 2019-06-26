<template>
  <div class="basic-badges">
    <h3 class="eduk-u-text-muted">Dot Badges</h3>
    <div class="demo-badges__container">
      <Badge class="eduk-u-mr-1"></Badge>
      <Badge class="eduk-u-mx-1" variant="secondary"></Badge>
      <Badge class="eduk-u-mx-1" variant="tertiary"></Badge>
      <Badge class="eduk-u-mx-1" variant="success"></Badge>
      <Badge class="eduk-u-mx-1" variant="warning"></Badge>
      <Badge class="eduk-u-mx-1" variant="danger"></Badge>
      <Badge class="eduk-u-mx-1" variant="info"></Badge>
      <Badge class="eduk-u-mx-1" variant="light"></Badge>
      <Badge class="eduk-u-mx-1" variant="dark"></Badge>

      <pre class="code">
        <label>Vue</label>
        <code class="language-html">
          &#x3C;Badge&#x3E;&#x3C;/Badge&#x3E;
          &#x3C;Badge variant=&#x22;secondary&#x22;&#x3E;&#x3C;/Badge&#x3E;
          &#x3C;Badge variant=&#x22;tertiary&#x22;&#x3E;&#x3C;/Badge&#x3E;
          &#x3C;Badge variant=&#x22;success&#x22;&#x3E;&#x3C;/Badge&#x3E;
          &#x3C;Badge variant=&#x22;warning&#x22;&#x3E;&#x3C;/Badge&#x3E;
          &#x3C;Badge variant=&#x22;danger&#x22;&#x3E;&#x3C;/Badge&#x3E;
          &#x3C;Badge variant=&#x22;info&#x22;&#x3E;&#x3C;/Badge&#x3E;
          &#x3C;Badge variant=&#x22;light&#x22;&#x3E;&#x3C;/Badge&#x3E;
          &#x3C;Badge variant=&#x22;dark&#x22;&#x3E;&#x3C;/Badge&#x3E;
        </code>
      </pre>
      <pre class="code">
        <label>Vanilla</label>
        <code class="language-html">
          &#x3C;div class=&#x22;eduk-badge eduk-badge-primary&#x22;&#x3E;&#x3C;/div&#x3E;
          &#x3C;div class=&#x22;eduk-badge eduk-badge-secondary&#x22;&#x3E;&#x3C;/div&#x3E;
          &#x3C;div class=&#x22;eduk-badge eduk-badge-tertiary&#x22;&#x3E;&#x3C;/div&#x3E;
          &#x3C;div class=&#x22;eduk-badge eduk-badge-success&#x22;&#x3E;&#x3C;/div&#x3E;
          &#x3C;div class=&#x22;eduk-badge eduk-badge-warning&#x22;&#x3E;&#x3C;/div&#x3E;
          &#x3C;div class=&#x22;eduk-badge eduk-badge-danger&#x22;&#x3E;&#x3C;/div&#x3E;
          &#x3C;div class=&#x22;eduk-badge eduk-badge-info&#x22;&#x3E;&#x3C;/div&#x3E;
          &#x3C;div class=&#x22;eduk-badge eduk-badge-light&#x22;&#x3E;&#x3C;/div&#x3E;
          &#x3C;div class=&#x22;eduk-badge eduk-badge-dark&#x22;&#x3E;&#x3C;/div&#x3E;
        </code>
      </pre>
    </div>
  </div>
</template>

<script>
import Badge from '@/UIKit/Badge/Badge.component.vue';

export default {
  name: 'BasicBadges',
  components: {
    Badge,
  },
};
</script>
