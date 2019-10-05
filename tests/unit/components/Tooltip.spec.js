import { expect } from 'chai';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Tooltip from '@/UIKit/Tooltip/Tooltip.lib';
import TooltipSpec from '@/UIKit/Tooltip/Tooltip.spec.vue';

describe('Tooltip.component.vue', () => {
  it('hover tooltip', () => {
    const localVue = createLocalVue();
    localVue.use(Tooltip);

    const wrapper = shallowMount(TooltipSpec, {
      localVue,
      attachToDocument: true,
    });

    wrapper.vm.hover();

    expect(wrapper.vm.hasTooltip).to.equal(true);
  });

  it('fixed tooltip', (done) => {
    const localVue = createLocalVue();
    localVue.use(Tooltip);

    const wrapper = shallowMount(TooltipSpec, {
      localVue,
      attachToDocument: true,
    });

    setTimeout(() => {
      wrapper.vm.fixed();
      expect(wrapper.vm.hasTooltip).to.equal(true);
      done();
    }, 600);
  });

  it('click tooltip', () => {
    const localVue = createLocalVue();
    localVue.use(Tooltip);

    const wrapper = shallowMount(TooltipSpec, {
      localVue,
      attachToDocument: true,
    });

    wrapper.vm.click();

    expect(wrapper.vm.hasTooltip).to.equal(true);
  });

  it('tooltip placements', () => {
    const localVue = createLocalVue();
    localVue.use(Tooltip);

    const wrapper = shallowMount(TooltipSpec, {
      localVue,
      attachToDocument: true,
    });

    wrapper.vm.top();
    wrapper.vm.right();
    wrapper.vm.bottom();
    wrapper.vm.left();

    expect(wrapper.vm.hasTooltipTop).to.equal(true);
    expect(wrapper.vm.hasTooltipRight).to.equal(true);
    expect(wrapper.vm.hasTooltipBottom).to.equal(true);
    expect(wrapper.vm.hasTooltipLeft).to.equal(true);
  });
});
