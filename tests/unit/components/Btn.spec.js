import { expect } from 'chai';
import { shallowMount, mount } from '@vue/test-utils';
import Btn from '@/UIKit/Btn/Btn.component.vue';
import {
  VARIANT_DOESNT_EXISTS, SIZE_DOESNT_EXISTS, BTN_CLASS_NAME, BTN_CLASS_DISABLED,
} from '@/UIKit/Btn/Btn.config';
import { DEFAULT_VARIANT } from '@/UIKit/config';
import BtnTest from '@/UIKit/Btn/Btn.component.test.vue';

const btnProps = {
  variant: 'primary',
};
const btnSlots = {
  default: 'Submit',
};
const btnProperties = {
  slots: btnSlots,
  propsData: btnProps,
};

describe('Btn.component.vue', () => {
  it('renders default slot when passed', () => {
    const defaultSlot = document.createElement('i');
    defaultSlot.id = 'testDefault';
    const wrapper = shallowMount(Btn, {
      slots: {
        default: defaultSlot.outerHTML,
      },
    });

    try {
      expect(wrapper.find(`#${defaultSlot.id}`).is(`#${defaultSlot.id}`)).to.equal(true);
    } catch (err) {
      expect.fail('can\'t find slot default');
    }
  });

  it('adds a button class of the specified props variant', () => {
    const wrapper = shallowMount(Btn, btnProperties);

    expect(wrapper.classes(`${BTN_CLASS_NAME}--${btnProperties.propsData.variant}`)).to.equal(true);
  });

  it(`adds a .${BTN_CLASS_DISABLED} class when props disabled is equals true`, () => {
    const wrapper = shallowMount(Btn, {
      ...btnProperties,
      propsData: {
        disabled: true,
      },
    });

    expect(wrapper.classes(BTN_CLASS_DISABLED)).to.equal(true);
  });

  it('adds an --outline modifier when props outline is equals true', () => {
    const wrapper = shallowMount(Btn, {
      ...btnProperties,
      propsData: {
        outline: true,
      },
    });

    expect(wrapper.classes(`${BTN_CLASS_NAME}--outlined`)).to.equal(true);
  });

  it('adds a --{size} modifier when props size is provided', () => {
    const size = 'sm';
    const wrapper = shallowMount(Btn, {
      ...btnProperties,
      propsData: {
        size,
      },
    });

    expect(wrapper.classes(`${BTN_CLASS_NAME}--${size}`)).to.equal(true);
  });

  it('adds a click event listener for the button ', () => {
    const wrapper = mount(BtnTest);

    wrapper.trigger('click');

    expect(wrapper.vm.clicked).to.equal(true);
  });

  it('primary should be default the variant when no props variant provided', () => {
    const wrapper = shallowMount(Btn, {
      slots: btnSlots,
    });

    expect(wrapper.classes(`${BTN_CLASS_NAME}--${DEFAULT_VARIANT}`)).to.equal(true);
  });

  it('throws a VARIANT_DOESNT_EXISTS error if props variant is not available', () => {
    try {
      shallowMount(Btn, {
        ...btnProperties,
        propsData: {
          variant: 'applepie',
        },
      });
      expect.fail();
    } catch (error) {
      expect(error.message).to.equal(VARIANT_DOESNT_EXISTS);
    }
  });

  it('throws a SIZE_DOESNT_EXISTS error if props size is not available', () => {
    try {
      shallowMount(Btn, {
        ...btnProperties,
        propsData: {
          size: 'xl',
        },
      });
      expect.fail();
    } catch (error) {
      expect(error.message).to.equal(SIZE_DOESNT_EXISTS);
    }
  });
});
