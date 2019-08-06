<template>
  <div>
    <h3 class="eduk-h3 eduk-u-mb-3">Fixed</h3>
    <p class="eduk-text eduk-u-mb-4">
      A table can use table-layout: fixed a special faster form of
      table rendering that does not resize table cells based on content.
    </p>
    <Preview>
      <template slot="example">
        <div style="max-width: 532px;">
          <Table
            elevated
            fixed
            :maxRows="4"
            :data="data"
            :columns="columns"
          />
        </div>
      </template>
      <template slot="vue-code">
        <code class="language-html">
export const columnsFixed = [
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

&#x3C;div style=&#x22;max-width: 530px;&#x22;&#x3E;
  &#x3C;Table
    :data=&#x22;TABLE_DATA&#x22;
    elevated
    fixed
    :maxRows="4"
    :columns=&#x22;columnsFixed&#x22;
    elevated
    maxWidth=&#x22;520px&#x22;
  /&#x3E;
&#x3C;/div&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
&#x3C;div style=&#x22;max-width: 530px;&#x22;&#x3E;
  &#x3C;div class=&#x22;eduk-table eduk-table--elevated eduk-table--fixed&#x22; style=&#x22;max-width: 520px;&#x22;&#x3E;
    &#x3C;div class=&#x22;eduk-table__scrollable&#x22;&#x3E;
      &#x3C;table&#x3E;
        &#x3C;thead class=&#x22;eduk-table__thead&#x22;&#x3E;
          &#x3C;tr&#x3E;
            &#x3C;th class=&#x22;&#x22; style=&#x22;width: 70px;&#x22;&#x3E;
              &#x3C;span style=&#x22;justify-content: center;&#x22;&#x3E;
                &#x3C;span&#x3E;No.&#x3C;/span&#x3E;
              &#x3C;/span&#x3E;
            &#x3C;/th&#x3E;
            &#x3C;th class=&#x22;&#x22; style=&#x22;width: 150px;&#x22;&#x3E;
              &#x3C;span style=&#x22;justify-content: flex-start;&#x22;&#x3E;
                &#x3C;span&#x3E;Name&#x3C;/span&#x3E;
              &#x3C;/span&#x3E;
            &#x3C;/th&#x3E;
            &#x3C;th class=&#x22;&#x22; style=&#x22;width: 150px;&#x22;&#x3E;
              &#x3C;span style=&#x22;justify-content: flex-start;&#x22;&#x3E;
                &#x3C;span&#x3E;Date&#x3C;/span&#x3E;
              &#x3C;/span&#x3E;
            &#x3C;/th&#x3E;
            &#x3C;th class=&#x22;&#x22; style=&#x22;width: 150px;&#x22;&#x3E;
              &#x3C;span style=&#x22;justify-content: flex-start;&#x22;&#x3E;
                &#x3C;span&#x3E;Stats&#x3C;/span&#x3E;
              &#x3C;/span&#x3E;
            &#x3C;/th&#x3E;
          &#x3C;/tr&#x3E;
        &#x3C;/thead&#x3E;
        &#x3C;tbody class=&#x22;eduk-table__tbody&#x22;&#x3E;
          &#x3C;tr&#x3E;
            &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;1&#x3C;/span&#x3E;&#x3C;/td&#x3E;
            &#x3C;td style=&#x22;text-align: left; max-width: 150px;&#x22;&#x3E;&#x3C;span&#x3E;John Doe&#x3C;/span&#x3E;&#x3C;/td&#x3E;
            &#x3C;td style=&#x22;text-align: left; max-width: 150px;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
            &#x3C;td style=&#x22;text-align: left; max-width: 150px;&#x22;&#x3E;&#x3C;span&#x3E;30/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;/tr&#x3E;
          &#x3C;tr&#x3E;
            &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;2&#x3C;/span&#x3E;&#x3C;/td&#x3E;
            &#x3C;td style=&#x22;text-align: left; max-width: 150px;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 2&#x3C;/span&#x3E;&#x3C;/td&#x3E;
            &#x3C;td style=&#x22;text-align: left; max-width: 150px;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
            &#x3C;td style=&#x22;text-align: left; max-width: 150px;&#x22;&#x3E;&#x3C;span&#x3E;40/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;/tr&#x3E;
          &#x3C;tr&#x3E;
            &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;3&#x3C;/span&#x3E;&#x3C;/td&#x3E;
            &#x3C;td style=&#x22;text-align: left; max-width: 150px;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 3&#x3C;/span&#x3E;&#x3C;/td&#x3E;
            &#x3C;td style=&#x22;text-align: left; max-width: 150px;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
            &#x3C;td style=&#x22;text-align: left; max-width: 150px;&#x22;&#x3E;&#x3C;span&#x3E;30/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;/tr&#x3E;
          &#x3C;tr&#x3E;
            &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;4&#x3C;/span&#x3E;&#x3C;/td&#x3E;
            &#x3C;td style=&#x22;text-align: left; max-width: 150px;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 4&#x3C;/span&#x3E;&#x3C;/td&#x3E;
            &#x3C;td style=&#x22;text-align: left; max-width: 150px;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
            &#x3C;td style=&#x22;text-align: left; max-width: 150px;&#x22;&#x3E;&#x3C;span&#x3E;30/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;/tr&#x3E;
          &#x3C;tr&#x3E;
            &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;5&#x3C;/span&#x3E;&#x3C;/td&#x3E;
            &#x3C;td style=&#x22;text-align: left; max-width: 150px;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 5&#x3C;/span&#x3E;&#x3C;/td&#x3E;
            &#x3C;td style=&#x22;text-align: left; max-width: 150px;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
            &#x3C;td style=&#x22;text-align: left; max-width: 150px;&#x22;&#x3E;&#x3C;span&#x3E;30/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;/tr&#x3E;
          &#x3C;tr&#x3E;
            &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;6&#x3C;/span&#x3E;&#x3C;/td&#x3E;
            &#x3C;td style=&#x22;text-align: left; max-width: 150px;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 6&#x3C;/span&#x3E;&#x3C;/td&#x3E;
            &#x3C;td style=&#x22;text-align: left; max-width: 150px;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
            &#x3C;td style=&#x22;text-align: left; max-width: 150px;&#x22;&#x3E;&#x3C;span&#x3E;30/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;/tr&#x3E;
        &#x3C;/tbody&#x3E;
      &#x3C;/table&#x3E;
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
        </code>
      </template>
    </Preview>
    <h3 class="eduk-h3 eduk-u-mb-3">Fixed single line</h3>
    <p class="eduk-text eduk-u-mb-4">
      Fixed single line tables will automatically ensure content that
      does not fit in a single line will receive "..." ellipsis
    </p>
    <Preview>
      <template slot="example">
        <Table
          singleLine
          elevated
          fixed
          :maxRows="4"
          :data="data"
          :columns="columnsSingle"
        />
      </template>
      <template slot="vue-code">
        <code class="language-html">
export const columnsSingle = [
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
  {
    title: 'Info',
    key: 'info',
    width: '350px',
  },
];

&#x3C;Table :data=&#x22;TABLE_DATA&#x22; elevated fixed :maxRows="4" :columns=&#x22;columnsSingle&#x22; elevated singleLine /&#x3E;
        </code>
      </template>
      <template slot="vanilla-code">
        <code class="language-html">
&#x3C;div class=&#x22;eduk-table eduk-table--elevated eduk-table--single eduk-table--fixed&#x22; style=&#x22;max-width: 100%;&#x22;&#x3E;
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
          &#x3C;th class=&#x22;&#x22; style=&#x22;width: 350px;&#x22;&#x3E;
            &#x3C;span style=&#x22;justify-content: flex-start;&#x22;&#x3E;
              &#x3C;span&#x3E;Info&#x3C;/span&#x3E;
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
          &#x3C;td style=&#x22;text-align: left; max-width: 350px;&#x22;&#x3E;&#x3C;span&#x3E;
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.&#x3C;/span&#x3E;
          &#x3C;/td&#x3E;
        &#x3C;/tr&#x3E;
        &#x3C;tr&#x3E;
          &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;2&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 2&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;40/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: 350px;&#x22;&#x3E;&#x3C;span&#x3E;
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.&#x3C;/span&#x3E;
          &#x3C;/td&#x3E;
        &#x3C;/tr&#x3E;
        &#x3C;tr&#x3E;
          &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;3&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 3&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;30/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: 350px;&#x22;&#x3E;&#x3C;span&#x3E;
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.&#x3C;/span&#x3E;
          &#x3C;/td&#x3E;
        &#x3C;/tr&#x3E;
        &#x3C;tr&#x3E;
          &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;4&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 4&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;30/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: 350px;&#x22;&#x3E;&#x3C;span&#x3E;
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.&#x3C;/span&#x3E;
          &#x3C;/td&#x3E;
        &#x3C;/tr&#x3E;
        &#x3C;tr&#x3E;
          &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;5&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 5&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;30/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: 350px;&#x22;&#x3E;&#x3C;span&#x3E;
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.&#x3C;/span&#x3E;
          &#x3C;/td&#x3E;
        &#x3C;/tr&#x3E;
        &#x3C;tr&#x3E;
          &#x3C;td style=&#x22;text-align: center; max-width: 70px;&#x22;&#x3E;&#x3C;span&#x3E;6&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;John Doe 6&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;01/07/2019&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: none;&#x22;&#x3E;&#x3C;span&#x3E;30/40&#x3C;/span&#x3E;&#x3C;/td&#x3E;
          &#x3C;td style=&#x22;text-align: left; max-width: 350px;&#x22;&#x3E;&#x3C;span&#x3E;
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.&#x3C;/span&#x3E;
          &#x3C;/td&#x3E;
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
  COLUMNS_FIXED,
  COLUMNS_SINGLE,
} from '../config';

export default {
  name: 'BasicTables',
  data() {
    return {
      data: TABLE_DATA,
      columns: COLUMNS_FIXED,
      columnsSingle: COLUMNS_SINGLE,
    };
  },
  components: {
    Preview,
    Table,
  },
};
</script>

