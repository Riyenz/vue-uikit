<template>
  <div class="modal-w-sub">
    <h3 class="eduk-h3 eduk-u-mb-3">{{ modalTitle }}</h3>
    <Preview>
      <template slot="example">
        <Btn noMargin @click.native="showModal">Show Alert</Btn>
      </template>
      <template slot="vue-code">
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
                  &#x3C;span class=&#x22;eduk-logo eduk-u-mb-3&#x22;&#x3E;
                    &#x3C;img src=&#x22;/assets/img/logo-placeholder.png&#x22;&#x3E;
                  &#x3C;/span&#x3E;
                &#x3C;/Column&#x3E;
                &#x3C;Column :colssm=&#x22;12&#x22;&#x3E;
                  &#x3C;h4 class=&#x22;eduk-head eduk-u-mb-1&#x22;&#x3E;Dolore duis tempor Anim do fugiat.&#x3C;/h4&#x3E;
                  &#x3C;p class=&#x22;eduk-text eduk-u-text-sm--mobile eduk-u-mb-0&#x22;&#x3E;
                    Tempor adipisicing commodo ut cupidatat aliqua nisi elit.
                  &#x3C;/p&#x3E;
                &#x3C;/Column&#x3E;
              &#x3C;/Row&#x3E;
            &#x3C;/template&#x3E;
            &#x3C;template v-slot:subActions&#x3E;
              &#x3C;Btn size=&#x22;lg&#x22;&#x3E;Apply to this school&#x3C;/Btn&#x3E;
              &#x3C;Btn variant=&#x22;tertiary&#x22; size=&#x22;lg&#x22; outline&#x3E;Message School&#x3C;/Btn&#x3E;
            &#x3C;/template&#x3E;
          &#x3C;/Modal&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          <!-- eslint-disable max-len -->
          &lt;div class=&quot;eduk-modal show&quot;&gt;
            &lt;div class=&quot;eduk-modal__container&quot;&gt;
              &lt;div class=&quot;eduk-modal__main&quot;&gt;
                &lt;section class=&quot;eduk-modal__navbar&quot;&gt;
                  &lt;i class=&quot;eduk-modal__navbar-back fas fa-chevron-left fa-lg&quot;&gt;&lt;/i&gt;
                  &lt;span class=&quot;eduk-modal__navbar-logo&quot;&gt;
                    &lt;img src=&quot;/assets/img/eduk-navbar-logo.png&quot; alt=&quot;&quot;&gt;
                  &lt;/span&gt;
                &lt;/section&gt;
                &lt;section class=&quot;eduk-modal__header&quot;&gt;
                  &lt;h2 class=&quot;eduk-head eduk-modal__header-title eduk-u-mb-0&quot;&gt;Modal w/ Sub Content&lt;/h2&gt;
                  &lt;i class=&quot;eduk-modal__header-close fas fa-times fa-lg&quot;&gt;&lt;/i&gt;
                &lt;/section&gt;
                &lt;section class=&quot;eduk-modal__content&quot;&gt;
                  &lt;section class=&quot;eduk-modal__body&quot;&gt;
                    &lt;h2 class=&quot;eduk-modal__title eduk-modal__title--mobile&quot;&gt;Modal w/ Sub Content&lt;/h2&gt;
                    &lt;h3 class=&quot;eduk-head&quot;&gt;Here might be a content title&lt;/h3&gt;
                    &lt;p class=&quot;eduk-text&quot;&gt;
                      Cillum commodo quis ut laboris aliquip et non Lorem fugiat.
                      Laborum minim esse ad proident proident eiusmod nostrud aliqua
                      elit. Id id eu cupidatat aliquip magna amet magna nisi non in
                      et nisi. Dolor laboris enim incididunt tempor veniam. Ex aliquip
                      dolor consectetur officia elit.
                    &lt;/p&gt;
                    &lt;p class=&quot;eduk-text&quot;&gt;
                      Elit eiusmod velit et sunt proident tempor.
                      Enim incididunt eiusmod pariatur reprehenderit
                      ipsum minim consequat. Nisi duis eu dolor nostrud
                      fugiat quis ad laborum aliqua laboris nisi laboris aliqua.
                      Laborum tempor ullamco ex Lorem excepteur. Ex consequat
                      officia exercitation ut cillum veniam fugiat dolor enim
                      irure ut esse in fugiat.
                    &lt;/p&gt;
                    &lt;p class=&quot;eduk-text&quot;&gt;
                      Non ex occaecat veniam minim fugiat enim magna.
                    &lt;/p&gt;
                    &lt;p class=&quot;eduk-text&quot;&gt;
                      Cillum commodo quis ut laboris aliquip et non Lorem fugiat.
                      Laborum minim esse ad proident proident eiusmod nostrud aliqua
                      elit. Id id eu cupidatat aliquip magna amet magna nisi non in
                      et nisi. Dolor laboris enim incididunt tempor veniam. Ex aliquip
                      dolor consectetur officia elit.
                    &lt;/p&gt;
                  &lt;/section&gt;
                &lt;/section&gt;
              &lt;/div&gt;
              &lt;div class=&quot;eduk-modal__sub show&quot;&gt;
                &lt;div class=&quot;eduk-modal__sub-mask&quot;&gt;&lt;/div&gt;
                &lt;div class=&quot;eduk-modal__sub-content&quot;&gt;
                  &lt;div class=&quot;eduk-modal__sub-top&quot;&gt;
                    &lt;img src=&quot;/assets/icons/horizontal-line.png&quot; class=&quot;eduk-modal__sub-top-line show&quot;&gt;
                    &lt;img src=&quot;/assets/icons/chevron-down.png&quot; class=&quot;eduk-modal__sub-top-down&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class=&quot;eduk-row eduk-no-gutters&quot;&gt;
                    &lt;div class=&quot;eduk-col-3 eduk-col-sm-12&quot;&gt;
                      &lt;span class=&quot;eduk-logo eduk-u-mb-3&quot;&gt;
                        &lt;img src=&quot;/assets/img/logo-placeholder.png&quot;&gt;
                      &lt;/span&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;eduk-col eduk-col-sm-12&quot;&gt;
                      &lt;h4 class=&quot;eduk-head eduk-u-mb-1&quot;&gt;Dolore duis tempor Anim do fugiat.&lt;/h4&gt;
                      &lt;p class=&quot;eduk-text eduk-u-text-sm--mobile eduk-u-mb-0&quot;&gt;
                        Tempor adipisicing commodo ut cupidatat aliqua nisi elit.
                      &lt;/p&gt;
                    &lt;/div&gt;
                  &lt;/div&gt;
                  &lt;div class=&quot;eduk-modal__sub-actions&quot;&gt;
                    &lt;button class=&quot;eduk-btn eduk-btn--primary eduk-btn--lg eduk-u-m-1 &quot;&gt;Apply to this school&lt;/button&gt;
                    &lt;button class=&quot;eduk-btn eduk-btn--tertiary eduk-btn--outlined eduk-btn--lg eduk-u-m-1 &quot;&gt;Message School&lt;/button&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class=&quot;eduk-modal__sub-close&quot;&gt;
                  Close Window
                  &lt;i class=&quot;fas fa-times&quot;&gt;&lt;/i&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          <!-- eslint-enable max-len -->
        </code>
      </template>
    </Preview>
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
            <span class="eduk-logo eduk-u-mb-3">
              <img :src="defaultLogo">
            </span>
          </Column>
          <Column :colssm="12">
            <h4 class="eduk-head eduk-u-mb-1">Dolore duis tempor Anim do fugiat.</h4>
            <p class="eduk-text eduk-u-text-sm--mobile eduk-u-mb-0">
              Tempor adipisicing commodo ut cupidatat aliqua nisi elit.
            </p>
          </Column>
        </Row>
      </template>
      <template v-slot:subActions>
        <Btn size="lg" class="eduk-u-mb-1">Apply to this school</Btn>
        <Btn variant="tertiary" size="lg" outline>Message School</Btn>
      </template>
    </Modal>
  </div>
</template>

<script>
import Preview from '@/views/components/Preview/index.vue';
import Row from '@/UIKit/Grid/Row.component.vue';
import Column from '@/UIKit/Grid/Column.component.vue';
import Modal from '@/UIKit/Modal/Modal.component.vue';
import Btn from '@/UIKit/Btn/Btn.component.vue';
import logoPlaceholder from '@/assets/img/logo-placeholder.png';

export default {
  name: 'ModalWithSub',
  components: {
    Preview,
    Modal,
    Btn,
    Row,
    Column,
  },
  data() {
    return {
      modalTitle: 'Modal w/ Sub Content',
      defaultLogo: logoPlaceholder,
    };
  },
  methods: {
    showModal() {
      this.$refs.modalSub.show();
    },
  },
};
</script>
