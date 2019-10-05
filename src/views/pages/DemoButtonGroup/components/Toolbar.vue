<template>
  <Preview>
    <template slot="example">
      <ButtonToolbar>
        <ButtonGroup>
          <Btn>1</Btn>
          <Btn>2</Btn>
          <Btn>3</Btn>
        </ButtonGroup>
        <ButtonGroup>
          <Btn variant="secondary">4</Btn>
          <Btn variant="secondary">5</Btn>
          <Btn variant="secondary">6</Btn>
        </ButtonGroup>
        <ButtonGroup>
          <Btn variant="tertiary">7</Btn>
          <Btn variant="tertiary">8</Btn>
        </ButtonGroup>
      </ButtonToolbar>
    </template>
    <template slot="vue-code">
      <code class="language-html">
        &#x3C;ButtonToolbar&#x3E;
          &#x3C;ButtonGroup&#x3E;
            &#x3C;Btn&#x3E;1&#x3C;/Btn&#x3E;
            &#x3C;Btn&#x3E;2&#x3C;/Btn&#x3E;
            &#x3C;Btn&#x3E;3&#x3C;/Btn&#x3E;
          &#x3C;/ButtonGroup&#x3E;
          &#x3C;ButtonGroup&#x3E;
            &#x3C;Btn variant=&#x22;secondary&#x22;&#x3E;4&#x3C;/Btn&#x3E;
            &#x3C;Btn variant=&#x22;secondary&#x22;&#x3E;5&#x3C;/Btn&#x3E;
            &#x3C;Btn variant=&#x22;secondary&#x22;&#x3E;6&#x3C;/Btn&#x3E;
          &#x3C;/ButtonGroup&#x3E;
          &#x3C;ButtonGroup&#x3E;
            &#x3C;Btn variant=&#x22;tertiary&#x22;&#x3E;7&#x3C;/Btn&#x3E;
            &#x3C;Btn variant=&#x22;tertiary&#x22;&#x3E;8&#x3C;/Btn&#x3E;
          &#x3C;/ButtonGroup&#x3E;
        &#x3C;/ButtonToolbar&#x3E;
      </code>
    </template>
    <template slot="vanilla-code">
      <code class="language-html">
        &#x3C;div class=&#x22;eduk-buttontoolbar&#x22;&#x3E;
          &#x3C;div class=&#x22;eduk-buttongroup&#x22;&#x3E;
            &#x3C;button class=&#x22;eduk-btn eduk-btn--primary&#x22;&#x3E;1&#x3C;/button&#x3E;
            &#x3C;button class=&#x22;eduk-btn eduk-btn--primary&#x22;&#x3E;2&#x3C;/button&#x3E;
            &#x3C;button class=&#x22;eduk-btn eduk-btn--primary&#x22;&#x3E;3&#x3C;/button&#x3E;
          &#x3C;/div&#x3E;
          &#x3C;div class=&#x22;eduk-buttongroup&#x22;&#x3E;
            &#x3C;button class=&#x22;eduk-btn eduk-btn--secondary&#x22;&#x3E;4&#x3C;/button&#x3E;
            &#x3C;button class=&#x22;eduk-btn eduk-btn--secondary&#x22;&#x3E;5&#x3C;/button&#x3E;
            &#x3C;button class=&#x22;eduk-btn eduk-btn--secondary&#x22;&#x3E;6&#x3C;/button&#x3E;
          &#x3C;/div&#x3E;
          &#x3C;div class=&#x22;eduk-buttongroup&#x22;&#x3E;
            &#x3C;button class=&#x22;eduk-btn eduk-btn--tertiary&#x22;&#x3E;7&#x3C;/button&#x3E;
            &#x3C;button class=&#x22;eduk-btn eduk-btn--tertiary&#x22;&#x3E;8&#x3C;/button&#x3E;
          &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
      </code>
    </template>
  </Preview>
</template>

<script>
import ButtonToolbar from '@/UIKit/ButtonGroup/ButtonToolbar.component.vue';
import ButtonGroup from '@/UIKit/ButtonGroup/ButtonGroup.component.vue';
import Btn from '@/UIKit/Btn/Btn.component.vue';

import Preview from '@/views/components/Preview/index.vue';

export default {
  name: 'Toolbar',
  components: {
    ButtonToolbar,
    ButtonGroup,
    Btn,
    Preview,
  },
};
</script>
