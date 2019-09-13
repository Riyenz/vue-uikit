<template>
  <div>
    <h3 class="eduk-h3 eduk-u-mb-3">Basic</h3>
    <Preview>
      <template slot="example">
        <div>
          <h6 class="eduk-h6 eduk-u-mb-2">Normal State</h6>
          <InputField placeholder="Label helper" />
          <h6 class="eduk-h6 eduk-u-mb-2">Error State</h6>
          <InputField placeholder="Label helper" feedback="error" />
          <h6 class="eduk-h6 eduk-u-mb-2">Success State</h6>
          <InputField placeholder="Label helper" feedback="success" />
          <h6 class="eduk-h6 eduk-u-mb-2">Disabled State</h6>
          <InputField placeholder="Label helper" disabled />
        </div>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &lt;InputField placeholder=&quot;Label helper&quot; /&gt;
          &lt;InputField placeholder=&quot;Label helper&quot; feedback=&quot;error&quot; /&gt;
          &lt;InputField placeholder=&quot;Label helper&quot; feedback=&quot;success&quot; /&gt;
          &lt;InputField placeholder=&quot;Label helper&quot; disabled /&gt;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &lt;div class=&quot;eduk-input&quot;&gt;
            &lt;div class=&quot;eduk-input__flex&quot;&gt;
              &lt;input type=&quot;text&quot; placeholder=&quot;Label helper&quot; class=&quot;eduk-input__field&quot;&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          &lt;div class=&quot;eduk-input eduk-input--error&quot;&gt;
            &lt;div class=&quot;eduk-input__flex&quot;&gt;
              &lt;div class=&quot;eduk-input__icon&quot;&gt;
                &lt;input type=&quot;text&quot; placeholder=&quot;Label helper&quot; class=&quot;eduk-input__field pr&quot;&gt;
                &lt;span class=&quot;fa-validation&quot;&gt;
                  &lt;i class=&quot;fas fa-times&quot;&gt;&lt;/i&gt;
                &lt;/span&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          &lt;div class=&quot;eduk-input eduk-input--success&quot;&gt;
            &lt;div class=&quot;eduk-input__flex&quot;&gt;
              &lt;div class=&quot;eduk-input__icon&quot;&gt;
                &lt;input type=&quot;text&quot; placeholder=&quot;Label helper&quot; class=&quot;eduk-input__field pr&quot;&gt;
                &lt;span class=&quot;fa-validation&quot;&gt;
                  &lt;i class=&quot;fas fa-check&quot;&gt;&lt;/i&gt;
                &lt;/span&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          &lt;div class=&quot;eduk-input&quot;&gt;
            &lt;div class=&quot;eduk-input__flex&quot;&gt;
              &lt;input type=&quot;text&quot; placeholder=&quot;Label helper&quot; disabled class=&quot;eduk-input__field&quot;&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        </code>
      </template>
    </Preview>
  </div>
</template>

<script>
import Preview from '@/views/components/Preview/index.vue';
import InputField from '@/UIKit/Input/Input.component.vue';

export default {
  name: 'Basic',
  components: {
    Preview,
    InputField,
  },
};
</script>
