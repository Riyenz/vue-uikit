import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import {
  Modal,
} from '@/UIKit';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const slots = {
  content: '<i id="testContent">test</i>',
};

const modalProperties = {
  slots,
  components: {
    FontAwesomeIcon,
  },
  propsData: {
    title: 'Modal',
  },
};

describe('Modal.vue', () => {
  it('renders props title when passed', () => {
    const wrapper = shallowMount(Modal, modalProperties);

    expect(wrapper.text()).to.includes(modalProperties.propsData.title);
  });

  it('renders content slot when passed', () => {
    const wrapper = shallowMount(Modal, modalProperties);
    const content = wrapper.find('#testContent');
    try {
      expect(content.is('#testContent')).to.equal(true);
    } catch (err) {
      expect.fail('can\'t found slot content');
    }
  });

  it('renders footer slot when passed', () => {
    const wrapper = shallowMount(Modal, {
      ...modalProperties,
      slots: {
        ...slots,
        footer: '<i id="testFooter"></i>',
      },
    });

    const footer = wrapper.find('#testFooter');
    try {
      expect(footer.is('#testFooter')).to.equal(true);
    } catch (err) {
      expect.fail('can\'t found slot footer');
    }
  });

  it('renders subContent slot when passed', () => {
    const wrapper = shallowMount(Modal, {
      ...modalProperties,
      slots: {
        ...slots,
        subContent: '<i id="testSubContent"></i>',
      },
    });

    const subContent = wrapper.find('#testSubContent');
    try {
      expect(subContent.is('#testSubContent')).to.equal(true);
    } catch (err) {
      expect.fail('can\'t found slot subContent');
    }
  });

  it('adds a .show class when show method is called', () => {
    const wrapper = shallowMount(Modal, modalProperties);
    wrapper.vm.show();

    expect(wrapper.classes('show')).to.equal(true);
  });

  it('freezes the body element when modal is shown', () => {
    const wrapper = shallowMount(Modal, modalProperties);
    const body = document.getElementsByTagName('body')[0];
    wrapper.vm.show();

    expect(body.classList.contains('eduk-modal-open')).to.equal(true);
  });

  it('remove .show class when hide method is called', () => {
    const wrapper = shallowMount(Modal, modalProperties);
    wrapper.vm.show();

    wrapper.vm.hide();
    expect(wrapper.classes('show')).to.equal(false);
  });

  it('unfreezes the body element when modal is hidden', () => {
    const wrapper = shallowMount(Modal, modalProperties);
    const body = document.getElementsByTagName('body')[0];
    wrapper.vm.show();

    wrapper.vm.hide();
    expect(body.classList.contains('eduk-modal-open')).to.equal(false);
  });
});
