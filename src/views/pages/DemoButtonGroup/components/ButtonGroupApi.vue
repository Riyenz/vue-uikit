<template>
  <TabContent>
    <template slot="properties"><div class="eduk-table scollable">
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
                <code class="highlighter">veritical</code>
              </td>
              <td style="text-align: left;">Make a set of buttons appear vertically stacked rather than horizontally.</td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">
                &mdash;
              </td>
              <td style="text-align: left;">
                <code class="highlighter">
                  false
                </code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
    <template slot="slots">
      <div>
        <div class="eduk-table">
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
                <td style="text-align: left;">set of buttons and dropdowns</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>
  </TabContent>
</template>

<script>
import TabContent from '@/views/components/TabContent/index.vue';

export default {
  name: 'ButtonGroupApi',
  components: {
    TabContent,
  },
};
</script>
