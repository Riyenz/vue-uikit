<template>
  <div>
    <h3 class="eduk-h3 eduk-u-mb-3">Search In-Menu</h3>
    <p class="eduk-text eduk-u-mb-4">
      A dropdown can include a search prompt inside its menu
    </p>
    <Preview>
      <template slot="example">
        <Dropdown
          icon="bars"
          title="Filter"
          searchable
          :options="dropdownOptions"
        />
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &#x3C;Dropdown :options=&#x22;[{ id: 1, name: 'One' }]&#x22; icon=&#x22;bars&#x22; title=&#x22;Filter&#x22; searchable /&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &#x3C;div class=&#x22;eduk-dropdown eduk-dropdown--left&#x22;&#x3E;
            &#x3C;button class=&#x22;eduk-btn eduk-btn--primary eduk-dropdown__icon eduk-dropdown__icon--left eduk-u-m-1&#x22;&#x3E;
              &#x3C;span&#x3E;Filter&#x3C;/span&#x3E;
              &#x3C;span&#x3E;
                &#x3C;i class=&#x22;fas fa-bars&#x22;&#x3E;&#x3C;/i&#x3E;
              &#x3C;/span&#x3E;
            &#x3C;/button&#x3E;
            &#x3C;ul class=&#x22;eduk-dropdown__options&#x22;&#x3E;
              &#x3C;li class=&#x22;eduk-dropdown__search&#x22;&#x3E;
                &#x3C;input type=&#x22;text&#x22; placeholder=&#x22;Search items...&#x22;&#x3E;
                &#x3C;span class=&#x22;eduk-dropdown__search-icon&#x22;&#x3E;
                &#x3C;i class=&#x22;fas fa-search&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;/span&#x3E;
              &#x3C;/li&#x3E;
              &#x3C;li class=&#x22;eduk-dropdown__option&#x22;&#x3E;&#x3C;a&#x3E;One&#x3C;/a&#x3E;&#x3C;/li&#x3E;
              &#x3C;li class=&#x22;eduk-dropdown__option&#x22;&#x3E;&#x3C;a&#x3E;Two&#x3C;/a&#x3E;&#x3C;/li&#x3E;
              &#x3C;li class=&#x22;eduk-dropdown__option&#x22;&#x3E;&#x3C;a&#x3E;Three&#x3C;/a&#x3E;&#x3C;/li&#x3E;
              &#x3C;li class=&#x22;eduk-dropdown__option&#x22;&#x3E;&#x3C;a&#x3E;Four&#x3C;/a&#x3E;&#x3C;/li&#x3E;
              &#x3C;li class=&#x22;eduk-dropdown__option&#x22;&#x3E;&#x3C;a&#x3E;Five&#x3C;/a&#x3E;&#x3C;/li&#x3E;
              &#x3C;li class=&#x22;eduk-dropdown__option&#x22;&#x3E;&#x3C;a&#x3E;Six&#x3C;/a&#x3E;&#x3C;/li&#x3E;
              &#x3C;li class=&#x22;eduk-dropdown__option&#x22;&#x3E;&#x3C;a&#x3E;Seven&#x3C;/a&#x3E;&#x3C;/li&#x3E;
              &#x3C;li class=&#x22;eduk-dropdown__option&#x22;&#x3E;&#x3C;a&#x3E;Eight&#x3C;/a&#x3E;&#x3C;/li&#x3E;
              &#x3C;li class=&#x22;eduk-dropdown__empty&#x22;&#x3E;
                No results found.
              &#x3C;/li&#x3E;
            &#x3C;/ul&#x3E;
          &#x3C;/div&#x3E;
        </code>
      </template>
    </Preview>
  </div>
</template>

<script>
import Preview from '@/views/components/Preview/index.vue';
import Dropdown from '@/UIKit/Dropdown/Dropdown.component.vue';
import { dropdownOptions } from '../config';

export default {
  name: 'DropdownSearch',
  data() {
    return { dropdownOptions };
  },
  components: {
    Preview,
    Dropdown,
  },
};
</script>
