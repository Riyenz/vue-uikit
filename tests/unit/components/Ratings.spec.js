import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Ratings from '@/UIKit/Ratings/Ratings.component.vue';
import { RATINGS_CLASS_NAME } from '@/UIKit/Ratings/Ratings.config';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const ratingOptions = {
  components: {
    FontAwesomeIcon,
  },
};

describe('Ratings.component.vue', () => {
  it(`adds a .${RATINGS_CLASS_NAME} class on init`, () => {
    const wrapper = shallowMount(Ratings, {
      ...ratingOptions,
    });

    expect(wrapper.find(`.${RATINGS_CLASS_NAME}`).exists()).to.equal(true);
  });

  it(`adds a .${RATINGS_CLASS_NAME}--sm class size is equal to sm`, () => {
    const wrapper = shallowMount(Ratings, {
      ...ratingOptions,
      propsData: {
        size: 'sm',
      },
    });

    expect(wrapper.find(`.${RATINGS_CLASS_NAME}--sm`).exists()).to.equal(true);
  });

  it(`adds a .${RATINGS_CLASS_NAME}--sm class size is equal to lg`, () => {
    const wrapper = shallowMount(Ratings, {
      ...ratingOptions,
      propsData: {
        size: 'lg',
      },
    });

    expect(wrapper.find(`.${RATINGS_CLASS_NAME}--lg`).exists()).to.equal(true);
  });
});
