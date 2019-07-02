import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Container from '@/UIKit/Grid/Container.component.vue';

const defaultSlot = document.createElement('i');
defaultSlot.id = 'testDefault';

describe('Container.component.vue', () => {
  it('renders default slot when passed', () => {
    const wrapper = shallowMount(Container, {
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

  it('adds .eduk-container class if props not fluid', () => {
    const wrapper = shallowMount(Container);

    expect(wrapper.classes('eduk-container')).to.equal(true);
  });

  it('adds .eduk-container-fluid class if props fluid', () => {
    const wrapper = shallowMount(Container, {
      propsData: {
        fluid: true,
      },
    });

    expect(wrapper.classes('eduk-container-fluid')).to.equal(true);
  });
});
