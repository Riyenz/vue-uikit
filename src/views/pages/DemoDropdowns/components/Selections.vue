<template>
  <div>
    <h2 class="eduk-h2 eduk-u-mb-3">Selection</h2>
    <p class="eduk-text eduk-u-mb-4">
      A dropdown can be used to select between choices in a form.
    </p>
    <Preview>
      <template slot="example">
        <span class="eduk-u-mr-3">
          <Select
            placeholder="Normal"
            :options="dropdownOptions"
          />
        </span>
        <span class="eduk-u-mr-3">
          <Select
            placeholder="Select w/ image"
            :options="dropdownOptionsWithImages"
            hasImage
          />
        </span>
        <span>
          <Select
            placeholder="Disabled"
            disabled
            :options="dropdownOptions"
          />
        </span>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &#x3C;Select placeholder=&#x22;Normal&#x22; :options=&#x22;[{ id: 1, name: 'One' }]&#x22; /&#x3E;
          &#x3C;Select placeholder=&#x22;Select w/ image&#x22; :options=&#x22;[{ id: 1, name: 'One', img: 'https://via.placeholder.com/150' }]
          &#x22; hasImage /&#x3E;
          &#x3C;Select placeholder=&#x22;Normal&#x22; :options=&#x22;[{ id: 1, name: 'One' }]&#x22; disabled /&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &#x3C;div class=&#x22;eduk-select&#x22; &#x3E;
            &#x3C;span class=&#x22;eduk-select__indicator&#x22;&#x3E;&#x3C;/span&#x3E;
            &#x3C;div class=&#x22;eduk-select__input-wrapper&#x22;&#x3E;
              &#x3C;input placeholder=&#x22;Normal&#x22; class=&#x22;eduk-select__input eduk-select__input--empty&#x22;&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;ul class=&#x22;eduk-select__options&#x22;&#x3E;
              &#x3C;li class=&#x22;eduk-select__option&#x22;&#x3E;&#x3C;a&#x3E;One&#x3C;/a&#x3E;&#x3C;/li&#x3E;
              &#x3C;li class=&#x22;eduk-select__option&#x22;&#x3E;&#x3C;a&#x3E;Two&#x3C;/a&#x3E;&#x3C;/li&#x3E;
              &#x3C;li class=&#x22;eduk-select__empty eduk-select__empty--active&#x22;&#x3E;
                  No results found.
              &#x3C;/li&#x3E;
            &#x3C;/ul&#x3E;
          &#x3C;/div&#x3E;

          &#x3C;div class=&#x22;eduk-select&#x22;&#x3E;
            &#x3C;span class=&#x22;eduk-select__indicator&#x22;&#x3E;&#x3C;/span&#x3E;
            &#x3C;div class=&#x22;eduk-select__input-wrapper&#x22;&#x3E;
              &#x3C;input placeholder=&#x22;Select w/ image&#x22; class=&#x22;eduk-select__input eduk-select__input--empty&#x22;&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;ul class=&#x22;eduk-select__options&#x22;&#x3E;
              &#x3C;li class=&#x22;eduk-select__option eduk-select__option--dense&#x22;&#x3E;
                &#x3C;a&#x3E;
                  &#x3C;img src=&#x22;https://via.placeholder.com/150&#x22; alt=&#x22;One&#x22;&#x3E;
                  &#x3C;span&#x3E;One&#x3C;/span&#x3E;
                &#x3C;/a&#x3E;
              &#x3C;/li&#x3E;
              &#x3C;li class=&#x22;eduk-select__option eduk-select__option--dense&#x22;&#x3E;
                &#x3C;a&#x3E;
                  &#x3C;img src=&#x22;https://via.placeholder.com/150&#x22; alt=&#x22;Two&#x22;&#x3E;
                  &#x3C;span&#x3E;Two&#x3C;/span&#x3E;
                  &#x3C;/a&#x3E;
                &#x3C;/li&#x3E;
              &#x3C;li class=&#x22;eduk-select__empty&#x22;&#x3E;
                  No results found.
              &#x3C;/li&#x3E;
            &#x3C;/ul&#x3E;
          &#x3C;/div&#x3E;

          &#x3C;div class=&#x22;eduk-select eduk-select--disabled&#x22;&#x3E;
            &#x3C;span class=&#x22;eduk-select__indicator&#x22;&#x3E;&#x3C;/span&#x3E;
            &#x3C;div class=&#x22;eduk-select__input-wrapper&#x22;&#x3E;
              &#x3C;input placeholder=&#x22;Disabled&#x22; disabled=&#x22;disabled&#x22;
              class=&#x22;eduk-select__input eduk-select__input--empty&#x22;&#x3E;
            &#x3C;/div&#x3E;
          &#x3C;/div&#x3E;
        </code>
      </template>
    </Preview>
    <h3 class="eduk-h3 eduk-u-mb-3">Multiple Selection</h3>
    <p class="eduk-text eduk-u-mb-4">
      A selection dropdown can allow a user to search through a large list of choices.
    </p>
    <Preview>
      <template slot="example">
        <Select
          placeholder="Multi select"
          :options="dropdownOptions"
          multiselect
        />
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &#x3C;Select placeholder=&#x22;Multi select&#x22; :options=&#x22;[{ id: 1, name: 'One' }, { id: 2, name: 'Two' }]&#x22; multiselect /&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &#x3C;div class=&#x22;eduk-select&#x22;&#x3E;
            &#x3C;span class=&#x22;eduk-select__indicator&#x22;&#x3E;&#x3C;/span&#x3E;
            &#x3C;div class=&#x22;eduk-select__input-wrapper eduk-select__input-wrapper--wrap&#x22;&#x3E;
              &#x3C;input placeholder=&#x22;Multi select&#x22; class=&#x22;eduk-select__input eduk-select__input--empty&#x22;&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;ul class=&#x22;eduk-select__options&#x22;&#x3E;
              &#x3C;li class=&#x22;eduk-select__option&#x22;&#x3E;&#x3C;a&#x3E;One&#x3C;/a&#x3E;&#x3C;/li&#x3E;
              &#x3C;li class=&#x22;eduk-select__option&#x22;&#x3E;&#x3C;a&#x3E;Two&#x3C;/a&#x3E;&#x3C;/li&#x3E;
              &#x3C;li class=&#x22;eduk-select__option&#x22;&#x3E;&#x3C;a&#x3E;Three&#x3C;/a&#x3E;&#x3C;/li&#x3E;
              &#x3C;li class=&#x22;eduk-select__empty&#x22;&#x3E;
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
import Select from '@/UIKit/Select/Select.component.vue';
import { dropdownOptions, dropdownOptionsWithImages } from '../config';

export default {
  name: 'DemoSelections',
  components: {
    Preview,
    Select,
  },
  data() {
    return {
      dropdownOptions,
      dropdownOptionsWithImages,
    };
  },
};
</script>
