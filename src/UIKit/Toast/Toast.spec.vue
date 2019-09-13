<template>
  <div></div>
</template>

<script>
import {
  TOAST_CLASS_NAME,
  TOAST_LIST_CLASS_NAME,
} from './Toast.config';

export default {
  name: 'ToastSpec',
  data() {
    return {
      toastRendered: false,
      toastContentMatched: false,
      toastDismissable: true,
      toastHasId: false,
      toastHasPlacement: false,
      toastHasDuration: false,
      toastHasVariant: false,
    };
  },
  methods: {
    defaultToast() {
      this.$toast({
        text: 'test',
        id: 'defaulttoast',
      });

      if (document.querySelector(`.${TOAST_CLASS_NAME}`)) {
        this.toastRendered = true;
      }

      if (document.querySelector(`.${TOAST_CLASS_NAME}__content`)) {
        this.toastContentMatched = true;
      }
    },
    undismissableToast() {
      this.$toast({
        text: 'test',
        dismissable: false,
        id: 'undismissable',
      });

      if (document.querySelector('#undismissable')) {
        this.toastHasId = true;
      }

      if (!document.querySelector(`#undismissable .${TOAST_CLASS_NAME}__action`)) {
        this.toastDismissable = false;
      }
    },
    placementToast() {
      this.$toast({
        text: 'test',
        placement: 'bottom',
      });

      if (document.querySelector(`.${TOAST_LIST_CLASS_NAME}--bottom`)) {
        this.toastHasPlacement = true;
      }
    },
    durationToast() {
      const toast = this.$toast({
        text: 'test',
        duration: 3000,
      });

      if (toast.options.duration === 3000) {
        this.toastHasDuration = true;
      }
    },
    variantToast() {
      this.$toast({
        text: 'test',
        variant: 'secondary',
        id: 'variant',
      });

      if (document.querySelector(`.${TOAST_CLASS_NAME}--secondary`)) {
        this.toastHasVariant = true;
      }
    },
  },
};
</script>
