<template>
  <div>
    <h3 class="eduk-h3 eduk-u-mb-3">Active</h3>
    <Preview>
      <template slot="example">
        <Tab :items="['first', 'second', 'third']">
          <template slot="first">
            <div>
              <h2 class="eduk-u-m-0">first</h2>
              <p class="eduk-u-m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce tempor viverra nulla. Vestibulum lacus justo, mollis
                vitae quam ut, tincidunt varius libero. Nam sed ultrices
                sem, a luctus orci. In hac habitasse platea dictumst.
                Phasellus dictum consequat placerat.
              </p>
            </div>
          </template>
          <template slot="second">
            <div>
              <h2 class="eduk-u-m-0">second</h2>
              <p class="eduk-u-m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit....
              </p>
            </div>
          </template>
          <template slot="third">
            <div>
              <h2 class="eduk-u-m-0">third</h2>
              <p class="eduk-u-m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit....
              </p>
            </div>
          </template>
        </Tab>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &#x3C;Tab :items=&#x22;['first', 'second', 'third']&#x22;&#x3E;
            &#x3C;template slot=&#x22;first&#x22;&#x3E;
              &#x3C;div&#x3E;
                &#x3C;h2 class=&#x22;eduk-u-m-0&#x22;&#x3E;first&#x3C;/h2&#x3E;
                &#x3C;p class=&#x22;eduk-u-m-0&#x22;&#x3E;
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Fusce tempor viverra nulla. Vestibulum lacus justo, mollis
                  vitae quam ut, tincidunt varius libero. Nam sed ultrices
                  sem, a luctus orci. In hac habitasse platea dictumst.
                  Phasellus dictum consequat placerat.
                &#x3C;/p&#x3E;
              &#x3C;/div&#x3E;
            &#x3C;/template&#x3E;
            &#x3C;template slot=&#x22;second&#x22;&#x3E;
              &#x3C;div&#x3E;
                &#x3C;h2 class=&#x22;eduk-u-m-0&#x22;&#x3E;second&#x3C;/h2&#x3E;
                &#x3C;p class=&#x22;eduk-u-m-0&#x22;&#x3E;
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit....
                &#x3C;/p&#x3E;
              &#x3C;/div&#x3E;
            &#x3C;/template&#x3E;
            &#x3C;template slot=&#x22;third&#x22;&#x3E;
              &#x3C;div&#x3E;
                &#x3C;h2 class=&#x22;eduk-u-m-0&#x22;&#x3E;third&#x3C;/h2&#x3E;
                &#x3C;p class=&#x22;eduk-u-m-0&#x22;&#x3E;
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit....
                &#x3C;/p&#x3E;
              &#x3C;/div&#x3E;
            &#x3C;/template&#x3E;
          &#x3C;/Tab&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &#x3C;div class=&#x22;eduk-tab&#x22;&#x3E;
            &#x3C;nav class=&#x22;eduk-tab-nav&#x22;&#x3E;
              &#x3C;div class=&#x22;eduk-tab-nav__item eduk-tab-nav__item--active&#x22;&#x3E;
                &#x3C;a class=&#x22;eduk-tab-nav__link&#x22;&#x3E;first&#x3C;/a&#x3E;
              &#x3C;/div&#x3E;
              &#x3C;div class=&#x22;eduk-tab-nav__item&#x22;&#x3E;
                &#x3C;a class=&#x22;eduk-tab-nav__link&#x22;&#x3E;second&#x3C;/a&#x3E;
              &#x3C;/div&#x3E;
              &#x3C;div class=&#x22;eduk-tab-nav__item&#x22;&#x3E;
                &#x3C;a class=&#x22;eduk-tab-nav__link&#x22;&#x3E;third&#x3C;/a&#x3E;
              &#x3C;/div&#x3E;
            &#x3C;/nav&#x3E;
            &#x3C;div data-slot=&#x22;first&#x22; class=&#x22;eduk-tab__pane eduk-tab__pane--active&#x22;&#x3E;
              &#x3C;div&#x3E;
                &#x3C;h2 class=&#x22;eduk-u-m-0&#x22;&#x3E;first&#x3C;/h2&#x3E;
                &#x3C;p class=&#x22;eduk-u-m-0&#x22;&#x3E;
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Fusce tempor viverra nulla. Vestibulum lacus justo, mollis
                  vitae quam ut, tincidunt varius libero. Nam sed ultrices
                  sem, a luctus orci. In hac habitasse platea dictumst.
                  Phasellus dictum consequat placerat.
                &#x3C;/p&#x3E;
              &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div data-slot=&#x22;second&#x22; class=&#x22;eduk-tab__pane&#x22;&#x3E;
              &#x3C;div&#x3E;
                &#x3C;h2 class=&#x22;eduk-u-m-0&#x22;&#x3E;second&#x3C;/h2&#x3E;
                &#x3C;p class=&#x22;eduk-u-m-0&#x22;&#x3E;
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit....
                &#x3C;/p&#x3E;
              &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div data-slot=&#x22;third&#x22; class=&#x22;eduk-tab__pane&#x22;&#x3E;
              &#x3C;div&#x3E;
                &#x3C;h2 class=&#x22;eduk-u-m-0&#x22;&#x3E;third&#x3C;/h2&#x3E;
                &#x3C;p class=&#x22;eduk-u-m-0&#x22;&#x3E;
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit....
                &#x3C;/p&#x3E;
              &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
          &#x3C;/div&#x3E;
        </code>
      </template>
    </Preview>
  </div>
</template>

<script>
import Tab from '@/UIKit/Tab/Tab.component.vue';
import Preview from '@/views/components/Preview/index.vue';

export default {
  name: 'ActiveTab',
  components: {
    Tab,
    Preview,
  },
};
</script>
