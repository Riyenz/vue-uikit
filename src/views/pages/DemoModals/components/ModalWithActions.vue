<template>
  <div class="basic-modal">
    <h3 class="eduk-h3 eduk-u-mb-3">{{ modalTitle }}</h3>
    <Preview>
      <template slot="example">
        <Btn noMargin @click.native="showModal">Show Alert</Btn>
      </template>
      <template slot="vue-code">
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
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &lt;div class=&quot;eduk-modal show&quot;&gt;
            &lt;div class=&quot;eduk-modal__container&quot;&gt;
              &lt;div class=&quot;eduk-modal__main&quot;&gt;
                &lt;section class=&quot;eduk-modal__navbar&quot;&gt;
                  &lt;i class=&quot;eduk-modal__navbar-back fas fa-chevron-left fa-w-10 fa-lg&quot;&gt;&lt;/i&gt;
                  &lt;span class=&quot;eduk-modal__navbar-logo&quot;&gt;
                    &lt;img src=&quot;/assets/img/eduk-navbar-logo.png&quot; alt=&quot;&quot;&gt;
                  &lt;/span&gt;
                &lt;/section&gt;
                &lt;section class=&quot;eduk-modal__header&quot;&gt;
                  &lt;h2 class=&quot;eduk-head eduk-modal__header-title eduk-u-mb-0&quot;&gt;Modal w/ Actions&lt;/h2&gt;
                  &lt;i class=&quot;eduk-modal__header-close fas fa-times fa-lg&quot;&gt;&lt;/i&gt;
                &lt;/section&gt;
                &lt;section class=&quot;eduk-modal__content&quot;&gt;
                  &lt;section class=&quot;eduk-modal__body&quot;&gt;
                    &lt;h2 class=&quot;eduk-modal__title eduk-modal__title--mobile&quot;&gt;Modal w/ Actions&lt;/h2&gt;
                    &lt;h3 class=&quot;eduk-head&quot;&gt;Here might be a content title&lt;/h3&gt;
                    &lt;p class=&quot;eduk-text&quot;&gt;
                      Cillum commodo quis ut laboris aliquip et non Lorem fugiat.
                      Laborum minim esse ad proident proident eiusmod nostrud aliqua
                      elit. Id id eu cupidatat aliquip magna amet magna nisi non in
                      et nisi. Dolor laboris enim incididunt tempor veniam. Ex aliquip
                      dolor consectetur officia elit.
                    &lt;/p&gt;
                  &lt;/section&gt;
                  &lt;section class=&quot;eduk-modal__footer&quot;&gt;
                    &lt;button class=&quot;eduk-btn eduk-btn--primary  eduk-u-m-1 &quot;&gt;OK&lt;/button&gt;
                    &lt;button class=&quot;eduk-btn eduk-btn--tertiary eduk-btn--outlined  eduk-u-m-1 &quot;&gt;Cancel&lt;/button&gt;&lt;/section&gt;
                &lt;/section&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        </code>
      </template>
    </Preview>
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
        <Btn @click="hideModal">OK</Btn>
        <Btn variant="tertiary" outline @click="hideModal" class="eduk-u-mr-2">Cancel</Btn>
      </template>
    </Modal>
  </div>
</template>

<script>
import Preview from '@/views/components/Preview/index.vue';
import Modal from '@/UIKit/Modal/Modal.component.vue';
import Btn from '@/UIKit/Btn/Btn.component.vue';

export default {
  name: 'ModalWithActions',
  components: {
    Preview,
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
