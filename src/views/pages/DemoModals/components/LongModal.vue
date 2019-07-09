<template>
  <div class="long-modal">
    <h3 class="eduk-h3 eduk-u-mb-3">Long Modal</h3>
    <Preview>
      <template slot="example">
        <Btn noMargin @click.native="showModal">Show Alert</Btn>
      </template>
      <template slot="vue-code">
        <code class="language-html">
&#x3C;Modal ref=&#x22;longModal&#x22; :title=&#x22;modalTitle&#x22;&#x3E;
  &#x3C;template v-slot:content&#x3E;
    &#x3C;h3 class=&#x22;eduk-head&#x22;&#x3E;Here might be a content title&#x3C;/h3&#x3E;
    &#x3C;p class=&#x22;eduk-text&#x22;&#x3E;
      Cupidatat laborum deserunt ipsum quis commodo.
      Duis est adipisicing aute irure aliqua dolor.
      Nostrud officia duis aliquip enim labore amet.
    &#x3C;/p&#x3E;
    &#x3C;p class=&#x22;eduk-text&#x22;&#x3E;
      Cillum irure ipsum mollit dolore. Eiusmod amet
      laborum fugiat fugiat tempor adipisicing anim in.
      Eiusmod duis sunt tempor sint laboris officia qui.
      Dolor fugiat voluptate ad laboris exercitation non
      adipisicing exercitation. Nulla sint magna dolor
      quis ut reprehenderit anim reprehenderit eiusmod
      nostrud pariatur. Occaecat dolor exercitation
      occaecat ea adipisicing elit proident in ad occaecat.
    &#x3C;/p&#x3E;
    &#x3C;p class=&#x22;eduk-text&#x22;&#x3E;
      Qui reprehenderit fugiat amet consequat id
      deserunt velit. Aute aliquip tempor Lorem dolor
      nulla ut. Exercitation eiusmod proident ea Lorem
      voluptate est voluptate do aliquip.
    &#x3C;/p&#x3E;
    &#x3C;p class=&#x22;eduk-text&#x22;&#x3E;
      Laborum anim velit nostrud nisi cillum consectetur
      velit voluptate laborum id. Reprehenderit ullamco id
      dolore adipisicing. Enim tempor ut velit mollit
      eiusmod laborum nostrud consectetur proident est
      esse. Labore Lorem pariatur minim deserunt qui velit
      sunt voluptate officia ipsum adipisicing esse dolor.
      Consectetur dolor consectetur et esse laborum dolore
      ipsum elit aliqua consequat magna pariatur. Cillum
      anim laboris ut amet est. Aute ipsum aute enim
      consectetur exercitation nulla anim fugiat dolor
      ad occaecat laboris.
    &#x3C;/p&#x3E;
    &#x3C;p class=&#x22;eduk-text&#x22;&#x3E;
      Qui reprehenderit fugiat amet consequat id
      deserunt velit. Aute aliquip tempor Lorem dolor
      nulla ut. Exercitation eiusmod proident ea Lorem
      voluptate est voluptate do aliquip.
    &#x3C;/p&#x3E;
  &#x3C;/template&#x3E;
&#x3C;/Modal&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
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
            Cupidatat laborum deserunt ipsum quis commodo.
            Duis est adipisicing aute irure aliqua dolor.
            Nostrud officia duis aliquip enim labore amet.
          &#x3C;/p&#x3E;
          &#x3C;p class=&#x22;eduk-text&#x22;&#x3E;
            Cillum irure ipsum mollit dolore. Eiusmod amet
            laborum fugiat fugiat tempor adipisicing anim in.
            Eiusmod duis sunt tempor sint laboris officia qui.
            Dolor fugiat voluptate ad laboris exercitation non
            adipisicing exercitation. Nulla sint magna dolor
            quis ut reprehenderit anim reprehenderit eiusmod
            nostrud pariatur. Occaecat dolor exercitation
            occaecat ea adipisicing elit proident in ad occaecat.
          &#x3C;/p&#x3E;
          &#x3C;p class=&#x22;eduk-text&#x22;&#x3E;
            Qui reprehenderit fugiat amet consequat id
            deserunt velit. Aute aliquip tempor Lorem dolor
            nulla ut. Exercitation eiusmod proident ea Lorem
            voluptate est voluptate do aliquip.
          &#x3C;/p&#x3E;
          &#x3C;p class=&#x22;eduk-text&#x22;&#x3E;
            Laborum anim velit nostrud nisi cillum consectetur
            velit voluptate laborum id. Reprehenderit ullamco id
            dolore adipisicing. Enim tempor ut velit mollit
            eiusmod laborum nostrud consectetur proident est
            esse. Labore Lorem pariatur minim deserunt qui velit
            sunt voluptate officia ipsum adipisicing esse dolor.
            Consectetur dolor consectetur et esse laborum dolore
            ipsum elit aliqua consequat magna pariatur. Cillum
            anim laboris ut amet est. Aute ipsum aute enim
            consectetur exercitation nulla anim fugiat dolor
            ad occaecat laboris.
          &#x3C;/p&#x3E;
          &#x3C;p class=&#x22;eduk-text&#x22;&#x3E;
            Qui reprehenderit fugiat amet consequat id
            deserunt velit. Aute aliquip tempor Lorem dolor
            nulla ut. Exercitation eiusmod proident ea Lorem
            voluptate est voluptate do aliquip.
          &#x3C;/p&#x3E;
        &#x3C;/section&#x3E;
      &#x3C;/section&#x3E;
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
        </code>
      </template>
    </Preview>

    <Modal ref="longModal" :title="modalTitle">
      <template v-slot:content>
        <h3 class="eduk-head">Here might be a content title</h3>
        <p class="eduk-text">
          Cupidatat laborum deserunt ipsum quis commodo.
          Duis est adipisicing aute irure aliqua dolor.
          Nostrud officia duis aliquip enim labore amet.
        </p>
        <p class="eduk-text">
          Cillum irure ipsum mollit dolore. Eiusmod amet
          laborum fugiat fugiat tempor adipisicing anim in.
          Eiusmod duis sunt tempor sint laboris officia qui.
          Dolor fugiat voluptate ad laboris exercitation non
          adipisicing exercitation. Nulla sint magna dolor
          quis ut reprehenderit anim reprehenderit eiusmod
          nostrud pariatur. Occaecat dolor exercitation
          occaecat ea adipisicing elit proident in ad occaecat.
        </p>
        <p class="eduk-text">
          Qui reprehenderit fugiat amet consequat id
          deserunt velit. Aute aliquip tempor Lorem dolor
          nulla ut. Exercitation eiusmod proident ea Lorem
          voluptate est voluptate do aliquip.
        </p>
        <p class="eduk-text">
          Laborum anim velit nostrud nisi cillum consectetur
          velit voluptate laborum id. Reprehenderit ullamco id
          dolore adipisicing. Enim tempor ut velit mollit
          eiusmod laborum nostrud consectetur proident est
          esse. Labore Lorem pariatur minim deserunt qui velit
          sunt voluptate officia ipsum adipisicing esse dolor.
          Consectetur dolor consectetur et esse laborum dolore
          ipsum elit aliqua consequat magna pariatur. Cillum
          anim laboris ut amet est. Aute ipsum aute enim
          consectetur exercitation nulla anim fugiat dolor
          ad occaecat laboris.
        </p>
        <p class="eduk-text">
          Qui reprehenderit fugiat amet consequat id
          deserunt velit. Aute aliquip tempor Lorem dolor
          nulla ut. Exercitation eiusmod proident ea Lorem
          voluptate est voluptate do aliquip.
        </p>
      </template>
    </Modal>
  </div>
</template>

<script>
import Preview from '@/views/components/Preview/index.vue';
import Modal from '@/UIKit/Modal/Modal.component.vue';
import Btn from '@/UIKit/Btn/Btn.component.vue';

export default {
  name: 'LongModal',
  components: {
    Preview,
    Modal,
    Btn,
  },
  data() {
    return {
      modalTitle: 'Long Modal',
    };
  },
  methods: {
    showModal() {
      this.$refs.longModal.show();
    },
  },
};
</script>
