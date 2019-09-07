import { expect } from 'chai';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Snackbar from '@/UIKit/Snackbar/Snackbar.lib';
import SnackbarSpec from '@/UIKit/Snackbar/Snackbar.spec.vue';

it('adds a $snackbar method to the Vue prototype', () => {
  const localVue = createLocalVue();

  localVue.use(Snackbar);
  expect(typeof localVue.prototype.$snackbar).to.equal('function');
});

it('test render $snackbar', () => {
  const localVue = createLocalVue();
  localVue.use(Snackbar);

  const wrapper = shallowMount(SnackbarSpec, {
    localVue,
    attachToDocument: true,
  });

  wrapper.vm.defaultSnackbar();

  expect(typeof localVue.prototype.$snackbar).to.equal('function');
  expect(wrapper.vm.snackbarRendered).to.equal(true);

  wrapper.destroy();
});

it('add snackbar content', () => {
  const localVue = createLocalVue();
  localVue.use(Snackbar);

  const wrapper = shallowMount(SnackbarSpec, {
    localVue,
    attachToDocument: true,
  });

  wrapper.vm.contentSnackbar();

  expect(typeof localVue.prototype.$snackbar).to.equal('function');
  expect(wrapper.vm.snackbarHasText).to.equal(true);

  wrapper.destroy();
});

it('check snackbar id property', () => {
  const localVue = createLocalVue();
  localVue.use(Snackbar);

  const wrapper = shallowMount(SnackbarSpec, {
    localVue,
    attachToDocument: true,
  });

  wrapper.vm.idSnackbar();

  expect(typeof localVue.prototype.$snackbar).to.equal('function');
  expect(wrapper.vm.snackbarHasId).to.equal(true);

  wrapper.destroy();
});

it('check snackbar bottom placement', () => {
  const localVue = createLocalVue();
  localVue.use(Snackbar);

  const wrapper = shallowMount(SnackbarSpec, {
    localVue,
    attachToDocument: true,
  });

  wrapper.vm.placementSnackbar();

  expect(typeof localVue.prototype.$snackbar).to.equal('function');
  expect(wrapper.vm.snackbarHasPlacement).to.equal(true);

  wrapper.destroy();
});

it('adds snackbar duration', () => {
  const localVue = createLocalVue();
  localVue.use(Snackbar);

  const wrapper = shallowMount(SnackbarSpec, {
    localVue,
    attachToDocument: true,
  });

  wrapper.vm.durationSnackbar();

  expect(typeof localVue.prototype.$snackbar).to.equal('function');
  expect(wrapper.vm.snackbarHasDuration).to.equal(true);

  wrapper.destroy();
});

it('set snackbar action variant', () => {
  const localVue = createLocalVue();
  localVue.use(Snackbar);

  const wrapper = shallowMount(SnackbarSpec, {
    localVue,
    attachToDocument: true,
  });

  wrapper.vm.variantSnackbar();

  expect(typeof localVue.prototype.$snackbar).to.equal('function');
  expect(wrapper.vm.snackbarHasVariant).to.equal(true);

  wrapper.destroy();
});

it('add snackbar callback function', () => {
  const localVue = createLocalVue();
  localVue.use(Snackbar);

  const wrapper = shallowMount(SnackbarSpec, {
    localVue,
    attachToDocument: true,
  });

  wrapper.vm.actionSnackbar();

  expect(typeof localVue.prototype.$snackbar).to.equal('function');
  expect(wrapper.vm.snackbarActionTriggered).to.equal(true);

  wrapper.destroy();
});
