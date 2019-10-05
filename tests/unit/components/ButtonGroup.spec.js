import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import ButtonGroup from '@/UIKit/ButtonGroup/ButtonGroup.component.vue';
import ButtonToolbar from '@/UIKit/ButtonGroup/ButtonToolbar.component.vue';
import {
  BUTTONGROUP_CLASS_NAME,
  BUTTONTOOLBAR_CLASS_NAME,
  BUTTONGROUP_VERTICAL_CLASS_NAME,
} from '@/UIKit/ButtonGroup/ButtonGroup.config';

describe('ButtonGroup.component.vue', () => {
  it(`adds a .${BUTTONGROUP_CLASS_NAME} class on init`, () => {
    const wrapper = shallowMount(ButtonGroup);

    expect(wrapper.find(`.${BUTTONGROUP_CLASS_NAME}`).exists()).to.equal(true);
  });

  it(`adds a .${BUTTONTOOLBAR_CLASS_NAME} class on init`, () => {
    const wrapper = shallowMount(ButtonToolbar);

    expect(wrapper.find(`.${BUTTONTOOLBAR_CLASS_NAME}`).exists()).to.equal(true);
  });

  it(`adds a .${BUTTONGROUP_VERTICAL_CLASS_NAME} when vertical prop is true`, () => {
    const wrapper = shallowMount(ButtonGroup, {
      propsData: {
        vertical: true,
      },
    });

    expect(wrapper.find(`.${BUTTONGROUP_VERTICAL_CLASS_NAME}`).exists()).to.equal(true);
  });

  it('renders button group default slot when passed', () => {
    const wrapper = shallowMount(ButtonGroup, {
      slots: {
        default: '<button class="eduk-btn eduk-btn--primary">Left</button>',
      },
    });

    expect(wrapper.find('.eduk-btn').exists()).to.equal(true);
  });

  it('renders button toolbar default slot when passed', () => {
    const wrapper = shallowMount(ButtonToolbar, {
      slots: {
        default: '<div class="eduk-buttongroup"></div>',
      },
    });

    expect(wrapper.find(`.${BUTTONGROUP_CLASS_NAME}`).exists()).to.equal(true);
  });
});
