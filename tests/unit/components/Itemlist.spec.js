import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Itemlist from '@/UIKit/Itemlist/Itemlist.component.vue';
import {
  ITEMLIST_CLASS_NAME, HEADER_CLASS_NAME, DESCRIPTION_CLASS_NAME, ACTIONS_CLASS_NAME, STATUS_CLASS_NAME, ACTIONS_FULL_ROW_CLASS_NAME,
} from '@/UIKit/Itemlist/Itemlist.config';
import logoPlaceholder from '@/assets/img/logo-placeholder.png';

describe('Itemlist.component.vue', () => {
  it(`adds a .${ITEMLIST_CLASS_NAME} class on init`, () => {
    const wrapper = shallowMount(Itemlist);

    expect(wrapper.find(`.${ITEMLIST_CLASS_NAME}`).exists()).to.equal(true);
  });

  it('renders header slot when passed', () => {
    const headerId = 'headerId';
    const wrapper = shallowMount(Itemlist, {
      slots: {
        header: `<i id="${headerId}"></i>`,
      },
    });

    const header = wrapper.find(`#${headerId}`);
    try {
      expect(header.is(`#${headerId}`)).to.equal(true);
    } catch (err) {
      expect.fail('can\'t find slot header');
    }
  });

  it('renders description slot when passed', () => {
    const descriptionId = 'descriptionId';
    const wrapper = shallowMount(Itemlist, {
      slots: {
        description: `<i id="${descriptionId}"></i>`,
      },
    });

    const description = wrapper.find(`#${descriptionId}`);
    try {
      expect(description.is(`#${descriptionId}`)).to.equal(true);
    } catch (err) {
      expect.fail('can\'t find slot description');
    }
  });

  it('renders actions slot when passed', () => {
    const actionsId = 'actionsId';
    const wrapper = shallowMount(Itemlist, {
      slots: {
        actions: `<i id="${actionsId}"></i>`,
      },
    });

    const description = wrapper.find(`#${actionsId}`);
    try {
      expect(description.is(`#${actionsId}`)).to.equal(true);
    } catch (err) {
      expect.fail('can\'t find slot actions');
    }
  });

  it('renders status slot when passed', () => {
    const statusId = 'statusId';
    const wrapper = shallowMount(Itemlist, {
      slots: {
        status: `<i id="${statusId}"></i>`,
      },
    });

    const description = wrapper.find(`#${statusId}`);
    try {
      expect(description.is(`#${statusId}`)).to.equal(true);
    } catch (err) {
      expect.fail('can\'t find slot actions');
    }
  });

  it('slots are not rendered when not provided', () => {
    const wrapper = shallowMount(Itemlist);

    expect(wrapper.contains(`.${HEADER_CLASS_NAME}`), 'slot header should not exist').to.equal(false);
    expect(wrapper.contains(`.${DESCRIPTION_CLASS_NAME}`), 'slot description should not exist').to.equal(false);
    expect(wrapper.contains(`.${ACTIONS_CLASS_NAME}`), 'slot actions should not exist').to.equal(false);
    expect(wrapper.contains(`.${STATUS_CLASS_NAME}`), 'slot status should not exist').to.equal(false);
  });

  it(`actions section adds .${ACTIONS_FULL_ROW_CLASS_NAME} modifier class if status is not provided`, () => {
    const wrapper = shallowMount(Itemlist, {
      slots: {
        actions: '<i>Actions</i>',
      },
    });

    expect(
      wrapper.contains(`.${ACTIONS_CLASS_NAME}.${ACTIONS_FULL_ROW_CLASS_NAME}`),
      `class .${ACTIONS_FULL_ROW_CLASS_NAME} is not applied`,
    ).to.equal(true);
  });

  it('renders default image if not provided', () => {
    const wrapper = shallowMount(Itemlist);

    expect(wrapper.html(), 'default image is not rendered').to.contain(logoPlaceholder);
  });

  it('renders prop image if provided', () => {
    const image = 'testImage';
    const wrapper = shallowMount(Itemlist, {
      propsData: {
        image,
      },
    });

    expect(wrapper.html(), 'props image is not rendered').to.contain(image);
  });
});
