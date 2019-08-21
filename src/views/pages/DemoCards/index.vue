<template>
  <TabContent :selected="selectedTab" @change="onTabChange" padded>
    <template slot="design">
      <div></div>
    </template>
    <template slot="develop">
      <div>
        <Basic />
        <BasicWithImages />
        <BasicWithActions />
        <BasicWithBadge />
        <Orientations />
        <FluidImage />
        <CardApi />
      </div>
    </template>
  </TabContent>
</template>

<script>
import TabContent from '@/views/components/TabContent/index.vue';

import Basic from './components/Basic.vue';
import BasicWithImages from './components/BasicWithImages.vue';
import BasicWithActions from './components/BasicWithActions.vue';
import BasicWithBadge from './components/BasicWithBadge.vue';
import Orientations from './components/Orientations.vue';
import FluidImage from './components/FluidImage.vue';
import CardApi from './components/CardApi.vue';

export default {
  name: 'DemoCards',
  props: {
    selectedTab: {
      type: String,
    },
  },
  methods: {
    onTabChange(tabIndex) {
      this.$emit('tabChange', tabIndex);
    },
  },
  components: {
    TabContent,
    Basic,
    BasicWithImages,
    BasicWithActions,
    BasicWithBadge,
    Orientations,
    FluidImage,
    CardApi,
  },
};
</script>

<style lang="scss" scoped>
/deep/ {
  .img-responsive {
    display: block;
    max-width: 100%;
  }

  .disabled {
    color: #a4a8b1;
  }

  .link {
    color: #0e9be4;
    display: inline-block;
    font-weight: 700;
  }

  .row-reset .eduk-row {
    button {
      padding: 0.39375rem 1rem;
    }

    > div {
      padding: 0;
    }

    > div:first-child {
      padding-right: 5px;
    }

    > div:last-child {
      padding-left: 5px;
    }
  }
}
</style>
