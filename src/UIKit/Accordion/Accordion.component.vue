<template>
  <div :class="accordionClass">
    <template v-if="!loading">
      <!-- main content -->
      <slot></slot>
    </template>

    <!-- for loading only -->
    <template v-if="loading">
      <AccordionItem loading/>
      <AccordionItem loading/>
      <AccordionItem loading/>
    </template>
  </div>
</template>

<script>
import AccordionItem from './AccordionItem.component.vue';

import {
  ACCORDION_CLASS_NAME,
  THICK_ACCORDION_CLASS,
  BORDERED_ACCORDION_CLASS,
  INVERTED_ACCORDION_CLASS,
} from './Accordion.config';

export default {
  name: 'Accordion',
  components: {
    AccordionItem,
  },
  props: {
    variant: {
      type: String,
    },
    bordered: {
      type: Boolean,
    },
    thick: {
      type: Boolean,
    },
    menu: {
      type: Boolean,
    },
    loading: {
      type: Boolean,
    },
  },
  computed: {
    accordionClass() {
      return {
        [ACCORDION_CLASS_NAME]: true,
        [THICK_ACCORDION_CLASS]: this.thick,
        [BORDERED_ACCORDION_CLASS]: this.bordered,
        [INVERTED_ACCORDION_CLASS]: this.menu || this.variant,
        [`${ACCORDION_CLASS_NAME}--${this.variant}`]: this.variant && !this.loading,
      };
    },
  },
  data() {
    return {
      currentActiveItem: -1,
    };
  },
  mounted() {
    if (this.menu || this.variant) this.setItemArrowDown();

    this.$watch('loading', () => {
      this.mutateItemComponent();
    }, { immediate: true });
  },
  methods: {
    setItemArrowDown() {
      if (!this.$slots.default) return;

      this.$slots.default = this.$slots.default.map((item) => {
        if (!item.componentOptions.tag === 'AccordionItem') return item;

        item.componentInstance.$data.isArrowDown = true;
        return item;
      });
    },
    mutateItemComponent() {
      if (!this.$slots.default) return;

      this.$slots.default = this.$slots.default.map((accordionItem, accordionItemIndex) => {
        if (!accordionItem.componentOptions.tag === 'AccordionItem') return accordionItem;
        accordionItem.componentInstance.$data.itemIndex = accordionItemIndex;
        accordionItem.componentInstance.$data.fnItemActive = this.itemActiveCallback;
        return accordionItem;
      });
    },
    itemActiveCallback(itemIndex) {
      if (this.currentActiveItem === itemIndex) return; // Ignore when item was toggled twice

      if (this.currentActiveItem >= 0) {
        const lastActiveComponent = this.$slots.default[this.currentActiveItem].componentInstance;
        lastActiveComponent.$data.isActive = false;
      }

      this.currentActiveItem = itemIndex;
    },
  },
};
</script>
