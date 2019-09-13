<template>
  <div>
    <h3 class="eduk-h3 eduk-u-mb-3">With Actions</h3>
    <Preview>
      <template slot="example">
        <div>
          <InputField placeholder="Label helper">
            <template slot="suffix">
              <button class="eduk-btn eduk-btn-primary eduk-u-px-3 eduk-u-py-1">
                <font-awesome-icon icon="chevron-right" />
              </button>
            </template>
          </InputField>
          <InputField placeholder="Label helper">
            <template slot="suffix">
              <button
                class="eduk-btn eduk-btn-primary eduk-u-px-2 eduk-u-py-1"
                style="width: 110px"
              >
                <font-awesome-icon icon="search" />&nbsp;&nbsp;Search
              </button>
            </template>
          </InputField>
          <InputField placeholder="Label helper">
            <template slot="prefix">
              <button class="eduk-btn eduk-btn-primary eduk-u-px-3 eduk-u-py-1">
                <font-awesome-icon icon="search" />
              </button>
            </template>
          </InputField>
        </div>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &lt;InputField placeholder=&quot;Label helper&quot;&gt;
            &lt;template slot=&quot;suffix&quot;&gt;
              &lt;button class=&quot;eduk-btn eduk-btn-primary eduk-u-px-3 eduk-u-py-1&quot;&gt;
                &lt;font-awesome-icon icon=&quot;chevron-right&quot; /&gt;
              &lt;/button&gt;
            &lt;/template&gt;
          &lt;/InputField&gt;
          &lt;InputField placeholder=&quot;Label helper&quot;&gt;
            &lt;template slot=&quot;suffix&quot;&gt;
              &lt;button
                class=&quot;eduk-btn eduk-btn-primary eduk-u-px-2 eduk-u-py-1&quot;
                style=&quot;width: 110px&quot;
              &gt;
                &lt;font-awesome-icon icon=&quot;search&quot; /&gt;&nbsp;&nbsp;Search
              &lt;/button&gt;
            &lt;/template&gt;
          &lt;/InputField&gt;
          &lt;InputField placeholder=&quot;Label helper&quot;&gt;
            &lt;template slot=&quot;prefix&quot;&gt;
              &lt;button class=&quot;eduk-btn eduk-btn-primary eduk-u-px-3 eduk-u-py-1&quot;&gt;
                &lt;font-awesome-icon icon=&quot;search&quot; /&gt;
              &lt;/button&gt;
            &lt;/template&gt;
          &lt;/InputField&gt;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &lt;div class=&quot;eduk-input&quot;&gt;
            &lt;div class=&quot;eduk-input__flex&quot;&gt;
              &lt;div class=&quot;eduk-input__icon&quot;&gt;
                &lt;input type=&quot;text&quot; placeholder=&quot;Label helper&quot; class=&quot;eduk-input__field&quot;&gt;
              &lt;/div&gt;
              &lt;button class=&quot;eduk-btn eduk-btn-primary eduk-u-px-3 eduk-u-py-1&quot;&gt;
                &lt;i class=&quot;fas fa-chevron-right&quot;&gt;&lt;/i&gt;
              &lt;/button&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          &lt;div class=&quot;eduk-input&quot;&gt;
            &lt;div class=&quot;eduk-input__flex&quot;&gt;
              &lt;div class=&quot;eduk-input__icon&quot;&gt;
                &lt;input type=&quot;text&quot; placeholder=&quot;Label helper&quot; class=&quot;eduk-input__field&quot;&gt;
              &lt;/div&gt;
              &lt;button class=&quot;eduk-btn eduk-btn-primary eduk-u-px-2 eduk-u-py-1&quot; style=&quot;width: 110px;&quot;&gt;
                &lt;i class=&quot;fas fa-search&quot;&gt;&lt;/i&gt;
                &nbsp;&nbsp;Search
              &lt;/button&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          &lt;div class=&quot;eduk-input&quot;&gt;
            &lt;div class=&quot;eduk-input__flex&quot;&gt;
              &lt;button class=&quot;eduk-btn eduk-btn-primary eduk-u-px-3 eduk-u-py-1&quot;&gt;
                &lt;i class=&quot;fas fa-search&quot;&gt;&lt;/i&gt;
              &lt;/button&gt;
              &lt;div class=&quot;eduk-input__icon&quot;&gt;
                &lt;input type=&quot;text&quot; placeholder=&quot;Label helper&quot; class=&quot;eduk-input__field&quot;&gt;
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
  name: 'WithActions',
  components: {
    Preview,
    InputField,
  },
};
</script>
