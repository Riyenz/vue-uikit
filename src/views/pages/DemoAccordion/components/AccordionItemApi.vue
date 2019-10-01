<template>
  <div class="eduk-u-mb-3">
    <h3 class="eduk-h3 eduk-u-mb-3">Accordion Item API</h3>
    <TabContent>
      <template slot="properties">
        <div>
          <div class="eduk-table scollable">
            <table class="eduk-table__table">
              <thead class="eduk-table__thead">
                <tr>
                  <th class="" style="width: 120px;">
                    Name
                  </th>
                  <th class="" style="width: 0px;">
                    Description
                  </th>
                  <th class="" style="width: 0px;">
                    Type
                  </th>
                  <th class="" style="width: 0px;">
                    Values
                  </th>
                  <th class="" style="width: 0px;">
                    Default
                  </th>
                </tr>
              </thead>
              <tbody class="eduk-table__tbody">
                <tr>
                  <td style="max-width: 120px;">
                    <code class="highlighter">title</code>
                  </td>
                  <td style="text-align: left;">Accordion item title. Only applicable when title slot is empty.</td>
                  <td style="text-align: left;">String | Number</td>
                  <td style="text-align: left;">&mdash;</td>
                  <td style="text-align: left;">&mdash;</td>
                </tr>
                <tr>
                  <td style="max-width: 120px;">
                    <code class="highlighter">loading</code>
                  </td>
                  <td style="text-align: left;">Makes the component to animate loading. Can be used individually</td>
                  <td style="text-align: left;">Boolean</td>
                  <td style="text-align: left;">&mdash;</td>
                  <td style="text-align: left;"><code class="highlighter">false</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </template>
      <template slot="slots">
        <div>
          <div class="eduk-table scollable">
            <table class="eduk-table__table">
              <thead class="eduk-table__thead">
                <tr>
                  <th class="" style="width: 140px;">
                    Slot
                  </th>
                  <th class="" style="width: 0px;">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody class="eduk-table__tbody">
                <tr>
                  <td style="max-width: 140px;">
                    <code class="highlighter">default</code>
                  </td>
                  <td style="text-align: left;">Content for the Accordion</td>
                </tr>
                <tr>
                  <td style="max-width: 140px;">
                    <code class="highlighter">title</code>
                  </td>
                  <td style="text-align: left;">Accordion title</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </template>
    </TabContent>
  </div>
</template>

<script>
import TabContent from '@/views/components/TabContent/index.vue';

export default {
  name: 'AccordionItemApi',
  components: {
    TabContent,
  },
};
</script>
