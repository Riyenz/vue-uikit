import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Tab from '@/UIKit/Tab/Tab.component.vue';
import {
  TAB_CLASS_NAME,
  TAB_NAV_CLASS_NAME,
  TAB_NAV_ITEM_CLASS_NAME,
  TAB_PANE_CLASS_NAME,
} from '@/UIKit/Tab/Tab.config';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const slots = {
  first: '<p id="firstContent">test</p>',
  second: '<p id="secondContent">test</p>',
  third: '<p id="thirdContent">test</p>',
};

const items = ['first', 'second', 'third'];

const itemsWithLoading = [{ name: 'first', loading: true }, 'second', 'third'];

const props = {
  components: {
    FontAwesomeIcon,
  },
};

describe('Tab.component.vue', () => {
  it(`adds a .${TAB_CLASS_NAME} class on init`, () => {
    const wrapper = shallowMount(Tab, {
      ...props,
      propsData: {
        items,
      },
    });

    expect(wrapper.find(`.${TAB_CLASS_NAME}`).exists()).to.equal(true);
  });

  it('adds tab items', () => {
    const wrapper = shallowMount(Tab, {
      ...props,
      propsData: {
        items,
      },
    });

    expect(wrapper.find(`.${TAB_NAV_CLASS_NAME}`).exists()).to.equal(true);
    expect(wrapper.findAll(`.${TAB_NAV_ITEM_CLASS_NAME}`).length).to.equal(3);
  });

  it('adds tab content items', () => {
    const wrapper = shallowMount(Tab, {
      ...props,
      slots,
      propsData: {
        items,
      },
    });

    expect(wrapper.findAll(`.${TAB_PANE_CLASS_NAME}`).length).to.equal(3);
    expect(wrapper.find('#firstContent').exists()).to.equal(true);
    expect(wrapper.find('#secondContent').exists()).to.equal(true);
    expect(wrapper.find('#thirdContent').exists()).to.equal(true);
  });

  it('add loading mask to tab content', () => {
    const wrapper = shallowMount(Tab, {
      ...props,
      slots,
      propsData: {
        items: itemsWithLoading,
      },
    });

    expect(wrapper.find(`.${TAB_CLASS_NAME}__loading`).exists()).to.equal(true);
  });

  it('add tab change event', () => {
    const wrapper = shallowMount(Tab, {
      ...props,
      slots,
      propsData: {
        items,
      },
    });

    wrapper.find(`.${TAB_NAV_CLASS_NAME}__link:last-child`).trigger('click');

    expect(wrapper.emitted().change.length).to.equal(1);
  });
});
