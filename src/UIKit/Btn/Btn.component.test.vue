<template>
  <Btn @click="onClick">Test Button</Btn>
</template>

<script>
import Btn from '@/UIKit/Btn/Btn.component.vue';

export default {
  name: 'BtnTest',
  data() {
    return {
      clicked: false,
    };
  },
  components: {
    Btn,
  },
  methods: {
    onClick() {
      this.clicked = true;
    },
  },
};
</script>
