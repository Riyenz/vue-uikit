<template>
  <TabContent :selected="selectedTab" @change="onTabChange">
    <template slot="design">
      <div></div>
    </template>
    <template slot="code">
      <div class="demo-accordion">
        <h1 class="eduk-head">Accordion</h1>

        <h3 class="eduk-u-text-muted">Standard</h3>
        <Preview>
          <template slot="example">
            <Accordion :content="list1" :variant="variants.standard" />
          </template>
          <template slot="vue-code">
            <AccordionStandard />`
          </template>
        </Preview>

        <h3 class="eduk-u-text-muted">Styled and Fluid</h3>
        <Preview>
          <template slot="example">
            <Accordion :content="list2" :variant="variants.outlined" />
          </template>
          <template slot="vue-code">
            <AccordionOutlined />
          </template>
        </Preview>

        <h3 class="eduk-u-text-muted">Styled and Fluid - Variation</h3>

        <Preview>
          <template slot="example">
            <Accordion :content="list3" :variant="variants.themed" theme="secondary" />
          </template>
          <template slot="vue-code">
            <AccordionThemed />
          </template>
        </Preview>

        <h3 class="eduk-u-text-muted">Nested Accordion</h3>

        <Preview>
          <template slot="example">
            <Accordion :content="list4" :variant="variants.themed" theme="primary" />
          </template>
          <template slot="vue-code">
            <AccordionNested />
          </template>
        </Preview>

        <h3 class="eduk-u-text-muted">Accordion Menu</h3>
        <Preview>
          <template slot="example">
            <Accordion :content="list5" :variant="variants.menu">
              <template slot="menu-1">
                <h3>This is a customizable accordion using slot</h3>
              </template>
              <template slot="menu-2">
                <h3>But to use it, you need to change type="slot" to make it work</h3>
                <p>Afte that, you can use now any elements you want inside the slot component.</p>
                <button class="eduk-btn eduk-btn-primary">Like this button</button>
              </template>
              <template slot="menu-3">
                <h3>Then the name of the slot here should match the name in your list</h3>
              </template>
              <template slot="menu-4">
                <h3>This is a customizable content 4</h3>
              </template>
            </Accordion>
          </template>
          <template slot="vue-code">
            <AccordionMenu />
          </template>
        </Preview>
      </div>
    </template>
    <template slot="quicklinks"></template>
  </TabContent>
</template>

<script>
import Accordion from '@/UIKit/Accordion/Accordion.component.vue';
import AccordionStandard from './components/AccordionStandard.vue';
import AccordionOutlined from './components/AccordionOutlined.vue';
import AccordionThemed from './components/AccordionThemed.vue';
import AccordionNested from './components/AccordionNested.vue';
import AccordionMenu from './components/AccordionMenu.vue';

import Preview from '@/views/components/Preview/index.vue';
import TabContent from '@/views/components/TabContent/index.vue';

export default {
  name: 'DemoAccordion',
  props: {
    selectedTab: {
      type: Number,
      default: 0,
    },
  },
  components: {
    Accordion,
    AccordionStandard,
    AccordionOutlined,
    AccordionThemed,
    AccordionNested,
    AccordionMenu,
    TabContent,
    Preview,
  },
  methods: {
    onTabChange(tabIndex) {
      this.$emit('tabChange', tabIndex);
    },
  },
  data() {
    return {
      variants: {
        standard: 'standard',
        outlined: 'outlined',
        themed: 'themed',
        menu: 'menu',
      },
      list1: [
        {
          title: 'Sample Content',
          content: '<a href="/">this is a link using type: html</a>',
          active: false,
          type: 'html',
        },
        {
          title: 'Sample Content 2',
          content: 'hello',
          active: false,
          type: 'text',
        },
        {
          title: 'Sample Content',
          content: 'hallo',
          type: 'text',
        },
        {
          title: 'Sample Content 2',
          content: 'hello',
          active: false,
          type: 'text',
        },
      ],
      list2: [
        {
          title: 'Sample Content',
          content: 'hello',
          active: false,
          type: 'text',
        },
        {
          title: 'Sample Content 2',
          content: [
            {
              title: 'Sample Content 2',
              content:
                '<p>This is an html inside a sub-list <a href="/">As a proof, you can click this link.</a></p>',
              active: false,
              type: 'html',
            },
            {
              title: 'Sample Content 2',
              content: 'hello',
              active: false,
              type: 'text',
            },
          ],
          active: false,
          type: 'text',
        },
        {
          title: 'Sample Content',
          content: 'test',
          active: false,
          type: 'text',
        },
        {
          title: 'Sample Content 2',
          content: 'hello',
          active: false,
          type: 'text',
        },
      ],
      list3: [
        {
          title: 'Sample Content',
          content: 'hello',
          active: false,
          type: 'text',
        },
        {
          title: 'Sample Content 2',
          content: 'hello',
          active: false,
          type: 'text',
        },
        {
          title: 'Sample Content',
          content: 'test',
          active: false,
          type: 'text',
        },
        {
          title: 'Sample Content 2',
          content: 'hello',
          active: false,
          type: 'text',
        },
      ],
      list4: [
        {
          title: 'Sample Content',
          content: 'hello',
          active: false,
          type: 'text',
        },
        {
          title: 'Sample Content 2',
          content: 'hello',
          active: false,
          type: 'text',
        },
        {
          title: 'Sample Content',
          content: [
            {
              title: 'Sample Content 2',
              content: 'hello',
              active: false,
              type: 'text',
            },
            {
              title: 'Sample Content 2',
              content: 'hello',
              active: false,
              type: 'text',
            },
            {
              title: 'Sample Content 2',
              content: 'hello',
              active: false,
              type: 'text',
            },
          ],
          active: false,
          type: 'text',
        },
        {
          title: 'Sample Content 2',
          content: 'hello',
          active: false,
          type: 'text',
        },
      ],
      list5: [
        {
          icon: '',
          name: 'menu-1',
          title: 'Sample Content',
          content: 'hello',
          active: false,
          type: 'slot',
        },
        {
          icon: '',
          name: 'menu-2',
          title: 'Sample Content 2',
          content: 'hello',
          active: false,
          type: 'slot',
        },
        {
          icon: '',
          name: 'menu-3',
          title: 'Sample Content 3',
          content: 'hello',
          active: false,
          type: 'slot',
        },
        {
          icon: '',
          name: 'menu-4',
          title: 'Sample Content 4',
          content: 'hello',
          active: false,
          type: 'slot',
        },
      ],
    };
  },
};
</script>
