<template>
  <div>
    <h2 class="eduk-h2 eduk-u-mb-3">Tooltip</h2>
    <p class="eduk-text eduk-u-mb-4">
      Display a brief helper text to your user
    </p>
    <Preview>
      <template slot="example">
        <span class="eduk-u-m-2">
          <Btn
            v-tooltip="{
              placement: 'top',
              content: `Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor`
            }"
          >
            Top
          </Btn>
        </span>
        <span class="eduk-u-m-2">
          <Btn v-tooltip="{ placement: 'left', content: 'Tooltip left' }">
            Left
          </Btn>
        </span>
        <span class="eduk-u-m-2">
          <Btn v-tooltip="{ placement: 'right', content: 'Tooltip right' }">
            Right
          </Btn>
        </span>
        <span class="eduk-u-m-2">
          <Btn v-tooltip="{ placement: 'bottom', content: 'tooltip bottom' }">
            Bottom
          </Btn>
        </span>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &lt;Btn
            v-tooltip=&quot;{
              placement: 'top',
              content: `Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor`
            }&quot;
          &gt;
            Top
          &lt;/Btn&gt;
          &lt;Btn v-tooltip=&quot;{ placement: 'left', content: 'Tooltip left' }&quot;&gt;
            Left
          &lt;/Btn&gt;
          &lt;Btn v-tooltip=&quot;{ placement: 'right', content: 'Tooltip right' }&quot;&gt;
            Right
          &lt;/Btn&gt;
          &lt;Btn v-tooltip=&quot;{ placement: 'bottom', content: 'tooltip bottom' }&quot;&gt;
            Bottom
          &lt;/Btn&gt;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &lt;div class=&quot;eduk-tooltip eduk-tooltip--top&quot;&gt;
            Tooltip Top
          &lt;/div&gt;
          &lt;div class=&quot;eduk-tooltip eduk-tooltip--left&quot;&gt;
            Tooltip Left
          &lt;/div&gt;
          &lt;div class=&quot;eduk-tooltip eduk-tooltip--right&quot;&gt;
            Tooltip Right
          &lt;/div&gt;
          &lt;div class=&quot;eduk-tooltip eduk-tooltip--bottom&quot;&gt;
            Tooltip Bottom
          &lt;/div&gt;
        </code>
      </template>
    </Preview>
    <h3 class="eduk-h3 eduk-u-mb-3">Behavior</h3>
    <Preview>
      <template slot="example">
        <span class="eduk-u-m-2">
          <Btn v-tooltip="{ content: 'Hovered' }">
            Hover
          </Btn>
        </span>
        <span class="eduk-u-m-2">
          <Btn v-tooltip="{ content: 'Clicked!', behaviour: 'click' }">
            Click
          </Btn>
        </span>
        <span class="eduk-u-m-2">
          <Btn v-tooltip="{ content: 'I\'m never closing', behaviour: 'fixed' }">
            Fixed
          </Btn>
        </span>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &lt;Btn v-tooltip=&quot;{ content: 'Hovered' }&quot;&gt;
            Hover
          &lt;/Btn&gt;
          &lt;Btn v-tooltip=&quot;{ content: 'Clicked!', behaviour: 'click' }&quot;&gt;
            Click
          &lt;/Btn&gt;
          &lt;Btn v-tooltip=&quot;{ content: 'I\'m never closing', behaviour: 'fixed' }&quot;&gt;
            Fixed
          &lt;/Btn&gt;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          N/A
        </code>
      </template>
    </Preview>
  </div>
</template>

<script>
import Preview from '@/views/components/Preview/index.vue';
import Btn from '@/UIKit/Btn/Btn.component.vue';

export default {
  name: 'Code',
  components: {
    Preview,
    Btn,
  },
};
</script>
