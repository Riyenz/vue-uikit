import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Input from '@/UIKit/Input/Input.component.vue';
import {
  INPUT_CLASS_NAME,
  INPUT_FIELD_CLASS_NAME,
} from '@/UIKit/Input/Input.config';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const inputOptions = {
  components: {
    FontAwesomeIcon,
  },
};

describe('Input.component.vue', () => {
  it(`adds a .${INPUT_CLASS_NAME} class on init`, () => {
    const wrapper = shallowMount(Input);

    expect(wrapper.find(`.${INPUT_CLASS_NAME}`).exists()).to.equal(true);
  });

  it('adds an id', () => {
    const wrapper = shallowMount(Input, {
      propsData: {
        id: 'test',
      },
    });

    expect(wrapper.find(`.${INPUT_FIELD_CLASS_NAME}`).exists()).to.equal(true);
    expect(wrapper.find(`.${INPUT_FIELD_CLASS_NAME}`).attributes('id')).to.equal('test');
  });

  it('adds a placeholder', () => {
    const wrapper = shallowMount(Input, {
      propsData: {
        placeholder: 'test',
      },
    });

    expect(wrapper.find(`.${INPUT_FIELD_CLASS_NAME}`).exists()).to.equal(true);
    expect(wrapper.find(`.${INPUT_FIELD_CLASS_NAME}`).attributes('placeholder')).to.equal('test');
  });

  it('adds an input type', () => {
    const wrapper = shallowMount(Input, {
      propsData: {
        type: 'text',
      },
    });

    expect(wrapper.find(`.${INPUT_FIELD_CLASS_NAME}`).exists()).to.equal(true);
    expect(wrapper.find(`.${INPUT_FIELD_CLASS_NAME}`).attributes('type')).to.equal('text');
  });

  it('renders an icon', () => {
    const wrapper = shallowMount(Input, {
      ...inputOptions,
      propsData: {
        icon: 'search',
      },
    });

    expect(wrapper.find('.fa-icon').exists()).to.equal(true);
  });

  it('renders a form label', () => {
    const wrapper = shallowMount(Input, {
      propsData: {
        label: 'Label',
      },
    });

    expect(wrapper.find('.eduk-input__label').exists()).to.equal(true);
  });

  it('render input with error state feedback', () => {
    const wrapper = shallowMount(Input, {
      ...inputOptions,
      propsData: {
        feedback: 'error',
      },
    });

    expect(wrapper.find(`.${INPUT_CLASS_NAME}--error`).exists()).to.equal(true);
  });

  it('render input with error state feedback message', () => {
    const wrapper = shallowMount(Input, {
      ...inputOptions,
      propsData: {
        feedback: 'error',
        feedbackMsg: 'Some error occured',
      },
    });

    expect(wrapper.find(`.${INPUT_CLASS_NAME}--error`).exists()).to.equal(true);
    expect(wrapper.find(`.${INPUT_CLASS_NAME}__msg`).exists()).to.equal(true);
  });

  it('render input in disabled state', () => {
    const wrapper = shallowMount(Input, {
      propsData: {
        disabled: true,
      },
    });

    expect(wrapper.find(`.${INPUT_FIELD_CLASS_NAME}`).exists()).to.equal(true);
    expect(wrapper.find(`.${INPUT_FIELD_CLASS_NAME}`).attributes('disabled')).to.equal('disabled');
  });

  it('renders a textarea', () => {
    const wrapper = shallowMount(Input, {
      propsData: {
        rows: 3,
      },
    });

    expect(wrapper.find(`textarea.${INPUT_FIELD_CLASS_NAME}`).exists()).to.equal(true);
  });

  it('set field value', () => {
    const wrapper = shallowMount(Input, {
      propsData: {
        value: 'test',
      },
    });

    expect(wrapper.vm.value).to.equal('test');
  });
});
