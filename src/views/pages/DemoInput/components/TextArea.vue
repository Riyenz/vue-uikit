<template>
  <div>
    <h3 class="eduk-h3 eduk-u-mb-3">Textarea</h3>
    <Preview>
      <template slot="example">
        <div>
          <InputField placeholder="Label helper" :rows="3" />
          <InputField placeholder="Label helper" feedback="error" :rows="3" />
          <InputField placeholder="Label helper" feedback="success" :rows="3" />
          <InputField placeholder="Label helper" disabled :rows="3" />
        </div>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &lt;InputField placeholder=&quot;Label helper&quot; :rows=&quot;3&quot; /&gt;
          &lt;InputField placeholder=&quot;Label helper&quot; feedback=&quot;error&quot; :rows=&quot;3&quot; /&gt;
          &lt;InputField placeholder=&quot;Label helper&quot; feedback=&quot;success&quot; :rows=&quot;3&quot; /&gt;
          &lt;InputField placeholder=&quot;Label helper&quot; disabled :rows=&quot;3&quot; /&gt;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &lt;div class=&quot;eduk-input&quot;&gt;
            &lt;div class=&quot;eduk-input__flex&quot;&gt;
              &lt;div class=&quot;eduk-input__icon&quot;&gt;
                &lt;textarea rows=&quot;3&quot; placeholder=&quot;Label helper&quot; class=&quot;eduk-input__field&quot;&gt;&lt;/textarea&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          &lt;div class=&quot;eduk-input eduk-input--error&quot;&gt;
            &lt;div class=&quot;eduk-input__flex&quot;&gt;
              &lt;div class=&quot;eduk-input__icon&quot;&gt;
                &lt;textarea rows=&quot;3&quot; placeholder=&quot;Label helper&quot; class=&quot;eduk-input__field pr&quot;&gt;&lt;/textarea&gt;
                &lt;span class=&quot;fa-validation&quot;&gt;
                  &lt;i class=&quot;fas fa-times&quot;&gt;&lt;/i&gt;
                &lt;/span&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          &lt;div class=&quot;eduk-input eduk-input--success&quot;&gt;
            &lt;div class=&quot;eduk-input__flex&quot;&gt;
              &lt;div class=&quot;eduk-input__icon&quot;&gt;
                &lt;textarea rows=&quot;3&quot; placeholder=&quot;Label helper&quot; class=&quot;eduk-input__field pr&quot;&gt;&lt;/textarea&gt;
                &lt;span class=&quot;fa-validation&quot;&gt;
                  &lt;i class=&quot;fas fa-check&quot;&gt;&lt;/i&gt;
                &lt;/span&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          &lt;div class=&quot;eduk-input&quot;&gt;
            &lt;div class=&quot;eduk-input__flex&quot;&gt;
              &lt;div class=&quot;eduk-input__icon&quot;&gt;
                &lt;textarea rows=&quot;3&quot; placeholder=&quot;Label helper&quot; disabled class=&quot;eduk-input__field&quot;&gt;&lt;/textarea&gt;
              &lt;/div&gt;
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
  name: 'TextArea',
  components: {
    Preview,
    InputField,
  },
};
</script>
