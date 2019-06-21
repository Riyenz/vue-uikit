<template>
  <div ref="edukCol">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Column',
  props: {
    cols: {
      type: Number,
    },
    colssm: {
      type: Number,
    },
    colsmd: {
      type: Number,
    },
    colslg: {
      type: Number,
    },
    colsxl: {
      type: Number,
    },
    offset: {
      type: Number,
    },
    offsetsm: {
      type: Number,
    },
    offsetmd: {
      type: Number,
    },
    offsetlg: {
      type: Number,
    },
    offsetxl: {
      type: Number,
    },
  },
  data() {
    return {
      colClass: 'eduk-col',
      offsetClass: 'eduk-offset',
    };
  },
  mounted() {
    this.initDefaultColClass();
    this.initColSizeClasses();
    this.initOffsetClasses();
  },
  methods: {
    initDefaultColClass() {
      const colSize = this.cols ? `-${this.cols}` : '';
      this.addClass(`${this.colClass}${colSize}`);
    },
    initColSizeClasses() {
      if (this.colssm) {
        this.addClass(`${this.colClass}-sm-${this.colssm}`);
      }
      if (this.colsmd) {
        this.addClass(`${this.colClass}-md-${this.colsmd}`);
      }
      if (this.colslg) {
        this.addClass(`${this.colClass}-lg-${this.colslg}`);
      }
      if (this.colsxl) {
        this.addClass(`${this.colClass}-xl-${this.colsxl}`);
      }
    },
    initOffsetClasses() {
      if (this.offset) {
        this.addClass(`${this.offsetClass}-${this.offset}`);
      }
      if (this.offsetsm) {
        this.addClass(`${this.offsetClass}-sm-${this.offsetsm}`);
      }
      if (this.offsetmd) {
        this.addClass(`${this.offsetClass}-md-${this.offsetmd}`);
      }
      if (this.offsetlg) {
        this.addClass(`${this.offsetClass}-lg-${this.offsetlg}`);
      }
      if (this.offsetxl) {
        this.addClass(`${this.offsetClass}-xl-${this.offsetxl}`);
      }
    },
    addClass(className) {
      this.$refs.edukCol.classList.add(className);
    },
  },
};
</script>
