<template>
  <div>
    <h3 class="eduk-h3 eduk-u-mb-3">Basic</h3>
    <p class="eduk-text eduk-u-mb-4">
      A table can reduce its complexity to increase readability.
    </p>
    <Preview>
      <template slot="example">
        <div class="demo-mobile-table">
          <Table :data="data" :columns="columns" demoMobile />
        </div>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          export const columns = [
            {
              title: 'No.',
              key: 'id',
              textAlign: 'center',
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
          ];

          &#x3C;Table :data=&#x22;TABLE_DATA&#x22; :columns=&#x22;columns&#x22; /&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &#x3C;div class=&#x22;eduk-table&#x22; style=&#x22;max-width: 100%;&#x22;&#x3E;
            &#x3C;div class=&#x22;eduk-table__scrollable&#x22;&#x3E;
              &#x3C;table&#x3E;
                &#x3C;thead class=&#x22;eduk-table__thead&#x22;&#x3E;
                  &#x3C;tr&#x3E;
                    &#x3C;th class=&#x22;&#x22; style=&#x22;width: 70px;&#x22;&#x3E;
                      &#x3C;span style=&#x22;justify-content: center;&#x22;&#x3E;
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
                  &#x3C;/tr&#x3E;
                &#x3C;/thead&#x3E;
                &#x3C;tbody class=&#x22;eduk-table__tbody&#x22;&#x3E;
                  &#x3C;tr&#x3E;
                    &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;1&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;John Doe&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;30/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                  &#x3C;/tr&#x3E;
                  &#x3C;tr&#x3E;
                    &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;2&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 2&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;40/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                  &#x3C;/tr&#x3E;
                  &#x3C;tr&#x3E;
                    &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;3&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 3&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;30/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                  &#x3C;/tr&#x3E;
                  &#x3C;tr&#x3E;
                    &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;4&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 4&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;30/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                  &#x3C;/tr&#x3E;
                  &#x3C;tr&#x3E;
                    &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;5&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 5&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;30/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                  &#x3C;/tr&#x3E;
                  &#x3C;tr&#x3E;
                    &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;6&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 6&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;30/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                  &#x3C;/tr&#x3E;
                &#x3C;/tbody&#x3E;
              &#x3C;/table&#x3E;
            &#x3C;/div&#x3E;
          &#x3C;/div&#x3E;
        </code>
      </template>
    </Preview>
    <h3 class="eduk-h3 eduk-u-mb-3">Basic - Compact</h3>
    <p class="eduk-text eduk-u-mb-4">
      A standard table
    </p>
    <Preview>
      <template slot="example">
        <div class="demo-mobile-table">
          <Table :data="data" :columns="columns" compact elevated demoMobile />
        </div>
      </template>
      <template slot="vue-code">
        <code class="language-html">
          export const columns = [
            {
              title: 'No.',
              key: 'id',
              textAlign: 'center',
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
          ];

          &#x3C;Table :data=&#x22;TABLE_DATA&#x22; :columns=&#x22;columns&#x22; compact elevated /&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
          &#x3C;div class=&#x22;eduk-table eduk-table--compact eduk-table--elevated&#x22; style=&#x22;max-width: 100%;&#x22;&#x3E;
            &#x3C;div class=&#x22;eduk-table__scrollable&#x22;&#x3E;
              &#x3C;table&#x3E;
                &#x3C;thead class=&#x22;eduk-table__thead&#x22;&#x3E;
                  &#x3C;tr&#x3E;
                    &#x3C;th class=&#x22;&#x22; style=&#x22;width: 70px;&#x22;&#x3E;
                      &#x3C;span style=&#x22;justify-content: center;&#x22;&#x3E;
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
                  &#x3C;/tr&#x3E;
                &#x3C;/thead&#x3E;
                &#x3C;tbody class=&#x22;eduk-table__tbody&#x22;&#x3E;
                  &#x3C;tr&#x3E;
                    &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;1&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;John Doe&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;30/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                  &#x3C;/tr&#x3E;
                  &#x3C;tr&#x3E;
                    &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;2&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 2&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;40/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                  &#x3C;/tr&#x3E;
                  &#x3C;tr&#x3E;
                    &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;3&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 3&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;30/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                  &#x3C;/tr&#x3E;
                  &#x3C;tr&#x3E;
                    &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;4&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 4&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;30/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                  &#x3C;/tr&#x3E;
                  &#x3C;tr&#x3E;
                    &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;5&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 5&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;30/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                  &#x3C;/tr&#x3E;
                  &#x3C;tr&#x3E;
                    &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;6&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 6&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                    &#x3C;td style=&#x22;text-align: left;&#x22;&#x3E;&#x3C;span&#x3E;30/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                  &#x3C;/tr&#x3E;
                &#x3C;/tbody&#x3E;
              &#x3C;/table&#x3E;
            &#x3C;/div&#x3E;
          &#x3C;/div&#x3E;
        </code>
      </template>
    </Preview>
    <h3 class="eduk-h3 eduk-u-mb-3">Sorting & Selecting</h3>
    <p class="eduk-text eduk-u-mb-4">
      A table may allow a user to sort contents by clicking on a table header.
    </p>
    <Preview>
      <template slot="example">
        <div class="demo-mobile-table">
          <Table :data="data" :columns="columnsSortable" striped elevated fixed :maxRows="4" demoMobile />
        </div>
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
                                &#x3C;td style=&#x22;text-align: center;
                                max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;1&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                                &#x3C;td style=&#x22;text-align: left;
                                max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;John Doe&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                                &#x3C;td style=&#x22;text-align: left;
                                max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                                &#x3C;td style=&#x22;text-align: left;
                                max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;30/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                              &#x3C;/tr&#x3E;
                              &#x3C;tr&#x3E;
                                &#x3C;td style=&#x22;text-align: center;
                                max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;2&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                                &#x3C;td style=&#x22;text-align: left;
                                max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 2&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                                &#x3C;td style=&#x22;text-align: left;
                                max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                                &#x3C;td style=&#x22;text-align: left;
                                max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;40/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                              &#x3C;/tr&#x3E;
                              &#x3C;tr&#x3E;
                                &#x3C;td style=&#x22;text-align: center;
                                max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;3&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                                &#x3C;td style=&#x22;text-align: left;
                                max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 3&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                                &#x3C;td style=&#x22;text-align: left;
                                max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                                &#x3C;td style=&#x22;text-align: left;
                                max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;30/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                              &#x3C;/tr&#x3E;
                              &#x3C;tr&#x3E;
                                &#x3C;td style=&#x22;text-align: center;
                                max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;4&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                                &#x3C;td style=&#x22;text-align: left;
                                max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 4&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                                &#x3C;td style=&#x22;text-align: left;
                                max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                                &#x3C;td style=&#x22;text-align: left;
                                max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;30/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
                              &#x3C;/tr&#x3E;
                            &#x3C;/tbody&#x3E;
                          &#x3C;/table&#x3E;
                        &#x3C;/div&#x3E;
                        &#x3C;div class=&#x22;eduk-table-pagination&#x22;&#x3E;
                          &#x3C;div class=&#x22;eduk-pagination&#x22;&#x3E;
                            &#x3C;ul class=&#x22;eduk-pagination__page-list&#x22;&#x3E;
                              &#x3C;li id=&#x22;edukPagePrev&#x22;
                              class=&#x22;eduk-pagination__page-item eduk-pagination__page-item--disabled&#x22;&#x3E;
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
  </div>
</template>

<script>
import Preview from '@/views/components/Preview/index.vue';
import Table from '@/UIKit/Table/Table.component.vue';

import {
  TABLE_DATA,
  COLUMNS,
  COLUMNS_SELECTIONS,
} from '../config';

export default {
  name: 'MobileTables',
  data() {
    return {
      data: TABLE_DATA,
      columns: COLUMNS,
      columnsSortable: COLUMNS_SELECTIONS,
    };
  },
  components: {
    Preview,
    Table,
  },
};
</script>

<style lang="scss" scoped>
.demo-mobile-table {
  margin: auto;
  width: 100%;
  max-width: 420px;
}
</style>

