<template>
  <div>
    <h3 class="eduk-h3 eduk-u-mb-3">Basic</h3>
    <p class="eduk-text eduk-u-mb-4">
      A table can reduce its complexity to increase readability.
    </p>
    <Preview>
      <template slot="example">
        <Table :data="data" :columns="columns" />
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
        <Table :data="data" :columns="columns" compact elevated />
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
    <h3 class="eduk-h3 eduk-u-mb-3">Celled</h3>
    <p class="eduk-text eduk-u-mb-4">
      A table may be divided each row into separate cells
    </p>
    <Preview>
      <template slot="example">
        <Table :data="data" :columns="columns" bordered elevated />
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

&#x3C;Table :data=&#x22;TABLE_DATA&#x22; :columns=&#x22;columns&#x22; bordered elevated /&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
&#x3C;div class=&#x22;eduk-table eduk-table--bordered eduk-table--elevated&#x22; style=&#x22;max-width: 100%;&#x22;&#x3E;
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
  </div>
</template>

<script>
import Preview from '@/views/components/Preview/index.vue';
import Table from '@/UIKit/Table/Table.component.vue';

import {
  TABLE_DATA,
  COLUMNS,
} from '../config';

export default {
  name: 'BasicTables',
  data() {
    return {
      data: TABLE_DATA,
      columns: COLUMNS,
    };
  },
  components: {
    Preview,
    Table,
  },
};
</script>

