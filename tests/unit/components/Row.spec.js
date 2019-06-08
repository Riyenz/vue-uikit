import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import { Row } from '@/UIKit';

const defaultSlot = document.createElement('i');
defaultSlot.id = 'testDefault';

describe('Row.vue', () => {
  it('renders default slot when passed', () => {
    const wrapper = shallowMount(Row, {
      slots: {
        default: defaultSlot.outerHTML,
      },
    });

    try {
      expect(wrapper.find(`#${defaultSlot.id}`).is(`#${defaultSlot.id}`)).to.equal(true);
    } catch (err) {
      expect.fail('can\'t found slot default');
    }
  });
});
