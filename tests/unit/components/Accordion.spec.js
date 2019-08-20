import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Accordion from '@/UIKit/Accordion/Accordion.component.vue';
import AccordionItem from '@/UIKit/Accordion/AccordionItem.component.vue';
import {
  ACCORDION_CLASS_NAME,
  THICK_ACCORDION_CLASS,
  INVERTED_ACCORDION_CLASS,
  ACCORDION_ITEM_CLASS,
  ACCORDION_ITEM_ACTIVE_CLASS,
} from '@/UIKit/Accordion/Accordion.config';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { DEFAULT_VARIANT } from '@/UIKit/config';

const accordionProperties = {
  components: {
    FontAwesomeIcon,
  },
};

describe('Accordion.component.vue', () => {
  it(`adds a .${ACCORDION_CLASS_NAME} class on init`, () => {
    const wrapper = shallowMount(Accordion);

    expect(wrapper.find(`.${ACCORDION_CLASS_NAME}`).exists()).to.equal(true);
  });

  it(`adds a .${THICK_ACCORDION_CLASS} class when 'thick' props is true`, () => {
    const wrapper = shallowMount(Accordion, {
      ...accordionProperties,
      propsData: {
        thick: true,
      },
    });

    expect(wrapper.classes(THICK_ACCORDION_CLASS)).to.equal(true);
  });

  it(`adds a .${INVERTED_ACCORDION_CLASS} class when props 'menu' is true or 'variant' has value`, () => {
    const wrapper1 = shallowMount(Accordion, {
      ...accordionProperties,
      propsData: {
        menu: true,
      },
    });

    expect(
      wrapper1.classes(INVERTED_ACCORDION_CLASS),
      `.${INVERTED_ACCORDION_CLASS} class was not added when menu is true`,
    ).to.equal(true);

    const wrapper2 = shallowMount(Accordion, {
      ...accordionProperties,
      propsData: {
        variant: DEFAULT_VARIANT,
      },
    });

    expect(
      wrapper2.classes(INVERTED_ACCORDION_CLASS),
      `.${INVERTED_ACCORDION_CLASS} class was not added when variant has value`,
    ).to.equal(true);
  });

  it(`adds a .${ACCORDION_ITEM_CLASS} class on AccordionItem init`, () => {
    const wrapper = shallowMount(AccordionItem, accordionProperties);

    expect(wrapper.find(`.${ACCORDION_ITEM_CLASS}`).exists()).to.equal(true);
  });

  it('renders props title when passed in AccordionItem', () => {
    const title = 'Accordion Title';
    const wrapper = shallowMount(AccordionItem, {
      ...accordionProperties,
      propsData: {
        title,
      },
    });

    expect(wrapper.text()).to.includes(title);
  });

  it('renders props title when passed in AccordionItem', () => {
    const wrapper = shallowMount(AccordionItem, accordionProperties);

    wrapper.setData({ isActive: true });

    expect(wrapper.classes(ACCORDION_ITEM_ACTIVE_CLASS)).is.equals(true);
  });
});
