<template>
  <TabContent>
    <template slot="properties">
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
                <code class="highlighter">columns</code>
              </td>
              <td style="text-align: left;">Array of column items</td>
              <td style="text-align: left;">Array</td>
              <td style="text-align: left;">
                <code class="highlighter">
                  [{ title: "No."", key: "id", width: "80px", textAlign: "center" },...]
                </code>
              </td>
              <td style="text-align: left;">
                <code class="highlighter">[]</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 120px;">
                <code class="highlighter">data</code>
              </td>
              <td style="text-align: left;">Table data source</td>
              <td style="text-align: left;">Array</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">
                <code class="highlighter">[]</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 120px;">
                <code class="highlighter">fixed</code>
              </td>
              <td style="text-align: left;">Fixed table layout</td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">
                <code class="highlighter">false</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 120px;">
                <code class="highlighter">compact</code>
              </td>
              <td style="text-align: left;">Compact table colums</td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">
                <code class="highlighter">false</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 120px;">
                <code class="highlighter">bordered</code>
              </td>
              <td style="text-align: left;">Separate row cells with borders</td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">
                <code class="highlighter">false</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 120px;">
                <code class="highlighter">striped</code>
              </td>
              <td style="text-align: left;">Stripe alternate rows with a darker color</td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">
                <code class="highlighter">false</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 120px;">
                <code class="highlighter">elevated</code>
              </td>
              <td style="text-align: left;">Adds shadow for elevated effect</td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">
                <code class="highlighter">false</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 120px;">
                <code class="highlighter">singleLine</code>
              </td>
              <td style="text-align: left;">
                ensure content that does not fit in a single line will receive "..." ellipsis
              </td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">false</td>
            </tr>
            <tr>
              <td style="max-width: 120px;">
                <code class="highlighter">stackable</code>
              </td>
              <td style="text-align: left;">
                Stacks table content on smaller screens
              </td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">
                <code class="highlighter">false</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 120px;">
                <code class="highlighter">maxRows</code>
              </td>
              <td style="text-align: left;">Define max display rows per page</td>
              <td style="text-align: left;">Number</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">
                <code class="highlighter">15</code>
              </td>
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
              <th class="" style="width: 180px;">
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
              <td style="max-width: 180px;">
                <code class="highlighter">@selectedChange</code>
              </td>
              <td style="text-align: left;">Selected row(s) change</td>
              <td style="text-align: left;">
                <code class="highlighter">row</code>
                - array of row data
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
  name: 'TableApi',
  components: {
    TabContent,
  },
};
</script>
