<template>
  <TabContent>
    <template slot="properties">
      <div class="eduk-table scollable">
        <table class="eduk-table__table">
          <thead class="eduk-table__thead">
            <tr>
              <th class="" style="width: 140px;">
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
              <td style="max-width: 140px;">
                <code class="highlighter">defaultValue</code>
              </td>
              <td style="text-align: left;">Rating default value</td>
              <td style="text-align: left;">Number</td>
              <td style="text-align: left;">0 - 5</td>
              <td style="text-align: left;">
                <code class="highlighter">0</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 140px;">
                <code class="highlighter">size</code>
              </td>
              <td style="text-align: left;">Rating sizes</td>
              <td style="text-align: left;">String</td>
              <td style="text-align: left;">
                <code class="highlighter">sm</code>,
                <code class="highlighter">lg</code>,
              </td>
              <td style="text-align: left;">&mdash;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
    <template slot="events">
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
                Arguments
              </th>
            </tr>
          </thead>
          <tbody class="eduk-table__tbody">
            <tr>
              <td style="max-width: 120px;">
                <code class="highlighter">@change</code>
              </td>
              <td style="text-align: left;">Triggered when rating value changes</td>
              <td style="text-align: left;">
                <code class="highlighter">value</code>
                - Float rating value
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </TabContent>
</template>

<script>
import TabContent from '@/views/components/TabContent/index.vue';

export default {
  name: 'RatingComponent',
  components: {
    TabContent,
  },
};
</script>
