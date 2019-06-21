<template>
  <Container class="demo">
    <Row class="demo__section">
      <Column>
        <DemoButtons/>
      </Column>
    </Row>
    <Row class="demo__section">
      <Column>
        <DemoModals/>
      </Column>
    </Row>
    <Row class="demo__section">
      <Column>
        <DemoAlerts/>
      </Column>
    </Row>
    <Row class="demo__section">
      <Column>
        <DemoGrids/>
      </Column>
    </Row>
  </Container>
</template>

<script>
import Container from '@/UIKit/Grid/Container.component.vue';
import Row from '@/UIKit/Grid/Row.component.vue';
import Column from '@/UIKit/Grid/Column.component.vue';

import DemoButtons from '@/views/pages/DemoButtons/index.vue';
import DemoModals from '@/views/pages/DemoModals/index.vue';
import DemoGrids from '@/views/pages/DemoGrids/index.vue';
import DemoAlerts from '@/views/pages/DemoAlerts/index.vue';

export default {
  name: 'Demo',
  components: {
    Container,
    Row,
    Column,
    DemoButtons,
    DemoModals,
    DemoAlerts,
    DemoGrids,
  },
};
</script>

<style scoped lang="scss">
.demo {
  &__section {
    margin-top: 50px;
  }
}
</style>
