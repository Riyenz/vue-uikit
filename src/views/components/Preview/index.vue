<template>
  <div :class="mainClass">
    <div class="preview__title">
      <label>example</label>
    </div>
    <div class="preview__content">
      <slot name="example"></slot>
    </div>
    <div class="preview__title">
      <label>code</label>
    </div>
    <div class="code">
      <div class="code__control" :class="{'code__control--open': !collapsed}">
        <a @click="toggleCollapsible">
          <font-awesome-icon icon="code" /> {{collapsed ? 'show code' : 'hide code'}}
        </a>
      </div>
      <div class="collapsible" :style="{'height': collapsed ? '0' : `${this.$refs.collapsibleBody.offsetHeight}px`}">
        <div class="collapsible__body" ref="collapsibleBody">
          <section class="collapsible__section">
            <label>vue</label>
            <pre class="code__preview">
              <slot name="vue-code"></slot>
            </pre>
          </section>
          <section class="collapsible__section">
            <label>vanilla</label>
            <pre class="code__preview">
              <slot name="vanilla-code"></slot>
            </pre>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Preview',
  props: {
    wide: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return { collapsed: true };
  },
  computed: {
    mainClass() {
      return {
        preview: true,
        'preview--wide': this.wide,
      };
    },
  },
  methods: {
    toggleCollapsible(ev) {
      ev.preventDefault();
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'scss/variables';

.preview {
  border: 1px solid $secondary;
  border-radius: 5px;
  max-width: 650px;
  margin: 0 auto 25px;
  overflow: hidden;

  &--wide {
    max-width: 900px;
  }

  &__title {
    background: $secondary;
    color: $white;
    padding: 7px 30px;
  }

  &__title > label {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    display: block;
    line-height: 12px;
    margin: 0;
  }

  &__content {
    padding: 25px 30px;
  }
}

.code {
  &__control {
    display: flex;
    justify-content: flex-end;
    padding: 7px 30px;
    background-color: $gray-100;
    transition: background-color 0.15s;
  }

  &__control--open {
    background-color: $white;
  }

  &__control > a {
    cursor: pointer;
    display: inline-block;
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    color: $gray-800;
  }

  &__preview {
    padding: 0;
    margin: 0;
    white-space: nowrap;
  }

  &__preview > .language-html {
    font-size: 12px;
    white-space: pre-wrap;
    background: transparent;
  }
}

.collapsible {
  overflow: hidden;
  transition: height 0.15s ease-in-out;

  &__section {
    padding: 10px 30px 20px;
  }

  &__section > label {
    font-size: 10px;
    letter-spacing: 1px;
    font-weight: 600;
    text-transform: uppercase;
    color: $gray-800;
    display: block;
  }

  &__section:not(:last-child) {
    border-bottom: 1px solid $secondary;
  }
}
</style>
