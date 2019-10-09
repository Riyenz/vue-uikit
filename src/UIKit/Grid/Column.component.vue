<template>
  <div ref="edukCol" :class="colClass">
    <slot></slot>
  </div>
</template>

<script>
import {
  GRID_COLUMN_CLASS_NAME,
  GRID_OFFSET_CLASS_NAME,
} from './Grid.config';

export default {
  name: 'Column',
  props: {
    cols: {
      type: [Number, String],
    },
    colssm: {
      type: [Number, String],
    },
    colsmd: {
      type: [Number, String],
    },
    colslg: {
      type: [Number, String],
    },
    colsxl: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    },
    offsetsm: {
      type: [Number, String],
    },
    offsetmd: {
      type: [Number, String],
    },
    offsetlg: {
      type: [Number, String],
    },
    offsetxl: {
      type: [Number, String],
    },
  },
  computed: {
    colClass() {
      return {
        /** Column Class */
        [GRID_COLUMN_CLASS_NAME]: !(this.cols || this.colssm || this.colsmd || this.colslg || this.colsxl),
        [`${GRID_COLUMN_CLASS_NAME}-${this.cols}`]: this.cols,
        [`${GRID_COLUMN_CLASS_NAME}-sm-${this.colssm}`]: this.colssm,
        [`${GRID_COLUMN_CLASS_NAME}-md-${this.colsmd}`]: this.colsmd,
        [`${GRID_COLUMN_CLASS_NAME}-lg-${this.colslg}`]: this.colslg,
        [`${GRID_COLUMN_CLASS_NAME}-xl-${this.colsxl}`]: this.colsxl,
        /** Offset Class */
        [`${GRID_OFFSET_CLASS_NAME}-${this.offset}`]: this.offset,
        [`${GRID_OFFSET_CLASS_NAME}-sm-${this.offsetsm}`]: this.offsetsm,
        [`${GRID_OFFSET_CLASS_NAME}-md-${this.offsetmd}`]: this.offsetmd,
        [`${GRID_OFFSET_CLASS_NAME}-lg-${this.offsetlg}`]: this.offsetlg,
        [`${GRID_OFFSET_CLASS_NAME}-xl-${this.offsetxl}`]: this.offsetxl,
      };
    },
  },
};
</script>
