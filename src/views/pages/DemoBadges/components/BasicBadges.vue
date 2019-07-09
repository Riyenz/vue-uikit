<template>
  <div class="basic-badges">
    <h3 class="eduk-h3 eduk-u-mb-3">Basic Badges</h3>
    <div class="demo-badges__container">
      <Preview>
        <template slot="example">
          <div>
            <Badge class="eduk-u-mr-1">Primary</Badge>
            <Badge class="eduk-u-mx-1" variant="secondary">Secondary</Badge>
            <Badge class="eduk-u-mx-1" variant="tertiary">Tertiary</Badge>
            <Badge class="eduk-u-mx-1" variant="success">Success</Badge>
            <Badge class="eduk-u-mx-1" variant="warning">Warning</Badge>
            <Badge class="eduk-u-mx-1" variant="danger">Danger</Badge>
            <Badge class="eduk-u-mx-1" variant="info">Info</Badge>
            <Badge class="eduk-u-mx-1" variant="light">Light</Badge>
            <Badge class="eduk-u-mx-1" variant="dark">Dark</Badge>
          </div>
        </template>
        <template slot="vue-code">
          <code class="language-html">
&#x3C;Badge&#x3E;Primary&#x3C;/Badge&#x3E;
&#x3C;Badge variant=&#x22;secondary&#x22;&#x3E;Secondary&#x3C;/Badge&#x3E;
&#x3C;Badge variant=&#x22;tertiary&#x22;&#x3E;Tertiary&#x3C;/Badge&#x3E;
&#x3C;Badge variant=&#x22;success&#x22;&#x3E;Success&#x3C;/Badge&#x3E;
&#x3C;Badge variant=&#x22;warning&#x22;&#x3E;Warning&#x3C;/Badge&#x3E;
&#x3C;Badge variant=&#x22;danger&#x22;&#x3E;Danger&#x3C;/Badge&#x3E;
&#x3C;Badge variant=&#x22;info&#x22;&#x3E;Info&#x3C;/Badge&#x3E;
&#x3C;Badge variant=&#x22;light&#x22;&#x3E;Light&#x3C;/Badge&#x3E;
&#x3C;Badge variant=&#x22;dark&#x22;&#x3E;Dark&#x3C;/Badge&#x3E;
          </code>
        </template>
        <template slot="vanilla-code">
          <code class="language-html">
&#x3C;div class=&#x22;eduk-badge eduk-badge-primary&#x22;&#x3E;Primary&#x3C;/div&#x3E;
&#x3C;div class=&#x22;eduk-badge eduk-badge-secondary&#x22;&#x3E;Secondary&#x3C;/div&#x3E;
&#x3C;div class=&#x22;eduk-badge eduk-badge-tertiary&#x22;&#x3E;Tertiary&#x3C;/div&#x3E;
&#x3C;div class=&#x22;eduk-badge eduk-badge-success&#x22;&#x3E;Success&#x3C;/div&#x3E;
&#x3C;div class=&#x22;eduk-badge eduk-badge-warning&#x22;&#x3E;Warning&#x3C;/div&#x3E;
&#x3C;div class=&#x22;eduk-badge eduk-badge-danger&#x22;&#x3E;Danger&#x3C;/div&#x3E;
&#x3C;div class=&#x22;eduk-badge eduk-badge-info&#x22;&#x3E;Info&#x3C;/div&#x3E;
&#x3C;div class=&#x22;eduk-badge eduk-badge-light&#x22;&#x3E;Light&#x3C;/div&#x3E;
&#x3C;div class=&#x22;eduk-badge eduk-badge-dark&#x22;&#x3E;Dark&#x3C;/div&#x3E;
          </code>
        </template>
      </Preview>
    </div>
  </div>
</template>

<script>
import Preview from '@/views/components/Preview/index.vue';
import Badge from '@/UIKit/Badge/Badge.component.vue';

export default {
  name: 'BasicBadges',
  components: {
    Preview,
    Badge,
  },
};
</script>
