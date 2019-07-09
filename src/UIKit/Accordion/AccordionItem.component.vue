<template>
  <div class="eduk-accordion__sub">
    <div
      :class="['eduk-accordion__list has-sub', {active: item.active}]"
      v-for="(item,index) in listItem"
      :key="index">
      <transition name="eduk-accordion-fade-slide" mode="out-in">
        <div class="eduk-accordion__head" @click="item.active = toggleActive(item, index)">
          <div :class="['eduk-accordion__arrow',{'eduk-accordion__arrow--down': item.active}]"></div>
          <h3 class="eduk-accordion__title">{{ item.title }}</h3>
        </div>
      </transition>
      <CollapseTransition>
        <div class="eduk-accordion__body" v-if="lastClick === index && isSelected">
          <template v-if="item.type === 'slot'">
            <slot :name="item.name"></slot>
          </template>
          <template v-else-if="item.type === 'html'">
            <div v-html="item.content"></div>
          </template>
          <template v-else>
            <span>{{ item.content }}</span>
          </template>
        </div>
      </CollapseTransition>
    </div>
  </div>
</template>

<script>
import { CollapseTransition } from 'vue2-transitions';

export default {
  name: 'AccordionItem',
  components: {
    CollapseTransition,
  },
  props: {
    content: {
      type: Array, // array of object
      default() {
        return [];
      },
      required: true,
    },
    variant: {
      type: String,
      default: 'standard',
    },
  },
  data() {
    return {
      lastClick: 0,
      isSelected: false,
      listItem: this.content,
    };
  },
  beforeDestroy() {
    this.resetSelectedItem();
  },
  methods: {
    resetSelectedItem() {
      Object.keys(this.listItem).forEach((key) => {
        this.listItem[key].active = false;
      });
    },
    toggleActive(item, index) {
      if (this.lastClick !== index) {
        this.listItem[this.lastClick].active = false;
        this.isSelected = true;
      } else {
        this.isSelected = !this.isSelected;
      }
      this.lastClick = index;
      return !item.active;
    },
  },
};
</script>
