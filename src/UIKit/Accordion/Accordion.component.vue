<template>
  <div :class="accordionClass">
    <div class="eduk-accordion__container">
      <div :class="['eduk-accordion__list', {active: item.active}]"
        v-for="(item,index) in listItem"
        :key="index">
        <transition name="eduk-accordion-fade-slide" mode="out-in">
          <div :class="['eduk-accordion__head', {'has-menu': variant === 'menu'}]"
            @click="item.active = toggleActive(item, index)">
            <template v-if="variant === 'themed'">
              <h3 class="eduk-accordion__title">{{ item.title }}</h3>
              <div :class="['eduk-accordion__arrow',{'eduk-accordion__arrow--down': item.active}]"></div>
            </template>
            <template v-else-if="variant === 'menu'">
              <div>
                <img
                  class="eduk-accordion__icon eduk-accordion__icon--large"
                  :src="item.icon || defaultIcon" />
                <h3 class="eduk-accordion__title">{{ item.title }}</h3>
              </div>
              <div>
                <div :class="['eduk-accordion__arrow',{'eduk-accordion__arrow--down': item.active}]"></div>
              </div>
            </template>
            <template v-else>
              <div :class="['eduk-accordion__arrow',{'eduk-accordion__arrow--down': item.active}]"></div>
              <h3 class="eduk-accordion__title">{{ item.title }}</h3>
            </template>
          </div>
        </transition>
        <CollapseTransition>
          <div class="eduk-accordion__body" v-if="lastClick === index && isSelected">
            <div class="eduk-accordion__content">
              <template v-if="typeof item.content === 'object'">
                <AccordionItem :content="item.content" :variant="variant" />
              </template>
              <template v-else>
                <template v-if="item.type === 'slot'">
                  <slot :name="item.name"></slot>
                </template>
                <template v-else-if="item.type === 'html'">
                  <div v-html="item.content"></div>
                </template>
                <template v-else>
                  <span>{{ item.content }}</span>
                </template>
              </template>
            </div>
          </div>
        </CollapseTransition>
      </div>
    </div>
  </div>
</template>

<script>
import { CollapseTransition } from 'vue2-transitions';
import { ACCORDION_CLASS_NAME, DEFAULT_ICON } from './Accordion.config';
import AccordionItem from './AccordionItem.component.vue';

export default {
  name: 'Accordion',
  components: {
    CollapseTransition,
    AccordionItem,
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
    theme: {
      type: String,
    },
  },
  data() {
    return {
      listItem: this.content,
      lastClick: 0,
      isSelected: false,
      defaultIcon: DEFAULT_ICON,
    };
  },
  computed: {
    accordionClass() {
      const theme = this.theme ? `${ACCORDION_CLASS_NAME}--${this.theme}` : '';
      let variant = `${ACCORDION_CLASS_NAME}--${this.variant}`;
      if (this.variant === 'menu') {
        variant = `${ACCORDION_CLASS_NAME}--${this.variant} ${ACCORDION_CLASS_NAME}--outlined`;
      }

      return {
        [ACCORDION_CLASS_NAME]: true,
        [variant]: this.variant,
        [this.behavior]: this.behavior,
        [theme]: this.theme,
      };
    },
  },
  methods: {
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
