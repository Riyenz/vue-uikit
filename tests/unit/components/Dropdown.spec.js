import { expect } from 'chai';
import { shallowMount, mount } from '@vue/test-utils';
import Dropdown from '@/UIKit/Dropdown/Dropdown.component.vue';
import { DROPDOWN_CLASS_NAME } from '@/UIKit/Dropdown/Dropdown.config';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const options = [
  { id: 1, name: 'One' },
  { id: 2, name: 'Two' },
  { id: 3, name: 'Three' },
];

const dropdownProps = {
  components: {
    FontAwesomeIcon,
  },
};

describe('Dropdown.component.vue', () => {
  it(`adds a .${DROPDOWN_CLASS_NAME} class on init`, () => {
    const wrapper = shallowMount(Dropdown, dropdownProps);

    expect(wrapper.find(`.${DROPDOWN_CLASS_NAME}`).exists()).to.equal(true);
  });

  it('add dropdown title', () => {
    const wrapper = shallowMount(Dropdown, {
      ...dropdownProps,
      propsData: {
        options,
        title: 'Dropdown',
      },
    });

    expect(wrapper.find(`.${DROPDOWN_CLASS_NAME}__title`).text()).to.equal('Dropdown');
  });

  it('align dropdown options center', () => {
    const wrapper = shallowMount(Dropdown, {
      ...dropdownProps,
      propsData: {
        options,
        title: 'Dropdown',
        placement: 'center',
      },
    });

    expect(wrapper.find(`.${DROPDOWN_CLASS_NAME}--center`).exists()).to.equal(true);
  });

  it('align dropdown options right', () => {
    const wrapper = shallowMount(Dropdown, {
      ...dropdownProps,
      propsData: {
        options,
        title: 'Dropdown',
        placement: 'right',
      },
    });

    expect(wrapper.find(`.${DROPDOWN_CLASS_NAME}--right`).exists()).to.equal(true);
  });

  it('adds a --open class when clicked', () => {
    const wrapper = mount(Dropdown, {
      ...dropdownProps,
      propsData: {
        options,
      },
    });

    wrapper.find(`.${DROPDOWN_CLASS_NAME}__trigger`).trigger('click');

    expect(wrapper.find(`.${DROPDOWN_CLASS_NAME}--open`).exists()).to.equal(true);
  });

  it('add dropdown options', () => {
    const wrapper = mount(Dropdown, {
      ...dropdownProps,
      propsData: {
        options,
      },
    });

    wrapper.find(`.${DROPDOWN_CLASS_NAME}__trigger`).trigger('click');

    expect(wrapper.findAll(`.${DROPDOWN_CLASS_NAME}__option`).length).to.equal(3);
  });

  it('add dropdown search field', () => {
    const wrapper = shallowMount(Dropdown, {
      ...dropdownProps,
      propsData: {
        options,
        searchable: true,
      },
    });

    expect(wrapper.find(`.${DROPDOWN_CLASS_NAME}__search`).exists()).to.equal(true);
  });

  it('add dropdown icon', () => {
    const wrapper = shallowMount(Dropdown, {
      ...dropdownProps,
      propsData: {
        options,
        icon: 'times',
      },
    });

    expect(wrapper.find(`.${DROPDOWN_CLASS_NAME}__icon`).exists()).to.equal(true);
  });

  it('add dropdown icon toggle', () => {
    const wrapper = shallowMount(Dropdown, {
      ...dropdownProps,
      propsData: {
        options,
        icon: 'times',
        iconTrigger: true,
      },
    });

    expect(wrapper.find(`.${DROPDOWN_CLASS_NAME}__trigger .${DROPDOWN_CLASS_NAME}__icon`).exists()).to.equal(true);
  });

  it('add dropdown icon right placement', () => {
    const wrapper = shallowMount(Dropdown, {
      ...dropdownProps,
      propsData: {
        options,
        icon: 'times',
        iconPlacement: 'right',
      },
    });

    expect(wrapper.find(`.${DROPDOWN_CLASS_NAME}__icon--right`).exists()).to.equal(true);
  });

  it('add dropdown icon toggle right placement', () => {
    const wrapper = shallowMount(Dropdown, {
      ...dropdownProps,
      propsData: {
        options,
        icon: 'times',
        iconTrigger: true,
        iconPlacement: 'right',
      },
    });

    expect(wrapper.find(`.${DROPDOWN_CLASS_NAME}__group--right`).exists()).to.equal(true);
  });

  it('add dropdown option click event', () => {
    const wrapper = mount(Dropdown, {
      ...dropdownProps,
      propsData: {
        options,
        title: 'Dropdown',
      },
    });

    wrapper.find(`.${DROPDOWN_CLASS_NAME}__trigger`).trigger('click');

    wrapper.find(`.${DROPDOWN_CLASS_NAME}__option:nth-child(2) a`).trigger('click');

    expect(wrapper.emitted().select.length).to.equal(1);
  });

  it('add dropdown icon toggle cta click event', () => {
    const wrapper = mount(Dropdown, {
      ...dropdownProps,
      propsData: {
        options,
        icon: 'times',
        iconTrigger: true,
        iconPlacement: 'right',
      },
    });

    wrapper.find(`.${DROPDOWN_CLASS_NAME}__cta`).trigger('click');

    expect(wrapper.emitted().action.length).to.equal(1);
  });
});
