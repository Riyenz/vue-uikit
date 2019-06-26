<template>
  <div class="basic-modal">
    <h3 class="eduk-u-text-muted">Message Only Modal</h3>
    <Btn noMargin @click.native="showModal">Show Alert</Btn>
    <Modal ref="messageModal" :isShown="true">
      <template v-slot:content>
        Fugiat ad proident elit nostrud amet occaecat est.
      </template>
    </Modal>

    <pre class="code">
      <label>Vue</label>
      <code class="language-html">
        &#x3C;Modal ref=&#x22;messageModal&#x22; :isShown=&#x22;true&#x22;&#x3E;
          &#x3C;template v-slot:content&#x3E;
            Fugiat ad proident elit nostrud amet occaecat est.
          &#x3C;/template&#x3E;
        &#x3C;/Modal&#x3E;
      </code>
    </pre>
    <pre class="code">
      <label>Vanilla</label>
      <code class="language-html">
        &#x3C;div class=&#x22;eduk-modal show&#x22; isshown=&#x22;true&#x22;&#x3E;
          &#x3C;div class=&#x22;eduk-modal__container&#x22;&#x3E;
            &#x3C;div class=&#x22;eduk-modal__content&#x22;&#x3E;
              &#x3C;section class=&#x22;eduk-modal__header&#x22;&#x3E;
                &#x3C;h2 class=&#x22;eduk-modal__header-title&#x22;&#x3E;&#x3C;/h2&#x3E;
                &#x3C;i class=&#x22;fas fa-times&#x22;&#x3E;&#x3C;/i&#x3E;
              &#x3C;/section&#x3E;
              &#x3C;section class=&#x22;eduk-modal__body&#x22;&#x3E;
                Fugiat ad proident elit nostrud amet occaecat est.
              &#x3C;/section&#x3E;
            &#x3C;/div&#x3E;
          &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
      </code>
    </pre>
  </div>
</template>

<script>
import Modal from '@/UIKit/Modal/Modal.component.vue';
import Btn from '@/UIKit/Btn/Btn.component.vue';

export default {
  name: 'MessageOnlyModal',
  components: {
    Modal,
    Btn,
  },
  methods: {
    showModal() {
      this.$refs.messageModal.show();
    },
  },
};
</script>
