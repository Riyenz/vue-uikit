import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Btn from '@/UIKit/Btn/Btn.component.vue';
import {
  TEXT_IS_REQUIRED, VARIANT_DOESNT_EXISTS, SIZE_DOESNT_EXISTS,
} from '@/UIKit/Btn/Btn.config';

const btnProps = {
  text: 'Submit',
  variant: 'primary',
};

describe('Btn.vue', () => {
  it('renders props text when passed', () => {
    const wrapper = shallowMount(Btn, {
      propsData: btnProps,
    });

    expect(wrapper.text()).to.includes(btnProps.text);
  });

  it('adds a button class of the specified props variant', () => {
    const wrapper = shallowMount(Btn, {
      propsData: btnProps,
    });

    expect(wrapper.classes(`eduk-btn-${btnProps.variant}`)).to.equal(true);
  });

  it('adds a .disabled class when props disabled is equals true', () => {
    const wrapper = shallowMount(Btn, {
      propsData: {
        ...btnProps,
        disabled: true,
      },
    });

    expect(wrapper.classes('disabled')).to.equal(true);
  });

  it('adds an -outline modifier when props outline is equals true', () => {
    const wrapper = shallowMount(Btn, {
      propsData: {
        ...btnProps,
        outline: true,
      },
    });

    expect(wrapper.classes(`eduk-btn-${btnProps.variant}-outline`)).to.equal(true);
  });

  it('adds a --{size} modifier when props size is provided', () => {
    const size = 'sm';
    const wrapper = shallowMount(Btn, {
      propsData: {
        ...btnProps,
        size,
      },
    });

    expect(wrapper.classes(`eduk-btn--${size}`)).to.equal(true);
  });

  it('primary should be default the variant when no props variant provided', () => {
    const wrapper = shallowMount(Btn, {
      propsData: {
        text: btnProps.text,
      },
    });

    expect(wrapper.classes('eduk-btn-primary')).to.equal(true);
  });

  it('throws a TEXT_IS_REQUIRED error if props text is empty', () => {
    try {
      shallowMount(Btn, {
        propsData: {
          ...btnProps,
          text: '',
        },
      });
      expect.fail();
    } catch (error) {
      expect(error.message).to.equal(TEXT_IS_REQUIRED);
    }
  });

  it('throws a VARIANT_DOESNT_EXISTS error if props variant is not available', () => {
    try {
      shallowMount(Btn, {
        propsData: {
          ...btnProps,
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
        propsData: {
          ...btnProps,
          size: 'xl',
        },
      });
      expect.fail();
    } catch (error) {
      expect(error.message).to.equal(SIZE_DOESNT_EXISTS);
    }
  });
});
