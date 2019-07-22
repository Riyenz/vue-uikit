<template>
  <TabContent :selected="selectedTab" @change="onTabChange">
    <template slot="design">
      <div></div>
    </template>
    <template slot="code">
      <div>
        <h1 class="eduk-h1 eduk-u-mb-3">Dropdowns & Selectors</h1>
        <p class="eduk-text eduk-u-mb-4">
          Predefined Select buttons with various options such as icons, avatars. Again, in all
          possible states. This package also comes with Checkboxes, Radio and Toggle Buttons. Easily
          managable throught nested symbols to give you all the flexibility.
        </p>
        <Selections />
        <Search />
        <Icons />
      </div>
    </template>
    <template slot="quicklinks">
    </template>
  </TabContent>
</template>

<script>
import TabContent from '@/views/components/TabContent/index.vue';
import Selections from './components/Selections.vue';
import Icons from './components/Icons.vue';
import Search from './components/Search.vue';

export default {
  name: 'DemoDropdowns',
  components: {
    TabContent,
    Selections,
    Icons,
    Search,
  },
  props: {
    selectedTab: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    onTabChange(tabIndex) {
      this.$emit('tabChange', tabIndex);
    },
  },
};
</script>
