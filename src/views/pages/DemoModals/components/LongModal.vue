<template>
  <div class="long-modal">
    <h3 class="eduk-text-muted">Long Modal</h3>
    <Btn text="Show Modal" noMargin @click.native="showModal"/>
    <Modal ref="longModal" :title="modalTitle">
      <template v-slot:content>
        <h3>Here might be a content title</h3>
        <p>
          Cupidatat laborum deserunt ipsum quis commodo.
          Duis est adipisicing aute irure aliqua dolor.
          Nostrud officia duis aliquip enim labore amet.
        </p>
        <p>
          Cillum irure ipsum mollit dolore. Eiusmod amet
          laborum fugiat fugiat tempor adipisicing anim in.
          Eiusmod duis sunt tempor sint laboris officia qui.
          Dolor fugiat voluptate ad laboris exercitation non
          adipisicing exercitation. Nulla sint magna dolor
          quis ut reprehenderit anim reprehenderit eiusmod
          nostrud pariatur. Occaecat dolor exercitation
          occaecat ea adipisicing elit proident in ad occaecat.
        </p>
        <p>
          Qui reprehenderit fugiat amet consequat id
          deserunt velit. Aute aliquip tempor Lorem dolor
          nulla ut. Exercitation eiusmod proident ea Lorem
          voluptate est voluptate do aliquip.
        </p>
        <p>
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
        <p>
          Qui reprehenderit fugiat amet consequat id
          deserunt velit. Aute aliquip tempor Lorem dolor
          nulla ut. Exercitation eiusmod proident ea Lorem
          voluptate est voluptate do aliquip.
        </p>
      </template>
    </Modal>

    <pre class="code">
      <label>Vue</label>
      <code class="language-html">
        &#x3C;Modal ref=&#x22;longModal&#x22; :title=&#x22;modalTitle&#x22;&#x3E;
          &#x3C;template v-slot:content&#x3E;
            &#x3C;h3&#x3E;Here might be a content title&#x3C;/h3&#x3E;
            &#x3C;p&#x3E;
              Cupidatat laborum deserunt ipsum quis commodo.
              Duis est adipisicing aute irure aliqua dolor.
              Nostrud officia duis aliquip enim labore amet.
            &#x3C;/p&#x3E;
            &#x3C;p&#x3E;
              Cillum irure ipsum mollit dolore. Eiusmod amet
              laborum fugiat fugiat tempor adipisicing anim in.
              Eiusmod duis sunt tempor sint laboris officia qui.
              Dolor fugiat voluptate ad laboris exercitation non
              adipisicing exercitation. Nulla sint magna dolor
              quis ut reprehenderit anim reprehenderit eiusmod
              nostrud pariatur. Occaecat dolor exercitation
              occaecat ea adipisicing elit proident in ad occaecat.
            &#x3C;/p&#x3E;
            &#x3C;p&#x3E;
              Qui reprehenderit fugiat amet consequat id
              deserunt velit. Aute aliquip tempor Lorem dolor
              nulla ut. Exercitation eiusmod proident ea Lorem
              voluptate est voluptate do aliquip.
            &#x3C;/p&#x3E;
            &#x3C;p&#x3E;
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
            &#x3C;p&#x3E;
              Qui reprehenderit fugiat amet consequat id
              deserunt velit. Aute aliquip tempor Lorem dolor
              nulla ut. Exercitation eiusmod proident ea Lorem
              voluptate est voluptate do aliquip.
            &#x3C;/p&#x3E;
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
                &#x3C;h2 class=&#x22;eduk-modal__header-title&#x22;&#x3E;Long Modal&#x3C;/h2&#x3E;
                &#x3C;i class=&#x22;fas fa-times&#x22;&#x3E;&#x3C;/i&#x3E;
              &#x3C;/section&#x3E;
              &#x3C;section class=&#x22;eduk-modal__body&#x22;&#x3E;
                &#x3C;h3&#x3E;Here might be a content title&#x3C;/h3&#x3E;
                &#x3C;p&#x3E;
                  Cupidatat laborum deserunt ipsum quis commodo.
                  Duis est adipisicing aute irure aliqua dolor.
                  Nostrud officia duis aliquip enim labore amet.
                &#x3C;/p&#x3E;
                &#x3C;p&#x3E;
                  Cillum irure ipsum mollit dolore. Eiusmod amet
                  laborum fugiat fugiat tempor adipisicing anim in.
                  Eiusmod duis sunt tempor sint laboris officia qui.
                  Dolor fugiat voluptate ad laboris exercitation non
                  adipisicing exercitation. Nulla sint magna dolor
                  quis ut reprehenderit anim reprehenderit eiusmod
                  nostrud pariatur. Occaecat dolor exercitation
                  occaecat ea adipisicing elit proident in ad occaecat.
                &#x3C;/p&#x3E;
                &#x3C;p&#x3E;
                  Qui reprehenderit fugiat amet consequat id
                  deserunt velit. Aute aliquip tempor Lorem dolor
                  nulla ut. Exercitation eiusmod proident ea Lorem
                  voluptate est voluptate do aliquip.
                &#x3C;/p&#x3E;
                &#x3C;p&#x3E;
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
                &#x3C;p&#x3E;
                  Qui reprehenderit fugiat amet consequat id
                  deserunt velit. Aute aliquip tempor Lorem dolor
                  nulla ut. Exercitation eiusmod proident ea Lorem
                  voluptate est voluptate do aliquip.
                &#x3C;/p&#x3E;
              &#x3C;/section&#x3E;
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
  name: 'LongModal',
  components: {
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
