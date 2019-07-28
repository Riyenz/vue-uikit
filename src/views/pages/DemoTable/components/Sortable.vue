<template>
  <div>
    <h3 class="eduk-h3 eduk-u-mb-3">Sorting & Selecting</h3>
    <p class="eduk-text eduk-u-mb-4">
      A table may allow a user to sort contents by clicking on a table header.
    </p>
    <Preview>
      <template slot="example">
        <Table :data="data" :columns="columns" striped elevated fixed :maxRows="4"/>
      </template>
      <template slot="vue-code">
        <code class="language-html">
export const columnsSortable = [
  {
    title: 'No.',
    key: 'id',
    textAlign: 'center',
    width: '70px',
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

      if (nameA &#x3C; nameB) {
        return -1;
      }

      if (nameA &#x3E; nameB) {
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

&#x3C;Table :data=&#x22;TABLE_DATA&#x22; :columns=&#x22;columnsSortable&#x22; fixed striped elevated :maxRows=&#x22;4&#x22; /&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
&#x3C;div class=&#x22;eduk-table eduk-table--striped eduk-table--fixed eduk-table--elevated&#x22; style=&#x22;max-width: 100%;&#x22;&#x3E;
  &#x3C;div class=&#x22;eduk-table__scrollable&#x22;&#x3E;
    &#x3C;table&#x3E;
      &#x3C;thead class=&#x22;eduk-table__thead&#x22;&#x3E;
        &#x3C;tr&#x3E;
          &#x3C;th class=&#x22;sortable&#x22; style=&#x22;width: 70px;&#x22;&#x3E;
            &#x3C;span style=&#x22;justify-content: center;&#x22;&#x3E;
              &#x3C;span&#x3E;No.&#x3C;/span&#x3E;
              &#x3C;i&#x3E;&#x3C;/i&#x3E;
            &#x3C;/span&#x3E;
          &#x3C;/th&#x3E;
          &#x3C;th class=&#x22;sortable&#x22; style=&#x22;width: 0px;&#x22;&#x3E;
            &#x3C;span style=&#x22;justify-content: flex-start;&#x22;&#x3E;
              &#x3C;span&#x3E;Name&#x3C;/span&#x3E;
              &#x3C;i&#x3E;&#x3C;/i&#x3E;
            &#x3C;/span&#x3E;
          &#x3C;/th&#x3E;
          &#x3C;th class=&#x22;&#x22; style=&#x22;width: 0px;&#x22;&#x3E;
            &#x3C;span style=&#x22;justify-content: flex-start;&#x22;&#x3E;
            &#x3C;span&#x3E;Date&#x3C;/span&#x3E;
            &#x3C;/span&#x3E;
          &#x3C;/th&#x3E;
          &#x3C;th class=&#x22;&#x22; style=&#x22;width: 0px;&#x22;&#x3E;
            &#x3C;span style=&#x22;justify-content: flex-start;&#x22;&#x3E;
            &#x3C;span&#x3E;Stats&#x3C;/span&#x3E;
            &#x3C;/span&#x3E;
            &#x3C;div class=&#x22;eduk-table eduk-table--striped eduk-table--elevated&#x22; style=&#x22;max-width: 100%;&#x22;&#x3E;
              &#x3C;div class=&#x22;eduk-table__scrollable&#x22;&#x3E;
                &#x3C;table&#x3E;
                  &#x3C;thead class=&#x22;eduk-table__thead&#x22;&#x3E;
                    &#x3C;tr&#x3E;
                      &#x3C;th class=&#x22;sortable&#x22; style=&#x22;width: 70px;&#x22;&#x3E;
                        &#x3C;span style=&#x22;justify-content: center;&#x22;&#x3E;
                          &#x3C;span&#x3E;No.&#x3C;/span&#x3E;
                          &#x3C;i&#x3E;&#x3C;/i&#x3E;
                        &#x3C;/span&#x3E;
                      &#x3C;/th&#x3E;
                      &#x3C;th class=&#x22;sortable&#x22; style=&#x22;width: 0px;&#x22;&#x3E;
                        &#x3C;span style=&#x22;justify-content: flex-start;&#x22;&#x3E;
                          &#x3C;span&#x3E;Name&#x3C;/span&#x3E;
                          &#x3C;i&#x3E;&#x3C;/i&#x3E;
                        &#x3C;/span&#x3E;
                      &#x3C;/th&#x3E;
                      &#x3C;th class=&#x22;&#x22; style=&#x22;width: 0px;&#x22;&#x3E;
                        &#x3C;span style=&#x22;justify-content: flex-start;&#x22;&#x3E;
                          &#x3C;span&#x3E;Date&#x3C;/span&#x3E;&#x3C;!----&#x3E;
                        &#x3C;/span&#x3E;
                      &#x3C;/th&#x3E;
                      &#x3C;th class=&#x22;&#x22; style=&#x22;width: 0px;&#x22;&#x3E;
                        &#x3C;span style=&#x22;justify-content: flex-start;&#x22;&#x3E;
                          &#x3C;span&#x3E;Stats&#x3C;/span&#x3E;&#x3C;!----&#x3E;
                        &#x3C;/span&#x3E;
                      &#x3C;/th&#x3E;
                    &#x3C;/tr&#x3E;
                  &#x3C;/thead&#x3E;
                  &#x3C;tbody class=&#x22;eduk-table__tbody&#x22;&#x3E;
                    &#x3C;tr&#x3E;
                      &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;1&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                      &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;John Doe&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                      &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                      &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;30/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;/tr&#x3E;
                    &#x3C;tr&#x3E;
                      &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;2&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                      &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 2&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                      &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                      &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;40/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;/tr&#x3E;
                    &#x3C;tr&#x3E;
                      &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;3&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                      &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 3&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                      &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                      &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;30/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;/tr&#x3E;
                    &#x3C;tr&#x3E;
                      &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;4&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                      &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 4&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                      &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                      &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;30/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;/tr&#x3E;
                  &#x3C;/tbody&#x3E;
                &#x3C;/table&#x3E;
              &#x3C;/div&#x3E;
              &#x3C;div class=&#x22;eduk-table-pagination&#x22;&#x3E;
                &#x3C;div class=&#x22;eduk-pagination&#x22;&#x3E;
                  &#x3C;ul class=&#x22;eduk-pagination__page-list&#x22;&#x3E;
                    &#x3C;li id=&#x22;edukPagePrev&#x22; class=&#x22;eduk-pagination__page-item eduk-pagination__page-item--disabled&#x22;&#x3E;
                      Prev
                    &#x3C;/li&#x3E;
                    &#x3C;li class=&#x22;eduk-pagination__page-item active&#x22;&#x3E;
                      1
                    &#x3C;/li&#x3E;
                    &#x3C;li class=&#x22;eduk-pagination__page-item&#x22;&#x3E;
                      2
                    &#x3C;/li&#x3E;
                    &#x3C;li id=&#x22;edukPageNext&#x22; class=&#x22;eduk-pagination__page-item&#x22;&#x3E;
                      Next
                    &#x3C;/li&#x3E;
                  &#x3C;/ul&#x3E;
                &#x3C;/div&#x3E;
              &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
          &#x3C;/th&#x3E;
        &#x3C;/tr&#x3E;
      &#x3C;/thead&#x3E;
      &#x3C;tbody class=&#x22;eduk-table__tbody&#x22;&#x3E;
        &#x3C;tr&#x3E;
          &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;1&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;John Doe&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;30/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
        &#x3C;/tr&#x3E;
        &#x3C;tr&#x3E;
          &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;2&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 2&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;40/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
        &#x3C;/tr&#x3E;
        &#x3C;tr&#x3E;
          &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;3&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 3&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;30/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
        &#x3C;/tr&#x3E;
        &#x3C;tr&#x3E;
          &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;4&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 4&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;30/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
        &#x3C;/tr&#x3E;
      &#x3C;/tbody&#x3E;
    &#x3C;/table&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;eduk-table-pagination&#x22;&#x3E;
    &#x3C;div class=&#x22;eduk-pagination&#x22;&#x3E;
      &#x3C;ul class=&#x22;eduk-pagination__page-list&#x22;&#x3E;
        &#x3C;li id=&#x22;edukPagePrev&#x22; class=&#x22;eduk-pagination__page-item eduk-pagination__page-item--disabled&#x22;&#x3E;
          Prev
        &#x3C;/li&#x3E;
        &#x3C;li class=&#x22;eduk-pagination__page-item active&#x22;&#x3E;
          1
        &#x3C;/li&#x3E;
        &#x3C;li class=&#x22;eduk-pagination__page-item&#x22;&#x3E;
          2
        &#x3C;/li&#x3E;
        &#x3C;li id=&#x22;edukPageNext&#x22; class=&#x22;eduk-pagination__page-item&#x22;&#x3E;
          Next
        &#x3C;/li&#x3E;
      &#x3C;/ul&#x3E;
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
        </code>
      </template>
    </Preview>
    <h3 class="eduk-h3 eduk-u-mb-3">Sorting & Selecting</h3>
    <p class="eduk-text eduk-u-mb-4">
      A table may allow a user to sort contents by clicking on a table header and
      at the same time select checkboxes/radio buttons inside the table. This
      also shows a pagination sample inside the table
    </p>
    <Preview>
      <template slot="example">
        <Table :data="data" :columns="columnsSelection" fixed striped elevated :maxRows="4"/>
      </template>
      <template slot="vue-code">
        <code class="language-html">
export const columnsSelection = [
  {
    selection: true,
  },
  {
    title: 'No.',
    key: 'id',
    textAlign: 'center',
    width: '70px',
  },
  {
    title: 'Name',
    key: 'name',
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

&#x3C;Table :data=&#x22;TABLE_DATA&#x22; :columns=&#x22;columnsSelection&#x22; fixed striped elevated :maxRows=&#x22;4&#x22; /&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
&#x3C;div class=&#x22;eduk-table eduk-table--striped eduk-table--fixed eduk-table--elevated&#x22; style=&#x22;max-width: 100%;&#x22;&#x3E;
  &#x3C;div class=&#x22;eduk-table__scrollable&#x22;&#x3E;
    &#x3C;table&#x3E;
      &#x3C;thead class=&#x22;eduk-table__thead&#x22;&#x3E;
        &#x3C;tr&#x3E;
          &#x3C;th class=&#x22;sortable--active&#x22; style=&#x22;width: 35px;&#x22;&#x3E;
            &#x3C;label class=&#x22;eduk-table__checkbox&#x22;&#x3E;
              &#x3C;input type=&#x22;checkbox&#x22;&#x3E;
              &#x3C;span&#x3E;&#x3C;/span&#x3E;
            &#x3C;/label&#x3E;
          &#x3C;/th&#x3E;
          &#x3C;th class=&#x22;&#x22; style=&#x22;width: 70px;&#x22;&#x3E;
            &#x3C;span style=&#x22;justify-content: center;&#x22;&#x3E;
              &#x3C;span&#x3E;No.&#x3C;/span&#x3E;
            &#x3C;/span&#x3E;
          &#x3C;/th&#x3E;
          &#x3C;th class=&#x22;sortable&#x22; style=&#x22;width: 0px;&#x22;&#x3E;
            &#x3C;span style=&#x22;justify-content: flex-start;&#x22;&#x3E;
              &#x3C;span&#x3E;Name&#x3C;/span&#x3E;
              &#x3C;i&#x3E;&#x3C;/i&#x3E;
            &#x3C;/span&#x3E;
          &#x3C;/th&#x3E;
          &#x3C;th class=&#x22;&#x22; style=&#x22;width: 0px;&#x22;&#x3E;
            &#x3C;span style=&#x22;justify-content: flex-start;&#x22;&#x3E;
              &#x3C;span&#x3E;Date&#x3C;/span&#x3E;
            &#x3C;/span&#x3E;
          &#x3C;/th&#x3E;
          &#x3C;th class=&#x22;&#x22; style=&#x22;width: 0px;&#x22;&#x3E;
            &#x3C;span style=&#x22;justify-content: flex-start;&#x22;&#x3E;
              &#x3C;span&#x3E;Stats&#x3C;/span&#x3E;
            &#x3C;/span&#x3E;
          &#x3C;/th&#x3E;
        &#x3C;/tr&#x3E;
      &#x3C;/thead&#x3E;
      &#x3C;tbody class=&#x22;eduk-table__tbody&#x22;&#x3E;
        &#x3C;tr&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;label class=&#x22;eduk-table__checkbox&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22;&#x3E;&#x3C;span&#x3E;&#x3C;/span&#x3E;&#x3C;/label&#x3E;
          &#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;1&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;John Doe&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;30/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
        &#x3C;/tr&#x3E;
        &#x3C;tr&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;label class=&#x22;eduk-table__checkbox&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22;&#x3E;&#x3C;span&#x3E;&#x3C;/span&#x3E;&#x3C;/label&#x3E;
          &#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;2&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 2&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;40/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
        &#x3C;/tr&#x3E;
        &#x3C;tr&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;label class=&#x22;eduk-table__checkbox&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22;&#x3E;&#x3C;span&#x3E;&#x3C;/span&#x3E;&#x3C;/label&#x3E;
          &#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;3&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 3&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;30/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
        &#x3C;/tr&#x3E;
        &#x3C;tr&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;label class=&#x22;eduk-table__checkbox&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22;&#x3E;&#x3C;span&#x3E;&#x3C;/span&#x3E;&#x3C;/label&#x3E;
          &#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;4&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 4&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;30/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
        &#x3C;/tr&#x3E;
      &#x3C;/tbody&#x3E;
    &#x3C;/table&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;eduk-table-pagination&#x22;&#x3E;
    &#x3C;div class=&#x22;eduk-pagination&#x22;&#x3E;
      &#x3C;ul class=&#x22;eduk-pagination__page-list&#x22;&#x3E;
        &#x3C;li id=&#x22;edukPagePrev&#x22; class=&#x22;eduk-pagination__page-item eduk-pagination__page-item--disabled&#x22;&#x3E;
          Prev
        &#x3C;/li&#x3E;
        &#x3C;li class=&#x22;eduk-pagination__page-item active&#x22;&#x3E;
          1
        &#x3C;/li&#x3E;
        &#x3C;li class=&#x22;eduk-pagination__page-item&#x22;&#x3E;
          2
        &#x3C;/li&#x3E;
        &#x3C;li id=&#x22;edukPageNext&#x22; class=&#x22;eduk-pagination__page-item&#x22;&#x3E;
          Next
        &#x3C;/li&#x3E;
      &#x3C;/ul&#x3E;
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
        </code>
      </template>
    </Preview>
    <h3 class="eduk-h3 eduk-u-mb-3">
      Sorting & Selecting - Variations
    </h3>
    <p class="eduk-text eduk-u-mb-4">
      A table variation that shows 2 different executions for actions
      depending on the content or columns inside the table
    </p>
    <Preview>
      <template slot="example">
        <Table :data="data" :columns="columnsRenderer"  striped elevated :maxRows="4" />
      </template>
      <template slot="vue-code">
        <code class="language-html">
export const columnsRenderer = [
  {
    title: 'No.',
    key: 'id',
    width: '70px',
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

&#x3C;Table :data=&#x22;TABLE_DATA&#x22; fixed :columns=&#x22;columnsRenderer&#x22; striped elevated :maxRows=&#x22;4&#x22; /&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
&#x3C;div class=&#x22;eduk-table eduk-table--striped eduk-table--fixed eduk-table--elevated&#x22; style=&#x22;max-width: 100%;&#x22;&#x3E;
  &#x3C;div class=&#x22;eduk-table__scrollable&#x22;&#x3E;
    &#x3C;table&#x3E;
      &#x3C;thead class=&#x22;eduk-table__thead&#x22;&#x3E;
        &#x3C;tr&#x3E;
          &#x3C;th class=&#x22;&#x22; style=&#x22;width: 70px;&#x22;&#x3E;
            &#x3C;span style=&#x22;justify-content: flex-start;&#x22;&#x3E;
              &#x3C;span&#x3E;No.&#x3C;/span&#x3E;
            &#x3C;/span&#x3E;
          &#x3C;/th&#x3E;
          &#x3C;th class=&#x22;&#x22; style=&#x22;width: 0px;&#x22;&#x3E;
            &#x3C;span style=&#x22;justify-content: flex-start;&#x22;&#x3E;
              &#x3C;span&#x3E;Name&#x3C;/span&#x3E;
            &#x3C;/span&#x3E;
          &#x3C;/th&#x3E;
          &#x3C;th class=&#x22;&#x22; style=&#x22;width: 0px;&#x22;&#x3E;
            &#x3C;span style=&#x22;justify-content: flex-start;&#x22;&#x3E;
              &#x3C;span&#x3E;Date&#x3C;/span&#x3E;
            &#x3C;/span&#x3E;
          &#x3C;/th&#x3E;
          &#x3C;th class=&#x22;&#x22; style=&#x22;width: 0px;&#x22;&#x3E;
            &#x3C;span style=&#x22;justify-content: flex-start;&#x22;&#x3E;
              &#x3C;span&#x3E;Stats&#x3C;/span&#x3E;
            &#x3C;/span&#x3E;
          &#x3C;/th&#x3E;
          &#x3C;th class=&#x22;sortable--active&#x22; style=&#x22;width: 100px;&#x22;&#x3E;
            &#x3C;span style=&#x22;justify-content: flex-start;&#x22;&#x3E;
              &#x3C;span&#x3E;&#x3C;/span&#x3E;
            &#x3C;/span&#x3E;
          &#x3C;/th&#x3E;
          &#x3C;th class=&#x22;sortable--active&#x22; style=&#x22;width: 100px;&#x22;&#x3E;
            &#x3C;span style=&#x22;justify-content: flex-start;&#x22;&#x3E;
              &#x3C;span&#x3E;&#x3C;/span&#x3E;
            &#x3C;/span&#x3E;
          &#x3C;/th&#x3E;
          &#x3C;th class=&#x22;sortable--active&#x22; style=&#x22;width: 40px;&#x22;&#x3E;
            &#x3C;span style=&#x22;justify-content: flex-start;&#x22;&#x3E;
              &#x3C;span&#x3E;&#x3C;/span&#x3E;
            &#x3C;/span&#x3E;
          &#x3C;/th&#x3E;
        &#x3C;/tr&#x3E;
      &#x3C;/thead&#x3E;
      &#x3C;tbody class=&#x22;eduk-table__tbody&#x22;&#x3E;
        &#x3C;tr&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;1&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;John Doe&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;30/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: 100px;&#x22;&#x3E;
            &#x3C;a class=&#x22;eduk-table__action eduk-table__action--edit-row&#x22; style=&#x22;color: rgb(92, 92, 92);&#x22;&#x3E;
              &#x3C;i class=&#x22;fas fa-edit&#x22;&#x3E;&#x3C;/i&#x3E;
              Edit
            &#x3C;/a&#x3E;
          &#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: 100px;&#x22;&#x3E;
            &#x3C;a class=&#x22;eduk-table__action eduk-table__action--delete-row&#x22; style=&#x22;color: rgb(248, 83, 89);&#x22;&#x3E;
              &#x3C;i class=&#x22;fas fa-trash&#x22;&#x3E;&#x3C;/i&#x3E;
              Delete
            &#x3C;/a&#x3E;
          &#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: 40px;&#x22;&#x3E;
            &#x3C;div class=&#x22;eduk-dropdown eduk-dropdown--right&#x22;&#x3E;
              &#x3C;a class=&#x22;eduk-dropdown__trigger eduk-dropdown__icon-only&#x22;&#x3E;
                &#x3C;i class=&#x22;fas fa-ellipsis-v&#x22;&#x3E;&#x3C;/i&#x3E;
              &#x3C;/a&#x3E;
              &#x3C;ul class=&#x22;eduk-dropdown__options&#x22;&#x3E;
                &#x3C;li class=&#x22;eduk-dropdown__empty eduk-dropdown__empty--active&#x22;&#x3E;
                  No results found.
                &#x3C;/li&#x3E;
              &#x3C;/ul&#x3E;
            &#x3C;/div&#x3E;
          &#x3C;/td&#x3E;
        &#x3C;/tr&#x3E;
        &#x3C;tr&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;2&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 2&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;40/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: 100px;&#x22;&#x3E;
            &#x3C;a class=&#x22;eduk-table__action eduk-table__action--edit-row&#x22; style=&#x22;color: rgb(92, 92, 92);&#x22;&#x3E;
              &#x3C;i class=&#x22;fas fa-edit&#x22;&#x3E;&#x3C;/i&#x3E;
              Edit
            &#x3C;/a&#x3E;
          &#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: 100px;&#x22;&#x3E;
            &#x3C;a class=&#x22;eduk-table__action eduk-table__action--delete-row&#x22; style=&#x22;color: rgb(248, 83, 89);&#x22;&#x3E;
              &#x3C;i class=&#x22;fas fa-trash&#x22;&#x3E;&#x3C;/i&#x3E;
              Delete
            &#x3C;/a&#x3E;
          &#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: 40px;&#x22;&#x3E;
            &#x3C;div class=&#x22;eduk-dropdown eduk-dropdown--right&#x22;&#x3E;
              &#x3C;a class=&#x22;eduk-dropdown__trigger eduk-dropdown__icon-only&#x22;&#x3E;
                &#x3C;i class=&#x22;fas fa-ellipsis-v&#x22;&#x3E;&#x3C;/i&#x3E;
              &#x3C;/a&#x3E;
              &#x3C;ul class=&#x22;eduk-dropdown__options&#x22;&#x3E;
                &#x3C;li class=&#x22;eduk-dropdown__empty eduk-dropdown__empty--active&#x22;&#x3E;
                  No results found.
                &#x3C;/li&#x3E;
              &#x3C;/ul&#x3E;
            &#x3C;/div&#x3E;
          &#x3C;/td&#x3E;
        &#x3C;/tr&#x3E;
        &#x3C;tr&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;3&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 3&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;30/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: 100px;&#x22;&#x3E;
            &#x3C;a class=&#x22;eduk-table__action eduk-table__action--edit-row&#x22; style=&#x22;color: rgb(92, 92, 92);&#x22;&#x3E;
              &#x3C;i class=&#x22;fas fa-edit&#x22;&#x3E;&#x3C;/i&#x3E;
              Edit
            &#x3C;/a&#x3E;
          &#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: 100px;&#x22;&#x3E;
            &#x3C;a class=&#x22;eduk-table__action eduk-table__action--delete-row&#x22; style=&#x22;color: rgb(248, 83, 89);&#x22;&#x3E;
              &#x3C;i class=&#x22;fas fa-trash&#x22;&#x3E;&#x3C;/i&#x3E;
              Delete
            &#x3C;/a&#x3E;
          &#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: 40px;&#x22;&#x3E;
            &#x3C;div class=&#x22;eduk-dropdown eduk-dropdown--right&#x22;&#x3E;
              &#x3C;a class=&#x22;eduk-dropdown__trigger eduk-dropdown__icon-only&#x22;&#x3E;
                &#x3C;i class=&#x22;fas fa-ellipsis-v&#x22;&#x3E;&#x3C;/i&#x3E;
              &#x3C;/a&#x3E;
              &#x3C;ul class=&#x22;eduk-dropdown__options&#x22;&#x3E;
                &#x3C;li class=&#x22;eduk-dropdown__empty eduk-dropdown__empty--active&#x22;&#x3E;
                  No results found.
                &#x3C;/li&#x3E;
              &#x3C;/ul&#x3E;
            &#x3C;/div&#x3E;
          &#x3C;/td&#x3E;
        &#x3C;/tr&#x3E;
        &#x3C;tr&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;4&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 4&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;30/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: 100px;&#x22;&#x3E;
            &#x3C;a class=&#x22;eduk-table__action eduk-table__action--edit-row&#x22; style=&#x22;color: rgb(92, 92, 92);&#x22;&#x3E;
              &#x3C;i class=&#x22;fas fa-edit&#x22;&#x3E;&#x3C;/i&#x3E;
              Edit
            &#x3C;/a&#x3E;
          &#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: 100px;&#x22;&#x3E;
            &#x3C;a class=&#x22;eduk-table__action eduk-table__action--delete-row&#x22; style=&#x22;color: rgb(248, 83, 89);&#x22;&#x3E;
              &#x3C;i class=&#x22;fas fa-trash&#x22;&#x3E;&#x3C;/i&#x3E;
              Delete
            &#x3C;/a&#x3E;
          &#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: 40px;&#x22;&#x3E;
            &#x3C;div class=&#x22;eduk-dropdown eduk-dropdown--right&#x22;&#x3E;
              &#x3C;a class=&#x22;eduk-dropdown__trigger eduk-dropdown__icon-only&#x22;&#x3E;
                &#x3C;i class=&#x22;fas fa-ellipsis-v&#x22;&#x3E;&#x3C;/i&#x3E;
              &#x3C;/a&#x3E;
              &#x3C;ul class=&#x22;eduk-dropdown__options&#x22;&#x3E;
                &#x3C;li class=&#x22;eduk-dropdown__empty eduk-dropdown__empty--active&#x22;&#x3E;
                  No results found.
                &#x3C;/li&#x3E;
              &#x3C;/ul&#x3E;
            &#x3C;/div&#x3E;
          &#x3C;/td&#x3E;
        &#x3C;/tr&#x3E;
      &#x3C;/tbody&#x3E;
    &#x3C;/table&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;eduk-table-pagination&#x22;&#x3E;
    &#x3C;div class=&#x22;eduk-pagination&#x22;&#x3E;
      &#x3C;ul class=&#x22;eduk-pagination__page-list&#x22;&#x3E;
        &#x3C;li id=&#x22;edukPagePrev&#x22; class=&#x22;eduk-pagination__page-item eduk-pagination__page-item--disabled&#x22;&#x3E;
          Prev
        &#x3C;/li&#x3E;
        &#x3C;li class=&#x22;eduk-pagination__page-item active&#x22;&#x3E;
          1
        &#x3C;/li&#x3E;
        &#x3C;li class=&#x22;eduk-pagination__page-item&#x22;&#x3E;
          2
        &#x3C;/li&#x3E;
        &#x3C;li id=&#x22;edukPageNext&#x22; class=&#x22;eduk-pagination__page-item&#x22;&#x3E;
          Next
        &#x3C;/li&#x3E;
      &#x3C;/ul&#x3E;
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
        </code>
      </template>
    </Preview>
  </div>
</template>

<script>
import Preview from '@/views/components/Preview/index.vue';
import Table from '@/UIKit/Table/Table.component.vue';

import {
  TABLE_DATA,
  COLUMNS_SORTABLE,
  COLUMNS_SELECTIONS,
  COLUMNS_RENDERER,
} from '../config';

export default {
  name: 'BasicTables',
  data() {
    return {
      data: TABLE_DATA,
      columns: COLUMNS_SORTABLE,
      columnsSelection: COLUMNS_SELECTIONS,
      columnsRenderer: COLUMNS_RENDERER,
    };
  },
  components: {
    Preview,
    Table,
  },
};
</script>

