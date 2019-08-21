<template>
  <TabContent :selected="selectedTab" @change="onTabChange" padded>
    <template slot="design">
      <div></div>
    </template>
    <template slot="develop">
      <div>
        <h1 class="eduk-h1 eduk-u-mb-3">Table (Desktop)</h1>
        <p>A table displays a collections of data grouped into rows</p>
        <section class="well">
          <pre>
            <code class="language-javascript">
const TABLE_DATA = [
  {
    id: 1,
    name: "John Doe",
    date: "01/06/2019",
    day: "Monday",
    stats: "30/40",
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry"s standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five`,
  },
  {
    id: 2,
    name: "Matthew Williams",
    date: "04/02/2019",
    day: "Saturday",
    stats: "40/40",
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry"s standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five`,
  },
  {
    id: 3,
    name: "Jane Doe",
    date: "05/01/2019",
    day: "Monday",
    stats: "30/40",
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry"s standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five`,
  },
  {
    id: 4,
    name: "Jason Kidd",
    date: "05/06/2019",
    day: "Thursday",
    stats: "30/40",
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry"s standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five`,
  },
  {
    id: 5,
    name: "Michael Jordan",
    date: "07/22/2019",
    day: "Monday",
    stats: "30/40",
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry"s standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five`,
  },
  {
    id: 6,
    name: "Lio Messi",
    date: "08/10/2019",
    day: "Friday",
    stats: "30/40",
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry"s standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five`,
  },
];
            </code>
          </pre>
        </section>
        <Basic />
        <Striped />
        <Sortable />
        <Fixed />
        <Stack />
        <TableApi />
      </div>
    </template>
    <template slot="Mobile">
      <div>
        <h1 class="eduk-h1 eduk-u-mb-3">Table (Mobile)</h1>
        <p>A table displays a collections of data grouped into rows</p>
        <section class="well">
          <pre>
            <code class="language-javascript">
const TABLE_DATA = [
  {
    id: 1,
    name: "John Doe",
    date: "01/06/2019",
    day: "Monday",
    stats: "30/40",
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry"s standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five`,
  },
  {
    id: 2,
    name: "Matthew Williams",
    date: "04/02/2019",
    day: "Saturday",
    stats: "40/40",
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry"s standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five`,
  },
  {
    id: 3,
    name: "Jane Doe",
    date: "05/01/2019",
    day: "Monday",
    stats: "30/40",
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry"s standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five`,
  },
  {
    id: 4,
    name: "Jason Kidd",
    date: "05/06/2019",
    day: "Thursday",
    stats: "30/40",
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry"s standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five`,
  },
  {
    id: 5,
    name: "Michael Jordan",
    date: "07/22/2019",
    day: "Monday",
    stats: "30/40",
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry"s standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five`,
  },
  {
    id: 6,
    name: "Lio Messi",
    date: "08/10/2019",
    day: "Friday",
    stats: "30/40",
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry"s standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five`,
  },
];
            </code>
          </pre>
        </section>
        <Mobile />
      </div>
    </template>
  </TabContent>
</template>

<script>
import TabContent from '@/views/components/TabContent/index.vue';

import Basic from './components/Basic.vue';
import Striped from './components/Striped.vue';
import Sortable from './components/Sortable.vue';
import Fixed from './components/Fixed.vue';
import Stack from './components/Stack.vue';
import Mobile from './components/Mobile.vue';
import TableApi from './components/TableApi.vue';

export default {
  name: 'DemoTable',
  props: {
    selectedTab: {
      type: String,
    },
  },
  components: {
    TabContent,
    Basic,
    Striped,
    Sortable,
    Fixed,
    Stack,
    Mobile,
    TableApi,
  },
  methods: {
    onTabChange(tabIndex) {
      this.$emit('tabChange', tabIndex);
    },
  },
};
</script>

<style lang="scss" scoped>
pre {
  padding: 0;
  margin: 0;
  white-space: nowrap;
  background-color: transparent !important;

  > .language-javascript {
    font-size: 12px;
    white-space: pre-wrap;
    background-color: transparent !important;
  }
}

section.well {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
</style>
