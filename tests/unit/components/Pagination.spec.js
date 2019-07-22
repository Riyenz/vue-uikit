import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Pagination from '@/UIKit/Pagination/Pagination.component.vue';
import {
  PAGINATION_CLASS_NAME, CONTAINED_CLASS_NAME, PAGE_ITEM_CLASS_NAME, PAGINATION_NEXT_ID, PAGINATION_PREV_ID,
} from '@/UIKit/Pagination/Pagination.config';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const paginationProps = {
  pageCount: 20,
};

const paginationProperties = {
  propsData: {
    ...paginationProps,
  },
  components: {
    FontAwesomeIcon,
  },
};

describe('Pagination.component.vue', () => {
  it(`adds a .${PAGINATION_CLASS_NAME} class on init`, () => {
    const wrapper = shallowMount(Pagination);

    expect(wrapper.find(`.${PAGINATION_CLASS_NAME}`).exists()).to.equal(true);
  });

  it(`adds '${CONTAINED_CLASS_NAME}' class when props contained is equals true`, () => {
    const wrapper = shallowMount(Pagination, {
      ...paginationProperties,
      propsData: {
        contained: true,
      },
    });

    expect(wrapper.classes(CONTAINED_CLASS_NAME)).to.equal(true);
  });

  it('goes to next page when clicked next', () => {
    const wrapper = shallowMount(Pagination);

    try {
      const nextWrapper = wrapper.find(`#${PAGINATION_NEXT_ID}`);
      const nextPage = wrapper.vm.dataCurPage + 1;

      nextWrapper.trigger('click');

      expect(wrapper.vm.dataCurPage).to.equal(nextPage);
    } catch (err) {
      expect.fail(err);
    }
  });

  it('goes to previous page when clicked previous', () => {
    const wrapper = shallowMount(Pagination);
    wrapper.vm.dataCurPage = 5;

    try {
      const prevWrapper = wrapper.find(`#${PAGINATION_PREV_ID}`);
      const prevPage = wrapper.vm.dataCurPage - 1;

      prevWrapper.trigger('click');

      expect(wrapper.vm.dataCurPage).to.equal(prevPage);
    } catch (err) {
      expect.fail(err);
    }
  });

  it('emit pageChanged when component has been initialize', () => {
    const wrapper = shallowMount(Pagination);

    expect(wrapper.emitted().pageChanged.length).to.equal(1);
  });

  it('emit pageChanged when page has been changed', () => {
    const wrapper = shallowMount(Pagination);
    wrapper.vm.dataCurPage = 5;

    expect(wrapper.emitted().pageChanged.length).to.equal(2);
  });

  it('overrides current page when props curPage is passed', () => {
    const pageNum = 5;
    const wrapper = shallowMount(Pagination, {
      propsData: {
        ...paginationProps,
        curPage: pageNum,
      },
    });

    expect(wrapper.vm.dataCurPage).to.equal(pageNum);
  });

  it('only show defined number of pages when props maxPages is passed', () => {
    const extraItemsCount = 4; // include count of next, prev, first and last page
    const maxPages = 3;
    const wrapper = shallowMount(Pagination, {
      propsData: {
        ...paginationProps,
        maxPages,
      },
    });

    wrapper.vm.dataCurPage += maxPages; // add maxPages to curPage to have an accurate count

    try {
      const pageItemWrapper = wrapper.findAll(`.${PAGE_ITEM_CLASS_NAME}`);

      expect(pageItemWrapper.length).to.equal(maxPages + extraItemsCount);
    } catch (err) {
      expect.fail(err);
    }
  });
});
