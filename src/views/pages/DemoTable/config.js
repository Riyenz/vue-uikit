export const COLUMNS = [
  {
    title: 'No.',
    key: 'id',
    width: '80px',
    textAlign: 'center',
  },
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Date',
    key: 'date',
  },
  {
    title: 'Stats',
    key: 'stats',
  },
];

export const COLUMNS_FIXED = [
  {
    title: 'No.',
    key: 'id',
    textAlign: 'center',
    width: '80px',
  },
  {
    title: 'Name',
    key: 'name',
    width: '150px',
  },
  {
    title: 'Date',
    key: 'date',
    width: '150px',
  },
  {
    title: 'Stats',
    key: 'stats',
    width: '150px',
  },
];

export const COLUMNS_SINGLE = [
  {
    title: 'No.',
    key: 'id',
    textAlign: 'center',
    width: '80px',
  },
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Date',
    key: 'date',
  },
  {
    title: 'Stats',
    key: 'stats',
  },
  {
    title: 'Info',
    key: 'info',
    width: '350px',
  },
];

export const COLUMNS_SORTABLE = [
  {
    title: 'No.',
    key: 'id',
    textAlign: 'center',
    width: '80px',
    sorter: (a, b) => {
      return a.id - b.id;
    },
  },
  {
    title: 'Name',
    key: 'name',
    sorter: (a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }

      if (nameA > nameB) {
        return 1;
      }

      return 0;
    },
  },
  {
    title: 'Date',
    key: 'date',
  },
  {
    title: 'Stats',
    key: 'stats',
  },
];

export const COLUMNS_SELECTIONS = [
  {
    selection: true,
  },
  {
    title: 'No.',
    key: 'id',
  },
  {
    title: 'Name',
    key: 'name',
    width: '150px',
    sorter: (a, b) => {
      return a.id - b.id;
    },
  },
  {
    title: 'Date',
    key: 'date',
  },
  {
    title: 'Stats',
    key: 'stats',
  },
];

export const COLUMNS_RENDERER = [
  {
    title: 'No.',
    key: 'id',
    width: '80px',
    textAlign: 'center',
  },
  {
    title: 'Name',
    key: 'name',
    width: '100px',
  },
  {
    title: 'Date',
    key: 'date',
    width: '100px',
  },
  {
    title: 'Stats',
    key: 'stats',
    width: '100px',
  },
  {
    width: '100px',
    action: {
      label: 'Edit',
      icon: 'edit',
      event: 'edit-row',
      color: '#5c5c5c',
    },
  },
  {
    width: '100px',
    action: {
      label: 'Delete',
      icon: 'trash',
      event: 'delete-row',
      color: '#f85359',
    },
  },
  {
    title: '',
    width: '40px',
    dropdown: {
      icon: 'ellipsis-v',
      options: [
        {
          id: 1,
          name: 'Edit row',
          icon: 'edit',
          event: 'edit-row',
        },
        {
          id: 2,
          name: 'Delete row',
          icon: 'trash',
          event: 'delete-row',
        },
      ],
    },
  },
];

export const TABLE_DATA = [
  {
    id: 1,
    name: 'John Doe',
    date: '01/06/2019',
    day: 'Monday',
    stats: '30/40',
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry"s standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five`,
  },
  {
    id: 2,
    name: 'Matthew Williams',
    date: '04/02/2019',
    day: 'Saturday',
    stats: '40/40',
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry"s standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five`,
  },
  {
    id: 3,
    name: 'Jane Doe',
    date: '05/01/2019',
    day: 'Monday',
    stats: '30/40',
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry"s standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five`,
  },
  {
    id: 4,
    name: 'Jason Kidd',
    date: '05/06/2019',
    day: 'Thursday',
    stats: '30/40',
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry"s standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five`,
  },
  {
    id: 5,
    name: 'Michael Jordan',
    date: '07/22/2019',
    day: 'Monday',
    stats: '30/40',
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry"s standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five`,
  },
  {
    id: 6,
    name: 'Lio Messi',
    date: '08/10/2019',
    day: 'Friday',
    stats: '30/40',
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry"s standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five`,
  },
];
