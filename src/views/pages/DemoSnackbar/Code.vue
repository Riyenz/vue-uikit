<template>
  <div>
    <h2 class="eduk-h2 eduk-u-mb-3">Snackbar</h2>
    <p class="eduk-text eduk-u-mb-4">
      When a popup seems a bit overkill for the task, Snackbars are good candidates
    </p>
    <p class="eduk-text eduk-u-mb-4">
      They have only one button, and by default are queued to not confuse the user.
      They’re used to display an information but this time, we can give the user an opportunity to take an action.
    </p>
    <Preview>
      <template slot="example">
        <div>
          <span class="eduk-u-mr-2">
            <Btn @click="showDefault" variant="success">Default</Btn>
          </span>
          <span class="eduk-u-mr-2">
            <Btn @click="showWarning" variant="warning">Warning</Btn>
          </span>
          <span class="eduk-u-mr-2">
            <Btn @click="showDanger" variant="danger">Danger</Btn>
          </span>
        </div>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &lt;Btn @click=&quot;showDefault&quot; variant=&quot;success&quot;&gt;Default&lt;/Btn&gt;
          &lt;script&gt;
            Vue({
              methods: {
                showDefault () {
                  this.$snackbar({
                    text: &apos;Default, positioned bottom-right with a green \&apos;OK\&apos; button&apos;,
                    duration: 5000,
                    placement: &apos;bottom-right&apos;,
                    actionText: &apos;okay&apos;,
                  });
                },
              },
            });
          &lt;/script&gt;

          &lt;Btn @click=&quot;showWarning&quot; variant=&quot;warning&quot;&gt;Warning&lt;/Btn&gt;
          &lt;script&gt;
            Vue({
              methods: {
                showWarning () {
                  this.$snackbar({
                    text: &apos;Yellow Orange button and positioned on top, click to close&apos;,
                    duration: 5000,
                    placement: &apos;top&apos;,
                    variant: &apos;warning&apos;,
                    actionText: &apos;close&apos;,
                  });
                },
              },
            });
          &lt;/script&gt;

          &lt;Btn @click=&quot;showDanger&quot; variant=&quot;danger&quot;&gt;Danger&lt;/Btn&gt;
          &lt;script&gt;
            Vue({
              methods: {
                showDanger () {
                  this.$snackbar({
                    text: &apos;Snackbar with red action, positioned on bottom-left and a callback.
                    &lt;br /&gt;Note: &lt;i&gt;Message can include html.&lt;/i&gt;&apos;,
                    duration: 5000,
                    placement: &apos;bottom-left&apos;,
                    variant: &apos;danger&apos;,
                    actionText: &apos;undo&apos;,
                  });
                },
              },
            });
          &lt;/script&gt;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &lt;div class=&quot;eduk-snackbar-list eduk-snackbar-list--bottom-right&quot;&gt;
            &lt;div class=&quot;eduk-snackbar&quot;&gt;
              &lt;div class=&quot;eduk-snackbar__content&quot;&gt;Default, positioned bottom-right with a green 'OK' button&lt;/div&gt;
              &lt;a class=&quot;eduk-snackbar__action eduk-snackbar__action--success eduk-u-ml-3&quot;&gt;okay&lt;/a&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          &lt;div class=&quot;eduk-snackbar-list eduk-snackbar-list--top&quot;&gt;
            &lt;div class=&quot;eduk-snackbar&quot;&gt;
              &lt;div class=&quot;eduk-snackbar__content&quot;&gt;Yellow Orange button and positioned on top, click to close&lt;/div&gt;
              &lt;a class=&quot;eduk-snackbar__action eduk-snackbar__action--warning eduk-u-ml-3&quot;&gt;close&lt;/a&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          &lt;div class=&quot;eduk-snackbar-list eduk-snackbar-list--bottom-left&quot;&gt;
            &lt;div class=&quot;eduk-snackbar&quot;&gt;
              &lt;div class=&quot;eduk-snackbar__content&quot;&gt;
                Snackbar with red action, positioned on bottom-left and a callback.&lt;br&gt;Note: &lt;i&gt;Message can include html.&lt;/i&gt;
              &lt;/div&gt;
              &lt;a class=&quot;eduk-snackbar__action eduk-snackbar__action--danger eduk-u-ml-3&quot;&gt;undo&lt;/a&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        </code>
      </template>
    </Preview>
    <SnackbarApi />
  </div>
</template>

<script>
import Preview from '@/views/components/Preview/index.vue';
import Btn from '@/UIKit/Btn/Btn.component.vue';
import SnackbarApi from './SnackbarApi.vue';

export default {
  name: 'Code',
  components: {
    Preview,
    Btn,
    SnackbarApi,
  },
  methods: {
    showDefault() {
      this.$snackbar({
        text: 'Default, positioned bottom-right with a green \'OK\' button',
        duration: 3000,
        placement: 'bottom-right',
        actionText: 'okay',
      });
    },
    showWarning() {
      this.$snackbar({
        text: 'Yellow Orange button and positioned on top, click to close',
        duration: 3000,
        placement: 'top',
        variant: 'warning',
        actionText: 'close',
      });
    },
    showDanger() {
      this.$snackbar({
        text: 'Snackbar with red action, positioned on bottom-left and a callback.<br />Note: <i>Message can include html.</i>',
        duration: 3000,
        placement: 'bottom-left',
        variant: 'danger',
        actionText: 'undo',
      });
    },
  },
};
</script>
