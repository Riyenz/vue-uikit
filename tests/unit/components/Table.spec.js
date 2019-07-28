import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Table from '@/UIKit/Table/Table.component.vue';
import {
  TABLE_CLASS_NAME,
  TABLE_COMPACT_CLASS_NAME,
  TABLE_BORDERED_CLASS_NAME,
  TABLE_STRIPED_CLASS_NAME,
  TABLE_ELEVATED_CLASS_NAME,
  TABLE_SINGLE_CLASS_NAME,
  TABLE_FIXED_CLASS_NAME,
  TABLE_STACKABLE_CLASS_NAME,
  TABLE_HEAD_SORTABLE_CLASS_NAME,
  TABLE_ACTION_CLASS_NAME,
  TABLE_PAGINATION_CLASS_NAME,
} from '@/UIKit/Table/Table.config';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const tableOptions = {
  components: {
    FontAwesomeIcon,
  },
};

const COLUMNS = [
  {
    title: 'No.',
    key: 'id',
  },
  {
    title: 'Name',
    key: 'name',
  },
];

const COLUMNS_SELECTION = [
  { selection: true },
  {
    title: 'No.',
    key: 'id',
  },
  {
    title: 'Name',
    key: 'name',
  },
];

const COLUMNS_SORTABLE = [
  {
    title: 'No.',
    key: 'id',
    sorter: (a, b) => {
      return a.id - b.id;
    },
  },
  {
    title: 'Name',
    key: 'name',
  },
];

const COLUMNS_ACTIONS = [
  {
    title: 'No.',
    key: 'id',
    sorter: (a, b) => {
      return a.id - b.id;
    },
  },
  {
    action: {
      label: 'Edit',
      icon: 'edit',
      event: 'edit-row',
      color: '#5c5c5c',
    },
  },
  {
    action: {
      label: 'Delete',
      icon: 'trash',
      event: 'delete-row',
      color: '#f85359',
    },
  },
  {
    dropdown: {
      icon: 'ellipsis-v',
      options: [
        {
          id: 1,
          name: 'Edit row',
          icon: 'edit',
          event: 'option-edit-row',
        },
        {
          id: 2,
          name: 'Delete row',
          icon: 'trash',
          event: 'option-delete-row',
        },
      ],
    },
  },
];

const TABLE_DATA = [
  {
    id: 1,
    name: 'John Doe',
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s.`,
  },
  {
    id: 2,
    name: 'John Doe 2',
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s.`,
  },
  {
    id: 3,
    name: 'John Doe 3',
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s.`,
  },
  {
    id: 4,
    name: 'John Doe 4',
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s.`,
  },
  {
    id: 5,
    name: 'John Doe 5',
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s.`,
  },
  {
    id: 6,
    name: 'John Doe 6',
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.`,
  },
];

describe('Table.component.vue', () => {
  it(`adds a .${TABLE_CLASS_NAME} class on init`, () => {
    const wrapper = shallowMount(Table, {
      propsData: {
        data: [],
        columns: [],
      },
    });

    expect(wrapper.find(`.${TABLE_CLASS_NAME}`).exists()).to.equal(true);
  });

  it(`adds a .${TABLE_COMPACT_CLASS_NAME} class when compact is true`, () => {
    const wrapper = shallowMount(Table, {
      propsData: {
        data: [],
        columns: [],
        compact: true,
      },
    });

    expect(wrapper.find(`.${TABLE_COMPACT_CLASS_NAME}`).exists()).to.equal(true);
  });

  it(`adds a .${TABLE_BORDERED_CLASS_NAME} class when bordered is true`, () => {
    const wrapper = shallowMount(Table, {
      propsData: {
        data: [],
        columns: [],
        bordered: true,
      },
    });

    expect(wrapper.find(`.${TABLE_BORDERED_CLASS_NAME}`).exists()).to.equal(true);
  });

  it(`adds a .${TABLE_STRIPED_CLASS_NAME} class when striped is true`, () => {
    const wrapper = shallowMount(Table, {
      propsData: {
        data: [],
        columns: [],
        striped: true,
      },
    });

    expect(wrapper.find(`.${TABLE_STRIPED_CLASS_NAME}`).exists()).to.equal(true);
  });

  it(`adds a .${TABLE_ELEVATED_CLASS_NAME} class when elevated is true`, () => {
    const wrapper = shallowMount(Table, {
      propsData: {
        data: [],
        columns: [],
        elevated: true,
      },
    });

    expect(wrapper.find(`.${TABLE_ELEVATED_CLASS_NAME}`).exists()).to.equal(true);
  });

  it(`adds a .${TABLE_SINGLE_CLASS_NAME} class when singleLine is true`, () => {
    const wrapper = shallowMount(Table, {
      propsData: {
        data: [],
        columns: [],
        singleLine: true,
      },
    });

    expect(wrapper.find(`.${TABLE_SINGLE_CLASS_NAME}`).exists()).to.equal(true);
  });

  it(`adds a .${TABLE_FIXED_CLASS_NAME} class when fixed is true`, () => {
    const wrapper = shallowMount(Table, {
      propsData: {
        data: [],
        columns: [],
        fixed: true,
      },
    });

    expect(wrapper.find(`.${TABLE_FIXED_CLASS_NAME}`).exists()).to.equal(true);
  });

  it(`adds a .${TABLE_STACKABLE_CLASS_NAME} class when stackable is true`, () => {
    const wrapper = shallowMount(Table, {
      propsData: {
        data: [],
        columns: [],
        stackable: true,
      },
    });

    expect(wrapper.find(`.${TABLE_STACKABLE_CLASS_NAME}`).exists()).to.equal(true);
  });

  it('adds a pagination when exceeded maxRows', () => {
    const wrapper = shallowMount(Table, {
      propsData: {
        data: TABLE_DATA,
        columns: COLUMNS,
        maxRows: 3,
      },
    });

    expect(wrapper.find(`.${TABLE_PAGINATION_CLASS_NAME}`).exists()).to.equal(true);
  });

  it('adds table selection', () => {
    const wrapper = shallowMount(Table, {
      propsData: {
        data: TABLE_DATA,
        columns: COLUMNS_SELECTION,
        maxRows: 3,
      },
    });

    expect(wrapper.find(`.${TABLE_CLASS_NAME}__checkbox`).exists()).to.equal(true);
  });

  it('adds a sortable header added sorter option in columns', () => {
    const wrapper = shallowMount(Table, {
      propsData: {
        data: TABLE_DATA,
        columns: COLUMNS_SORTABLE,
        maxRows: 3,
      },
    });

    expect(wrapper.find(`.${TABLE_CLASS_NAME} .${TABLE_HEAD_SORTABLE_CLASS_NAME}`).exists()).to.equal(true);
  });

  it('adds a column action links', () => {
    const wrapper = shallowMount(Table, {
      ...tableOptions,
      propsData: {
        data: TABLE_DATA,
        columns: COLUMNS_ACTIONS,
      },
    });

    wrapper.find(`.${TABLE_ACTION_CLASS_NAME}--delete-row`).trigger('click');
    wrapper.find(`.${TABLE_ACTION_CLASS_NAME}--edit-row`).trigger('click');

    expect(wrapper.find(`.${TABLE_ACTION_CLASS_NAME}--delete-row`).exists()).to.equal(true);
    expect(wrapper.find(`.${TABLE_ACTION_CLASS_NAME}--edit-row`).exists()).to.equal(true);
    expect(wrapper.emitted()['delete-row'].length).to.equal(1);
    expect(wrapper.emitted()['edit-row'].length).to.equal(1);
  });
});
