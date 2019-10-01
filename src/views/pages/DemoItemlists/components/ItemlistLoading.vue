<template>
  <div class="itemlist-loading">
    <h3 class="eduk-h3 eduk-u-mb-3">Item List Loading</h3>
    <Preview wide>
      <template slot="example">
        <Itemlist loading>
        </Itemlist>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &lt;Itemlist loading&gt;
          &lt;/Itemlist&gt;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &lt;div class=&quot;eduk-itemlist eduk-itemlist--loading&quot;&gt;
            &lt;div class=&quot;eduk-itemlist__img&quot;&gt;&lt;/div&gt;
            &lt;div class=&quot;eduk-itemlist__header&quot;&gt;&lt;/div&gt;
            &lt;div class=&quot;eduk-itemlist__description&quot;&gt;&lt;/div&gt;
            &lt;div class=&quot;eduk-itemlist__status&quot;&gt;&lt;/div&gt;
            &lt;div class=&quot;eduk-itemlist__actions&quot;&gt;&lt;/div&gt;
          &lt;/div&gt;
        </code>
      </template>
    </Preview>
  </div>
</template>

<script>
import Preview from '@/views/components/Preview/index.vue';
import Itemlist from '@/UIKit/Itemlist/Itemlist.component.vue';

export default {
  name: 'ItemlistLoading',
  components: {
    Preview,
    Itemlist,
  },
};
</script>
