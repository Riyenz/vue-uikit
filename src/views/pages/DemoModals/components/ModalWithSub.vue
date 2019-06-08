<template>
  <div class="basic-modal">
    <h3 class="eduk-text-muted">{{ modalTitle }}</h3>
    <Btn text="Show Modal" noMargin @click.native="showModal"/>
    <Modal ref="modalSub" :title="modalTitle">
      <template v-slot:content>
        <h3>Here might be a content title</h3>
        <p>
          Cillum commodo quis ut laboris aliquip et non Lorem fugiat.
          Laborum minim esse ad proident proident eiusmod nostrud aliqua
          elit. Id id eu cupidatat aliquip magna amet magna nisi non in
          et nisi. Dolor laboris enim incididunt tempor veniam. Ex aliquip
          dolor consectetur officia elit.
        </p>
        <p>
          Elit eiusmod velit et sunt proident tempor.
          Enim incididunt eiusmod pariatur reprehenderit
          ipsum minim consequat. Nisi duis eu dolor nostrud
          fugiat quis ad laborum aliqua laboris nisi laboris aliqua.
          Laborum tempor ullamco ex Lorem excepteur. Ex consequat
          officia exercitation ut cillum veniam fugiat dolor enim
          irure ut esse in fugiat.
        </p>
        <p>
          Non ex occaecat veniam minim fugiat enim magna.
        </p>
      </template>
      <template v-slot:subContent>
        <span class="eduk-logo">
          <img src="/assets/img/logo-placeholder.png">
        </span>

        <h3 class="eduk-mt-3">Dolore duis tempor sunt elit magna aliqua.</h3>
        <p class="eduk-mt-0">
          Tempor adipisicing commodo ut cupidatat aliqua nisi elit.
        </p>
        <hr>

        <Btn text="Apply to this school" size="lg"/>
        <Btn text="Message School" size="lg" outline/>
      </template>
    </Modal>

    <pre class="code">
      <label>Vue</label>
      <code class="language-html">
        &#x3C;Modal ref=&#x22;modalSub&#x22; :title=&#x22;modalTitle&#x22;&#x3E;
          &#x3C;template v-slot:content&#x3E;
            &#x3C;h3&#x3E;Here might be a content title&#x3C;/h3&#x3E;
            &#x3C;p&#x3E;
              Cillum commodo quis ut laboris aliquip et non Lorem fugiat.
              Laborum minim esse ad proident proident eiusmod nostrud aliqua
              elit. Id id eu cupidatat aliquip magna amet magna nisi non in
              et nisi. Dolor laboris enim incididunt tempor veniam. Ex aliquip
              dolor consectetur officia elit.
            &#x3C;/p&#x3E;
            &#x3C;p&#x3E;
              Elit eiusmod velit et sunt proident tempor.
              Enim incididunt eiusmod pariatur reprehenderit
              ipsum minim consequat. Nisi duis eu dolor nostrud
              fugiat quis ad laborum aliqua laboris nisi laboris aliqua.
              Laborum tempor ullamco ex Lorem excepteur. Ex consequat
              officia exercitation ut cillum veniam fugiat dolor enim
              irure ut esse in fugiat.
            &#x3C;/p&#x3E;
            &#x3C;p&#x3E;
              Non ex occaecat veniam minim fugiat enim magna.
            &#x3C;/p&#x3E;
          &#x3C;/template&#x3E;
          &#x3C;template v-slot:subContent&#x3E;
            &#x3C;span class=&#x22;eduk-logo&#x22;&#x3E;
              &#x3C;img src=&#x22;/assets/img/logo-placeholder.png&#x22;&#x3E;
            &#x3C;/span&#x3E;

            &#x3C;h3 class=&#x22;eduk-mt-3&#x22;&#x3E;Dolore duis tempor sunt elit magna aliqua.&#x3C;/h3&#x3E;
            &#x3C;p class=&#x22;eduk-mt-0&#x22;&#x3E;
              Tempor adipisicing commodo ut cupidatat aliqua nisi elit.
            &#x3C;/p&#x3E;
            &#x3C;hr&#x3E;

            &#x3C;Btn text=&#x22;Apply to this school&#x22; size=&#x22;lg&#x22;/&#x3E;
            &#x3C;Btn text=&#x22;Message School&#x22; size=&#x22;lg&#x22; outline/&#x3E;
          &#x3C;/template&#x3E;
        &#x3C;/Modal&#x3E;
      </code>
    </pre>
    <pre class="code">
      <label>Vue</label>
      <code class="language-html">
        &#x3C;div class=&#x22;eduk-modal show&#x22;&#x3E;
          &#x3C;div class=&#x22;eduk-modal__container&#x22;&#x3E;
            &#x3C;div class=&#x22;eduk-modal__content&#x22;&#x3E;
              &#x3C;section class=&#x22;eduk-modal__header&#x22;&#x3E;
                &#x3C;h2 class=&#x22;eduk-modal__header-title&#x22;&#x3E;Modal w/ Sub Content&#x3C;/h2&#x3E;
                &#x3C;i class=&#x22;fas fa-times&#x22;&#x3E;&#x3C;/i&#x3E;
              &#x3C;/section&#x3E;
              &#x3C;section class=&#x22;eduk-modal__body&#x22;&#x3E;
                &#x3C;h3&#x3E;Here might be a content title&#x3C;/h3&#x3E;
                &#x3C;p&#x3E;
                  Cillum commodo quis ut laboris aliquip et non Lorem fugiat.
                  Laborum minim esse ad proident proident eiusmod nostrud aliqua
                  elit. Id id eu cupidatat aliquip magna amet magna nisi non in
                  et nisi. Dolor laboris enim incididunt tempor veniam. Ex aliquip
                  dolor consectetur officia elit.
                &#x3C;/p&#x3E;
                &#x3C;p&#x3E;
                  Elit eiusmod velit et sunt proident tempor.
                  Enim incididunt eiusmod pariatur reprehenderit
                  ipsum minim consequat. Nisi duis eu dolor nostrud
                  fugiat quis ad laborum aliqua laboris nisi laboris aliqua.
                  Laborum tempor ullamco ex Lorem excepteur. Ex consequat
                  officia exercitation ut cillum veniam fugiat dolor enim
                  irure ut esse in fugiat.
                &#x3C;/p&#x3E;
                &#x3C;p&#x3E;
                  Non ex occaecat veniam minim fugiat enim magna.
                &#x3C;/p&#x3E;
              &#x3C;/section&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;eduk-modal__sub show&#x22;&#x3E;
              &#x3C;div class=&#x22;eduk-modal__sub-content&#x22;&#x3E;
                &#x3C;span class=&#x22;eduk-logo&#x22;&#x3E;
                  &#x3C;img src=&#x22;/assets/img/logo-placeholder.png&#x22;&#x3E;
                &#x3C;/span&#x3E;
                &#x3C;h3 class=&#x22;eduk-mt-3&#x22;&#x3E;Dolore duis tempor sunt elit magna aliqua.&#x3C;/h3&#x3E;
                &#x3C;p class=&#x22;eduk-mt-0&#x22;&#x3E;
                  Tempor adipisicing commodo ut cupidatat aliqua nisi elit.
                &#x3C;/p&#x3E;
                &#x3C;hr&#x3E;
                &#x3C;button class=&#x22;eduk-btn eduk-btn-primary eduk-btn--lg eduk-m-1&#x22;&#x3E;Apply to this school&#x3C;/button&#x3E;
                &#x3C;button class=&#x22;eduk-btn eduk-btn-primary--outline eduk-btn--lg eduk-m-1&#x22;&#x3E;Message School&#x3C;/button&#x3E;
              &#x3C;/div&#x3E;
              &#x3C;div class=&#x22;eduk-modal__sub-close&#x22;&#x3E;
                Close window
                &#x3C;i class=&#x22;fas fa-times&#x22;&#x3E;&#x3C;/i&#x3E;
              &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
          &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
      </code>
    </pre>
  </div>
</template>

<script>
import Modal from '@/UIKit/Modal/Modal.vue';
import Btn from '@/UIKit/Btn/Btn.vue';

export default {
  name: 'ModalWithSub',
  components: {
    Modal,
    Btn,
  },
  data() {
    return {
      modalTitle: 'Modal w/ Sub Content',
    };
  },
  methods: {
    showModal() {
      this.$refs.modalSub.show();
    },
  },
};
</script>
