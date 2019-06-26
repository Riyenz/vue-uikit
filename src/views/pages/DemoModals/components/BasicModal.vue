<template>
  <div class="basic-modal">
    <h3 class="eduk-u-text-muted">Basic Modal</h3>
    <Btn noMargin @click.native="showModal">Show Alert</Btn>

    <Modal ref="basicModal" :title="modalTitle">
      <template v-slot:content>
        <h3 class="eduk-head">Here might be a content title</h3>
        <p class="eduk-text">
          Cillum commodo quis ut laboris aliquip et non Lorem fugiat.
          Laborum minim esse ad proident proident eiusmod nostrud aliqua
          elit. Id id eu cupidatat aliquip magna amet magna nisi non in
          et nisi. Dolor laboris enim incididunt tempor veniam. Ex aliquip
          dolor consectetur officia elit.
        </p>
      </template>
    </Modal>

    <pre class="code">
      <label>Vue</label>
      <code class="language-html">
        &lt;Modal ref=&quot;basicModal&quot; :title=&quot;modalTitle&quot;&gt;
          &lt;template v-slot:content&gt;
            &lt;h3 class="eduk-head"&gt;Here might be a content title&lt;/h3&gt;
            &lt;p class="eduk-text"&gt;
              Cillum commodo quis ut laboris aliquip et non Lorem fugiat.
              Laborum minim esse ad proident proident eiusmod nostrud
              aliqua elit. Id id eu cupidatat aliquip magna amet magna
              nisi non in et nisi. Dolor laboris enim incididunt tempor
              veniam. Ex aliquip dolor consectetur officia elit.
            &lt;/p&gt;
          &lt;/template&gt;
        &lt;/Modal&gt;
      </code>
    </pre>
    <pre class="code">
      <label>Vanilla</label>
      <code class="language-html">
        &#x3C;div class=&#x22;eduk-modal show&#x22;&#x3E;
          &#x3C;div class=&#x22;eduk-modal__container&#x22;&#x3E;
            &#x3C;div class=&#x22;eduk-modal__main&#x22;&#x3E;
              &#x3C;section class=&#x22;eduk-modal__navbar&#x22;&#x3E;
                &#x3C;i class=&#x22;eduk-modal__navbar-back fas fa-chevron-left fa-lg&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;span class=&#x22;eduk-modal__navbar-logo&#x22;&#x3E;
                  &#x3C;img src=&#x22;/assets/img/eduk-navbar-logo.png&#x22; alt=&#x22;&#x22;&#x3E;
                &#x3C;/span&#x3E;
              &#x3C;/section&#x3E;
              &#x3C;section class=&#x22;eduk-modal__header&#x22;&#x3E;
                &#x3C;h2 class=&#x22;eduk-head eduk-modal__header-title eduk-u-mb-0&#x22;&#x3E;Basic Modal&#x3C;/h2&#x3E;
                &#x3C;i class=&#x22;eduk-modal__header-close fas fa-times fa-lg&#x22;&#x3E;&#x3C;/i&#x3E;
              &#x3C;/section&#x3E;
              &#x3C;section class=&#x22;eduk-modal__content&#x22;&#x3E;
                &#x3C;section class=&#x22;eduk-modal__body&#x22;&#x3E;
                  &#x3C;h2 class=&#x22;eduk-modal__title eduk-modal__title--mobile&#x22;&#x3E;Basic Modal&#x3C;/h2&#x3E;
                  &#x3C;h3 class=&#x22;eduk-head&#x22;&#x3E;Here might be a content title&#x3C;/h3&#x3E;
                  &#x3C;p class=&#x22;eduk-text&#x22;&#x3E;
                    Cillum commodo quis ut laboris aliquip et non Lorem fugiat.
                    Laborum minim esse ad proident proident eiusmod nostrud aliqua
                    elit. Id id eu cupidatat aliquip magna amet magna nisi non in
                    et nisi. Dolor laboris enim incididunt tempor veniam. Ex aliquip
                    dolor consectetur officia elit.
                  &#x3C;/p&#x3E;
                &#x3C;/section&#x3E;
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
  name: 'BasicModal',
  components: {
    Modal,
    Btn,
  },
  data() {
    return {
      modalTitle: 'Basic Modal',
    };
  },
  methods: {
    showModal() {
      this.$refs.basicModal.show();
    },
  },
};
</script>
