<template>
  <div :class="blockquoteClass">
    <img
      :src="avatar"
      class="eduk-blockquote__avatar"
      v-if="!compact && !!avatar"
    />
    <blockquote class="eduk-blockquote__content">
      <div class="eduk-blockquote__quote" v-if="!compact">&ldquo;</div>
      <q v-if="compact" class="eduk-blockquote__quote-wrap">
        <p class="eduk-blockquote__header" v-if="heading">{{heading}}</p>
      </q>
      <p v-else class="eduk-blockquote__header">{{heading}}</p>
      <footer class="eduk-blockquote__footer">
        <slot name="footer" />
      </footer>
    </blockquote>
  </div>
</template>

<script>
import {
  BLOCKQUOTE_CLASS_NAME,
  BLOCKQUOTE_COMPACT_CLASS_NAME,
  BLOCKQUOTE_HORIZONTAL_CLASS_NAME,
  BLOCKQUOTE_BORDERED_CLASS_NAME,
} from './Blockquote.config';

export default {
  name: 'Blockquote',
  props: {
    avatar: String,
    heading: String,
    compact: {
      type: Boolean,
      default: false,
    },
    bordered: {
      type: Boolean,
      default: false,
    },
    horizontal: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    blockquoteClass() {
      return {
        [BLOCKQUOTE_CLASS_NAME]: true,
        [BLOCKQUOTE_COMPACT_CLASS_NAME]: this.compact,
        [BLOCKQUOTE_HORIZONTAL_CLASS_NAME]: !this.avatar && !this.compact,
        [BLOCKQUOTE_BORDERED_CLASS_NAME]: this.bordered,
      };
    },
  },
};
</script>
