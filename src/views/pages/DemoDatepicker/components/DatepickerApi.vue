<template>
  <TabContent>
    <template slot="properties">
      <div class="eduk-table scollable">
        <table class="eduk-table__table">
          <thead class="eduk-table__thead">
            <tr>
              <th class="" style="width: 180px;">
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
              <td style="max-width: 180px;">
                <code class="highlighter">rangepicker</code>
              </td>
              <td style="text-align: left;">Date range picker with two text fields</td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">
                <code class="highlighter">false</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 180px;">
                <code class="highlighter">singleRangepicker</code>
              </td>
              <td style="text-align: left;">Date range picker with one text field</td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">
                <code class="highlighter">false</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 180px;">
                <code class="highlighter">block</code>
              </td>
              <td style="text-align: left;">Option to fit datepicker width to its parent width</td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">
                <code class="highlighter">false</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 180px;">
                <code class="highlighter">value</code>
              </td>
              <td style="text-align: left;">Datepicker value</td>
              <td style="text-align: left;">[Date, Object]</td>
              <td style="text-align: left;">
                Single: <code class="highlighter">new Date()</code><br />
                Range: <code class="highlighter">{ from: Date, to: new Date }</code>
              </td>
              <td style="text-align: left;">&mdash;</td>
            </tr>
            <tr>
              <td style="max-width: 140px;">
                <code class="highlighter">v-model</code>
              </td>
              <td style="text-align: left;">
                Control's two way binding property
              </td>
              <td style="text-align: left;">[Date, Object]</td>
              <td style="text-align: left;">
                Single: <code class="highlighter">new Date()</code><br />
                Range: <code class="highlighter">{ from: Date, to: new Date }</code>
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
                <code class="highlighter">@input</code>
              </td>
              <td style="text-align: left;">Triggered when datepicker value change</td>
              <td style="text-align: left;">
                <code class="highlighter">value</code>
                - Date picker value
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
  name: 'DatepickerApi',
  components: {
    TabContent,
  },
};
</script>
