import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import { Column } from '@/UIKit';

const colClass = 'eduk-col';
const offClass = 'eduk-offset';
const nColumns = 6;
const colSizes = ['sm', 'md', 'lg', 'xl'];

const defaultSlot = document.createElement('i');
defaultSlot.id = 'testDefault';

describe('Column.vue', () => {
  it('renders default slot when passed', () => {
    const wrapper = shallowMount(Column, {
      slots: {
        default: defaultSlot.outerHTML,
      },
    });

    try {
      expect(wrapper.find(`#${defaultSlot.id}`).is(`#${defaultSlot.id}`)).to.equal(true);
    } catch (err) {
      expect.fail('can\'t found slot default');
    }
  });

  it(`adds .${colClass} class if no props cols provided`, () => {
    const wrapper = shallowMount(Column);
    expect(wrapper.classes(colClass)).to.equal(true);
  });

  it(`adds .${colClass}-{nColumns} class if props cols provided`, () => {
    const wrapper = shallowMount(Column, {
      propsData: {
        cols: nColumns,
      },
    });
    expect(wrapper.classes(`${colClass}-${nColumns}`)).to.equal(true);
  });

  it(`adds .${colClass}-{size}-{nColumns} class if props cols size provided`, () => {
    const wrapper = shallowMount(Column, {
      propsData: {
        colssm: nColumns,
        colsmd: nColumns,
        colslg: nColumns,
        colsxl: nColumns,
      },
    });

    colSizes.forEach((size) => {
      expect(
        wrapper.classes(`${colClass}-${size}-${nColumns}`),
        `col size '${size}' class wasn't added on the Column Component`,
      ).to.equal(true);
    });
  });

  it(`adds .${offClass}-{nColumns} class if props offset provided`, () => {
    const wrapper = shallowMount(Column, {
      propsData: {
        offset: nColumns,
      },
    });
    expect(wrapper.classes(`${offClass}-${nColumns}`)).to.equal(true);
  });

  it(`adds .${offClass}-{size}-{nColumns} class if props cols size provided`, () => {
    const wrapper = shallowMount(Column, {
      propsData: {
        offsetsm: nColumns,
        offsetmd: nColumns,
        offsetlg: nColumns,
        offsetxl: nColumns,
      },
    });

    colSizes.forEach((size) => {
      expect(
        wrapper.classes(`${offClass}-${size}-${nColumns}`),
        `offset size '${size}' class wasn't added on the Column Component`,
      ).to.equal(true);
    });
  });
});
