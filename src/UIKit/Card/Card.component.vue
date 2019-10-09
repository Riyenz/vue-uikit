<template>
  <div
    :class="cardClass"
    :style="cardStyle"
  >
    <div :class="cardHeaderClass" v-if="!!$slots.header">
      <slot name="header">
      </slot>
    </div>
    <div
      class="eduk-card__image"
      v-if="!!featuredImg"
      :style="{'background-image': `url('${featuredImg}')`}"
    >
      <Badge v-if="!!badge" class="eduk-u-mx-1" variant="secondary">{{badge}}</Badge>
    </div>
    <div :class="cardContentClass">
      <div
        v-if="!!actions"
        :class="cardActionsClass"
      >
        <a
          :class="cardActionLikeClass"
          @click="toggleLikeStatus"
        >
          <font-awesome-icon v-if="liked" icon="heart" />
          <font-awesome-icon v-else :icon="['far', 'heart']" />
        </a>
        <a
          :class="cardActionShareClass"
          @click="share"
        >
          <font-awesome-icon icon="share" />
        </a>
      </div>
      <slot name="default" v-if="!!$slots.default">
      </slot>
    </div>
  </div>
</template>

<script>
import Badge from '@/UIKit/Badge/Badge.component.vue';

import {
  CARD_CLASS_NAME,
  CARD_BLOCK_CLASS_NAME,
  CARD_TEXT_INVERT_CLASS_NAME,
  CARD_HORIZONTAL_CLASS_NAME,
  CARD_HORIZONTAL_INVERT_CLASS_NAME,
  CARD_ELEVATED_CLASS_NAME,
  CARD_BORDERED_CLASS_NAME,
  CARD_HEADER_CLASS_NAME,
  CARD_HEADER_PADDED_CLASS_NAME,
  CARD_CONTENT_CLASS_NAME,
  CARD_CONTENT_PADDED_CLASS_NAME,
  CARD_ACTIONS_CLASS_NAME,
  CARD_ACTIONS_BASELINE_CLASS_NAME,
  CARD_ACTION_CLASS_NAME,
  CARD_ACTION_ACTIVE_CLASS_NAME,
  CARD_LOADING_CLASS_NAME,
} from './Card.config';

export default {
  name: 'Card',
  props: {
    block: {
      type: Boolean,
      default: false,
    },
    horizontal: {
      type: Boolean,
      default: false,
    },
    horizontalInvert: {
      type: Boolean,
      default: false,
    },
    actions: {
      type: Boolean,
      default: false,
    },
    actionsBaseline: {
      type: Boolean,
      default: false,
    },
    elevated: {
      type: Boolean,
      default: false,
    },
    bordered: {
      type: Boolean,
      default: false,
    },
    noPadding: {
      type: Boolean,
      default: false,
    },
    badge: {
      type: String,
      default: '',
    },
    featuredImg: {
      type: String,
      default: '',
    },
    bgImage: {
      type: String,
      default: '',
    },
    loading: {
      type: Boolean,
    },
  },
  data() {
    return {
      liked: false,
    };
  },
  components: {
    Badge,
  },
  computed: {
    cardStyle() {
      let background = 'none';

      if (this.bgImage) background = `#f1f1f1 url("${this.bgImage}") center/cover`;
      if (this.bgImage && this.loading) background = '#ced4da';

      return {
        background,
      };
    },
    cardClass() {
      return {
        [CARD_CLASS_NAME]: true,
        [CARD_TEXT_INVERT_CLASS_NAME]: !!this.bgImage,
        [CARD_BLOCK_CLASS_NAME]: this.block,
        [CARD_HORIZONTAL_CLASS_NAME]: this.horizontal,
        [CARD_HORIZONTAL_INVERT_CLASS_NAME]: this.horizontalInvert,
        [CARD_ELEVATED_CLASS_NAME]: this.elevated,
        [CARD_BORDERED_CLASS_NAME]: this.bordered,
        [CARD_LOADING_CLASS_NAME]: this.loading,
      };
    },
    cardHeaderClass() {
      return {
        [CARD_HEADER_CLASS_NAME]: true,
        [CARD_HEADER_PADDED_CLASS_NAME]: !this.noPadding,
      };
    },
    cardContentClass() {
      return {
        [CARD_CONTENT_CLASS_NAME]: true,
        [CARD_CONTENT_PADDED_CLASS_NAME]: !this.noPadding,
      };
    },
    cardActionsClass() {
      return {
        [CARD_ACTIONS_CLASS_NAME]: true,
        [CARD_ACTIONS_BASELINE_CLASS_NAME]: this.actionsBaseline,
      };
    },
    cardActionLikeClass() {
      return {
        [CARD_ACTION_CLASS_NAME]: true,
        [`${CARD_ACTION_CLASS_NAME}--like`]: true,
        [CARD_ACTION_ACTIVE_CLASS_NAME]: this.liked,
      };
    },
    cardActionShareClass() {
      return {
        [CARD_ACTION_CLASS_NAME]: true,
        [`${CARD_ACTION_CLASS_NAME}--share`]: true,
      };
    },
  },
  methods: {
    share(ev) {
      this.$emit('share', ev);
    },
    toggleLikeStatus(ev) {
      ev.preventDefault();
      this.liked = !this.liked;
      this.$emit('like', this.liked);
    },
  },
};
</script>
