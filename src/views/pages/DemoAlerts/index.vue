<template>
  <TabContent :selected="selectedTab" @change="onTabChange" padded>
    <template slot="design">
      <div></div>
    </template>
    <template slot="develop">
      <div class="demo-alert">
        <h2 class="eduk-h2 eduk-u-mb-3">Alerts</h2>
        <h3 class="eduk-h3 eduk-u-mb-3">Basic Alert</h3>
        <Preview>
          <template slot="example">
            <Btn noMargin @click.native="showAlert">Show Alert</Btn>
          </template>
          <template slot="vue-code">
            <code class="language-html">
              &#x3C;Alert ref=&#x22;alert&#x22; title=&#x22;Alerts&#x22;&#x3E;
                Do! ullamco Lorem occaecat tempor incididunt nulla adipisicing.
              &#x3C;/Alert&#x3E;
            </code>
          </template>
          <template slot="vanilla-code">
            <code class="language-html">
              <!-- eslint-disable max-len -->
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
                      &#x3C;button class=&#x22;eduk-btn eduk-btn--tertiary eduk-btn--outlined eduk-btn--lg eduk-u-m-1 &#x22;&#x3E;OK&#x3C;/button&#x3E;
                    &#x3C;/section&#x3E;
                  &#x3C;/div&#x3E;
                &#x3C;/div&#x3E;
              &#x3C;/div&#x3E;
              <!-- eslint-enable max-len -->
            </code>
          </template>
        </Preview>
        <Alert ref="alert" title="Alerts">
          Do! ullamco Lorem occaecat tempor incididunt nulla adipisicing.
        </Alert>
        <AlertApi />
      </div>
    </template>
    <template slot="quicklinks">
    </template>
  </TabContent>
</template>

<script>
import Preview from '@/views/components/Preview/index.vue';
import TabContent from '@/views/components/TabContent/index.vue';
import Alert from '@/UIKit/Alert/Alert.component.vue';
import Btn from '@/UIKit/Btn/Btn.component.vue';

import AlertApi from './AlertApi.vue';

export default {
  name: 'DemoAlerts',
  props: {
    selectedTab: {
      type: String,
    },
  },
  components: {
    TabContent,
    Preview,
    Alert,
    Btn,
    AlertApi,
  },
  methods: {
    showAlert() {
      this.$refs.alert.show();
    },
    onTabChange(tabIndex) {
      this.$emit('tabChange', tabIndex);
    },
  },
};
</script>
