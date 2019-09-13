<template>
  <div></div>
</template>

<script>
import {
  SNACKBAR_LIST_CLASS_NAME,
  SNACKBAR_CLASS_NAME,
} from './Snackbar.config';

export default {
  name: 'SnackbarSpec',
  data() {
    return {
      snackbarRendered: false,
      snackbarHasId: false,
      snackbarHasPlacement: false,
      snackbarHasDuration: false,
      snackbarHasVariant: false,
      snackbarActionTriggered: false,
      snackbarHasText: false,
    };
  },
  methods: {
    defaultSnackbar() {
      this.$snackbar({
        text: 'Default, positioned bottom-right with a green \'OK\' button',
        duration: 3000,
        placement: 'bottom-right',
        actionText: 'okay',
      });

      if (document.querySelector(`.${SNACKBAR_CLASS_NAME}`)) {
        this.snackbarRendered = true;
      }
    },
    idSnackbar() {
      this.$snackbar({
        text: 'test',
        id: 'snackbar',
      });

      if (document.querySelector('#snackbar')) {
        this.snackbarHasId = true;
      }
    },
    contentSnackbar() {
      this.$snackbar({
        text: 'test',
        id: 'text',
      });

      this.snackbarHasText = !!(document.querySelector(`#text .${SNACKBAR_CLASS_NAME}__content`).innerHTML === 'test');
    },
    placementSnackbar() {
      this.$snackbar({
        text: 'test',
        placement: 'bottom',
      });

      if (document.querySelector(`.${SNACKBAR_LIST_CLASS_NAME}--bottom`)) {
        this.snackbarHasPlacement = true;
      }
    },
    durationSnackbar() {
      const snackbar = this.$snackbar({
        text: 'test',
        duration: 3000,
      });

      if (snackbar.options.duration === 3000) {
        this.snackbarHasDuration = true;
      }
    },
    variantSnackbar() {
      this.$snackbar({
        text: 'test',
        variant: 'warning',
        id: 'warning',
      });

      if (document.querySelector(`.${SNACKBAR_CLASS_NAME}__action--warning`)) {
        this.snackbarHasVariant = true;
      }
    },
    actionSnackbar() {
      this.$snackbar({
        text: 'test',
        id: 'action',
        actionText: 'close',
        onAction: this.action,
      });

      document.querySelector(`#action .${SNACKBAR_CLASS_NAME}__action`).click();
    },
    action() {
      this.snackbarActionTriggered = true;
    },
  },
};
</script>
