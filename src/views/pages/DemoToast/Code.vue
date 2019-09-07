<template>
  <div>
    <h2 class="eduk-h2 eduk-u-mb-3">Toast</h2>
    <p class="eduk-text eduk-u-mb-4">
      Toast can be used in the areas where system messages need to be displayed that doesn’t need user interaction.
    </p>
    <Preview>
      <template slot="example">
        <div>
          <span class="eduk-u-mr-1">
            <Btn variant="primary" @click="defaultToast">Primary</Btn>
          </span>
          <span class="eduk-u-mr-1">
            <Btn variant="primary" @click="defaultNotDismissableToast">Primary not dismissable</Btn>
          </span>
          <span class="eduk-u-mr-1">
            <Btn variant="secondary" @click="secondaryToast">Secondary</Btn>
          </span>
          <span class="eduk-u-mr-1">
            <Btn variant="success" @click="successToast">Success</Btn>
          </span>
          <span class="eduk-u-mr-1">
            <Btn variant="warning" @click="warningToast">Warning</Btn>
          </span>
          <span class="eduk-u-mr-1">
            <Btn variant="danger" @click="dangerToast">Danger</Btn>
          </span>
        </div>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          &lt;Btn variant=&quot;primary&quot; @click=&quot;defaultToast&quot;&gt;Primary&lt;/Btn&gt;
          &lt;script&gt;
            Vue({
              methods: {
                showDefault () {
                  this.$toast({
                    text: &apos;All servers are now running smoothly again! Thanks.&apos;,
                    duration: 3000,
                  });
                },
              },
            });
          &lt;/script&gt;

          &lt;Btn variant=&quot;secondary&quot; @click=&quot;secondaryToast&quot;&gt;Secondary&lt;/Btn&gt;
          &lt;script&gt;
            Vue({
              methods: {
                secondaryToast () {
                  this.$toast({
                    text: &apos;All servers are now running smoothly again! Thanks.&apos;,
                    variant: &apos;secondary&apos;,
                    duration: 3000,
                  });
                },
              },
            });
          &lt;/script&gt;

          &lt;Btn variant=&quot;success&quot; @click=&quot;successToast&quot;&gt;Success&lt;/Btn&gt;
          &lt;script&gt;
            Vue({
              methods: {
                successToast () {
                  this.$toast({
                    text: &apos;Success! This is positive notification.&apos;,
                    variant: &apos;success&apos;,
                    duration: 3000,
                  });
                },
              },
            });
          &lt;/script&gt;

          &lt;Btn variant=&quot;warning&quot; @click=&quot;warningToast&quot;&gt;Warning&lt;/Btn&gt;
          &lt;script&gt;
            Vue({
              methods: {
                warningToast () {
                  this.$toast({
                    text: &apos;Warning. Loading of this page taking a way too long.&apos;,
                    variant: &apos;warning&apos;,
                    duration: 3000,
                  });
                },
              },
            });
          &lt;/script&gt;

          &lt;Btn variant=&quot;danger&quot; @click=&quot;dangerToast&quot;&gt;Danger&lt;/Btn&gt;
          &lt;script&gt;
            Vue({
              methods: {
                dangerToast () {
                  this.$toast({
                    text: &apos;Error. Can’t connect to the platform.&apos;,
                    variant: &apos;danger&apos;,
                    duration: 3000,
                  });
                },
              },
            });
          &lt;/script&gt;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &lt;div class=&quot;eduk-toast-list eduk-toast-list--top&quot;&gt;
            &lt;div class=&quot;eduk-toast eduk-toast--primary&quot;&gt;
              &lt;i class=&quot;fas fa-info-circle&quot;&gt;&lt;/i&gt;
              &lt;div class=&quot;eduk-toast__content&quot;&gt;All servers are now running smoothly again! Thanks.&lt;/div&gt;
              &lt;a class=&quot;eduk-toast__action eduk-u-px-1&quot;&gt;×&lt;/a&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          &lt;div class=&quot;eduk-toast-list eduk-toast-list--top&quot;&gt;
            &lt;div class=&quot;eduk-toast eduk-toast--secondary&quot;&gt;
              &lt;i class=&quot;fas fa-info-circle&quot;&gt;&lt;/i&gt;
              &lt;div class=&quot;eduk-toast__content&quot;&gt;All servers are now running smoothly again! Thanks.&lt;/div&gt;
              &lt;a class=&quot;eduk-toast__action eduk-u-px-1&quot;&gt;×&lt;/a&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          &lt;div class=&quot;eduk-toast-list eduk-toast-list--top&quot;&gt;
            &lt;div class=&quot;eduk-toast eduk-toast--success&quot;&gt;
              &lt;i class=&quot;fas fa-check-circle&quot;&gt;&lt;/i&gt;
              &lt;div class=&quot;eduk-toast__content&quot;&gt;Success! This is positive notification.&lt;/div&gt;
              &lt;a class=&quot;eduk-toast__action eduk-u-px-1&quot;&gt;×&lt;/a&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          &lt;div class=&quot;eduk-toast-list eduk-toast-list--top&quot;&gt;
            &lt;div class=&quot;eduk-toast eduk-toast--warning&quot;&gt;
              &lt;i class=&quot;fas fa-info-circle&quot;&gt;&lt;/i&gt;
              &lt;div class=&quot;eduk-toast__content&quot;&gt;Warning. Loading of this page taking a way too long.&lt;/div&gt;
              &lt;a class=&quot;eduk-toast__action eduk-u-px-1&quot;&gt;×&lt;/a&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          &lt;div class=&quot;eduk-toast-list eduk-toast-list--top&quot;&gt;
            &lt;div class=&quot;eduk-toast eduk-toast--danger&quot;&gt;
              &lt;i class=&quot;fas fa-times-circle&quot;&gt;&lt;/i&gt;
              &lt;div class=&quot;eduk-toast__content&quot;&gt;Error. Can’t connect to the platform.&lt;/div&gt;
              &lt;a class=&quot;eduk-toast__action eduk-u-px-1&quot;&gt;×&lt;/a&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        </code>
      </template>
    </Preview>
    <ToastApi />
  </div>
</template>

<script>
import Preview from '@/views/components/Preview/index.vue';
import Btn from '@/UIKit/Btn/Btn.component.vue';
import ToastApi from './ToastApi.vue';

export default {
  name: 'Code',
  components: {
    Preview,
    Btn,
    ToastApi,
  },
  methods: {
    defaultToast() {
      this.$toast({
        text: 'All servers are now running smoothly again! Thanks.',
        duration: 3000,
      });
    },
    defaultNotDismissableToast() {
      this.$toast({
        text: 'All servers are now running smoothly again! Thanks.',
        duration: 3000,
        dismissable: false,
      });
    },
    secondaryToast() {
      this.$toast({
        text: 'All servers are now running smoothly again! Thanks.',
        variant: 'secondary',
        duration: 3000,
      });
    },
    successToast() {
      this.$toast({
        text: 'Success! This is positive notification.',
        variant: 'success',
        duration: 3000,
      });
    },
    warningToast() {
      this.$toast({
        text: 'Warning. Loading of this page taking a way too long.',
        variant: 'warning',
        duration: 3000,
      });
    },
    dangerToast() {
      this.$toast({
        text: 'Error. Can’t connect to the platform.',
        variant: 'danger',
        duration: 3000,
      });
    },
  },
};
</script>
