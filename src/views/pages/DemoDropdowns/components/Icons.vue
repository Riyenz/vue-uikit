<template>
  <div>
    <h3 class="eduk-h3 eduk-u-mb-3">Icon</h3>
    <p class="eduk-text eduk-u-mb-4">
      A dropdown menu can contain an icon.
    </p>
    <Preview>
      <template slot="example">
        <div>
          <Dropdown
            :options="dropdownOptionsWithIcons"
            title="Filter"
            icon="bars"
          />
          <Dropdown
            :options="dropdownOptionsWithIcons"
            title="Filter"
            placement="right"
            iconPlacement="right"
            icon="times"
          />
          <Dropdown
            :options="dropdownOptionsWithIcons"
            icon="ellipsis-v"
          />
        </div>
      </template>
      <template slot="vue-code">
        <code class="language-html">
&#x3C;Dropdown :options=&#x22;[{ id: 1, name: 'One', icon: 'times' }, { id: 2, name: 'Two', icon: 'chevron-left' }]&#x22;
title=&#x22;Filter&#x22; icon=&#x22;bars&#x22; /&#x3E;
&#x3C;Dropdown :options=&#x22;[{ id: 1, name: 'One', icon: 'times' }, { id: 2, name: 'Two', icon: 'chevron-left' }]&#x22;
title=&#x22;Filter&#x22; icon=&#x22;bars&#x22; icon=&#x22;right&#x22; iconPlacement=&#x22;right&#x22; /&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
&#x3C;div class=&#x22;eduk-dropdown eduk-dropdown--left&#x22;&#x3E;
  &#x3C;button class=&#x22;eduk-btn eduk-btn-primary eduk-dropdown__icon eduk-dropdown__icon--left eduk-u-m-1&#x22;&#x3E;
    &#x3C;span&#x3E;Filter&#x3C;/span&#x3E;
    &#x3C;span&#x3E;
      &#x3C;i class=&#x22;fas fa-times&#x22;&#x3E;&#x3C;/i&#x3E;
    &#x3C;/span&#x3E;
  &#x3C;/button&#x3E;
  &#x3C;ul class=&#x22;eduk-dropdown__options&#x22;&#x3E;
    &#x3C;li class=&#x22;eduk-dropdown__option&#x22;&#x3E;
      &#x3C;a&#x3E;
        &#x3C;i class=&#x22;fas fa-times&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;span&#x3E;One&#x3C;/span&#x3E;
      &#x3C;/a&#x3E;
    &#x3C;/li&#x3E;
    &#x3C;li class=&#x22;eduk-dropdown__option&#x22;&#x3E;
      &#x3C;a&#x3E;
        &#x3C;i class=&#x22;fas fa-chevron-left&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;span&#x3E;Two&#x3C;/span&#x3E;
      &#x3C;/a&#x3E;
    &#x3C;/li&#x3E;
    &#x3C;li class=&#x22;eduk-dropdown__option&#x22;&#x3E;
      &#x3C;a&#x3E;
        &#x3C;i class=&#x22;fas fa-window-minimize&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;span&#x3E;Three&#x3C;/span&#x3E;
      &#x3C;/a&#x3E;
    &#x3C;/li&#x3E;
    &#x3C;li class=&#x22;eduk-dropdown__empty&#x22;&#x3E;
      No results found.
    &#x3C;/li&#x3E;
  &#x3C;/ul&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;eduk-dropdown eduk-dropdown--right&#x22;&#x3E;
  &#x3C;button class=&#x22;eduk-btn eduk-btn-primary eduk-dropdown__icon eduk-dropdown__icon--right eduk-u-m-1&#x22;&#x3E;
    &#x3C;span&#x3E;Filter&#x3C;/span&#x3E;
    &#x3C;span&#x3E;
      &#x3C;i class=&#x22;fas fa-times&#x22;&#x3E;&#x3C;/i&#x3E;
    &#x3C;/span&#x3E;
  &#x3C;/button&#x3E;
  &#x3C;ul class=&#x22;eduk-dropdown__options&#x22;&#x3E;
    &#x3C;li class=&#x22;eduk-dropdown__option&#x22;&#x3E;
      &#x3C;a&#x3E;
        &#x3C;i class=&#x22;fas fa-times&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;span&#x3E;One&#x3C;/span&#x3E;
      &#x3C;/a&#x3E;
    &#x3C;/li&#x3E;
    &#x3C;li class=&#x22;eduk-dropdown__option&#x22;&#x3E;
      &#x3C;a&#x3E;
        &#x3C;i class=&#x22;fas fa-chevron-left&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;span&#x3E;Two&#x3C;/span&#x3E;
      &#x3C;/a&#x3E;
    &#x3C;/li&#x3E;
    &#x3C;li class=&#x22;eduk-dropdown__option&#x22;&#x3E;
      &#x3C;a&#x3E;
        &#x3C;i class=&#x22;fas fa-window-minimize&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;span&#x3E;Three&#x3C;/span&#x3E;
      &#x3C;/a&#x3E;
    &#x3C;/li&#x3E;
    &#x3C;li class=&#x22;eduk-dropdown__empty&#x22;&#x3E;
      No results found.
    &#x3C;/li&#x3E;
  &#x3C;/ul&#x3E;
&#x3C;/div&#x3E;
        </code>
      </template>
    </Preview>
    <h3 class="eduk-h3 eduk-u-mb-3">Floating</h3>
    <p class="eduk-text eduk-u-mb-4">
      A dropdown menu can appear to be floating below an element.
    </p>
    <Preview>
      <template slot="example">
        <div>
          <Dropdown
            :options="dropdownOptions"
            title="Button"
            icon="bars"
            iconTrigger
          />
          <Dropdown
            :options="dropdownOptions"
            title="Button"
            icon="bars"
            iconPlacement="right"
            placement="right"
            iconTrigger
          />
        </div>
      </template>
      <template slot="vue-code">
        <code class="language-html">
&#x3C;Dropdown :options=&#x22;[{ id: 1, name: 'One' }]&#x22; title=&#x22;Button&#x22; icon=&#x22;bars&#x22; iconTrigger /&#x3E;
&#x3C;Dropdown :options=&#x22;[{ id: 1, name: 'One' }]&#x22; title=&#x22;Button&#x22; icon=&#x22;bars&#x22; icon=&#x22;right&#x22;
iconPlacement=&#x22;right&#x22; iconTrigger /&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
&#x3C;div class=&#x22;eduk-dropdown eduk-dropdown--left&#x22;&#x3E;
  &#x3C;div class=&#x22;eduk-dropdown__group eduk-dropdown__group--left eduk-u-m-1&#x22;&#x3E;
    &#x3C;button class=&#x22;eduk-btn eduk-btn-primary&#x22;&#x3E;&#x3C;span&#x3E;Button&#x3C;/span&#x3E;&#x3C;/button&#x3E;
    &#x3C;button class=&#x22;eduk-btn eduk-btn-primary&#x22;&#x3E;
      &#x3C;i class=&#x22;fas fa-bars&#x22;&#x3E;&#x3C;/i&#x3E;
    &#x3C;/button&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;ul class=&#x22;eduk-dropdown__options&#x22;&#x3E;
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
&#x3C;div class=&#x22;eduk-dropdown eduk-dropdown--right&#x22;&#x3E;
  &#x3C;div class=&#x22;eduk-dropdown__group eduk-dropdown__group--right eduk-u-m-1&#x22;&#x3E;
    &#x3C;button class=&#x22;eduk-btn eduk-btn-primary&#x22;&#x3E;&#x3C;span&#x3E;Button&#x3C;/span&#x3E;&#x3C;/button&#x3E;
    &#x3C;button class=&#x22;eduk-btn eduk-btn-primary&#x22;&#x3E;
    &#x3C;i class=&#x22;fas fa-bars&#x22;&#x3E;&#x3C;/i&#x3E;
    &#x3C;/button&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;ul class=&#x22;eduk-dropdown__options&#x22;&#x3E;
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
import { dropdownOptions, dropdownOptionsWithIcons } from '../config';

export default {
  name: 'DropdownIcons',
  data() {
    return { dropdownOptions, dropdownOptionsWithIcons };
  },
  components: {
    Preview,
    Dropdown,
  },
};
</script>
