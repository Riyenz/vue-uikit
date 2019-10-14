<template>
  <Preview>
    <template slot="example">
      <ButtonGroup>
        <Btn>Left</Btn>
        <Btn>Middle</Btn>
        <Dropdown
          :options="options"
          icon="caret-down"
          iconPlacement="right"
          title="Right"
        />
      </ButtonGroup>
    </template>
    <template slot="vue-code">
      <code class="language-html">
        &#x3C;ButtonGroup&#x3E;
          &#x3C;Btn&#x3E;Left&#x3C;/Btn&#x3E;
          &#x3C;Btn&#x3E;Middle&#x3C;/Btn&#x3E;
          &#x3C;Dropdown
            :options=&#x22;options&#x22;
            icon=&#x22;caret-down&#x22;
            iconPlacement=&#x22;right&#x22;
            title=&#x22;Right&#x22;
          /&#x3E;
        &#x3C;/ButtonGroup&#x3E;
      </code>
    </template>
    <template slot="vanilla-code">
      <code class="language-html">
        &#x3C;div class=&#x22;eduk-buttongroup&#x22;&#x3E;
          &#x3C;button class=&#x22;eduk-btn eduk-btn--primary&#x22;&#x3E;
            Left
          &#x3C;/button&#x3E;
          &#x3C;button class=&#x22;eduk-btn eduk-btn--primary&#x22;&#x3E;
            Middle
          &#x3C;/button&#x3E;
          &#x3C;div class=&#x22;eduk-dropdown eduk-dropdown--left&#x22;&#x3E;
            &#x3C;button class=&#x22;eduk-dropdown__trigger eduk-btn eduk-btn--primary
              eduk-dropdown__icon eduk-dropdown__icon--right&#x22;&#x3E;
              &#x3C;span class=&#x22;eduk-dropdown__title&#x22;&#x3E;Right&#x3C;/span&#x3E;
              &#x3C;span&#x3E;
                &#x3C;i class=&#x22;fas fa-caret-down&#x22;&#x3E;&#x3C;/i&#x3E;
              &#x3C;/span&#x3E;
            &#x3C;/button&#x3E;
            &#x3C;ul class=&#x22;eduk-dropdown__options&#x22;&#x3E;
              &#x3C;li class=&#x22;eduk-dropdown__option&#x22;&#x3E;
                &#x3C;a&#x3E;One&#x3C;/a&#x3E;
              &#x3C;/li&#x3E;
              &#x3C;li class=&#x22;eduk-dropdown__option&#x22;&#x3E;
                &#x3C;a&#x3E;Two&#x3C;/a&#x3E;
              &#x3C;/li&#x3E;
              &#x3C;li class=&#x22;eduk-dropdown__option&#x22;&#x3E;
                &#x3C;a&#x3E;Three&#x3C;/a&#x3E;
              &#x3C;/li&#x3E;
            &#x3C;/ul&#x3E;
          &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
      </code>
    </template>
  </Preview>
</template>

<script>
import ButtonGroup from '@/UIKit/ButtonGroup/ButtonGroup.component.vue';
import Btn from '@/UIKit/Btn/Btn.component.vue';
import Dropdown from '@/UIKit/Dropdown/Dropdown.component.vue';

import Preview from '@/views/components/Preview/index.vue';

export default {
  name: 'Basic',
  components: {
    ButtonGroup,
    Btn,
    Dropdown,
    Preview,
  },
  data() {
    return {
      options: [
        { id: 1, name: 'One' },
        { id: 2, name: 'Two' },
        { id: 3, name: 'Three' },
      ],
    };
  },
};
</script>
