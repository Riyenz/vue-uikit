<template>
  <div>
    <h3 class="eduk-h3 eduk-u-mb-3">With Labels</h3>
    <Preview>
      <template slot="example">
        <div>
          <InputField placeholder="Label helper" label="Default" />
          <InputField placeholder="Label helper" feedback="error" label="Error Field Feedback" />
          <InputField placeholder="Label helper" feedback="success" label="Success Field Feedback" />
          <InputField placeholder="Label helper" feedback="default" feedbackMsg="Field is required" label="Default" />
          <InputField placeholder="Label helper" feedback="error" feedbackMsg="Field is required" label="Error Field Feedback" />
          <InputField placeholder="Label helper" feedback="success" feedbackMsg="Completed" label="Success Field Feedback" />
        </div>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &lt;InputField placeholder=&quot;Label helper&quot; label=&quot;Default&quot; /&gt;
          &lt;InputField placeholder=&quot;Label helper&quot; feedback=&quot;error&quot; label=&quot;Error Field Feedback&quot; /&gt;
          &lt;InputField placeholder=&quot;Label helper&quot; feedback=&quot;success&quot; label=&quot;Success Field Feedback&quot; /&gt;
          &lt;InputField
            placeholder=&quot;Label helper&quot;
            feedback=&quot;default&quot;
            feedbackMsg=&quot;Field is required&quot;
            label=&quot;Default&quot; /&gt;
          &lt;InputField
            placeholder=&quot;Label helper&quot;
            feedback=&quot;error&quot;
            feedbackMsg=&quot;Field is required&quot;
            label=&quot;Error Field Feedback&quot; /&gt;
          &lt;InputField
            placeholder=&quot;Label helper&quot;
            feedback=&quot;success&quot;
            feedbackMsg=&quot;Completed&quot;
            label=&quot;Success Field Feedback&quot; /&gt;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &lt;div class=&quot;eduk-input&quot;&gt;
            &lt;label for=&quot;&quot; class=&quot;eduk-input__label eduk-u-mb-1&quot;&gt;
            Default
            &lt;/label&gt;
            &lt;div class=&quot;eduk-input__flex&quot;&gt;
              &lt;div class=&quot;eduk-input__icon&quot;&gt;
                &lt;input type=&quot;text&quot; placeholder=&quot;Label helper&quot; class=&quot;eduk-input__field&quot;&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          &lt;div class=&quot;eduk-input eduk-input--error&quot;&gt;
            &lt;label for=&quot;&quot; class=&quot;eduk-input__label eduk-u-mb-1&quot;&gt;
            Error Field Feedback
            &lt;/label&gt;
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
            &lt;label for=&quot;&quot; class=&quot;eduk-input__label eduk-u-mb-1&quot;&gt;
            Success Field Feedback
            &lt;/label&gt;
            &lt;div class=&quot;eduk-input__flex&quot;&gt;
              &lt;div class=&quot;eduk-input__icon&quot;&gt;
                &lt;input type=&quot;text&quot; placeholder=&quot;Label helper&quot; class=&quot;eduk-input__field pr&quot;&gt;
                &lt;span class=&quot;fa-validation&quot;&gt;
                  &lt;i class=&quot;fas fa-check&quot;&gt;&lt;/i&gt;
                &lt;/span&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          &lt;div class=&quot;eduk-input eduk-input--default&quot;&gt;
            &lt;label for=&quot;&quot; class=&quot;eduk-input__label eduk-u-mb-1&quot;&gt;
            Default
            &lt;/label&gt;
            &lt;div class=&quot;eduk-input__flex&quot;&gt;
              &lt;div class=&quot;eduk-input__icon&quot;&gt;
                &lt;input type=&quot;text&quot; placeholder=&quot;Label helper&quot; class=&quot;eduk-input__field pr&quot;&gt;
              &lt;/div&gt;
            &lt;/div&gt;
            &lt;p class=&quot;eduk-input__msg eduk-u-mt-2&quot;&gt;
              &lt;i class=&quot;fas fa-info-circle&quot;&gt;&lt;/i&gt;
              &lt;span class=&quot;eduk-u-ml-1&quot;&gt;Field is required&lt;/span&gt;
            &lt;/p&gt;
          &lt;/div&gt;

          &lt;div class=&quot;eduk-input eduk-input--error&quot;&gt;
            &lt;label for=&quot;&quot; class=&quot;eduk-input__label eduk-u-mb-1&quot;&gt;
            Error Field Feedback
            &lt;/label&gt;
            &lt;div class=&quot;eduk-input__flex&quot;&gt;
              &lt;div class=&quot;eduk-input__icon&quot;&gt;
                &lt;input type=&quot;text&quot; placeholder=&quot;Label helper&quot; class=&quot;eduk-input__field pr&quot;&gt;
              &lt;/div&gt;
            &lt;/div&gt;
            &lt;p class=&quot;eduk-input__msg eduk-u-mt-2&quot;&gt;
              &lt;i class=&quot;fas fa-times-circle&quot;&gt;&lt;/i&gt;
              &lt;span class=&quot;eduk-u-ml-1&quot;&gt;Field is required&lt;/span&gt;
            &lt;/p&gt;
          &lt;/div&gt;

          &lt;div class=&quot;eduk-input eduk-input--success&quot;&gt;
            &lt;label for=&quot;&quot; class=&quot;eduk-input__label eduk-u-mb-1&quot;&gt;
            Success Field Feedback
            &lt;/label&gt;
            &lt;div class=&quot;eduk-input__flex&quot;&gt;
              &lt;div class=&quot;eduk-input__icon&quot;&gt;
                &lt;input type=&quot;text&quot; placeholder=&quot;Label helper&quot; class=&quot;eduk-input__field pr&quot;&gt;
              &lt;/div&gt;
            &lt;/div&gt;
            &lt;p class=&quot;eduk-input__msg eduk-u-mt-2&quot;&gt;
              &lt;i class=&quot;fas fa-check-circle&quot;&gt;&lt;/i&gt;
              &lt;span class=&quot;eduk-u-ml-1&quot;&gt;Completed&lt;/span&gt;
            &lt;/p&gt;
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
  name: 'FormItem',
  components: {
    Preview,
    InputField,
  },
};
</script>
