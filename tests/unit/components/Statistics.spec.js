import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Statistics from '@/UIKit/Statistics/Statistics.component.vue';
import { STATISTICS_CLASS_NAME, STATISTICS_INVERTED_CLASS_NAME } from '@/UIKit/Statistics/Statistics.config';

describe('Statistics.component.vue', () => {
  it(`adds a .${STATISTICS_CLASS_NAME} class on init`, () => {
    const wrapper = shallowMount(Statistics);

    expect(wrapper.find(`.${STATISTICS_CLASS_NAME}`).exists()).to.equal(true);
  });

  it(`adds a .${STATISTICS_INVERTED_CLASS_NAME} class when 'inverted' props is true`, () => {
    const wrapper = shallowMount(Statistics, {
      propsData: {
        inverted: true,
      },
    });

    expect(wrapper.classes(STATISTICS_INVERTED_CLASS_NAME)).to.equal(true);
  });
});
