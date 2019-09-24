<template>
  <div class="eduk-u-mb-3">
    <h3 class="eduk-h3 eduk-u-mb-3">Column API</h3>
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
                  <code class="highlighter">cols</code>
                </td>
                <td style="text-align: left;">Column size on all screens</td>
                <td style="text-align: left;">Number | String</td>
                <td style="text-align: left;">
                  <code class="highlighter">1</code> - <code class="highlighter">12</code>
                </td>
                <td style="text-align: left;">
                  &mdash;
                </td>
              </tr>
              <tr>
                <td style="max-width: 120px;">
                  <code class="highlighter">colssm</code>
                </td>
                <td style="text-align: left;">Column size for sm screens</td>
                <td style="text-align: left;">Number | String</td>
                <td style="text-align: left;">
                  <code class="highlighter">1</code> - <code class="highlighter">12</code>
                </td>
                <td style="text-align: left;">
                  &mdash;
                </td>
              </tr>
              <tr>
                <td style="max-width: 120px;">
                  <code class="highlighter">colsmd</code>
                </td>
                <td style="text-align: left;">Column size for md screens</td>
                <td style="text-align: left;">Number | String</td>
                <td style="text-align: left;">
                  <code class="highlighter">1</code> - <code class="highlighter">12</code>
                </td>
                <td style="text-align: left;">
                  &mdash;
                </td>
              </tr>
              <tr>
                <td style="max-width: 120px;">
                  <code class="highlighter">colslg</code>
                </td>
                <td style="text-align: left;">Column size for lg screens</td>
                <td style="text-align: left;">Number | String</td>
                <td style="text-align: left;">
                  <code class="highlighter">1</code> - <code class="highlighter">12</code>
                </td>
                <td style="text-align: left;">
                  &mdash;
                </td>
              </tr>
              <tr>
                <td style="max-width: 120px;">
                  <code class="highlighter">colsxl</code>
                </td>
                <td style="text-align: left;">Column size for xl screens</td>
                <td style="text-align: left;">Number | String</td>
                <td style="text-align: left;">
                  <code class="highlighter">1</code> - <code class="highlighter">12</code>
                </td>
                <td style="text-align: left;">
                  &mdash;
                </td>
              </tr>
              <tr>
                <td style="max-width: 120px;">
                  <code class="highlighter">offset</code>
                </td>
                <td style="text-align: left;">Number of cells to offset Column from the left</td>
                <td style="text-align: left;">Number | String</td>
                <td style="text-align: left;">
                  <code class="highlighter">1</code> - <code class="highlighter">12</code>
                </td>
                <td style="text-align: left;">
                  &mdash;
                </td>
              </tr>
              <tr>
                <td style="max-width: 120px;">
                  <code class="highlighter">offsetsm</code>
                </td>
                <td style="text-align: left;">Number of cells to offset Column from the left for sm screens</td>
                <td style="text-align: left;">Number | String</td>
                <td style="text-align: left;">
                  <code class="highlighter">1</code> - <code class="highlighter">12</code>
                </td>
                <td style="text-align: left;">
                  &mdash;
                </td>
              </tr>
              <tr>
                <td style="max-width: 120px;">
                  <code class="highlighter">offsetmd</code>
                </td>
                <td style="text-align: left;">Number of cells to offset Column from the left for md screens</td>
                <td style="text-align: left;">Number | String</td>
                <td style="text-align: left;">
                  <code class="highlighter">1</code> - <code class="highlighter">12</code>
                </td>
                <td style="text-align: left;">
                  &mdash;
                </td>
              </tr>
              <tr>
                <td style="max-width: 120px;">
                  <code class="highlighter">offsetlg</code>
                </td>
                <td style="text-align: left;">Number of cells to offset Column from the left for lg screens</td>
                <td style="text-align: left;">Number | String</td>
                <td style="text-align: left;">
                  <code class="highlighter">1</code> - <code class="highlighter">12</code>
                </td>
                <td style="text-align: left;">
                  &mdash;
                </td>
              </tr>
              <tr>
                <td style="max-width: 120px;">
                  <code class="highlighter">offsetxl</code>
                </td>
                <td style="text-align: left;">Number of cells to offset Column from the left for xl screens</td>
                <td style="text-align: left;">Number | String</td>
                <td style="text-align: left;">
                  <code class="highlighter">1</code> - <code class="highlighter">12</code>
                </td>
                <td style="text-align: left;">
                  &mdash;
                </td>
              </tr>
            </tbody>
          </table>
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
                  <td style="text-align: left;">Content for the Column</td>
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
  name: 'ColumnApi',
  components: {
    TabContent,
  },
};
</script>
