import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import checkbox from '@/UIKit/Checkbox/Checkbox.component.vue';
import { CHECKBOX_CLASS_NAME } from '@/UIKit/Checkbox/Checkbox.config';

describe('Checkbox.component.vue', () => {
  it(`adds a .${CHECKBOX_CLASS_NAME} class on init`, () => {
    const wrapper = shallowMount(checkbox, {
      propsData: {
        id: 'checkbox-1',
      },
    });
    expect(wrapper.find(`.${CHECKBOX_CLASS_NAME}`).exists()).to.equal(true);
  });

  it('adds a disabled attr when disabled prop is passed', () => {
    const wrapper = shallowMount(checkbox, {
      propsData: {
        id: 'checkbox-1',
        disabled: true,
      },
    });
    const inputCheckbox = wrapper.find('input[type=checkbox]').attributes().disabled;
    expect(inputCheckbox).to.equal('disabled');
  });

  it('adds a checked attr when checked prop is passed', () => {
    const wrapper = shallowMount(checkbox, {
      propsData: {
        id: 'checkbox-1',
        checked: true,
      },
    });
    const inputCheckbox = wrapper.find('input[type=checkbox]').element.checked;
    expect(inputCheckbox).to.equal(true);
  });

  it(`adds a ${CHECKBOX_CLASS_NAME}--large when size=large prop is passed`, () => {
    const wrapper = shallowMount(checkbox, {
      propsData: {
        id: 'checkbox-1',
        size: 'large',
      },
    });
    expect(wrapper.find(`.${CHECKBOX_CLASS_NAME}--large`).exists()).to.equal(true);
  });

  it(`adds a ${CHECKBOX_CLASS_NAME}--small when size=small prop is passed`, () => {
    const wrapper = shallowMount(checkbox, {
      propsData: {
        id: 'checkbox-1',
        size: 'small',
      },
    });
    expect(wrapper.find(`.${CHECKBOX_CLASS_NAME}--small`).exists()).to.equal(true);
  });

  it(`adds a ${CHECKBOX_CLASS_NAME}--primary for theme when theme=primary prop is passed`, () => {
    const wrapper = shallowMount(checkbox, {
      propsData: {
        id: 'checkbox-1',
        theme: 'primary',
      },
    });
    expect(wrapper.find(`.${CHECKBOX_CLASS_NAME}--primary`).exists()).to.equal(true);
  });

  it('renders the list of indeterminate when list is passed', () => {
    const wrapper = shallowMount(checkbox, {
      propsData: {
        id: 'checkbox-1',
        type: 'indeterminate',
        list: ['item-1', 'item-2', 'item-3', {
          value: 'item-4',
          checked: true,
        }],
      },
    });
    wrapper.vm.isToggled = true;
    const inputCheckbox = wrapper.findAll('input[type=checkbox]').length;
    expect(inputCheckbox).to.equal(5);
  });

  it(`removes ${CHECKBOX_CLASS_NAME}--indeterminate class when isAllActive is true`, () => {
    const wrapper = shallowMount(checkbox, {
      propsData: {
        id: 'checkbox-1',
      },
    });
    wrapper.vm.isAllActive = true;
    expect(wrapper.find(`.${CHECKBOX_CLASS_NAME}--indeterminate`).exists()).to.equal(false);
  });
});
