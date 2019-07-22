<template>
  <div :class="paginationClass">
    <ul class="eduk-pagination__page-list">
      <li
        :id="PAGINATION_PREV_ID"
        :class="{
          [PAGE_ITEM_CLASS_NAME]: true,
          [DISABLED_PAGE_ITEM_CLASS_NAME]: dataCurPage <= 1,
        }" @click="dataCurPage -= 1">
        <template v-if="!contained">
          Prev
        </template>
        <template v-else>
          <font-awesome-icon icon="chevron-left"/>
        </template>
      </li>
      <li
        v-for="(page, index) in displayedPages"
        :key="index"
        :class="{
          [PAGE_ITEM_CLASS_NAME]: !isNaN(page),
          [PAGE_ITEM_ACTIVE_CLASS_NAME]: !isNaN(page) && page === dataCurPage,
          [DOTS_CLASS_NAME]: isNaN(page),
        }"
        @click="dataCurPage = page">
        {{ page }}
      </li>
      <li
        :id="PAGINATION_NEXT_ID"
        :class="{
          [PAGE_ITEM_CLASS_NAME]: true,
          [DISABLED_PAGE_ITEM_CLASS_NAME]: dataCurPage >= pageCount,
        }" @click="dataCurPage += 1">
        <template v-if="!contained">
          Next
        </template>
        <template v-else>
          <font-awesome-icon icon="chevron-right"/>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  DOTS_CLASS_NAME,
  PAGINATION_CLASS_NAME,
  CONTAINED_CLASS_NAME,
  PAGE_ITEM_CLASS_NAME,
  PAGE_ITEM_ACTIVE_CLASS_NAME,
  DEFAULT_MAX_PAGE,
  DEFAULT_PAGE_SIZE,
  DISABLED_PAGE_ITEM_CLASS_NAME,
  PAGINATION_NEXT_ID,
  PAGINATION_PREV_ID,
} from './Pagination.config';

import PaginationHelper from './Pagination.helper';

export default {
  name: 'Pagination',
  props: {
    maxPages: {
      type: Number,
      default: DEFAULT_MAX_PAGE,
    },
    pageSize: {
      type: Number,
      default: DEFAULT_PAGE_SIZE,
    },
    pageCount: {
      type: Number,
    },
    contained: {
      type: Boolean,
      default: false,
    },
    curPage: {
      type: Number,
    },
  },
  data() {
    return {
      PAGE_ITEM_CLASS_NAME,
      PAGE_ITEM_ACTIVE_CLASS_NAME,
      DOTS_CLASS_NAME,
      DISABLED_PAGE_ITEM_CLASS_NAME,
      PAGINATION_NEXT_ID,
      PAGINATION_PREV_ID,
      displayedPages: [],
      dataCurPage: this.curPage || 1,
    };
  },
  computed: {
    paginationClass() {
      return {
        [PAGINATION_CLASS_NAME]: true,
        [CONTAINED_CLASS_NAME]: this.contained,
      };
    },
  },
  watch: {
    dataCurPage: {
      immediate: true,
      handler(pageNum) {
        if (Number.isNaN(+pageNum)) return;
        if (pageNum < 1) return;
        if (pageNum > this.pageCount) return;

        const pagination = PaginationHelper({
          curPage: pageNum,
          pageSize: this.pageSize,
          maxPages: this.maxPages,
          pageCount: this.pageCount,
        });

        this.displayedPages = pagination.pages;
        this.$emit('pageChanged', pagination);
      },
    },
    curPage: {
      handler(pageNum) {
        if (Number.isNaN(+pageNum)) return;
        if (pageNum < 1) return;
        if (pageNum > this.pageCount) return;

        this.dataCurPage = pageNum;
      },
    },
  },
};
</script>
