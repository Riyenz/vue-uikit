import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Row from '@/UIKit/Grid/Row.component.vue';

const defaultSlot = document.createElement('i');
defaultSlot.id = 'testDefault';

describe('Row.component.vue', () => {
  it('renders default slot when passed', () => {
    const wrapper = shallowMount(Row, {
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

  it('adds a .eduk-no-gutters class when props noGutters is provided', () => {
    const wrapper = shallowMount(Row, {
      slots: {
        default: defaultSlot.outerHTML,
      },
      propsData: {
        noGutters: true,
      },
    });

    expect(wrapper.classes('eduk-no-gutters')).to.equal(true);
  });
});
