<template>
  <span>
    <h3 class="eduk-h3 eduk-u-mb-3">Loading</h3>
    <Preview>
      <template slot="example">
        <div>
          <Btn loading/>
        </div>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &lt;Btn loading/&gt;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &lt;button class=&quot;eduk-btn eduk-btn--primary eduk-btn--loading&quot;&gt;
            &lt;span&gt;&lt;/span&gt;
          &lt;/button&gt;
        </code>
      </template>
    </Preview>
  </span>
</template>

<script>
import Btn from '@/UIKit/Btn/Btn.component.vue';
import Preview from '@/views/components/Preview/index.vue';

export default {
  name: 'ButtonLoading',
  components: {
    Btn,
    Preview,
  },
};
</script>
