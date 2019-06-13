<template>
  <div class="modal-w-sub">
    <h3 class="eduk-text-muted">{{ modalTitle }}</h3>
    <Btn text="Show Modal" noMargin @click.native="showModal"/>
    <Modal ref="modalSub" :title="modalTitle">
      <template v-slot:content>
        <h3 class="eduk-head">Here might be a content title</h3>
        <p class="eduk-text">
          Cillum commodo quis ut laboris aliquip et non Lorem fugiat.
          Laborum minim esse ad proident proident eiusmod nostrud aliqua
          elit. Id id eu cupidatat aliquip magna amet magna nisi non in
          et nisi. Dolor laboris enim incididunt tempor veniam. Ex aliquip
          dolor consectetur officia elit.
        </p>
        <p class="eduk-text">
          Elit eiusmod velit et sunt proident tempor.
          Enim incididunt eiusmod pariatur reprehenderit
          ipsum minim consequat. Nisi duis eu dolor nostrud
          fugiat quis ad laborum aliqua laboris nisi laboris aliqua.
          Laborum tempor ullamco ex Lorem excepteur. Ex consequat
          officia exercitation ut cillum veniam fugiat dolor enim
          irure ut esse in fugiat.
        </p>
        <p class="eduk-text">
          Non ex occaecat veniam minim fugiat enim magna.
        </p>
        <p class="eduk-text">
          Cillum commodo quis ut laboris aliquip et non Lorem fugiat.
          Laborum minim esse ad proident proident eiusmod nostrud aliqua
          elit. Id id eu cupidatat aliquip magna amet magna nisi non in
          et nisi. Dolor laboris enim incididunt tempor veniam. Ex aliquip
          dolor consectetur officia elit.
        </p>
      </template>
      <template v-slot:subContent>
        <Row noGutters>
          <Column :cols="3" :colssm="12">
            <span class="eduk-logo eduk-mb-3">
              <img src="/assets/img/logo-placeholder.png">
            </span>
          </Column>
          <Column :colssm="12">
            <h4 class="eduk-head eduk-mb-1">Dolore duis tempor Anim do fugiat.</h4>
            <p class="eduk-text eduk-text-sm--mobile eduk-mb-0">
              Tempor adipisicing commodo ut cupidatat aliqua nisi elit.
            </p>
          </Column>
        </Row>
      </template>
      <template v-slot:subActions>
        <Btn text="Apply to this school" size="lg"/>
        <Btn text="Message School" variant="tertiary" size="lg" outline/>
      </template>
    </Modal>

    <pre class="code">
      <label>Vue</label>
      <code class="language-html">
        &#x3C;Modal ref=&#x22;modalSub&#x22; :title=&#x22;modalTitle&#x22;&#x3E;
          &#x3C;template v-slot:content&#x3E;
            &#x3C;h3 class=&#x22;eduk-head&#x22;&#x3E;Here might be a content title&#x3C;/h3&#x3E;
            &#x3C;p class=&#x22;eduk-text&#x22;&#x3E;
              Cillum commodo quis ut laboris aliquip et non Lorem fugiat.
              Laborum minim esse ad proident proident eiusmod nostrud aliqua
              elit. Id id eu cupidatat aliquip magna amet magna nisi non in
              et nisi. Dolor laboris enim incididunt tempor veniam. Ex aliquip
              dolor consectetur officia elit.
            &#x3C;/p&#x3E;
            &#x3C;p class=&#x22;eduk-text&#x22;&#x3E;
              Elit eiusmod velit et sunt proident tempor.
              Enim incididunt eiusmod pariatur reprehenderit
              ipsum minim consequat. Nisi duis eu dolor nostrud
              fugiat quis ad laborum aliqua laboris nisi laboris aliqua.
              Laborum tempor ullamco ex Lorem excepteur. Ex consequat
              officia exercitation ut cillum veniam fugiat dolor enim
              irure ut esse in fugiat.
            &#x3C;/p&#x3E;
            &#x3C;p class=&#x22;eduk-text&#x22;&#x3E;
              Non ex occaecat veniam minim fugiat enim magna.
            &#x3C;/p&#x3E;
            &#x3C;p class=&#x22;eduk-text&#x22;&#x3E;
              Cillum commodo quis ut laboris aliquip et non Lorem fugiat.
              Laborum minim esse ad proident proident eiusmod nostrud aliqua
              elit. Id id eu cupidatat aliquip magna amet magna nisi non in
              et nisi. Dolor laboris enim incididunt tempor veniam. Ex aliquip
              dolor consectetur officia elit.
            &#x3C;/p&#x3E;
          &#x3C;/template&#x3E;
          &#x3C;template v-slot:subContent&#x3E;
            &#x3C;Row noGutters&#x3E;
              &#x3C;Column :cols=&#x22;3&#x22; :colssm=&#x22;12&#x22;&#x3E;
                &#x3C;span class=&#x22;eduk-logo eduk-mb-3&#x22;&#x3E;
                  &#x3C;img src=&#x22;/assets/img/logo-placeholder.png&#x22;&#x3E;
                &#x3C;/span&#x3E;
              &#x3C;/Column&#x3E;
              &#x3C;Column :colssm=&#x22;12&#x22;&#x3E;
                &#x3C;h4 class=&#x22;eduk-head eduk-mb-1&#x22;&#x3E;Dolore duis tempor Anim do fugiat.&#x3C;/h4&#x3E;
                &#x3C;p class=&#x22;eduk-text eduk-text-sm--mobile eduk-mb-0&#x22;&#x3E;
                  Tempor adipisicing commodo ut cupidatat aliqua nisi elit.
                &#x3C;/p&#x3E;
              &#x3C;/Column&#x3E;
            &#x3C;/Row&#x3E;
          &#x3C;/template&#x3E;
          &#x3C;template v-slot:subActions&#x3E;
            &#x3C;Btn text=&#x22;Apply to this school&#x22; size=&#x22;lg&#x22;/&#x3E;
            &#x3C;Btn text=&#x22;Message School&#x22; variant=&#x22;tertiary&#x22; size=&#x22;lg&#x22; outline/&#x3E;
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
                &#x3C;i class=&#x22;eduk-modal__navbar-back fas fa-chevron-left fa-lg&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;span class=&#x22;eduk-modal__navbar-logo&#x22;&#x3E;
                  &#x3C;img src=&#x22;/assets/img/eduk-navbar-logo.png&#x22; alt=&#x22;&#x22;&#x3E;
                &#x3C;/span&#x3E;
              &#x3C;/section&#x3E;
              &#x3C;section class=&#x22;eduk-modal__header&#x22;&#x3E;
                &#x3C;h2 class=&#x22;eduk-head eduk-modal__header-title eduk-mb-0&#x22;&#x3E;Modal w/ Sub Content&#x3C;/h2&#x3E;
                &#x3C;i class=&#x22;eduk-modal__header-close fas fa-times fa-lg&#x22;&#x3E;&#x3C;/i&#x3E;
              &#x3C;/section&#x3E;
              &#x3C;section class=&#x22;eduk-modal__content&#x22;&#x3E;
                &#x3C;section class=&#x22;eduk-modal__body&#x22;&#x3E;
                  &#x3C;h2 class=&#x22;eduk-modal__title eduk-modal__title--mobile&#x22;&#x3E;Modal w/ Sub Content&#x3C;/h2&#x3E;
                  &#x3C;h3 class=&#x22;eduk-head&#x22;&#x3E;Here might be a content title&#x3C;/h3&#x3E;
                  &#x3C;p class=&#x22;eduk-text&#x22;&#x3E;
                    Cillum commodo quis ut laboris aliquip et non Lorem fugiat.
                    Laborum minim esse ad proident proident eiusmod nostrud aliqua
                    elit. Id id eu cupidatat aliquip magna amet magna nisi non in
                    et nisi. Dolor laboris enim incididunt tempor veniam. Ex aliquip
                    dolor consectetur officia elit.
                  &#x3C;/p&#x3E;
                  &#x3C;p class=&#x22;eduk-text&#x22;&#x3E;
                    Elit eiusmod velit et sunt proident tempor.
                    Enim incididunt eiusmod pariatur reprehenderit
                    ipsum minim consequat. Nisi duis eu dolor nostrud
                    fugiat quis ad laborum aliqua laboris nisi laboris aliqua.
                    Laborum tempor ullamco ex Lorem excepteur. Ex consequat
                    officia exercitation ut cillum veniam fugiat dolor enim
                    irure ut esse in fugiat.
                  &#x3C;/p&#x3E;
                  &#x3C;p class=&#x22;eduk-text&#x22;&#x3E;
                    Non ex occaecat veniam minim fugiat enim magna.
                  &#x3C;/p&#x3E;
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
            &#x3C;div class=&#x22;eduk-modal__sub show&#x22;&#x3E;
              &#x3C;div class=&#x22;eduk-modal__sub-mask&#x22;&#x3E;&#x3C;/div&#x3E;
              &#x3C;div class=&#x22;eduk-modal__sub-content&#x22;&#x3E;
                &#x3C;div class=&#x22;eduk-modal__sub-top&#x22;&#x3E;
                  &#x3C;img src=&#x22;/assets/icons/horizontal-line.png&#x22; class=&#x22;eduk-modal__sub-top-line show&#x22;&#x3E;
                  &#x3C;img src=&#x22;/assets/icons/chevron-down.png&#x22; class=&#x22;eduk-modal__sub-top-down&#x22;&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-row eduk-no-gutters&#x22;&#x3E;
                  &#x3C;div class=&#x22;eduk-col-3 eduk-col-sm-12&#x22;&#x3E;
                    &#x3C;span class=&#x22;eduk-logo eduk-mb-3&#x22;&#x3E;
                      &#x3C;img src=&#x22;/assets/img/logo-placeholder.png&#x22;&#x3E;
                    &#x3C;/span&#x3E;
                  &#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;eduk-col eduk-col-sm-12&#x22;&#x3E;
                    &#x3C;h4 class=&#x22;eduk-head eduk-mb-1&#x22;&#x3E;Dolore duis tempor Anim do fugiat.&#x3C;/h4&#x3E;
                    &#x3C;p class=&#x22;eduk-text eduk-text-sm--mobile eduk-mb-0&#x22;&#x3E;
                      Tempor adipisicing commodo ut cupidatat aliqua nisi elit.
                    &#x3C;/p&#x3E;
                  &#x3C;/div&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;eduk-modal__sub-actions&#x22;&#x3E;
                  &#x3C;button class=&#x22;eduk-btn eduk-btn-primary eduk-btn--lg eduk-m-1 &#x22;&#x3E;Apply to this school&#x3C;/button&#x3E;
                  &#x3C;button class=&#x22;eduk-btn eduk-btn-tertiary--outline eduk-btn--lg eduk-m-1 &#x22;&#x3E;Message School&#x3C;/button&#x3E;
                &#x3C;/div&#x3E;
              &#x3C;/div&#x3E;
              &#x3C;div class=&#x22;eduk-modal__sub-close&#x22;&#x3E;
                Close Window
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
import Row from '@/UIKit/Grid/Row.vue';
import Column from '@/UIKit/Grid/Column.vue';
import Modal from '@/UIKit/Modal/Modal.vue';
import Btn from '@/UIKit/Btn/Btn.vue';

export default {
  name: 'ModalWithSub',
  components: {
    Modal,
    Btn,
    Row,
    Column,
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
