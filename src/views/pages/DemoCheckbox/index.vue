<template>
  <TabContent :selected="selectedTab" @change="onTabChange" padded>
    <template slot="design">
      <div></div>
    </template>
    <template slot="develop">
      <div class="demo-alert">
        <h2 class="eduk-h2 eduk-u-mb-3">Checkbox</h2>
        <h3 class="eduk-h3 eduk-u-mb-3">Design</h3>
        <Preview>
          <template slot="example">
            <Checkbox id="checkbox-1">Basic</Checkbox>
            <Checkbox id="checkbox-2" :checked="true">Selected</Checkbox>
            <Checkbox id="checkbox-3" :disabled="true">Disabled</Checkbox>
            <Checkbox id="checkbox-4" :disabled="true" :checked="true">Disabled and Selected
            </Checkbox>
          </template>

          <template slot="vue-code">
            <code class="language-html">
              &lt;Checkbox id=&quot;checkbox-1&quot;&gt;Basic&lt;/Checkbox&gt;
              &lt;Checkbox id=&quot;checkbox-2&quot;
                :checked=&quot;true&quot;&gt;Selected&lt;/Checkbox&gt;
              &lt;Checkbox id=&quot;checkbox-3&quot;
                :disabled=&quot;true&quot;&gt;Disabled&lt;/Checkbox&gt;
              &lt;Checkbox id=&quot;checkbox-4&quot; :disabled=&quot;true&quot;
                :checked=&quot;true&quot;&gt;Disabled and Selected&lt;/Checkbox&gt;
            </code>
          </template>
          <template slot="vanilla-code">
            <code class="language-html">
              &lt;span&gt;
                &lt;input type=&quot;checkbox&quot; id=&quot;checkbox-1&quot; class=&quot;eduk-checkbox&quot;&gt;
                &lt;label for=&quot;checkbox-1&quot;&gt;Basic&lt;/label&gt;
              &lt;/span&gt;

              &lt;span&gt;
                &lt;input type=&quot;checkbox&quot; id=&quot;checkbox-2&quot; class=&quot;eduk-checkbox&quot;&gt;
                &lt;label for=&quot;checkbox-2&quot;&gt;Selected&lt;/label&gt;
              &lt;/span&gt;

              &lt;span&gt;
                &lt;input type=&quot;checkbox&quot; id=&quot;checkbox-3&quot; disabled=&quot;disabled&quot; class=&quot;eduk-checkbox&quot;&gt;
                &lt;label for=&quot;checkbox-3&quot;&gt;Disabled&lt;/label&gt;
              &lt;/span&gt;

              &lt;span&gt;
                &lt;input type=&quot;checkbox&quot; id=&quot;checkbox-4&quot; disabled=&quot;disabled&quot; class=&quot;eduk-checkbox&quot;&gt;
                &lt;label for=&quot;checkbox-4&quot;&gt;Disabled and Selected&lt;/label&gt;
              &lt;/span&gt;
            </code>
          </template>
        </Preview>

        <h3 class="eduk-h3 eduk-u-mb-3">Sizes</h3>
        <div class="demo-alert">
          <Preview>
            <template slot="example">

              <Checkbox size="small" id="checkbox-5" :checked="true">Small</Checkbox>
              <Checkbox id="checkbox-6" :checked="true">Default</Checkbox>
              <Checkbox size="large" id="checkbox-7" :checked="true">Large</Checkbox>
            </template>

            <template slot="vue-code">
              <code class="language-html">
                &lt;Checkbox size=&quot;small&quot; id=&quot;checkbox-5&quot;
                  :checked=&quot;true&quot;&gt;Small&lt;/Checkbox&gt;
                &lt;Checkbox id=&quot;checkbox-6&quot;
                  :checked=&quot;true&quot;&gt;Default&lt;/Checkbox&gt;
                &lt;Checkbox size=&quot;large&quot; id=&quot;checkbox-7&quot;
                  :checked=&quot;true&quot;&gt;Large&lt;/Checkbox&gt;
              </code>
            </template>
            <template slot="vanilla-code">
              <code class="language-html">
                &lt;span&gt;
                    &lt;input type=&quot;checkbox&quot; id=&quot;checkbox-5&quot; class=&quot;eduk-checkbox eduk-checkbox--small&quot;&gt;
                    &lt;label for=&quot;checkbox-5&quot;&gt;Small&lt;/label&gt;
                &lt;/span&gt;
                &lt;span&gt;&lt;input type=&quot;checkbox&quot; id=&quot;checkbox-6&quot; class=&quot;eduk-checkbox&quot;&gt;
                    &lt;label for=&quot;checkbox-6&quot;&gt;Default&lt;/label&gt;
                &lt;/span&gt;
                &lt;span&gt;
                    &lt;input type=&quot;checkbox&quot; id=&quot;checkbox-7&quot; class=&quot;eduk-checkbox eduk-checkbox--large&quot;&gt;
                    &lt;label for=&quot;checkbox-7&quot;&gt;Large&lt;/label&gt;
                &lt;/span&gt;
              </code>
            </template>
          </Preview>
        </div>

        <h3 class="eduk-h3 eduk-u-mb-3">Color</h3>
        <div class="demo-alert">
          <Preview>
            <template slot="example">
              <Checkbox theme="primary" id="checkbox-8" :checked="true">Primary</Checkbox>
              <Checkbox theme="secondary" id="checkbox-9" :checked="true">Secondary</Checkbox>
              <Checkbox theme="tertiary" id="checkbox-10" :checked="true">Tertiary</Checkbox>
              <Checkbox theme="success" id="checkbox-11" :checked="true">Success</Checkbox>
              <Checkbox theme="warning" id="checkbox-12" :checked="true">Warning</Checkbox>
              <Checkbox theme="danger" id="checkbox-13" :checked="true">Danger</Checkbox>
              <Checkbox theme="info" id="checkbox-14" :checked="true">Info</Checkbox>
              <Checkbox theme="light" id="checkbox-15" :checked="true">Light</Checkbox>
              <Checkbox theme="dark" id="checkbox-16" :checked="true">Dark</Checkbox>
            </template>

            <template slot="vue-code">
              <code class="language-html">
                &lt;Checkbox theme=&quot;primary&quot; id=&quot;checkbox-8&quot;
                  :checked=&quot;true&quot;&gt;Primary&lt;/Checkbox&gt;
                &lt;Checkbox theme=&quot;secondary&quot; id=&quot;checkbox-9&quot;
                  :checked=&quot;true&quot;&gt;Secondary&lt;/Checkbox&gt;
                &lt;Checkbox theme=&quot;tertiary&quot; id=&quot;checkbox-10&quot;
                  :checked=&quot;true&quot;&gt;Tertiary&lt;/Checkbox&gt;
                &lt;Checkbox theme=&quot;success&quot; id=&quot;checkbox-11&quot;
                  :checked=&quot;true&quot;&gt;Success&lt;/Checkbox&gt;
                &lt;Checkbox theme=&quot;warning&quot; id=&quot;checkbox-12&quot;
                  :checked=&quot;true&quot;&gt;Warning&lt;/Checkbox&gt;
                &lt;Checkbox theme=&quot;danger&quot; id=&quot;checkbox-13&quot;
                  :checked=&quot;true&quot;&gt;Danger&lt;/Checkbox&gt;
                &lt;Checkbox theme=&quot;info&quot; id=&quot;checkbox-14&quot;
                  :checked=&quot;true&quot;&gt;Info&lt;/Checkbox&gt;
                &lt;Checkbox theme=&quot;light&quot; id=&quot;checkbox-15&quot;
                  :checked=&quot;true&quot;&gt;Light&lt;/Checkbox&gt;
                &lt;Checkbox theme=&quot;dark&quot; id=&quot;checkbox-16&quot;
                  :checked=&quot;true&quot;&gt;Dark&lt;/Checkbox&gt;
              </code>
            </template>
            <template slot="vanilla-code">
              <code class="language-html">
                &lt;span&gt;
                &lt;input type=&quot;checkbox&quot; id=&quot;checkbox-8&quot;
                class=&quot;eduk-checkbox eduk-checkbox--primary&quot;&gt;
                &lt;label for=&quot;checkbox-8&quot;&gt;Primary&lt;/label&gt;
                &lt;/span&gt;
              </code>
            </template>
          </Preview>
        </div>

        <h3 class="eduk-h3 eduk-u-mb-3">Nested Checkbox</h3>
        <p class="eduk-text eduk-u-text-semi-bold eduk-u-mb-4">
          Position can be modified if you pass position="inline" or position="block".
          <br/>
          Id's will be automatically inserted in the children of the indeterminate checkbox.
          <br/><br/>
          @getSelectedCheckbox will emit state of the checkboxes.
        </p>

        <section class="well">
          &lt;Checkbox @getSelected=&quot;getSelectedCheckbox&quot;
          id=&quot;checkbox-17&quot;&gt; Nested (inline)&lt;/Checkbox&gt;
        </section>

        <div class="demo-alert">
          <Preview>
            <template slot="example">
              <Checkbox position="inline" theme="secondary" @getSelectedCheckbox="checkboxStatuses" variant="indeterminate"
                :list="['item-1','item-2','item-3',{
                value: 'item-4',
                checked: true
              }]" id="checkbox-17">
                Nested (inline)</Checkbox>
              <hr />
              <Checkbox position="block" @getSelectedCheckbox="checkboxStatuses" variant="indeterminate"
                :list="['Item1','item-2',{
                value: 'item-3',
                disabled: true,
                checked: false
              }]" id="checkbox-18">Nested (block)</Checkbox>
            </template>

            <template slot="vue-code">
              <code class="language-html">

                &lt;Checkbox position=&quot;inline&quot;
                theme=&quot;secondary&quot; @getSelectedCheckbox=&quot;checkboxStatuses&quot; variant=&quot;indeterminate&quot;
                :list=&quot;['item-1','item-2','item-3',{
                              value: 'item-4',
                              checked: true
                            }]&quot;
                id=&quot;checkbox-17&quot;&gt; Nested (inline)&lt;/Checkbox&gt;

              </code>
            </template>
            <template slot="vanilla-code">
              <code class="language-html">

                &lt;div class=&quot;eduk-checkbox--group eduk-checkbox--inline&quot;&gt;
                  &lt;div class=&quot;eduk-checkbox--head&quot;&gt;
                    &lt;input type=&quot;checkbox&quot; id=&quot;checkbox-17&quot; class=&quot;eduk-checkbox eduk-checkbox--indeterminate&quot;&gt;
                    &lt;label for=&quot;checkbox-17&quot;&gt;Nested (inline)&lt;/label&gt;&lt;/div&gt;
                  &lt;div class=&quot;eduk-checkbox--items&quot;&gt;
                    &lt;span&gt;
                      &lt;input type=&quot;checkbox&quot; id=&quot;checkbox-17-0&quot; class=&quot;eduk-checkbox&quot;&gt;
                      &lt;label for=&quot;checkbox-17-0&quot;&gt;item-1&lt;/label&gt;&lt;/span&gt;
                    &lt;span&gt;
                      &lt;input type=&quot;checkbox&quot; id=&quot;checkbox-17-1&quot; class=&quot;eduk-checkbox&quot;&gt;
                      &lt;label for=&quot;checkbox-17-1&quot;&gt;item-2&lt;/label&gt;
                    &lt;/span&gt;
                    &lt;span&gt;
                      &lt;input type=&quot;checkbox&quot; id=&quot;checkbox-17-2&quot; class=&quot;eduk-checkbox&quot;&gt;
                      &lt;label for=&quot;checkbox-17-2&quot;&gt;item-3&lt;/label&gt;
                    &lt;/span&gt;
                    &lt;span&gt;
                      &lt;input type=&quot;checkbox&quot; id=&quot;checkbox-17-3&quot; class=&quot;eduk-checkbox&quot;&gt;
                      &lt;label for=&quot;checkbox-17-3&quot;&gt;item-4&lt;/label&gt;
                    &lt;/span&gt;
                  &lt;/div&gt;
                &lt;/div&gt;

              </code>
            </template>
          </Preview>
          <CheckboxApi />
        </div>

      </div>
    </template>
    <template slot="quicklinks">
    </template>
  </TabContent>
</template>

<script>
import Preview from '@/views/components/Preview/index.vue';
import TabContent from '@/views/components/TabContent/index.vue';
import Checkbox from '@/UIKit/Checkbox/Checkbox.component.vue';

import CheckboxApi from './CheckboxApi.vue';

export default {
  name: 'DemoCheckbox',
  props: {
    selectedTab: {
      type: String,
    },
  },
  components: {
    TabContent,
    Preview,
    Checkbox,
    CheckboxApi,
  },
  methods: {
    onTabChange(tabIndex) {
      this.$emit('tabChange', tabIndex);
    },
    checkboxStatuses() {
      // check the statuses of the checkbox under indeterminate type
    },
  },
};

</script>
