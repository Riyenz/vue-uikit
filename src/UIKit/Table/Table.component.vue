<template>
  <div :class="tableClass" ref="">
    <div class="eduk-table__scroll">
      <div class="eduk-table__wrap">
        <table class="eduk-table__table">
          <thead class="eduk-table__thead">
            <tr>
              <th
                v-for="(item, index) in columns"
                :key="index"
                :style="thStyle(item)"
                :class="thClass(item)"
                @click="(ev) => sortColumn(ev, item, index)"
              >
                <span v-if="item.selection" class="eduk-table__checkbox">
                  <input
                    type="checkbox"
                    class="eduk-checkbox eduk-checkbox--small"
                    id="selection"
                    :checked="selectedRows.length === data.length"
                    @change="toggleAll"
                  />
                  <label for="selection"></label>
                </span>
                <span
                  v-else
                  :style="{
                    'justify-content': item.textAlign || 'flex-start'
                  }"
                >
                  <span>{{item.title}}</span>
                  <i v-if="!!item.sorter"></i>
                </span>
              </th>
            </tr>
          </thead>
          <tbody class="eduk-table__tbody">
            <tr
              v-for="(item, itemIndex) in tableData"
              :key="itemIndex"
            >
              <td
                v-for="(column, columnIndex) in columns"
                :key="columnIndex"
                :style="tdStyle(column)"
              >
                <span v-if="column.selection"  class="eduk-table__checkbox">
                  <input
                    type="checkbox"
                    class="eduk-checkbox eduk-checkbox--small"
                    :id="`selection-${itemIndex}`"
                    :checked="selectedRows.includes(item.id)"
                    @change="(ev) => toggleRow(ev, item)"
                  />
                  <label :for="`selection-${itemIndex}`"></label>
                </span>
                <a
                  v-else-if="!!column.action"
                  :class="tdActionClass(column)"
                  :style="{ color: column.action.color }"
                  @click="(ev) => emitAction(ev, column, item)"
                >
                  <font-awesome-icon v-if="column.action.icon" :icon="column.action.icon" />
                  {{column.action.label}}
                </a>
                <Dropdown
                  placement="right"
                  v-else-if="!!column.dropdown"
                  :icon="column.dropdown.icon"
                  :options="column.dropdown.options"
                  @select="selectOption"
                />
                <span v-else>{{item[column.key] || '-'}}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <table
          v-if="isMobile"
          class="eduk-table__table eduk-table__table--clone"
        >
          <thead class="eduk-table__thead">
            <tr>
              <th
                v-for="(item, index) in columns"
                :key="index"
                :style="thStyle(item)"
                :class="thClass(item)"
                @click="(ev) => sortColumn(ev, item, index)"
              >
                <span v-if="item.selection" class="eduk-table__checkbox">
                  <input
                    type="checkbox"
                    class="eduk-checkbox eduk-checkbox--small"
                    id="selection-clone"
                    :checked="selectedRows.length === data.length"
                    @change="toggleAll"
                  />
                  <label for="selection-clone"></label>
                </span>
                <span
                  v-else
                  :style="{
                    'justify-content': item.textAlign || 'flex-start'
                  }"
                >
                  <span>{{item.title}}</span>
                  <i v-if="!!item.sorter"></i>
                </span>
              </th>
            </tr>
          </thead>
          <tbody class="eduk-table__tbody">
            <tr
              v-for="(item, itemIndex) in tableData"
              :key="itemIndex"
            >
              <td
                v-for="(column, columnIndex) in columns"
                :key="columnIndex"
                :style="tdStyle(column)"
              >
                <span v-if="column.selection"  class="eduk-table__checkbox">
                  <input
                    type="checkbox"
                    class="eduk-checkbox eduk-checkbox--small"
                    :id="`selection-clone-${itemIndex}`"
                    :checked="selectedRows.includes(item.id)"
                    @change="(ev) => toggleRow(ev, item)"
                  />
                  <label :for="`selection-clone-${itemIndex}`"></label>
                </span>
                <a
                  v-else-if="!!column.action"
                  :class="tdActionClass(column)"
                  :style="{ color: column.action.color }"
                  @click="(ev) => emitAction(ev, column, item)"
                >
                  <font-awesome-icon v-if="column.action.icon" :icon="column.action.icon" />
                  {{column.action.label}}
                </a>
                <Dropdown
                  placement="right"
                  v-else-if="!!column.dropdown"
                  :icon="column.dropdown.icon"
                  :options="column.dropdown.options"
                  @select="selectOption"
                />
                <span v-else>{{item[column.key] || '-'}}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-if="pageLength > 1" :class="paginationClass">
      <Pagination
        :pageCount="pageLength"
        @pageChanged="pageChanged"
      />
    </div>
  </div>
</template>

<script>
import Pagination from '@/UIKit/Pagination/Pagination.component.vue';
import Dropdown from '@/UIKit/Dropdown/Dropdown.component.vue';

import {
  TABLE_CLASS_NAME,
  TABLE_MOBILE_CLASS_NAME,
  TABLE_COMPACT_CLASS_NAME,
  TABLE_BORDERED_CLASS_NAME,
  TABLE_STRIPED_CLASS_NAME,
  TABLE_ELEVATED_CLASS_NAME,
  TABLE_SINGLE_CLASS_NAME,
  TABLE_FIXED_CLASS_NAME,
  TABLE_STACKABLE_CLASS_NAME,
  TABLE_HEAD_SORTABLE_CLASS_NAME,
  TABLE_HEAD_SORTABLE_ACTIVE_CLASS_NAME,
  TABLE_HEAD_SORTABLE_ASC_CLASS_NAME,
  TABLE_ACTION_CLASS_NAME,
  TABLE_PAGINATION_CLASS_NAME,
  TABLE_PAGINATION_MOBILE_CLASS_NAME,
} from './Table.config';

export default {
  name: 'Table',
  props: {
    columns: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
    fixed: {
      type: Boolean,
      default: false,
    },
    compact: {
      type: Boolean,
      default: false,
    },
    bordered: {
      type: Boolean,
      default: false,
    },
    striped: {
      type: Boolean,
      default: false,
    },
    elevated: {
      type: Boolean,
      default: false,
    },
    maxRows: {
      type: Number,
      default: 15,
    },
    singleLine: {
      type: Boolean,
      default: false,
    },
    stackable: {
      type: Boolean,
      default: false,
    },
    demoMobile: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Pagination,
    Dropdown,
  },
  data() {
    return {
      page: 1,
      pageLength: 1,
      tableData: [],
      sortedColumn: {},
      selectedRows: [],
      isMobile: false,
    };
  },
  beforeMount() {
    this.pageLength = Math.round(this.data.length / this.maxRows);
    this.tableData = this.data.slice(0, this.maxRows);
  },
  mounted() {
    this.resizeWindow();
    window.addEventListener('resize', this.resizeWindow);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeWindow);
  },
  computed: {
    tableClass() {
      return {
        [TABLE_CLASS_NAME]: true,
        [TABLE_MOBILE_CLASS_NAME]: this.isMobile,
        [TABLE_COMPACT_CLASS_NAME]: this.compact,
        [TABLE_BORDERED_CLASS_NAME]: this.bordered,
        [TABLE_STRIPED_CLASS_NAME]: this.striped,
        [TABLE_ELEVATED_CLASS_NAME]: this.elevated,
        [TABLE_SINGLE_CLASS_NAME]: this.singleLine,
        [TABLE_FIXED_CLASS_NAME]: this.fixed,
        [TABLE_STACKABLE_CLASS_NAME]: this.stackable,
      };
    },
    paginationClass() {
      return {
        [TABLE_PAGINATION_CLASS_NAME]: true,
        [TABLE_PAGINATION_MOBILE_CLASS_NAME]: this.isMobile,
      };
    },
  },
  methods: {
    resizeWindow() {
      if (window.innerWidth < 500 || this.demoMobile) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
    tdActionClass(column) {
      return {
        [TABLE_ACTION_CLASS_NAME]: true,
        [`${TABLE_ACTION_CLASS_NAME}--${column.action.event}`]: true,
      };
    },
    thClass(column) {
      return {
        [TABLE_HEAD_SORTABLE_CLASS_NAME]: !!column.sorter,
        [TABLE_HEAD_SORTABLE_ACTIVE_CLASS_NAME]: this.sortedColumn.key === column.key,
        [TABLE_HEAD_SORTABLE_ASC_CLASS_NAME]: (this.sortedColumn.key === column.key && this.sortedColumn.order === 'asc'),
        selection: !!column.selection,
      };
    },
    thStyle(column) {
      return {
        'text-align': column.textAlign || 'left',
        width: column.selection ? '45px' : (column.width || 'none'),
      };
    },
    tdStyle(column) {
      return {
        'text-align': column.textAlign || 'left',
        width: column.selection ? '45px' : (column.width || 'none'),
      };
    },
    sortColumn(ev, column) {
      if (typeof column.sorter === 'function') {
        const newTableData = [...this.data];
        let datasource;

        if (this.sortedColumn.key !== column.key || this.sortedColumn.order !== 'asc') {
          datasource = newTableData.sort((a, b) => {
            return column.sorter(a, b);
          });

          this.sortedColumn = {
            key: column.key,
            order: 'asc',
          };
        } else {
          datasource = newTableData.sort((a, b) => {
            return column.sorter(b, a);
          });

          this.sortedColumn = {
            key: column.key,
            order: 'desc',
          };
        }

        this.filterTableData(datasource);
      }
    },
    toggleAll(ev) {
      if (ev.target.checked) {
        this.selectedRows = this.data.map(d => d.id);
      } else this.selectedRows = [];

      this.$emit('selectedChange', this.selectedRows);
    },
    toggleRow(ev, data) {
      if (this.selectedRows.includes(data.id)) {
        this.selectedRows = this.selectedRows.filter(id => id !== data.id);
      } else this.selectedRows.push(data.id);

      this.$emit('selectedChange', this.selectedRows);
    },
    pageChanged(pagination) {
      this.page = pagination.currentPage;
      this.filterTableData(this.data);
    },
    filterTableData(datasource) {
      const currentRow = (this.page - 1) * this.maxRows;

      this.tableData = datasource.slice(currentRow, (currentRow + this.maxRows));
    },
    emitAction(ev, column, data) {
      this.$emit(column.action.event, data);
    },
    selectOption(option) {
      this.$emit(option.event, option);
    },
  },
};
</script>
