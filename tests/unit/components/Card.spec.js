import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Card from '@/UIKit/Card/Card.component.vue';
import {
  CARD_CLASS_NAME,
  CARD_BLOCK_CLASS_NAME,
  CARD_TEXT_INVERT_CLASS_NAME,
  CARD_HORIZONTAL_CLASS_NAME,
  CARD_HORIZONTAL_INVERT_CLASS_NAME,
  CARD_ELEVATED_CLASS_NAME,
  CARD_BORDERED_CLASS_NAME,
  CARD_HEADER_CLASS_NAME,
  CARD_HEADER_PADDED_CLASS_NAME,
  CARD_CONTENT_CLASS_NAME,
  CARD_CONTENT_PADDED_CLASS_NAME,
  CARD_ACTIONS_CLASS_NAME,
  CARD_ACTIONS_BASELINE_CLASS_NAME,
  CARD_ACTION_CLASS_NAME,
} from '@/UIKit/Card/Card.config';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const cardOptions = {
  components: {
    FontAwesomeIcon,
  },
};

describe('Card.component.vue', () => {
  it(`adds a .${CARD_CLASS_NAME} class on init`, () => {
    const wrapper = shallowMount(Card, { ...cardOptions });

    expect(wrapper.find(`.${CARD_CLASS_NAME}`).exists()).to.equal(true);
  });

  it(`adds a .${CARD_BLOCK_CLASS_NAME} class when block is true`, () => {
    const wrapper = shallowMount(Card, {
      ...cardOptions,
      propsData: {
        block: true,
      },
    });

    expect(wrapper.find(`.${CARD_BLOCK_CLASS_NAME}`).exists()).to.equal(true);
  });

  it(`adds a .${CARD_TEXT_INVERT_CLASS_NAME} class when bgImage is passed and added as background-image`, () => {
    const wrapper = shallowMount(Card, {
      ...cardOptions,
      propsData: {
        bgImage: 'https://loremflickr.com/cache/resized/7818_33550913958_0e15906500_320_240_nofilter.jpg',
      },
    });

    expect(wrapper.element.style.backgroundImage).not.equal('none');
    expect(wrapper.find(`.${CARD_TEXT_INVERT_CLASS_NAME}`).exists()).to.equal(true);
  });

  it(`adds a .${CARD_ELEVATED_CLASS_NAME} class when elevated is true`, () => {
    const wrapper = shallowMount(Card, {
      ...cardOptions,
      propsData: {
        elevated: true,
      },
    });

    expect(wrapper.find(`.${CARD_ELEVATED_CLASS_NAME}`).exists()).to.equal(true);
  });

  it(`adds a .${CARD_BORDERED_CLASS_NAME} class when bordered is true`, () => {
    const wrapper = shallowMount(Card, {
      ...cardOptions,
      propsData: {
        bordered: true,
      },
    });

    expect(wrapper.find(`.${CARD_BORDERED_CLASS_NAME}`).exists()).to.equal(true);
  });

  it(`adds a .${CARD_HORIZONTAL_CLASS_NAME} class when horizontal orientation is true`, () => {
    const wrapper = shallowMount(Card, {
      ...cardOptions,
      propsData: {
        horizontal: true,
      },
    });

    expect(wrapper.find(`.${CARD_HORIZONTAL_CLASS_NAME}`).exists()).to.equal(true);
  });

  it(`adds a .${CARD_HORIZONTAL_INVERT_CLASS_NAME} class when horizontalInvert orientation is true`, () => {
    const wrapper = shallowMount(Card, {
      ...cardOptions,
      propsData: {
        horizontal: true,
        horizontalInvert: true,
      },
    });

    expect(wrapper.find(`.${CARD_HORIZONTAL_INVERT_CLASS_NAME}`).exists()).to.equal(true);
  });

  it('add elements to header slot', () => {
    const wrapper = shallowMount(Card, {
      ...cardOptions,
      slots: {
        header: '<div>test</div>',
      },
    });

    expect(wrapper.find(`.${CARD_HEADER_CLASS_NAME}`).exists()).to.equal(true);
  });

  it('add elements to content slot', () => {
    const wrapper = shallowMount(Card, {
      ...cardOptions,
      slots: {
        content: '<div>test</div>',
      },
    });

    expect(wrapper.find(`.${CARD_CONTENT_CLASS_NAME}`).exists()).to.equal(true);
  });

  it('add featured image', () => {
    const wrapper = shallowMount(Card, {
      ...cardOptions,
      propsData: {
        featuredImg: '//via.placeholder.com/300x180',
      },
    });

    expect(wrapper.find('.eduk-card__image').exists()).to.equal(true);
  });

  it('add card actions', () => {
    const wrapper = shallowMount(Card, {
      ...cardOptions,
      propsData: {
        actions: true,
      },
      slots: {
        content: '<div>test</div>',
      },
    });

    expect(wrapper.find(`.${CARD_ACTIONS_CLASS_NAME}`).exists()).to.equal(true);
  });

  it('add card actions baseline', () => {
    const wrapper = shallowMount(Card, {
      ...cardOptions,
      propsData: {
        actions: true,
        actionsBaseline: true,
      },
      slots: {
        content: '<div>test</div>',
      },
    });

    expect(wrapper.find(`.${CARD_ACTIONS_CLASS_NAME}`).exists()).to.equal(true);
    expect(wrapper.find(`.${CARD_ACTIONS_BASELINE_CLASS_NAME}`).exists()).to.equal(true);
  });

  it('remove header and content default padding', () => {
    const wrapper = shallowMount(Card, {
      ...cardOptions,
      propsData: {
        noPadding: true,
      },
      slots: {
        content: '<div>test</div>',
        header: '<div>test header</div>',
      },
    });

    expect(wrapper.find(`.${CARD_CONTENT_PADDED_CLASS_NAME}`).exists()).to.equal(false);
    expect(wrapper.find(`.${CARD_HEADER_PADDED_CLASS_NAME}`).exists()).to.equal(false);
  });

  it('remove header and content default padding', () => {
    const wrapper = shallowMount(Card, {
      ...cardOptions,
      propsData: {
        noPadding: true,
      },
      slots: {
        content: '<div>test</div>',
        header: '<div>test header</div>',
      },
    });

    expect(wrapper.find(`.${CARD_CONTENT_PADDED_CLASS_NAME}`).exists()).to.equal(false);
    expect(wrapper.find(`.${CARD_HEADER_PADDED_CLASS_NAME}`).exists()).to.equal(false);
  });

  it('card actions like triggered', () => {
    const wrapper = shallowMount(Card, {
      ...cardOptions,
      propsData: {
        actions: true,
      },
      slots: {
        content: '<div>test</div>',
      },
    });

    wrapper.find(`.${CARD_ACTION_CLASS_NAME}--like`).trigger('click');

    expect(wrapper.find(`.${CARD_ACTION_CLASS_NAME}--like`).exists()).to.equal(true);
    expect(wrapper.emitted().like.length).to.equal(1);
  });

  it('card actions share triggered', () => {
    const wrapper = shallowMount(Card, {
      ...cardOptions,
      propsData: {
        actions: true,
      },
      slots: {
        content: '<div>test</div>',
      },
    });

    wrapper.find(`.${CARD_ACTION_CLASS_NAME}--share`).trigger('click');

    expect(wrapper.find(`.${CARD_ACTION_CLASS_NAME}--share`).exists()).to.equal(true);
    expect(wrapper.emitted().share.length).to.equal(1);
  });
});
