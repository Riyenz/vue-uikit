import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Accordion from '@/UIKit/Accordion/Accordion.component.vue';
import { ACCORDION_CLASS_NAME } from '@/UIKit/Accordion/Accordion.config';
import AccordionItem from '@/UIKit/Accordion/AccordionItem.component.vue';

const variants = ['standard', 'outlined', 'themed', 'menu'];
const getPropsData = (pos) => {
  return {
    variant: variants[pos],
    content: [
      {
        title: 'Title',
        content: 'test',
        active: false,
        type: 'text',
      },
      {
        title: 'with Sub',
        content: [
          {
            title: 'test',
            content: 'test',
            active: false,
            type: 'text',
          },
        ],
        active: false,
        type: 'text',
      },
      {
        title: 'Title 2',
        content: 'test',
        active: true,
        type: 'text',
      },
      {
        icon: 'https://image.flaticon.com/icons/svg/1373/1373204.svg',
        name: 'menu-1',
        title: 'Sample Content',
        content: 'hello',
        active: false,
        type: 'html',
      },
    ],
  };
};

describe('Accordion.component.vue', () => {
  it(`adds a .${ACCORDION_CLASS_NAME} class on init`, () => {
    const wrapper = shallowMount(Accordion, {
      propsData: getPropsData(1),
    });

    expect(wrapper.find(`.${ACCORDION_CLASS_NAME}`).exists()).to.equal(true);
  });

  it('adds a --outlined class if variant is outlined', () => {
    const wrapper = shallowMount(Accordion, {
      propsData: getPropsData(1),
    });

    expect(wrapper.find(`.${ACCORDION_CLASS_NAME}--outlined`).exists()).to.equal(true);
  });

  it('adds a --themed class if variant theme is present', () => {
    const wrapper = shallowMount(Accordion, {
      propsData: getPropsData(2),
    });
    expect(wrapper.find(`.${ACCORDION_CLASS_NAME}--themed`).exists()).to.equal(true);
  });

  it('adds a --menu class if variant is menu', () => {
    const wrapper = shallowMount(Accordion, {
      propsData: getPropsData(3),
    });
    expect(wrapper.find(`.${ACCORDION_CLASS_NAME}--menu`).exists()).to.equal(true);
  });

  it('render accordion item title', () => {
    const wrapper = shallowMount(Accordion, {
      propsData: getPropsData(2),
    });
    const textRendered = wrapper.find('h3').text();
    expect(textRendered).to.equal('Title');
  });

  it('change the listItem.active value to make the item active', () => {
    const wrapper = shallowMount(Accordion, {
      propsData: getPropsData(2),
    });

    const toggledActive = wrapper.vm.toggleActive(wrapper.vm.listItem[0], 0);
    expect(toggledActive).to.equal(true);
  });

  it('change the listItem.active value to make the item inactive', () => {
    const wrapper = shallowMount(Accordion, {
      propsData: getPropsData(2),
    });
    // [2] already have active = true
    const toggleToInactive = wrapper.vm.toggleActive(wrapper.vm.listItem[2], 2);
    expect(toggleToInactive).to.equal(false);
  });

  it('render icon provided if variant == menu', () => {
    const wrapper = shallowMount(Accordion, {
      propsData: getPropsData(3),
    });
    expect(wrapper.html()).contain('https://image.flaticon.com/icons/svg/1373/1373204.svg');
  });

  it('render accordionItem if item has sub-item', () => {
    const wrapper = shallowMount(Accordion, {
      propsData: getPropsData(2),
    });
    // make the second item active to render the child
    wrapper.vm.toggleActive(wrapper.vm.listItem[1], 1);
    expect(wrapper.find(AccordionItem).exists()).to.equal(true);
  });
});

