import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Badge from '@/UIKit/Badge/Badge.component.vue';
import { BADGE_CLASS_NAME } from '@/UIKit/Badge/Badge.config';

describe('Badge.component.vue', () => {
  it(`adds a .${BADGE_CLASS_NAME} class on init`, () => {
    const wrapper = shallowMount(Badge);

    expect(wrapper.find(`.${BADGE_CLASS_NAME}`).exists()).to.equal(true);
  });
});
