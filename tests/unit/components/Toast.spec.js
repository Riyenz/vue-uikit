import { expect } from 'chai';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Toast from '@/UIKit/Toast/Toast.lib';
import ToastSpec from '@/UIKit/Toast/Toast.spec.vue';

it('adds a $toast method to the Vue prototype', () => {
  const localVue = createLocalVue();

  localVue.use(Toast);
  expect(typeof localVue.prototype.$toast).to.equal('function');
});

it('check if toast loads, injected and renders', () => {
  const localVue = createLocalVue();
  localVue.use(Toast);

  const wrapper = shallowMount(ToastSpec, {
    localVue,
    attachToDocument: true,
  });

  wrapper.vm.defaultToast();

  expect(typeof localVue.prototype.$toast).to.equal('function');
  expect(wrapper.vm.toastRendered).to.equal(true);
  expect(wrapper.vm.toastContentMatched).to.equal(true);

  wrapper.destroy();
});

it('check toast id and dismissable property', () => {
  const localVue = createLocalVue();
  localVue.use(Toast);

  const wrapper = shallowMount(ToastSpec, {
    localVue,
    attachToDocument: true,
  });

  wrapper.vm.undismissableToast();

  expect(typeof localVue.prototype.$toast).to.equal('function');
  expect(wrapper.vm.toastHasId).to.equal(true);
  expect(wrapper.vm.toastDismissable).to.equal(false);

  wrapper.destroy();
});

it('check toast bottom placement', () => {
  const localVue = createLocalVue();
  localVue.use(Toast);

  const wrapper = shallowMount(ToastSpec, {
    localVue,
    attachToDocument: true,
  });

  wrapper.vm.placementToast();

  expect(typeof localVue.prototype.$toast).to.equal('function');
  expect(wrapper.vm.toastHasPlacement).to.equal(true);

  wrapper.destroy();
});

it('adds toast duration', () => {
  const localVue = createLocalVue();
  localVue.use(Toast);

  const wrapper = shallowMount(ToastSpec, {
    localVue,
    attachToDocument: true,
  });

  wrapper.vm.durationToast();

  expect(typeof localVue.prototype.$toast).to.equal('function');
  expect(wrapper.vm.toastHasDuration).to.equal(true);

  wrapper.destroy();
});

it('set toast variant', () => {
  const localVue = createLocalVue();
  localVue.use(Toast);

  const wrapper = shallowMount(ToastSpec, {
    localVue,
    attachToDocument: true,
  });

  wrapper.vm.variantToast();

  expect(typeof localVue.prototype.$toast).to.equal('function');
  expect(wrapper.vm.toastHasVariant).to.equal(true);

  wrapper.destroy();
});
