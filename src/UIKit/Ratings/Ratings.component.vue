<template>
  <div :class="ratingsClass">
    <font-awesome-icon
      icon="star"
      v-for="index in ratings"
      :key="index"
    />
    <div
      class="eduk-ratings__clone"
      ref="parent"
      @mouseleave="mouseleave"
    >
      <font-awesome-icon
        v-for="index in ratings"
        :key="index"
        :icon="ratingIcon(index)"
        :style="ratingsStyles(index)"
        @click="select"
        @mousemove="mouseenter"
      />
    </div>
  </div>
</template>

<script>
import {
  RATINGS_CLASS_NAME,
  AVAILABLE_SIZES,
  INVALID_RATING,
  SIZE_DOESNT_EXIST,
} from './Ratings.config';

export default {
  name: 'Ratings',
  props: {
    defaultValue: {
      type: Number,
      default: 0,
      validator(value) {
        if (value > 5) {
          throw new Error(INVALID_RATING);
        }

        return true;
      },
    },
    size: {
      type: String,
      validator(value) {
        if (!AVAILABLE_SIZES.includes(value)) {
          throw new Error(SIZE_DOESNT_EXIST);
        }

        return true;
      },
    },
  },
  data() {
    return {
      hoveredRating: 0,
      selectedRating: this.defaultValue || 0,
      ratings: [1, 2, 3, 4, 5],
    };
  },
  computed: {
    ratingsClass() {
      return {
        [RATINGS_CLASS_NAME]: true,
        [`${RATINGS_CLASS_NAME}--${this.size}`]: this.size,
      };
    },
  },
  methods: {
    getIndex(el) {
      const { parent } = this.$refs;

      return Array.from(parent.childNodes).indexOf(el) + 1;
    },
    select(ev) {
      const { offsetX, currentTarget } = ev;
      const index = this.getIndex(currentTarget);

      if ((currentTarget.scrollWidth / 2) < offsetX) {
        this.selectedRating = index;
      } else {
        this.selectedRating = (index - 1) + 0.5;
      }

      this.$emit('change', this.selectedRating);
    },
    mouseenter(ev) {
      const { offsetX, currentTarget } = ev;
      const index = this.getIndex(currentTarget);

      if ((currentTarget.scrollWidth / 2) < offsetX) {
        this.hoveredRating = index;
      } else {
        this.hoveredRating = (index - 1) + 0.5;
      }
    },
    mouseleave() {
      this.hoveredRating = 0;
    },
    ratingsStyles(index) {
      if (this.hoveredRating > 0) {
        return {
          opacity: this.hoveredRating >= (index - 0.5) ? '1' : '0',
        };
      }

      return {
        opacity: this.selectedRating >= (index - 0.5) ? '1' : '0',
      };
    },
    ratingIcon(index) {
      if (this.hoveredRating > 0) return this.getIcon(this.hoveredRating, index);

      return this.getIcon(this.selectedRating, index);
    },
    getIcon(rating, index) {
      const halfStar = rating % 1 > 0;

      if (halfStar) {
        const rate = Math.floor(rating);

        if (rate + 1 === index) {
          return 'star-half';
        }
      }

      return 'star';
    },
  },
};
</script>
