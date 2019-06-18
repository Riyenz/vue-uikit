import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Alert from '@/UIKit/Alert/Alert.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const slots = {
  default: '<i id="testDefault">test</i>',
};

const AlertProperties = {
  slots,
  components: {
    FontAwesomeIcon,
  },
  propsData: {
    title: 'Alert',
  },
};

describe('Alert.vue', () => {
  it('renders props title when passed', () => {
    const wrapper = shallowMount(Alert, AlertProperties);

    expect(wrapper.text()).to.includes(AlertProperties.propsData.title);
  });

  it('renders default slot when passed', () => {
    const wrapper = shallowMount(Alert, AlertProperties);
    const content = wrapper.find('#testDefault');
    try {
      expect(content.is('#testDefault')).to.equal(true);
    } catch (err) {
      expect.fail('can\'t found slot content');
    }
  });

  it('adds a .show class when show method is called', () => {
    const wrapper = shallowMount(Alert, AlertProperties);
    wrapper.vm.show();

    expect(wrapper.classes('show')).to.equal(true);
  });

  it('remove .show class when hide method is called', () => {
    const wrapper = shallowMount(Alert, AlertProperties);
    wrapper.vm.show();

    wrapper.vm.hide();
    expect(wrapper.classes('show')).to.equal(false);
  });
});
