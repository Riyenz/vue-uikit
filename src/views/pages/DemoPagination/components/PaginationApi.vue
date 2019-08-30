<template>
  <TabContent>
    <template slot="properties">
      <div class="eduk-table">
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
                <code class="highlighter">maxPages</code>
              </td>
              <td style="text-align: left;">Set the maximum number of pages</td>
              <td style="text-align: left;">Number</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">
                <code class="highlighter">3</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 120px;">
                <code class="highlighter">pageSize</code>
              </td>
              <td style="text-align: left;">Visible items per page</td>
              <td style="text-align: left;">Number</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">
                <code class="highlighter">10</code>
              </td>
            </tr>
            <tr>
              <td style="max-width: 120px;">
                <code class="highlighter">pageCount</code>
              </td>
              <td style="text-align: left;">Total number of pages</td>
              <td style="text-align: left;">Number</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">&mdash;</td>
            </tr>
            <tr>
              <td style="max-width: 120px;">
                <code class="highlighter">curPage</code>
              </td>
              <td style="text-align: left;">Set pagination component active page</td>
              <td style="text-align: left;">Number</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">&mdash;</td>
            </tr>
            <tr>
              <td style="max-width: 120px;">
                <code class="highlighter">contained</code>
              </td>
              <td style="text-align: left;">Uses icon for next and previous actions</td>
              <td style="text-align: left;">Boolean</td>
              <td style="text-align: left;">&mdash;</td>
              <td style="text-align: left;">
                <code class="highlighter">false</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
    <template slot="events">
      <div class="eduk-table">
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
                <code class="highlighter">@pageChanged</code>
              </td>
              <td style="text-align: left;">Triggered when active page changed</td>
              <td style="text-align: left;">
                <code class="highlighter">pagination</code>
                - pagination properties
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
  name: 'PaginationApi',
  components: {
    TabContent,
  },
};
</script>
