import { expect } from 'chai';
import { shallowMount, mount } from '@vue/test-utils';
import Datepicker from '@/UIKit/Datepicker/Datepicker.component.vue';
import Calendar from '@/UIKit/Datepicker/Calendar.component.vue';
import RangeInput from '@/UIKit/Datepicker/RangeInput.component.vue';
import {
  DATEPICKER_CLASS_NAME,
  DATEPICKER_BLOCK_CLASS_NAME,
  DATEPICKER_CALENDAR_WRAPPER_CLASS_NAME,
  DATEPICKER_DAY_ACTIVE_CLASS_NAME,
} from '@/UIKit/Datepicker/Datepicker.config';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const Properties = {
  components: {
    FontAwesomeIcon,
  },
};

describe('Datepicker.component.vue', () => {
  it(`adds a .${DATEPICKER_CLASS_NAME} class on init`, () => {
    const wrapper = shallowMount(Datepicker, Properties);

    expect(wrapper.find(`.${DATEPICKER_CLASS_NAME}`).exists()).to.equal(true);
  });

  it('create datepicker elements', () => {
    const wrapper = shallowMount(Datepicker, Properties);

    expect(wrapper.find(`.${DATEPICKER_CALENDAR_WRAPPER_CLASS_NAME}`).exists()).to.equal(true);
    expect(wrapper.find('.eduk-input').exists()).to.equal(true);
    expect(wrapper.find(Calendar).exists()).to.equal(true);
  });

  it('create date rangepicker', () => {
    const wrapper = shallowMount(Datepicker, {
      ...Properties,
      propsData: {
        rangepicker: true,
      },
    });

    expect(wrapper.find(RangeInput).exists()).to.equal(true);
  });

  it(`adds a .${DATEPICKER_BLOCK_CLASS_NAME} class for block datepicker`, () => {
    const wrapper = shallowMount(Datepicker, {
      ...Properties,
      propsData: {
        block: true,
      },
    });

    expect(wrapper.find(`.${DATEPICKER_BLOCK_CLASS_NAME}`).exists()).to.equal(true);
  });

  it('set single datepicker default value', () => {
    const date = new Date();
    const wrapper = shallowMount(Datepicker, {
      ...Properties,
      propsData: {
        value: date,
      },
    });

    const input = wrapper.find('.eduk-input__field').element;

    expect(input.value).to.equal(`${(`0${(date.getMonth() + 1)}`).slice(-2)}/${(`0${date.getDate()}`).slice(-2)}/${date.getFullYear()}`);
  });

  it('set range datepicker default value', () => {
    const from = new Date(2019, 9, 10);
    const to = new Date(2019, 9, 15);
    const wrapper = mount(Datepicker, {
      ...Properties,
      propsData: {
        rangepicker: true,
        value: { from, to },
      },
      stubs: {
        FontAwesomeIcon: true,
      },
    });

    const inputFrom = wrapper.find('.eduk-input--from .eduk-input__field').element;
    const inputTo = wrapper.find('.eduk-input--to .eduk-input__field').element;

    expect(wrapper.find(RangeInput).exists()).to.equal(true);
    expect(inputFrom.value).to.equal(`${(`0${(from.getMonth() + 1)}`).slice(-2)}/${(`0${from.getDate()}`).slice(-2)}/${from.getFullYear()}`);
    expect(inputTo.value).to.equal(`${(`0${(to.getMonth() + 1)}`).slice(-2)}/${(`0${to.getDate()}`).slice(-2)}/${to.getFullYear()}`);
  });

  it('datepicker change event', () => {
    const today = new Date();
    const wrapper = mount(Datepicker, {
      ...Properties,
      stubs: {
        FontAwesomeIcon: true,
      },
    });

    const dateItem = wrapper.find(`.${DATEPICKER_DAY_ACTIVE_CLASS_NAME}`);

    expect(dateItem.exists()).to.equal(true);
    expect(dateItem.text()).to.equal(`${today.getDate()}`);

    dateItem.trigger('click');

    expect(wrapper.vm.selectedDay.getDate()).to.equal(today.getDate());
    expect(wrapper.vm.selectedDay.getYear()).to.equal(today.getYear());
    expect(wrapper.vm.selectedDay.getMonth()).to.equal(today.getMonth());
    expect(wrapper.emitted().input.length).to.equal(1);
  });
});
