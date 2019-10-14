import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Blockquote from '@/UIKit/Blockquote/Blockquote.component.vue';
import {
  BLOCKQUOTE_CLASS_NAME,
  BLOCKQUOTE_COMPACT_CLASS_NAME,
  BLOCKQUOTE_HORIZONTAL_CLASS_NAME,
  BLOCKQUOTE_BORDERED_CLASS_NAME,
} from '@/UIKit/Blockquote/Blockquote.config';

describe('Blockquote.component.vue', () => {
  it(`adds a .${BLOCKQUOTE_CLASS_NAME} class on init`, () => {
    const wrapper = shallowMount(Blockquote);

    expect(wrapper.find(`.${BLOCKQUOTE_CLASS_NAME}`).exists()).to.equal(true);
  });

  it(`adds a .${BLOCKQUOTE_COMPACT_CLASS_NAME} when compact prop is true`, () => {
    const wrapper = shallowMount(Blockquote, {
      propsData: {
        compact: true,
      },
    });

    expect(wrapper.find('.eduk-blockquote__quote-wrap').exists()).to.equal(true);
    expect(wrapper.find(`.${BLOCKQUOTE_COMPACT_CLASS_NAME}`).exists()).to.equal(true);
  });

  it(`adds a .${BLOCKQUOTE_BORDERED_CLASS_NAME} when bordered prop is true`, () => {
    const wrapper = shallowMount(Blockquote, {
      propsData: {
        bordered: true,
      },
    });

    expect(wrapper.find(`.${BLOCKQUOTE_BORDERED_CLASS_NAME}`).exists()).to.equal(true);
  });

  it(`adds a .${BLOCKQUOTE_HORIZONTAL_CLASS_NAME} when avatar and compact prop is false`, () => {
    const wrapper = shallowMount(Blockquote);

    expect(wrapper.find(`.${BLOCKQUOTE_HORIZONTAL_CLASS_NAME}`).exists()).to.equal(true);
  });

  it('adds an image when avatar is passed', () => {
    const wrapper = shallowMount(Blockquote, {
      propsData: {
        avatar: 'https://via.placeholder.com/90',
      },
    });

    expect(wrapper.find('.eduk-blockquote__avatar').exists()).to.equal(true);
  });

  it('render quote content', () => {
    const wrapper = shallowMount(Blockquote, {
      propsData: {
        heading: 'Lorem ipsum',
      },
    });

    expect(wrapper.find('.eduk-blockquote__header').exists()).to.equal(true);
  });

  it('adds footer citation', () => {
    const wrapper = shallowMount(Blockquote, {
      propsData: {
        heading: 'Lorem ipsum',
      },
      slots: {
        footer: '<p class="footer-slot">test slot citation</p>',
      },
    });

    expect(wrapper.find('.footer-slot').exists()).to.equal(true);
  });
});
