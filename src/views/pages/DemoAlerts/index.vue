<template>
  <div class="demo-alert">
    <h1 class="eduk-head">Alerts</h1>
    <h3 class="eduk-u-text-muted">Basic Alert</h3>
    <Btn noMargin @click.native="showAlert">Show Alert</Btn>
    <Alert ref="alert" title="Alerts">
      Do! ullamco Lorem occaecat tempor incididunt nulla adipisicing.
    </Alert>

    <pre class="code">
      <label>Vue</label>
      <code class="language-html">
        &#x3C;Alert ref=&#x22;alert&#x22; title=&#x22;Alerts&#x22;&#x3E;
          Do! ullamco Lorem occaecat tempor incididunt nulla adipisicing.
        &#x3C;/Alert&#x3E;
      </code>
    </pre>
    <pre class="code">
      <label>Vanilla</label>
      <code class="language-html">
        &#x3C;div class=&#x22;eduk-alert show&#x22;&#x3E;
          &#x3C;div class=&#x22;eduk-alert__container&#x22;&#x3E;
            &#x3C;div class=&#x22;eduk-alert__content&#x22;&#x3E;
              &#x3C;section class=&#x22;eduk-alert__header&#x22;&#x3E;
                &#x3C;h2 class=&#x22;eduk-head eduk-alert__header-title eduk-u-mb-0&#x22;&#x3E;Alerts&#x3C;/h2&#x3E;
                &#x3C;i class=&#x22;eduk-alert__header-close fas fa-times fa-lg&#x22;&#x3E;&#x3C;/i&#x3E;
              &#x3C;/section&#x3E;
              &#x3C;section class=&#x22;eduk-alert__body&#x22;&#x3E;
                Do! ullamco Lorem occaecat tempor incididunt nulla adipisicing.
              &#x3C;/section&#x3E;
              &#x3C;section class=&#x22;eduk-alert__actions&#x22;&#x3E;
                &#x3C;button class=&#x22;eduk-btn eduk-btn-tertiary-outline eduk-btn--lg eduk-u-m-1 &#x22;&#x3E;OK&#x3C;/button&#x3E;
              &#x3C;/section&#x3E;
            &#x3C;/div&#x3E;
          &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
      </code>
    </pre>
  </div>
</template>

<script>
import Alert from '@/UIKit/Alert/Alert.component.vue';
import Btn from '@/UIKit/Btn/Btn.component.vue';

export default {
  name: 'DemoAlerts',
  components: {
    Alert,
    Btn,
  },
  methods: {
    showAlert() {
      this.$refs.alert.show();
    },
  },
};
</script>
