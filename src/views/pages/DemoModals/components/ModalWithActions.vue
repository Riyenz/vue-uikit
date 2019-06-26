<template>
  <div class="basic-modal">
    <h3 class="eduk-u-text-muted">{{ modalTitle }}</h3>
    <Btn noMargin @click.native="showModal">Show Alert</Btn>
    <Modal ref="modalActions" :title="modalTitle">
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
      <template v-slot:footer>
        <Btn @click.native="hideModal">OK</Btn>
        <Btn variant="tertiary" outline @click.native="hideModal">Cancel</Btn>
      </template>
    </Modal>

    <pre class="code">
      <label>Vue</label>
      <code class="language-html">
        &#x3C;Modal ref=&#x22;modalActions&#x22; :title=&#x22;modalTitle&#x22;&#x3E;
          &#x3C;template v-slot:content&#x3E;
            &#x3C;h3 class=&#x22;eduk-head&#x22;&#x3E;Here might be a content title&#x3C;/h3&#x3E;
            &#x3C;p class=&#x22;eduk-text&#x22;&#x3E;
              Cillum commodo quis ut laboris aliquip et non Lorem fugiat.
              Laborum minim esse ad proident proident eiusmod nostrud aliqua
              elit. Id id eu cupidatat aliquip magna amet magna nisi non in
              et nisi. Dolor laboris enim incididunt tempor veniam. Ex aliquip
              dolor consectetur officia elit.
            &#x3C;/p&#x3E;
          &#x3C;/template&#x3E;
          &#x3C;template v-slot:footer&#x3E;
            &#x3C;Btn @click.native=&#x22;hideModal&#x22;&#x3E;OK&#x3C;/Btn&#x3E;
            &#x3C;Btn variant=&#x22;tertiary&#x22; outline @click.native=&#x22;hideModal&#x22;&#x3E;Cancel&#x3C;/Btn&#x3E;
          &#x3C;/template&#x3E;
        &#x3C;/Modal&#x3E;
      </code>
    </pre>
    <pre class="code">
      <label>Vanilla</label>
      <code class="language-html">
        &#x3C;div class=&#x22;eduk-modal show&#x22;&#x3E;
          &#x3C;div class=&#x22;eduk-modal__container&#x22;&#x3E;
            &#x3C;div class=&#x22;eduk-modal__main&#x22;&#x3E;
              &#x3C;section class=&#x22;eduk-modal__navbar&#x22;&#x3E;
                &#x3C;i class=&#x22;eduk-modal__navbar-back fas fa-chevron-left fa-w-10 fa-lg&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;span class=&#x22;eduk-modal__navbar-logo&#x22;&#x3E;
                  &#x3C;img src=&#x22;/assets/img/eduk-navbar-logo.png&#x22; alt=&#x22;&#x22;&#x3E;
                &#x3C;/span&#x3E;
              &#x3C;/section&#x3E;
              &#x3C;section class=&#x22;eduk-modal__header&#x22;&#x3E;
                &#x3C;h2 class=&#x22;eduk-head eduk-modal__header-title eduk-u-mb-0&#x22;&#x3E;Modal w/ Actions&#x3C;/h2&#x3E;
                &#x3C;i class=&#x22;eduk-modal__header-close fas fa-times fa-lg&#x22;&#x3E;&#x3C;/i&#x3E;
              &#x3C;/section&#x3E;
              &#x3C;section class=&#x22;eduk-modal__content&#x22;&#x3E;
                &#x3C;section class=&#x22;eduk-modal__body&#x22;&#x3E;
                  &#x3C;h2 class=&#x22;eduk-modal__title eduk-modal__title--mobile&#x22;&#x3E;Modal w/ Actions&#x3C;/h2&#x3E;
                  &#x3C;h3 class=&#x22;eduk-head&#x22;&#x3E;Here might be a content title&#x3C;/h3&#x3E;
                  &#x3C;p class=&#x22;eduk-text&#x22;&#x3E;
                    Cillum commodo quis ut laboris aliquip et non Lorem fugiat.
                    Laborum minim esse ad proident proident eiusmod nostrud aliqua
                    elit. Id id eu cupidatat aliquip magna amet magna nisi non in
                    et nisi. Dolor laboris enim incididunt tempor veniam. Ex aliquip
                    dolor consectetur officia elit.
                  &#x3C;/p&#x3E;
                &#x3C;/section&#x3E;
                &#x3C;section class=&#x22;eduk-modal__footer&#x22;&#x3E;
                  &#x3C;button class=&#x22;eduk-btn eduk-btn-primary  eduk-u-m-1 &#x22;&#x3E;OK&#x3C;/button&#x3E;
                  &#x3C;button class=&#x22;eduk-btn eduk-btn-tertiary-outline  eduk-u-m-1 &#x22;&#x3E;Cancel&#x3C;/button&#x3E;&#x3C;/section&#x3E;
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
  name: 'ModalWithActions',
  components: {
    Modal,
    Btn,
  },
  data() {
    return {
      modalTitle: 'Modal w/ Actions',
    };
  },
  methods: {
    showModal() {
      this.$refs.modalActions.show();
    },
    hideModal() {
      this.$refs.modalActions.hide();
    },
  },
};
</script>
