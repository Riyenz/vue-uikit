<template>
  <div>
    <h2 class="eduk-h2 eduk-u-mb-3">Accordion</h2>

    <h3 class="eduk-h3 eduk-u-mb-3">Standard</h3>
    <Preview>
      <template slot="example">
        <div>
          <Accordion class="eduk-u-mb-3">
            <AccordionItem title="Standard 1">
              Magna ea eu laboris sunt incididunt ex exercitation esse qui laborum.
            </AccordionItem>
            <AccordionItem title="Standard 2">
              Magna ea eu laboris sunt incididunt ex exercitation esse qui laborum.
            </AccordionItem>
          </Accordion>
        </div>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &lt;Accordion&gt;
            &lt;AccordionItem title=&quot;Standard 1&quot;&gt;
              Magna ea eu laboris sunt incididunt ex exercitation esse qui laborum.
            &lt;/AccordionItem&gt;
            &lt;AccordionItem title=&quot;Standard 2&quot;&gt;
              Magna ea eu laboris sunt incididunt ex exercitation esse qui laborum.
            &lt;/AccordionItem&gt;
          &lt;/Accordion&gt;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &lt;div class=&quot;eduk-accordion&quot;&gt;
            &lt;div class=&quot;eduk-accordion-item&quot;&gt;
              &lt;div class=&quot;eduk-accordion-item__header&quot;&gt;
                &lt;i class=&quot;fa fa-caret-right eduk-accordion-item__arrow&quot;&gt;&lt;/i&gt;
                &lt;i class=&quot;fa fa-caret-down eduk-accordion-item__arrow eduk-u-d-none&quot;&gt;&lt;/i&gt;
                &lt;h6 class=&quot;eduk-accordion-item__header-title eduk-u-m-0&quot;&gt;Standard 1&lt;/h6&gt;
              &lt;/div&gt;
              &lt;div class=&quot;eduk-accordion-item__content&quot;&gt;
                Magna ea eu laboris sunt incididunt ex exercitation esse qui laborum.
              &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class=&quot;eduk-accordion-item eduk-accordion-item--active&quot;&gt;
              &lt;div class=&quot;eduk-accordion-item__header&quot;&gt;
                &lt;i class=&quot;fa fa-caret-right eduk-accordion-item__arrow eduk-u-d-none&quot;&gt;&lt;/i&gt;
                &lt;i class=&quot;fa fa-caret-down eduk-accordion-item__arrow&quot;&gt;&lt;/i&gt;
                &lt;h6 class=&quot;eduk-accordion-item__header-title eduk-u-m-0&quot;&gt;Standard 2&lt;/h6&gt;
              &lt;/div&gt;
              &lt;div class=&quot;eduk-accordion-item__content&quot;&gt;
                Magna ea eu laboris sunt incididunt ex exercitation esse qui laborum.
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        </code>
      </template>
    </Preview>

    <h3 class="eduk-h3 eduk-u-mb-3">Bordered</h3>
    <Preview>
      <template slot="example">
        <div>
          <Accordion bordered class="eduk-u-mb-3">
            <AccordionItem title="Bordered 1">
              Magna ea eu laboris sunt incididunt ex exercitation esse qui laborum.
            </AccordionItem>
            <AccordionItem title="Bordered 2">
              Magna ea eu laboris sunt incididunt ex exercitation esse qui laborum.
            </AccordionItem>
          </Accordion>
        </div>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &lt;Accordion bordered&gt;
            ...
          &lt;/Accordion&gt;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &lt;div class=&quot;eduk-accordion eduk-accordion--bordered&quot;&gt;
            ...
          &lt;/div&gt;
        </code>
      </template>
    </Preview>

    <h3 class="eduk-h3 eduk-u-mb-3">Thick Bordered</h3>
    <Preview>
      <template slot="example">
        <div>
          <Accordion thick bordered class="eduk-u-mb-3">
            <AccordionItem title="Bordered 1">
              Magna ea eu laboris sunt incididunt ex exercitation esse qui laborum.
            </AccordionItem>
            <AccordionItem title="Bordered 2">
              Magna ea eu laboris sunt incididunt ex exercitation esse qui laborum.
            </AccordionItem>
          </Accordion>
        </div>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &lt;Accordion thick bordered&gt;
            ...
          &lt;/Accordion&gt;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &lt;div class=&quot;eduk-accordion eduk-accordion--bordered eduk-accordion--thick&quot;&gt;
            ...
          &lt;/div&gt;
        </code>
      </template>
    </Preview>

    <h3 class="eduk-h3 eduk-u-mb-3">Thick Bordered Themed</h3>
    <Preview>
      <template slot="example">
        <div>
          <Accordion thick bordered variant="primary" class="eduk-u-mb-3">
            <AccordionItem title="Primary 1">
              Magna ea eu laboris sunt incididunt ex exercitation esse qui laborum.
            </AccordionItem>
            <AccordionItem title="Primary 2">
              Magna ea eu laboris sunt incididunt ex exercitation esse qui laborum.
            </AccordionItem>
          </Accordion>

          <Accordion thick bordered variant="secondary" class="eduk-u-mb-3">
            <AccordionItem title="Secondary 1">
              Magna ea eu laboris sunt incididunt ex exercitation esse qui laborum.
            </AccordionItem>
            <AccordionItem title="Secondary 2">
              Magna ea eu laboris sunt incididunt ex exercitation esse qui laborum.
            </AccordionItem>
          </Accordion>

          <Accordion thick bordered variant="tertiary" class="eduk-u-mb-3">
            <AccordionItem title="Tertiary 1">
              Magna ea eu laboris sunt incididunt ex exercitation esse qui laborum.
            </AccordionItem>
            <AccordionItem title="Tertiary 2">
              Magna ea eu laboris sunt incididunt ex exercitation esse qui laborum.
            </AccordionItem>
          </Accordion>
        </div>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &lt;Accordion thick bordered variant="primary"&gt;
            ...
          &lt;/Accordion&gt;

          &lt;Accordion thick bordered variant="secondary"&gt;
            ...
          &lt;/Accordion&gt;

          &lt;Accordion thick bordered variant="tertiary"&gt;
            ...
          &lt;/Accordion&gt;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
&lt;div class=&quot;eduk-accordion eduk-accordion--bordered eduk-accordion--thick eduk-accordion--inverted eduk-accordion--primary&quot;&gt;
  ...
&lt;/div&gt;

&lt;div class=&quot;eduk-accordion eduk-accordion--bordered eduk-accordion--thick eduk-accordion--inverted eduk-accordion--secondary&quot;&gt;
  ...
&lt;/div&gt;

&lt;div class=&quot;eduk-accordion eduk-accordion--bordered eduk-accordion--thick eduk-accordion--inverted eduk-accordion--tertiary&quot;&gt;
  ...
&lt;/div&gt;
        </code>
      </template>
    </Preview>

    <h3 class="eduk-h3 eduk-u-mb-3">Menu</h3>
    <Preview>
      <template slot="example">
        <Accordion thick bordered menu>
          <AccordionItem>
            <template slot="title">
              <font-awesome-icon
                class="eduk-u-mr-2"
                icon="music"
                size="sm"
              />
              Music
            </template>
            Magna ea eu laboris sunt incididunt ex exercitation esse qui laborum.
          </AccordionItem>
          <AccordionItem>
            <template slot="title">
              <font-awesome-icon
                class="eduk-u-mr-2"
                icon="book"
                size="sm"
              />
              Reading
            </template>
            Nostrud cupidatat laborum enim irure ea occaecat voluptate et consectetur aliquip duis.
          </AccordionItem>
        </Accordion>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &lt;Accordion thick bordered menu&gt;
            &lt;AccordionItem&gt;
              &lt;template slot=&quot;title&quot;&gt;
                &lt;font-awesome-icon
                  class=&quot;eduk-u-mr-2&quot;
                  icon=&quot;music&quot;
                  size=&quot;sm&quot;
                /&gt;
                Music
              &lt;/template&gt;
              Magna ea eu laboris sunt incididunt ex exercitation esse qui laborum.
            &lt;/AccordionItem&gt;
            &lt;AccordionItem&gt;
              &lt;template slot=&quot;title&quot;&gt;
                &lt;font-awesome-icon
                  class=&quot;eduk-u-mr-2&quot;
                  icon=&quot;book&quot;
                  size=&quot;sm&quot;
                /&gt;
                Reading
              &lt;/template&gt;
              Nostrud cupidatat laborum enim irure ea occaecat voluptate et consectetur aliquip duis.
            &lt;/AccordionItem&gt;
          &lt;/Accordion&gt;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &lt;div class=&quot;eduk-accordion eduk-accordion--thick eduk-accordion--bordered eduk-accordion--inverted&quot;&gt;
            &lt;div class=&quot;eduk-accordion-item&quot;&gt;
              &lt;div class=&quot;eduk-accordion-item__header&quot;&gt;
                &lt;i class=&quot;fa fa-caret-right eduk-accordion-item__arrow&quot;&gt;&lt;/i&gt;
                &lt;i class=&quot;fa fa-caret-down eduk-accordion-item__arrow eduk-u-d-none&quot;&gt;&lt;/i&gt;
                &lt;h6 class=&quot;eduk-accordion-item__header-title eduk-u-m-0&quot;&gt;
                  &lt;i class=&quot;fa fa-music eduk-u-mr-2&quot;&gt;&lt;/i&gt;
                  Music
              &lt;/h6&gt;
            &lt;/div&gt;
            &lt;div class=&quot;eduk-accordion-item__content&quot;&gt;
              Magna ea eu laboris sunt incididunt ex exercitation esse qui laborum.
            &lt;/div&gt;
          &lt;/div&gt;
            &lt;div class=&quot;eduk-accordion-item&quot;&gt;
              &lt;div class=&quot;eduk-accordion-item__header&quot;&gt;
                &lt;i class=&quot;fa fa-caret-right eduk-accordion-item__arrow eduk-u-d-none&quot;&gt;&lt;/i&gt;
                &lt;i class=&quot;fa fa-caret-down eduk-accordion-item__arrow&quot;&gt;&lt;/i&gt;
                &lt;h6 class=&quot;eduk-accordion-item__header-title eduk-u-m-0&quot;&gt;
                    &lt;i class=&quot;fa fa-book eduk-u-mr-2&quot;&gt;&lt;/i&gt;
                    Reading
                &lt;/h6&gt;
              &lt;/div&gt;
              &lt;div class=&quot;eduk-accordion-item__content&quot;&gt;
                  Nostrud cupidatat laborum enim irure ea occaecat voluptate et consectetur aliquip duis.
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        </code>
      </template>
    </Preview>
    <AccordionLoading/>
    <AccordionApi/>
    <AccordionItemApi/>
  </div>
</template>

<script>
// TODO: Fix Button on ItemList
import Accordion from '@/UIKit/Accordion/Accordion.component.vue';
import AccordionItem from '@/UIKit/Accordion/AccordionItem.component.vue';
import Preview from '@/views/components/Preview/index.vue';

import AccordionLoading from './AccordionLoading.vue';
import AccordionApi from './AccordionApi.vue';
import AccordionItemApi from './AccordionItemApi.vue';

export default {
  name: 'Code',
  components: {
    Accordion,
    AccordionItem,
    Preview,
    AccordionApi,
    AccordionItemApi,
    AccordionLoading,
  },
  methods: {
    handler(pagination) {
      return pagination;
    },
  },
};
</script>

<style lang="scss" scoped>
.demo-accordion {
  &__code {
    display: flex;
    flex-direction: column;
  }
}
</style>
