import { expect } from 'chai';
import { shallowMount, mount } from '@vue/test-utils';
import Select from '@/UIKit/Select/Select.component.vue';
import SelectTest from '@/UIKit/Select/Select.test.vue';
import { SELECT_CLASS_NAME } from '@/UIKit/Select/Select.config';

const options = [
  { id: 1, name: 'One' },
  { id: 2, name: 'Two' },
  { id: 3, name: 'Three' },
];

const optionsWithImage = [
  { id: 1, name: 'One', img: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Two', img: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Three', img: 'https://via.placeholder.com/150' },
];

describe('Select.component.vue', () => {
  it(`adds a .${SELECT_CLASS_NAME} class on init`, () => {
    const wrapper = shallowMount(Select);

    expect(wrapper.find(`.${SELECT_CLASS_NAME}`).exists()).to.equal(true);
  });

  it('add select options', () => {
    const wrapper = shallowMount(Select, {
      propsData: {
        options,
      },
    });

    const inputWrapper = wrapper.find(`.${SELECT_CLASS_NAME}__input-wrapper`);

    inputWrapper.trigger('mousedown');
    inputWrapper.trigger('mouseup');

    expect(wrapper.findAll(`.${SELECT_CLASS_NAME}__option`).length).to.equal(3);
  });

  it('adds a --open class when clicked', () => {
    const wrapper = shallowMount(Select);

    try {
      const inputWrapper = wrapper.find(`.${SELECT_CLASS_NAME}__input-wrapper`);

      inputWrapper.trigger('mousedown');
      inputWrapper.trigger('mouseup');

      expect(wrapper.find(`.${SELECT_CLASS_NAME}--open`).exists()).to.equal(true);
    } catch (err) {
      expect.fail('can\'t find select input wrapper.');
    }
  });

  it('add select placeholder', () => {
    const wrapper = shallowMount(Select, {
      propsData: {
        placeholder: 'Select',
      },
    });

    const placeholder = wrapper.find(`.${SELECT_CLASS_NAME}__input`).attributes('placeholder');

    expect(placeholder).to.equal('Select');
  });

  it('enable multiselect', () => {
    const wrapper = shallowMount(Select, {
      propsData: {
        multiselect: true,
      },
    });

    expect(wrapper.find(`.${SELECT_CLASS_NAME}__input-wrapper--wrap`).exists()).to.equal(true);
  });

  it('add images to select options', () => {
    const wrapper = shallowMount(Select, {
      propsData: {
        options: optionsWithImage,
        hasImage: true,
      },
    });

    const inputWrapper = wrapper.find(`.${SELECT_CLASS_NAME}__input-wrapper`);

    inputWrapper.trigger('mousedown');
    inputWrapper.trigger('mouseup');

    expect(wrapper.find(`.${SELECT_CLASS_NAME}__option--dense`).exists()).to.equal(true);
  });

  it('add change handler for single selection', () => {
    const wrapper = mount(SelectTest);

    const inputWrapper = wrapper.find(`#normal .${SELECT_CLASS_NAME}__input-wrapper`);

    inputWrapper.trigger('mousedown');
    inputWrapper.trigger('mouseup');

    wrapper.find(`#normal .${SELECT_CLASS_NAME}__options a`).trigger('mousedown');

    expect(wrapper.vm.selectValue).to.equal(1);
  });

  it('add change handler for multiple selection', () => {
    const wrapper = mount(SelectTest);

    const inputWrapper = wrapper.find(`#multiple .${SELECT_CLASS_NAME}__input-wrapper`);

    inputWrapper.trigger('mousedown');
    inputWrapper.trigger('mouseup');

    wrapper.findAll(`#multiple .${SELECT_CLASS_NAME}__options a`).trigger('mousedown');

    expect(wrapper.vm.selectValuesLength).to.equal(3);
  });
});
